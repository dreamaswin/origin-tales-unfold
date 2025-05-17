
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import CategoryTag from './CategoryTag';

interface StoryCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  location: string;
  category: string;
  imageUrl: string;
}

const StoryCard = ({ id, title, excerpt, author, location, category, imageUrl }: StoryCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/story/${id}`} className="block">
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>
      <div className="p-5">
        <CategoryTag category={category} className="mb-3" />
        <Link to={`/story/${id}`}>
          <h3 className="text-xl font-serif font-medium mb-2 hover:text-warmth-700 transition-colors">{title}</h3>
        </Link>
        <p className="text-muted-foreground mb-3 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{author}</span>
          <span>{location}</span>
        </div>
      </div>
    </Card>
  );
};

export default StoryCard;
