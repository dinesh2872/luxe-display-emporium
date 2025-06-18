
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Card } from '../../components/ui/card';
import { BarChart3, Package, Users, ShoppingCart } from 'lucide-react';

const AdminPage: React.FC = () => {
  const [stats] = useState({
    totalOrders: 150,
    totalProducts: 89,
    totalUsers: 1250,
    totalRevenue: 125000,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-luxury-black mb-8">Admin Dashboard</h1>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-luxury-gold">
                  ${stats.totalRevenue.toLocaleString()}
                </p>
              </div>
              <BarChart3 className="w-8 h-8 text-luxury-gold" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-luxury-black">{stats.totalOrders}</p>
              </div>
              <ShoppingCart className="w-8 h-8 text-luxury-gold" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Products</p>
                <p className="text-2xl font-bold text-luxury-black">{stats.totalProducts}</p>
              </div>
              <Package className="w-8 h-8 text-luxury-gold" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-luxury-black">{stats.totalUsers}</p>
              </div>
              <Users className="w-8 h-8 text-luxury-gold" />
            </div>
          </Card>
        </div>

        {/* Admin Tabs */}
        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Product Management</h2>
              <div className="text-center py-8">
                <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Product management interface coming soon</p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Order Management</h2>
              <div className="text-center py-8">
                <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Order management interface coming soon</p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">User Management</h2>
              <div className="text-center py-8">
                <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">User management interface coming soon</p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;
