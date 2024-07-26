import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: "Monet's work comes alive in this gallery. It's like stepping into his paintings!",
    author: "Emily S.",
    image: "/placeholder.svg"
  },
  {
    quote: "The curation is exceptional. I've gained a new appreciation for Impressionism.",
    author: "Michael L.",
    image: "/placeholder.svg"
  },
  {
    quote: "A must-visit for any art enthusiast. The Water Lilies series is breathtaking.",
    author: "Sophie T.",
    image: "/placeholder.svg"
  }
];

const TestimonialsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <div className="bg-card text-card-foreground p-8 rounded-lg shadow-lg m-4 brush-stroke">
                <img src={testimonial.image} alt={testimonial.author} className="mx-auto object-cover w-32 h-32 rounded-full mb-6 border-4 border-secondary" />
                <blockquote className="text-xl italic mb-6 text-center">"{testimonial.quote}"</blockquote>
                <p className="font-semibold text-right text-lg">- {testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button variant="outline" size="icon" className="absolute top-1/2 left-2 transform -translate-y-1/2" onClick={scrollPrev}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className="absolute top-1/2 right-2 transform -translate-y-1/2" onClick={scrollNext}>
        <ChevronRight className="h-4 w-4" />
      </Button>
      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${index === selectedIndex ? 'bg-primary' : 'bg-muted'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
