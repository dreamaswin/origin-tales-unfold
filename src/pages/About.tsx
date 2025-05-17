
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-warmth-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
                About Humans of Origin
              </h1>
              <p className="text-lg text-muted-foreground">
                We believe that every person has a story worth telling, and that sharing these stories builds bridges across cultures, geographies, and experiences.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-medium mb-6 text-center md:text-left">Our Mission</h2>
              <p className="text-lg mb-6 leading-relaxed">
                Humans of Origin was founded with a simple yet powerful mission: to document and share the authentic stories of people from diverse backgrounds across the globe. We believe that in our increasingly divided world, storytelling can be a revolutionary act – one that builds empathy, challenges stereotypes, and reveals our common humanity.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Our platform serves as a bridge between cultures, communities, and individuals. By amplifying voices that might otherwise go unheard and highlighting experiences that transcend boundaries, we strive to create a tapestry of human narratives that celebrates our differences while affirming our shared experiences.
              </p>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-earth-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-medium mb-10 text-center">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop" 
                      alt="Founder" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-serif mb-1">Maya Reynolds</h3>
                  <p className="text-warmth-700 mb-3">Founder & Editor-in-Chief</p>
                  <p className="text-muted-foreground">
                    A journalist with over 15 years of experience documenting human stories across five continents.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" 
                      alt="Co-founder" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-serif mb-1">Khalid Ahmed</h3>
                  <p className="text-warmth-700 mb-3">Co-founder & Photographer</p>
                  <p className="text-muted-foreground">
                    An award-winning photographer known for capturing authentic moments that reveal the depth of human experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Approach */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-medium mb-6 text-center md:text-left">Our Approach</h2>
              <p className="text-lg mb-6 leading-relaxed">
                We approach each story with respect, empathy, and journalistic integrity. Our team works directly with individuals who share their stories, ensuring they maintain agency and voice throughout the process. We believe in ethical storytelling that honors the complexity of human experience without sensationalizing or oversimplifying.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Each story undergoes a collaborative editing process, with emphasis on preserving the authentic voice of the storyteller. We pair powerful narratives with evocative photography to create immersive stories that resonate with readers around the world.
              </p>
              <p className="text-lg leading-relaxed">
                Through this approach, we aim to create a platform that not only documents diverse human experiences but also fosters connection, understanding, and dialogue across cultures.
              </p>
            </div>
          </div>
        </section>
        
        {/* Submit Your Story */}
        <section id="submissions" className="py-16 bg-warmth-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-medium mb-4">Share Your Story</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're always looking for authentic stories from around the world. If you have a story to share or know someone with an extraordinary tale, we'd love to hear from you.
              </p>
              <Button className="bg-warmth-600 hover:bg-warmth-700">
                Submit Your Story
              </Button>
            </div>
          </div>
        </section>
        
        {/* Contact Us */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-medium mb-6 text-center">Contact Us</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full rounded-md border border-input px-4 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full rounded-md border border-input px-4 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full rounded-md border border-input px-4 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={6}
                    className="w-full rounded-md border border-input px-4 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <Button type="submit" className="bg-warmth-600 hover:bg-warmth-700">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
