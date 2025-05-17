
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StoryCard from '@/components/StoryCard';
import CategoryTag from '@/components/CategoryTag';
import { Button } from '@/components/ui/button';

const Stories = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFilter = queryParams.get('category');

  // Mock data for stories and categories
  const [categories] = useState([
    'All', 'Identity', 'Heritage', 'Culture', 'Family', 'Tradition', 'Migration'
  ]);
  
  const [allStories] = useState([
    {
      id: '1',
      title: 'Finding Home in the Himalayas',
      excerpt: 'After traveling across three continents, Amara discovers her ancestral roots in a small village nestled in the mountains of Nepal.',
      author: 'Amara Thapa',
      location: 'Kathmandu, Nepal',
      category: 'Identity',
      imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    },
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
    {
      id: '5',
      title: 'Songs from the Steppe',
      excerpt: 'Bataar keeps the ancient tradition of Mongolian throat singing alive, passing it to a new generation against modernization.',
      author: 'Bataar Baatar',
      location: 'Ulaanbaatar, Mongolia',
      category: 'Tradition',
      imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    },
    {
      id: '6',
      title: 'Crossing Borders',
      excerpt: 'A powerful account of one family\'s journey across South America in search of safety and opportunity.',
      author: 'Carlos Mendez',
      location: 'Santiago, Chile',
      category: 'Migration',
      imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    },
  ]);
  
  const [filteredStories, setFilteredStories] = useState(allStories);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  useEffect(() => {
    // Filter stories based on URL parameter
    if (categoryFilter && categoryFilter !== 'all') {
      setSelectedCategory(categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1));
      setFilteredStories(allStories.filter(story => 
        story.category.toLowerCase() === categoryFilter.toLowerCase()
      ));
    } else {
      setSelectedCategory('All');
      setFilteredStories(allStories);
    }
  }, [categoryFilter, allStories]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredStories(allStories);
    } else {
      setFilteredStories(allStories.filter(story => story.category === category));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-warmth-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                Stories from Around the World
              </h1>
              <p className="text-muted-foreground">
                Explore authentic narratives that celebrate our shared humanity and diverse experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-8 border-b border-warmth-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <Button 
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  className={selectedCategory === category ? "bg-warmth-600 hover:bg-warmth-700" : ""}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Stories Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredStories.map(story => (
                <StoryCard key={story.id} {...story} />
              ))}
            </div>
            
            {filteredStories.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-serif mb-2">No stories found</h3>
                <p className="text-muted-foreground">Try selecting a different category</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Stories;
