
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-luxury-gradient flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold luxury-text-gradient mb-4">404</h1>
          <h2 className="text-3xl font-bold text-white mb-2">Page Not Found</h2>
          <p className="text-xl text-white/80 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-white text-luxury-black hover:bg-gray-100 flex items-center space-x-2">
              <Home className="w-4 h-4" />
              <span>Go Home</span>
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="border-white text-white hover:bg-white hover:text-luxury-black flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
