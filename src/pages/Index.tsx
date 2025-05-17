
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedStory from '@/components/FeaturedStory';
import StoryCard from '@/components/StoryCard';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Mock data for stories
  const [featuredStory] = useState({
    id: '1',
    title: 'Finding Home in the Himalayas',
    excerpt: 'After traveling across three continents, Amara discovers her ancestral roots in a small village nestled in the mountains of Nepal. This is a story of identity, belonging, and the universal quest for connection.',
    author: 'Amara Thapa',
    location: 'Kathmandu, Nepal',
    category: 'Identity',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  });

  const [recentStories] = useState([
    {
      id: '2',
      title: 'The Last Storyteller of Marrakech',
      excerpt: 'Hassan is one of the few remaining traditional Moroccan storytellers, preserving ancient tales in the modern world.',
      author: 'Hassan El Fasi',
      location: 'Marrakech, Morocco',
      category: 'Heritage',
      imageUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    },
    {
      id: '3',
      title: 'Navigating Two Worlds',
      excerpt: 'Born to immigrant parents in Brooklyn, Maya reflects on straddling cultural identities and finding strength in diversity.',
      author: 'Maya Johnson',
      location: 'New York, USA',
      category: 'Culture',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    },
    {
      id: '4',
      title: 'The Ocean Between Us',
      excerpt: 'After 30 years apart, two sisters reunite across continents and rebuild the connection that time and distance tried to sever.',
      author: 'Elena & Sofia Moreno',
      location: 'Madrid, Spain',
      category: 'Family',
      imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-brand-50 py-12 md:py-20 lg:py-24">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6">
                Every Person Has a Story Worth Telling
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8">
                Humans of Origin celebrates the extraordinary in ordinary lives, connecting us through authentic narratives from across the globe.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild className="bg-brand-600 hover:bg-brand-700">
                  <Link to="/stories">Explore Stories</Link>
                </Button>
                <Button asChild variant="outline" className="border-brand-500 text-brand-600 hover:bg-brand-50">
                  <Link to="/about#submissions">Share Your Story</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Story Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto">
            <h2 className="text-2xl font-serif font-medium mb-8 text-center md:text-left">Featured Story</h2>
            <FeaturedStory {...featuredStory} />
          </div>
        </section>
        
        {/* Recent Stories Section */}
        <section className="py-12 md:py-16 bg-earth-50">
          <div className="container mx-auto">
            <div className="flex-between mb-8 flex-wrap gap-4">
              <h2 className="text-2xl font-serif font-medium">Recent Stories</h2>
              <Button asChild variant="link" className="text-brand-600">
                <Link to="/stories">View All Stories</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {recentStories.map(story => (
                <StoryCard key={story.id} {...story} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center px-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-medium mb-4">Join Our Community</h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to receive handpicked stories and updates from Humans of Origin.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow rounded-md border border-input px-4 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  required
                />
                <Button type="submit" className="bg-brand-600 hover:bg-brand-700 whitespace-nowrap">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
