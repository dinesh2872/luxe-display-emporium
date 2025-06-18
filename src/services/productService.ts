
import { Product, Category } from '../types';

// Mock data for demonstration
export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Display Cases',
    slug: 'display-cases',
    description: 'Premium display cases for luxury items',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
  },
  {
    id: '2',
    name: 'Jewelry Displays',
    slug: 'jewelry-displays',
    description: 'Elegant jewelry display solutions',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400',
  },
  {
    id: '3',
    name: 'Watch Displays',
    slug: 'watch-displays',
    description: 'Sophisticated watch presentation cases',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
  },
  {
    id: '4',
    name: 'Retail Fixtures',
    slug: 'retail-fixtures',
    description: 'Complete retail display solutions',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
  },
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Glass Display Case',
    description: 'Handcrafted glass display case with premium materials and exquisite attention to detail.',
    basePrice: 1299,
    category: 'display-cases',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600',
    ],
    materials: [
      { id: '1', name: 'Tempered Glass', priceModifier: 0, description: 'Standard tempered glass' },
      { id: '2', name: 'Low-Iron Glass', priceModifier: 200, description: 'Ultra-clear low-iron glass' },
      { id: '3', name: 'Sapphire Crystal', priceModifier: 800, description: 'Premium sapphire crystal' },
    ],
    colors: [
      { id: '1', name: 'Silver', hexCode: '#C0C0C0', priceModifier: 0 },
      { id: '2', name: 'Gold', hexCode: '#D4AF37', priceModifier: 150 },
      { id: '3', name: 'Rose Gold', hexCode: '#E8B4A0', priceModifier: 200 },
      { id: '4', name: 'Black', hexCode: '#000000', priceModifier: 100 },
    ],
    sizes: [
      { id: '1', name: 'Small', dimensions: '12" x 8" x 6"', priceModifier: 0 },
      { id: '2', name: 'Medium', dimensions: '18" x 12" x 8"', priceModifier: 300 },
      { id: '3', name: 'Large', dimensions: '24" x 16" x 10"', priceModifier: 600 },
    ],
    features: ['LED Lighting', 'Velvet Interior', 'Security Lock', 'UV Protection'],
    specifications: {
      'Material': 'Premium Glass & Metal',
      'Lighting': 'LED Strip with Dimmer',
      'Security': 'Digital Lock System',
      'Interior': 'Velvet-lined compartments',
    },
    inStock: true,
    stockCount: 25,
    isActive: true,
    isFeatured: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    name: 'Luxury Jewelry Display Stand',
    description: 'Elegant rotating jewelry display stand with premium velvet interior and LED accent lighting.',
    basePrice: 899,
    category: 'jewelry-displays',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600',
    ],
    materials: [
      { id: '1', name: 'Polished Wood', priceModifier: 0, description: 'Premium polished wood' },
      { id: '2', name: 'Marble Base', priceModifier: 300, description: 'Natural marble base' },
      { id: '3', name: 'Carbon Fiber', priceModifier: 500, description: 'Modern carbon fiber finish' },
    ],
    colors: [
      { id: '1', name: 'Ebony', hexCode: '#3C3C3C', priceModifier: 0 },
      { id: '2', name: 'Walnut', hexCode: '#8B4513', priceModifier: 50 },
      { id: '3', name: 'White Oak', hexCode: '#F5DEB3', priceModifier: 75 },
    ],
    sizes: [
      { id: '1', name: 'Desktop', dimensions: '8" x 8" x 12"', priceModifier: 0 },
      { id: '2', name: 'Counter', dimensions: '12" x 12" x 18"', priceModifier: 200 },
      { id: '3', name: 'Floor Stand', dimensions: '16" x 16" x 48"', priceModifier: 500 },
    ],
    features: ['360° Rotation', 'LED Accent Lighting', 'Velvet Interior', 'Anti-Theft Base'],
    specifications: {
      'Rotation': '360° Silent Motor',
      'Lighting': 'Adjustable LED Ring',
      'Base': 'Weighted Anti-Theft Design',
      'Power': 'USB-C or Battery Operated',
    },
    inStock: true,
    stockCount: 18,
    isActive: true,
    isFeatured: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '3',
    name: 'Executive Watch Display Case',
    description: 'Handcrafted executive watch display case featuring individual compartments and premium materials.',
    basePrice: 1599,
    category: 'watch-displays',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600',
    ],
    materials: [
      { id: '1', name: 'Leather Interior', priceModifier: 0, description: 'Premium leather lining' },
      { id: '2', name: 'Suede Interior', priceModifier: 150, description: 'Luxury suede lining' },
      { id: '3', name: 'Silk Interior', priceModifier: 300, description: 'Hand-stitched silk lining' },
    ],
    colors: [
      { id: '1', name: 'Classic Black', hexCode: '#000000', priceModifier: 0 },
      { id: '2', name: 'Cognac Brown', hexCode: '#8B4513', priceModifier: 100 },
      { id: '3', name: 'Navy Blue', hexCode: '#000080', priceModifier: 100 },
    ],
    sizes: [
      { id: '1', name: '6-Watch', dimensions: '12" x 8" x 4"', priceModifier: 0 },
      { id: '2', name: '12-Watch', dimensions: '16" x 12" x 4"', priceModifier: 400 },
      { id: '3', name: '24-Watch', dimensions: '20" x 16" x 6"', priceModifier: 800 },
    ],
    features: ['Individual Cushions', 'Glass Top', 'Lock & Key', 'Scratch-Resistant'],
    specifications: {
      'Exterior': 'Premium Wood with Lacquer Finish',
      'Interior': 'Cushioned Watch Pillows',
      'Glass': 'Tempered Glass with UV Protection',
      'Lock': 'Brass Lock with 2 Keys',
    },
    inStock: true,
    stockCount: 12,
    isActive: true,
    isFeatured: false,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
];

export const productService = {
  getCategories: async (): Promise<Category[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockCategories;
  },

  getProducts: async (category?: string, featured?: boolean): Promise<Product[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let products = [...mockProducts];
    
    if (category) {
      products = products.filter(product => product.category === category);
    }
    
    if (featured) {
      products = products.filter(product => product.isFeatured);
    }
    
    return products;
  },

  getProduct: async (id: string): Promise<Product | null> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return mockProducts.find(product => product.id === id) || null;
  },

  searchProducts: async (query: string): Promise<Product[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const lowercaseQuery = query.toLowerCase();
    return mockProducts.filter(product =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery)
    );
  },
};
