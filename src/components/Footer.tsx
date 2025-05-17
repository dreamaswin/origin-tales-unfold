
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-earth-50 py-12 px-4 mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-medium text-earth-800">Humans of Origin</h3>
            <p className="text-earth-700 leading-relaxed">
              Sharing authentic stories from diverse backgrounds across cultures and geographies.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-earth-600 hover:text-warmth-600 transition-colors">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-earth-600 hover:text-warmth-600 transition-colors">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-medium text-earth-800 mb-4">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/stories" className="text-earth-700 hover:text-warmth-700 transition-colors">All Stories</Link>
              </li>
              <li>
                <Link to="/stories?category=culture" className="text-earth-700 hover:text-warmth-700 transition-colors">Culture</Link>
              </li>
              <li>
                <Link to="/stories?category=identity" className="text-earth-700 hover:text-warmth-700 transition-colors">Identity</Link>
              </li>
              <li>
                <Link to="/stories?category=heritage" className="text-earth-700 hover:text-warmth-700 transition-colors">Heritage</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-medium text-earth-800 mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-earth-700 hover:text-warmth-700 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/about#contact" className="text-earth-700 hover:text-warmth-700 transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/about#submissions" className="text-earth-700 hover:text-warmth-700 transition-colors">Submit Your Story</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-earth-200 mt-8 pt-8 text-center text-earth-600">
          <p>&copy; {new Date().getFullYear()} Humans of Origin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
