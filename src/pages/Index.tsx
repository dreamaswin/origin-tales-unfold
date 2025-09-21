
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
    title: 'Finding Home in the Himalayas',
    excerpt: 'After traveling across three continents, Amara discovers her ancestral roots in a small village nestled in the mountains of Nepal. This is a story of identity, belonging, and the universal quest for connection that transcends borders and time.',
    author: 'Amara Thapa',
    location: 'Kathmandu, Nepal',
    category: 'Identity',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  };

  const recentStories = [
    {
      id: '2',
      title: 'The Last Storyteller of Marrakech',
      excerpt: 'Hassan is one of the few remaining traditional Moroccan storytellers, preserving ancient tales in the bustling souks of the modern world. His voice carries centuries of cultural wisdom.',
      author: 'Hassan El Fasi',
      location: 'Marrakech, Morocco',
      category: 'Heritage',
      imageUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    },
    {
      id: '3',
      title: 'Navigating Two Worlds',
      excerpt: 'Born to immigrant parents in Brooklyn, Maya reflects on straddling cultural identities and finding strength in diversity. Her journey speaks to millions who call multiple places home.',
      author: 'Maya Johnson',
      location: 'New York, USA',
      category: 'Culture',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    },
    {
      id: '4',
      title: 'The Ocean Between Us',
      excerpt: 'After 30 years apart, two sisters reunite across continents and rebuild the connection that time and distance tried to sever. A testament to the enduring power of family bonds.',
      author: 'Elena & Sofia Moreno',
      location: 'Madrid, Spain',
      category: 'Family',
      imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSlideshow />

        {/* Section Heading */}
        <section className="spacing-responsive text-center" aria-labelledby="main-heading">
          <div className="container">
            <h2 id="main-heading" className="text-responsive-xl font-serif font-medium text-primary mb-3 sm:mb-4">
              Stories from Around the World
            </h2>
            <p className="text-responsive-base text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Explore authentic human experiences that connect us across cultures, geographies, and backgrounds. 
              Each story is a window into the diverse tapestry of human experience.
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
