
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-luxury-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <h2 className="text-xl font-bold luxury-text-gradient">Hilal Luxe</h2>
                <p className="text-sm text-gray-400">Premium Displays</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Crafting exceptional luxury display solutions for discerning clients worldwide. 
              Each piece is meticulously designed to showcase your most precious items with unparalleled elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-luxury-gold">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link to="/products" className="block text-gray-300 hover:text-white transition-colors text-sm">
                All Products
              </Link>
              <Link to="/products/display-cases" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Display Cases
              </Link>
              <Link to="/products/jewelry-displays" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Jewelry Displays
              </Link>
              <Link to="/products/watch-displays" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Watch Displays
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors text-sm">
                About Us
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-luxury-gold">Customer Service</h3>
            <nav className="space-y-2">
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Contact Us
              </Link>
              <Link to="/shipping" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Shipping Information
              </Link>
              <Link to="/returns" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Returns & Exchanges
              </Link>
              <Link to="/warranty" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Warranty
              </Link>
              <Link to="/faq" className="block text-gray-300 hover:text-white transition-colors text-sm">
                FAQ
              </Link>
              <Link to="/size-guide" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Size Guide
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-luxury-gold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>123 Luxury Avenue</p>
                  <p>Premium District</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <a href="tel:+1-555-LUXURY" className="text-sm text-gray-300 hover:text-white transition-colors">
                  +1 (555) LUXURY-1
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <a href="mailto:info@hilalluxe.com" className="text-sm text-gray-300 hover:text-white transition-colors">
                  info@hilalluxe.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Hilal Luxe Displays. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
