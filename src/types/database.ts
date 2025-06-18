
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          first_name: string;
          last_name: string;
          role: 'customer' | 'admin';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          first_name: string;
          last_name: string;
          role?: 'customer' | 'admin';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          first_name?: string;
          last_name?: string;
          role?: 'customer' | 'admin';
          updated_at?: string;
        };
      };
      products: {
        Row: {
          id: string;
          name: string;
          description: string;
          base_price: number;
          category: string;
          subcategory: string | null;
          images: string[];
          materials: any[];
          colors: any[];
          sizes: any[];
          features: string[];
          specifications: Record<string, string>;
          in_stock: boolean;
          stock_count: number;
          is_active: boolean;
          is_featured: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description: string;
          base_price: number;
          category: string;
          subcategory?: string | null;
          images: string[];
          materials?: any[];
          colors?: any[];
          sizes?: any[];
          features?: string[];
          specifications?: Record<string, string>;
          in_stock?: boolean;
          stock_count?: number;
          is_active?: boolean;
          is_featured?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          name?: string;
          description?: string;
          base_price?: number;
          category?: string;
          subcategory?: string | null;
          images?: string[];
          materials?: any[];
          colors?: any[];
          sizes?: any[];
          features?: string[];
          specifications?: Record<string, string>;
          in_stock?: boolean;
          stock_count?: number;
          is_active?: boolean;
          is_featured?: boolean;
          updated_at?: string;
        };
      };
      orders: {
        Row: {
          id: string;
          user_id: string;
          items: any[];
          subtotal: number;
          tax: number;
          shipping: number;
          total: number;
          status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
          shipping_address: any;
          billing_address: any;
          payment_method: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          items: any[];
          subtotal: number;
          tax: number;
          shipping: number;
          total: number;
          status?: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
          shipping_address: any;
          billing_address: any;
          payment_method: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          items?: any[];
          subtotal?: number;
          tax?: number;
          shipping?: number;
          total?: number;
          status?: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
          shipping_address?: any;
          billing_address?: any;
          payment_method?: string;
          updated_at?: string;
        };
      };
    };
  };
}
