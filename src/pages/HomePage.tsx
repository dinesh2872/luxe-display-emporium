
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
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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

      {/* Features Section */}
      <section className="py-20 bg-luxury-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-luxury-black mb-4">
              Why Choose <span className="luxury-text-gradient">Hilal Luxe</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine traditional craftsmanship with modern innovation to create display solutions that are both functional and breathtakingly beautiful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12 text-luxury-gold" />,
                title: "Premium Quality",
                description: "Each piece is meticulously crafted using only the finest materials and time-honored techniques.",
              },
              {
                icon: <Shield className="w-12 h-12 text-luxury-gold" />,
                title: "Lifetime Warranty",
                description: "We stand behind our craftsmanship with comprehensive warranty coverage for peace of mind.",
              },
              {
                icon: <Truck className="w-12 h-12 text-luxury-gold" />,
                title: "White Glove Delivery",
                description: "Professional installation and setup service ensures your display is perfectly positioned.",
              },
              {
                icon: <Star className="w-12 h-12 text-luxury-gold" />,
                title: "Custom Design",
                description: "Work with our designers to create bespoke solutions tailored to your unique requirements.",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-8 text-center luxury-card animate-scale-in hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-luxury-black">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-luxury-black mb-4">
              Explore Our <span className="luxury-text-gradient">Collections</span>
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

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-luxury-black mb-4">
              Featured <span className="luxury-text-gradient">Products</span>
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

      {/* Testimonials Section */}
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

      {/* CTA Section */}
      <section className="py-20 bg-luxury-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Showcase Your Treasures?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let our design experts create the perfect display solution for your unique collection. 
            Schedule a consultation today and discover the Hilal Luxe difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-luxury-black hover:bg-gray-100 text-lg px-8 py-4 font-semibold">
              Schedule Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-luxury-black text-lg px-8 py-4">
              Browse Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
