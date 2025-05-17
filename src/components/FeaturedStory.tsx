
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CategoryTag from './CategoryTag';

interface FeaturedStoryProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  location: string;
  category: string;
  imageUrl: string;
}

const FeaturedStory = ({ id, title, excerpt, author, location, category, imageUrl }: FeaturedStoryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
      <div className="order-2 md:order-1">
        <CategoryTag category={category} className="mb-3" />
        <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">{title}</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">{excerpt}</p>
        <div className="flex items-center mb-6 text-sm">
          <span className="font-medium">{author}</span>
          <span className="mx-2">•</span>
          <span className="text-muted-foreground">{location}</span>
        </div>
        <Button asChild className="bg-warmth-600 hover:bg-warmth-700">
          <Link to={`/story/${id}`}>Read Full Story</Link>
        </Button>
      </div>
      <div className="order-1 md:order-2">
        <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedStory;
