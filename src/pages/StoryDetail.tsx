import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CategoryTag from '@/components/CategoryTag';
import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, ArrowLeft } from 'lucide-react';

const StoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock data for story details
  const [stories] = useState([
    {
      id: '1',
      title: 'Finding Home in the Himalayas',
      content: `
      <p class="mb-4">The journey began with a photograph. A faded image of a mountain village that my grandmother kept close to her heart until the day she died. "Namche," she would whisper, tracing the outline of the peaks with her finger. "Where our family comes from."</p>
      
      <p class="mb-4">I was born and raised in London, thousands of miles from Nepal. My connection to my ancestral homeland was limited to fragmented stories told around dinner tables and cultural customs observed during festivals. But after my grandmother's passing, something tugged at me – an invisible thread connecting me to a place I'd never been.</p>
      
      <p class="mb-4">With nothing but that photograph and a name, I embarked on a journey that would take me across three continents and eventually to the foothills of the Himalayas. The path was not straightforward. There were visa complications in Delhi, missed connections in Kathmandu, and a treacherous bus ride that left me questioning my decision.</p>
      
      <h3 class="text-2xl font-serif font-medium mt-8 mb-4">The Arrival</h3>
      
      <p class="mb-4">When I finally arrived in Namche Bazaar, I felt strangely calm. The mountains stood sentinel around the horseshoe-shaped settlement, just as they had in my grandmother's photograph. The air was thin but fragrant with woodsmoke and juniper incense.</p>
      
      <p class="mb-4">"I'm looking for anyone who might have known the Thapa family," I told the elderly shopkeeper who offered me butter tea when I wandered into his store. He studied my face for a long moment, then smiled.</p>
      
      <p class="mb-4">"You have your grandmother's eyes," he said in Nepali. I hadn't mentioned my grandmother, nor did I fully understand his words, but something in his tone made my heart race.</p>
      
      <h3 class="text-2xl font-serif font-medium mt-8 mb-4">The Connection</h3>
      
      <p class="mb-4">That afternoon, I was led to a small stone house on the edge of the village. A woman in her seventies emerged, her face weathered by mountain winds and sunshine. When our eyes met, there was a flicker of recognition – not from memory, but from something deeper, something genetic.</p>
      
      <p class="mb-4">She was my grandmother's cousin. The families had lost contact after my grandmother moved to India and then to England, but here, in this remote mountain village, her memory remained alive.</p>
      
      <p class="mb-4">"We always hoped someone would return," she told me through a translator. "To remember where they came from."</p>
      
      <p class="mb-6">In the weeks that followed, I learned more about my family than I had in my entire life. I learned about our traditions, our struggles, our celebrations. I learned the proper way to make momos, pleating the dough in the distinctive pattern that my grandmother had always used. I learned songs I had never heard but somehow felt I knew.</p>
      
      <h3 class="text-2xl font-serif font-medium mt-8 mb-4">The Transformation</h3>
      
      <p class="mb-4">Identity is a complicated tapestry, threads of experience, geography, and heritage woven together. For much of my life, I had been missing essential strands of that fabric. In Namche, surrounded by mountains that had watched over my ancestors for generations, I began to feel more complete.</p>
      
      <p class="mb-4">I had come seeking connection, perhaps even closure. What I found was a beginning – a new understanding of myself and my place in the world.</p>
      
      <p class="mb-4">When I finally left Namche, I carried with me more than photographs and souvenirs. I carried a profound sense of belonging, a connection to a lineage that stretches back through time, rooted in the very soil of the Himalayas.</p>
      
      <p class="mb-4">"You will return," my grandmother's cousin said as we parted. It wasn't a question or even a hope. It was a certainty.</p>
      
      <p class="mb-4">And she was right. Nepal is no longer just a place on a map to me. It is home, in the deepest sense of the word – not the only home I have, but a vital part of the constellation of places that anchor my soul to this earth.</p>
      
      <p>In finding Namche, I found a piece of myself that had been waiting to be discovered. The journey reminded me that we are all more than the places we currently inhabit. We are the sum of all the journeys our ancestors took, all the choices they made, all the stories they lived.</p>
      `,
      author: 'Amara Thapa',
      location: 'Kathmandu, Nepal',
      datePublished: 'March 15, 2023',
      category: 'Identity',
      imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      authorBio: 'Amara Thapa is a British-Nepalese writer and photographer based in London. Her work explores themes of cultural identity, belonging, and the immigrant experience.',
    },
    {
      id: '2',
      title: 'The Last Storyteller of Marrakech',
      content: `<p class="mb-4">In the heart of Marrakech's ancient medina, where the labyrinthine alleys wind like stories themselves, Hassan El Fasi keeps a tradition alive that spans back a thousand years...</p>
      <p class="mb-4">Every evening as the sun sets, he takes his place in Jemaa el-Fnaa square, sitting cross-legged on a worn carpet. Around him, tourists and locals alike gather, drawn by an art form that preceded books, radio, television, and the internet - oral storytelling.</p>
      <p class="mb-4">"My grandfather was a hakawati, and his father before him," Hassan explains, using the Arabic term for storyteller. "They gave me not an inheritance of money, but of words and imagination."</p>
      <p class="mb-4">Hassan learned his first stories at the age of six, sitting beside his grandfather in this very square. Now in his seventies, with a white beard and eyes that crinkle with wisdom when he smiles, he is one of the last professional storytellers in Morocco.</p>
      <p class="mb-4">The stories he tells span centuries - epic adventures, moral fables, historical tales, and love stories. Some date back to the 9th century, preserved through nothing but memory and voice, passed from one generation to the next like precious heirlooms.</p>
      <p class="mb-4">"Each story is a living thing," he says. "It breathes differently with each telling. It responds to the audience, to the night, to the moment."</p>`,
      author: 'Hassan El Fasi',
      location: 'Marrakech, Morocco',
      datePublished: 'January 8, 2023',
      category: 'Heritage',
      imageUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
      authorBio: "Hassan El Fasi comes from a long lineage of traditional Moroccan storytellers. For over five decades, he has performed in Marrakech's famous Jemaa el-Fnaa square, preserving ancient tales and oral traditions.",
    }
  ]);
  
  const [story, setStory] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Find the story by id
    const foundStory = stories.find(s => s.id === id);
    if (foundStory) {
      setStory(foundStory);
    }
    setLoading(false);
  }, [id, stories]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading story...</p>
      </div>
    );
  }
  
  if (!story) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-serif mb-4">Story not found</h2>
            <Button asChild variant="outline">
              <Link to="/stories">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Stories
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Story Header */}
        <section className="bg-warmth-50 py-8 mb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Button asChild variant="ghost" className="mb-4">
                <Link to="/stories">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Stories
                </Link>
              </Button>
              <CategoryTag category={story.category} className="mb-3" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6">{story.title}</h1>
              <div className="flex items-center text-sm">
                <span className="font-medium">{story.author}</span>
                <span className="mx-2">•</span>
                <span className="text-muted-foreground">{story.location}</span>
                <span className="mx-2">•</span>
                <span className="text-muted-foreground">{story.datePublished}</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Hero Image */}
        <section className="mb-10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="aspect-[16/9] overflow-hidden rounded-lg">
                <img 
                  src={story.imageUrl} 
                  alt={story.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Story Content */}
        <section className="mb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-warmth lg:prose-lg mx-auto" dangerouslySetInnerHTML={{ __html: story.content }} />
            </div>
          </div>
        </section>
        
        {/* Author Bio */}
        <section className="mb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="border-t border-warmth-100 pt-8">
                <h3 className="text-xl font-serif mb-2">About the Author</h3>
                <p className="text-muted-foreground mb-4">{story.authorBio}</p>
                <div className="flex space-x-3">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-warmth-700 hover:text-warmth-900 transition-colors">
                    <Instagram size={20} />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-warmth-700 hover:text-warmth-900 transition-colors">
                    <Linkedin size={20} />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Share & Engage */}
        <section className="bg-earth-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-serif font-medium mb-4">Share This Story</h2>
              <p className="text-muted-foreground mb-6">
                Help us spread these powerful human stories across the globe.
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" className="border-warmth-500 text-warmth-700 hover:bg-warmth-50">
                  Share on Instagram
                </Button>
                <Button variant="outline" className="border-warmth-500 text-warmth-700 hover:bg-warmth-50">
                  Share on LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default StoryDetail;
