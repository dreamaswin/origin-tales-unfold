import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FeaturedStory from '@/components/FeaturedStory';
import StoryCard from '@/components/StoryCard';

interface Story {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  location: string;
  category: string;
  imageUrl: string;
}

interface StoryShowcaseProps {
  featuredStory: Story;
  recentStories: Story[];
}

const StoryShowcase = ({ featuredStory, recentStories }: StoryShowcaseProps) => {
  return (
    <>
      {/* Featured Story Section */}
      <section className="spacing-responsive" aria-labelledby="featured-heading">
        <div className="container">
          <h2 
            id="featured-heading"
            className="text-responsive-lg font-serif font-medium mb-6 sm:mb-8 text-center md:text-left"
          >
            Featured Story
          </h2>
          <FeaturedStory {...featuredStory} />
        </div>
      </section>
      
      {/* Recent Stories Section */}
      <section className="spacing-responsive bg-muted/20" aria-labelledby="recent-heading">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4">
            <h2 
              id="recent-heading"
              className="text-responsive-lg font-serif font-medium text-center sm:text-left"
            >
              Recent Stories
            </h2>
            <Button asChild variant="link" className="text-primary self-center sm:self-auto">
              <Link to="/stories">View All Stories →</Link>
            </Button>
          </div>
          <div className="grid-responsive">
            {recentStories.map(story => (
              <StoryCard key={story.id} {...story} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StoryShowcase;