import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, Award } from 'lucide-react';
import { Product, Category } from '../types';
import { productService } from '../services/productService';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import ProductCard from '../components/products/ProductCard';

const HomePage: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [products, categoriesData] = await Promise.all([
          productService.getProducts(undefined, true),
          productService.getCategories(),
        ]);
        setFeaturedProducts(products);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error loading homepage data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-luxury-gold"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero carousel with featured products */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Replace with your HeroCarousel component if you have one */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-hero-gradient"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="luxury-text-gradient">Hilal Luxe</span>
            <br />
            <span className="text-white">Displays</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
            Exquisite display solutions for your most treasured possessions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/products">
              <Button className="luxury-button text-lg px-8 py-4">
                Explore Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-luxury-black transition-all duration-300">
              Custom Designs
            </Button>
          </div>
        </div>
      </section>

      {/* Featured categories grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-luxury-black mb-4">
              Featured <span className="luxury-text-gradient">Categories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our curated selection of luxury display solutions, each designed to showcase your treasures with unparalleled elegance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products/${category.slug}`}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="aspect-w-4 aspect-h-5 h-80">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-gray-200 mb-4">{category.description}</p>
                  <div className="flex items-center text-luxury-gold font-semibold">
                    Explore Collection
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestseller & New arrivals sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-luxury-black mb-4">
              Bestseller &amp; <span className="luxury-text-gradient">New Arrivals</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked selections from our premium collection, showcasing the epitome of luxury craftsmanship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/products">
              <Button className="luxury-button text-lg px-12 py-4">
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Custom display solutions showcase (3D/AR teaser) */}
      <section className="py-20 bg-luxury-cream">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-luxury-black mb-6">
            Custom Display Solutions <span className="luxury-text-gradient">(3D/AR Teaser)</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience your display in 3D or Augmented Reality before you buy. Our team can create a virtual preview of your custom solution.
          </p>
          {/* Replace below with your actual 3D/AR teaser component */}
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-2xl">
            [3D/AR Teaser Placeholder]
          </div>
        </div>
      </section>

      {/* Client testimonials carousel */}
      <section className="py-20 bg-luxury-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              What Our <span className="luxury-text-gradient">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who trust Hilal Luxe for their most precious display needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alexander Chen",
                role: "Private Collector",
                content: "The craftsmanship is absolutely exceptional. My vintage watch collection has never looked more elegant.",
                rating: 5,
              },
              {
                name: "Sofia Rodriguez",
                role: "Jewelry Store Owner",
                content: "Hilal Luxe transformed our showroom. The displays are works of art that perfectly complement our pieces.",
                rating: 5,
              },
              {
                name: "James Wellington",
                role: "Museum Curator",
                content: "Professional quality that meets our stringent standards. The attention to detail is remarkable.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-8 bg-luxury-gray-dark border-luxury-gold/20 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-luxury-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-luxury-gold">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="py-20 bg-luxury-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated with Hilal Luxe
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Subscribe to our newsletter for exclusive offers, new arrivals, and design inspiration.
          </p>
          {/* Replace below with your actual newsletter signup form */}
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg text-lg w-full sm:w-80"
              required
            />
            <Button className="bg-white text-luxury-black hover:bg-gray-100 text-lg px-8 py-3 font-semibold">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;