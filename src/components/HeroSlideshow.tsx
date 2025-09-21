import { useState, useEffect, useMemo } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const slideshowImages = [
  {
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop&q=80',
    alt: 'Kerala backwaters with traditional houseboat reflecting tranquil waters'
  },
  {
    url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&auto=format&fit=crop&q=80',
    alt: 'Lush green tea plantations of Munnar, Kerala hills'
  },
  {
    url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop&q=80',
    alt: 'Traditional Kerala temple architecture with intricate woodwork'
  },
  {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80',
    alt: 'Coconut palms swaying over Kerala beach at golden hour'
  },
  {
    url: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=800&auto=format&fit=crop&q=80',
    alt: 'Kerala Kathakali dancer in traditional costume and makeup'
  },
] as const;

const HeroSlideshow = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => api.scrollNext(), 8000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative w-full px-3 sm:px-6 md:px-8 lg:px-12" aria-label="Kerala showcase">
      <Carousel opts={{ loop: true, align: "start" }} className="w-full" setApi={setApi}>
        <CarouselContent>
          {slideshowImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="aspect-[16/9] w-full h-[180px] xs:h-[220px] sm:h-[280px] md:h-[360px] lg:h-[480px] xl:h-[540px] overflow-hidden rounded-md sm:rounded-lg">
                <img 
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-x-0 bottom-3 sm:bottom-4 flex justify-center gap-2 z-10">
          {slideshowImages.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current ? "bg-white scale-110" : "bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSlideshow;