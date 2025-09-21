import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Successfully subscribed!",
      description: "Thank you for joining our Kerala stories community.",
    });
    
    setEmail('');
    setIsLoading(false);
  }, [toast]);

  return (
    <section className="spacing-responsive" aria-labelledby="newsletter-heading">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center px-3 sm:px-4">
          <h2 id="newsletter-heading" className="text-responsive-lg font-serif font-medium mb-3 sm:mb-4">
            Join Our Kerala Stories Community
          </h2>
          <p className="text-responsive-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
            Subscribe to receive handpicked stories from Kerala, cultural insights, and updates from God's Own Country.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow"
              required
              aria-label="Email for Kerala stories newsletter"
            />
            <Button 
              type="submit" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap min-w-[120px]"
              disabled={isLoading}
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;