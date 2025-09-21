import { useState, useEffect } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const HeroSlideshow = () => {
  const slideshowImages = [
    {
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      alt: 'Serene mountain lake reflecting surrounding peaks - representing nature\'s diversity'
    },
    {
      url: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
      alt: 'Warm golden lights through forest canopy - symbolizing hope and connection'
    },
    {
      url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
      alt: 'Majestic stone bridge over cascading waterfalls - bridging cultures and stories'
    },
    {
      url: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
      alt: 'River winding through mountain valley - journey of human experiences'
    },
    {
      url: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed',
      alt: 'Alpine landscape showcasing diverse terrain - representing global diversity'
    },
  ];

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
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative w-full px-3 sm:px-6 md:px-8 lg:px-12" aria-label="Hero slideshow">
      <Carousel
        opts={{ loop: true, align: "start" }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {slideshowImages.map((image, index) => (
            <CarouselItem key={index} className="w-full">
              <div className="aspect-[16/9] w-full h-[180px] xs:h-[220px] sm:h-[280px] md:h-[360px] lg:h-[480px] xl:h-[540px] overflow-hidden rounded-md sm:rounded-lg">
                <img 
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center"
                  loading={index === 0 ? "eager" : "lazy"}
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