import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselItems = [
  {
    id: 1,
    title: 'Fresh Ingredients',
    description: 'Premium, locally-sourced ingredients delivered fresh daily',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Authentic Flavors',
    description: 'Traditional recipes with a modern twist',
    image: 'https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Healthy Choices',
    description: 'Nutritious options for every dietary preference',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
  },
];

export function Carousel() {
  const [current, setCurrent] = useState(0);

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % carouselItems.length);
  };

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const item = carouselItems[current];

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden">
          {/* Background Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{item.title}</h2>
            <p className="text-lg md:text-xl max-w-2xl mb-6">{item.description}</p>
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full transition-all">
              Learn More
            </button>
          </div>

          {/* Left Arrow */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all ${
                  index === current ? 'w-8 bg-white' : 'w-2 bg-white/50'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
