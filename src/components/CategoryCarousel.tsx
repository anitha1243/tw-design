import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    icon: '🍗',
    name: 'Chicken',
    description: 'Succulent grilled & marinated chicken wraps',
  },
  {
    id: 2,
    icon: '🌯',
    name: 'Wraps',
    description: 'Handcrafted wraps with premium fillings',
  },
  {
    id: 3,
    icon: '🥩',
    name: 'Beef',
    description: 'Premium beef wraps & platters',
  },
  {
    id: 4,
    icon: '🌱',
    name: 'Vegetarian',
    description: 'Fresh & flavorful veggie options',
  },
  {
    id: 5,
    icon: '🦐',
    name: 'Seafood',
    description: 'Grilled fish & crispy seafood wraps',
  },
  {
    id: 6,
    icon: '🐑',
    name: 'Lamb',
    description: 'Tender lamb with authentic spices',
  },
];

export function CategoryCarousel() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full mb-4">
            What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Where Flavor Meets Freshness
          </h2>
          <p className="text-gray-600 text-lg">
            At Tenda Wrap, every item on our menu is crafted with passion, using fresh 
            ingredients and authentic recipes. Explore our variety and find your favorite.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 hover:shadow-xl transition-all hover:scale-105 cursor-pointer border border-red-100"
              onClick={() => scrollToSection('menu')}
            >
              <div className="text-6xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600 mb-6">
                {category.description}
              </p>
              <div className="flex items-center gap-2 text-red-600 group-hover:gap-3 transition-all">
                <span className="font-semibold">Explore</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
