
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'customer' | 'admin';
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  category: string;
  subcategory?: string;
  images: string[];
  materials: Material[];
  colors: Color[];
  sizes: Size[];
  features: string[];
  specifications: Record<string, string>;
  inStock: boolean;
  stockCount: number;
  isActive: boolean;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Material {
  id: string;
  name: string;
  priceModifier: number;
  description: string;
}

export interface Color {
  id: string;
  name: string;
  hexCode: string;
  priceModifier: number;
}

export interface Size {
  id: string;
  name: string;
  dimensions: string;
  priceModifier: number;
}

export interface CartItem {
  image: string;
  name: string;
  price: any;
  id: string;
  product: Product;
  quantity: number;
  customizations: {
    material?: Material;
    color?: Color;
    size?: Size;
    monogram?: string;
    notes?: string;
  };
  totalPrice: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  firstName: string;
  lastName: string;
  company?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  subcategories?: Category[];
}
