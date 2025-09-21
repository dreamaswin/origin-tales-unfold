import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="bg-muted/30 spacing-responsive" aria-labelledby="hero-heading">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center px-3 sm:px-4">
          <h1 
            id="hero-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold mb-4 sm:mb-6 leading-tight"
          >
            Every Person Has a Story Worth Telling
          </h1>
          <p className="text-responsive-base text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Humans of Origin celebrates the extraordinary in ordinary lives, connecting us through authentic narratives from across the globe. Discover stories that inspire, educate, and unite us in our shared humanity.
          </p>
          <div className="flex flex-col xs:flex-row justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
              <Link to="/stories">Explore Stories</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
              <Link to="/about#submissions">Share Your Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;