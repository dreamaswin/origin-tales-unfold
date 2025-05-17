
import { Link } from 'react-router-dom';

interface CategoryTagProps {
  category: string;
  className?: string;
}

const CategoryTag = ({ category, className }: CategoryTagProps) => {
  return (
    <Link 
      to={`/stories?category=${category.toLowerCase()}`}
      className={`inline-block px-3 py-1 bg-warmth-100 text-warmth-800 rounded-full text-sm hover:bg-warmth-200 transition-colors ${className}`}
    >
      {category}
    </Link>
  );
};

export default CategoryTag;
