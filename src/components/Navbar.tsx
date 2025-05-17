
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`sticky top-0 z-50 py-4 md:py-5 px-4 md:px-8 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex-between">
        <Link to="/" className="text-2xl md:text-3xl font-serif font-semibold text-brand-600">
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
        <div className="hidden md:flex-between md:space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/stories" className="text-foreground hover:text-brand-600 transition-colors px-3 py-2">
                  Stories
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="text-foreground hover:text-brand-600 transition-colors px-3 py-2">
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/shop" className="text-foreground hover:text-brand-600 transition-colors px-3 py-2">
                  Shop
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-brand-600 transition-colors">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-brand-600 transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <Button variant="outline" className="border-brand-500 text-brand-600 hover:bg-brand-50">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-brand-100 p-4 z-50 md:hidden animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/stories" 
                className="text-foreground hover:text-brand-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Stories
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-brand-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/shop" 
                className="text-foreground hover:text-brand-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </Link>
              <div className="flex space-x-4 py-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-brand-600 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-brand-600 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
              <Button variant="outline" className="border-brand-500 text-brand-600 hover:bg-brand-50 w-full">
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
