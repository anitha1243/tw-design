import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const portfolioItems = [
  {
    image: 'https://images.unsplash.com/photo-1747842914486-481cc1c7a04a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3cmFwJTIwdmlueWx8ZW58MXx8fHwxNzY2MzYwNzY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Luxury Car Wrap',
    category: 'Vehicle Wrap',
    description: 'Premium vinyl wrap with custom color'
  },
  {
    image: 'https://images.unsplash.com/photo-1716512060259-d114cfba13e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWhpY2xlJTIwd3JhcHBpbmclMjBzZXJ2aWNlfGVufDF8fHx8MTc2NjM2MDc2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Fleet Branding',
    category: 'Commercial',
    description: 'Complete fleet graphics solution'
  },
  {
    image: 'https://images.unsplash.com/photo-1765785900629-3ba71564c9af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXIlMjBkZXNpZ258ZW58MXx8fHwxNzY2MzYwNzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Sports Car Transformation',
    category: 'Vehicle Wrap',
    description: 'High-performance wrap finish'
  },
  {
    image: 'https://images.unsplash.com/photo-1764983266679-751a8bbb54d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NjYzMDg4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Building Graphics',
    category: 'Architectural',
    description: 'Large-format building wrap'
  }
];

const categories = ['All', 'Vehicle Wrap', 'Commercial', 'Architectural'];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Our Recent Work
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our portfolio of stunning vehicle wraps and building graphics.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="text-sm text-blue-300 mb-1">{item.category}</div>
                  <h3 className="text-2xl mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
