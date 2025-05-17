
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-6 px-4 md:px-8 border-b border-warmth-100">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl md:text-3xl font-serif font-semibold text-warmth-900">
          Humans of Origin
        </Link>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-warmth-700 transition-colors">
            Home
          </Link>
          <Link to="/stories" className="text-foreground hover:text-warmth-700 transition-colors">
            Stories
          </Link>
          <Link to="/about" className="text-foreground hover:text-warmth-700 transition-colors">
            About Us
          </Link>
          <Button variant="outline" className="border-warmth-500 text-warmth-700 hover:bg-warmth-50">
            Subscribe
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-20 left-0 right-0 bg-background border-b border-warmth-100 p-4 z-50 md:hidden animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-warmth-700 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/stories" 
                className="text-foreground hover:text-warmth-700 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Stories
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-warmth-700 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Button variant="outline" className="border-warmth-500 text-warmth-700 hover:bg-warmth-50 w-full">
                Subscribe
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
