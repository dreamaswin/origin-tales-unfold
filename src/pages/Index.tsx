
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSlideshow from '@/components/HeroSlideshow';
import HeroSection from '@/components/HeroSection';
import StoryShowcase from '@/components/StoryShowcase';
import Newsletter from '@/components/Newsletter';

const Index = () => {
  const featuredStory = {
    id: '1',
    title: 'Finding Roots in Kerala Backwaters',
    excerpt: 'After years abroad, Priya returns to her ancestral village in Alleppey to discover her grandmother\'s untold stories of resilience during the floods. A journey of rediscovering Malayalam heritage and the timeless wisdom of Kerala\'s matriarchal traditions.',
    author: 'Priya Nair',
    location: 'Alleppey, Kerala',
    category: 'Heritage',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&auto=format&fit=crop&q=80',
  };

  const recentStories = [
    {
      id: '2',
      title: 'The Last Theyyam Artist of Kannur',
      excerpt: 'Raman Master, 72, is one of the few remaining traditional Theyyam performers. His story preserves the ancient ritual art form that connects Kerala to its spiritual roots and ancestral worship.',
      author: 'K.R. Raman',
      location: 'Kannur, Kerala',
      category: 'Tradition',
      imageUrl: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=600&auto=format&fit=crop&q=80',
    },
    {
      id: '3',
      title: 'Spices and Stories from Munnar Hills',
      excerpt: 'Three generations of a family running a spice plantation in Munnar share tales of how cardamom and tea shaped their identity, blending Tamil and Malayalam cultures in the Western Ghats.',
      author: 'Meera & Family',
      location: 'Munnar, Kerala',
      category: 'Culture',
      imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&auto=format&fit=crop&q=80',
    },
    {
      id: '4',
      title: 'Coconut Climber\'s Philosophy',
      excerpt: 'Krishnan, a coconut tree climber from Kozhikode, shares his unique perspective on life, sustainability, and the changing landscape of Kerala\'s coastal communities.',
      author: 'P.K. Krishnan',
      location: 'Kozhikode, Kerala',
      category: 'Life',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSlideshow />

        <section className="spacing-responsive text-center" aria-labelledby="main-heading">
          <div className="container">
            <h2 id="main-heading" className="text-responsive-xl font-serif font-medium text-primary mb-3 sm:mb-4">
              Stories from Kerala - God's Own Country
            </h2>
            <p className="text-responsive-base text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover authentic narratives from Kerala's backwaters to hill stations, celebrating Malayalam culture, ancient traditions, and the diverse communities that call Kerala home.
            </p>
          </div>
        </section>
        
        <HeroSection />
        <StoryShowcase featuredStory={featuredStory} recentStories={recentStories} />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
