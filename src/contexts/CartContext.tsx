
import React, { createContext, useContext, useEffect, useState } from 'react';
import { CartItem, Product, Material, Color, Size } from '../types';
import { toast } from '@/hooks/use-toast';

interface CartContextType {
  items: CartItem[];
  addToCart: (
    product: Product,
    quantity: number,
    customizations: {
      material?: Material;
      color?: Color;
      size?: Size;
      monogram?: string;
      notes?: string;
    }
  ) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('hilal-cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('hilal-cart', JSON.stringify(items));
  }, [items]);

  const calculateItemPrice = (
    product: Product,
    quantity: number,
    customizations: {
      material?: Material;
      color?: Color;
      size?: Size;
      monogram?: string;
      notes?: string;
    }
  ): number => {
    let price = product.basePrice;

    if (customizations.material) {
      price += customizations.material.priceModifier;
    }
    if (customizations.color) {
      price += customizations.color.priceModifier;
    }
    if (customizations.size) {
      price += customizations.size.priceModifier;
    }
    if (customizations.monogram) {
      price += 50; // Monogram fee
    }

    return price * quantity;
  };

  const addToCart = (
    product: Product,
    quantity: number,
    customizations: {
      material?: Material;
      color?: Color;
      size?: Size;
      monogram?: string;
      notes?: string;
    }
  ) => {
    const itemId = `${product.id}-${Date.now()}-${Math.random()}`;
    const totalPrice = calculateItemPrice(product, quantity, customizations);

    const newItem: CartItem = {
      id: itemId,
      product,
      quantity,
      customizations,
      totalPrice,
      image: product.images?.[0] || '', // use the first image or an empty string if not available
      name: product.name,   // assuming product has a name property
      price: product.basePrice, // or product.price if available
    };

    setItems(prevItems => [...prevItems, newItem]);

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const removeFromCart = (itemId: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));

    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setItems(prevItems =>
      prevItems.map(item => {
        if (item.id === itemId) {
          const totalPrice = calculateItemPrice(item.product, quantity, item.customizations);
          return { ...item, quantity, totalPrice };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.totalPrice, 0);
  };

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
