import { useState } from 'react';
import { Flame, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';

const menuCategories = [
  {
    name: 'Chicken Wraps',
    items: [
      {
        id: 'tandoori-chicken-wrap',
        name: 'Tandoori Chicken Wrap',
        description: 'Marinated tandoori chicken with fresh lettuce, tomatoes, onions, and mint yogurt sauce',
        price: 12.9,
        spicy: true,
        image: '/pexels-bambangawey-2015191.jpg',
      },
      {
        id: 'grilled-chicken-caesar-wrap',
        name: 'Grilled Chicken Caesar Wrap',
        description: 'Grilled chicken breast, crispy bacon, parmesan, cos lettuce, and caesar dressing',
        price: 13.5,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'peri-peri-chicken-wrap',
        name: 'Peri Peri Chicken Wrap',
        description: 'Spicy peri peri chicken with mixed greens, capsicum, and garlic aioli',
        price: 13.9,
        spicy: true,
        image: 'https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'honey-mustard-chicken-wrap',
        name: 'Honey Mustard Chicken Wrap',
        description: 'Tender chicken with honey mustard sauce, mixed greens, and cheese',
        price: 12.9,
        image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'bbq-chicken-wrap',
        name: 'BBQ Chicken Wrap',
        description: 'BBQ chicken with coleslaw, cheese, and smoky BBQ sauce',
        price: 12.9,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },
  {
    name: 'Beef Wraps',
    items: [
      {
        id: 'angus-beef-wrap',
        name: 'Angus Beef Wrap',
        description: 'Premium angus beef with caramelized onions, cheese, lettuce, tomato, and special sauce',
        price: 14.9,
        image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'philly-cheese-steak-wrap',
        name: 'Philly Cheese Steak Wrap',
        description: 'Sliced beef, sautéed peppers, onions, and melted cheese',
        price: 14.5,
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'mexican-beef-wrap',
        name: 'Mexican Beef Wrap',
        description: 'Seasoned beef with salsa, guacamole, sour cream, cheese, and jalapeños',
        price: 14.9,
        spicy: true,
        image: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  {
    name: 'Vegetarian Wraps',
    items: [
      {
        id: 'falafel-wrap',
        name: 'Falafel Wrap',
        description: 'Crispy falafel with hummus, tahini, lettuce, tomato, cucumber, and pickles',
        price: 11.9,
        vegetarian: true,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'halloumi-wrap',
        name: 'Halloumi Wrap',
        description: 'Grilled halloumi cheese with roasted vegetables, spinach, and pesto',
        price: 12.5,
        vegetarian: true,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'garden-veggie-wrap',
        name: 'Garden Veggie Wrap',
        description: 'Fresh mixed vegetables, avocado, hummus, and balsamic glaze',
        price: 10.9,
        vegetarian: true,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'greek-wrap',
        name: 'Greek Wrap',
        description: 'Feta cheese, olives, cucumber, tomato, lettuce, and tzatziki',
        price: 11.9,
        vegetarian: true,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  {
    name: 'Lamb Wraps',
    items: [
      {
        id: 'lamb-gyros-wrap',
        name: 'Lamb Gyros Wrap',
        description: 'Marinated lamb with tzatziki, lettuce, tomato, onion, and feta',
        price: 14.9,
        image: 'https://images.unsplash.com/photo-1604908177035-0ac1c9bb6464?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'moroccan-lamb-wrap',
        name: 'Moroccan Lamb Wrap',
        description: 'Spiced lamb with roasted vegetables, couscous, and yogurt sauce',
        price: 15.5,
        spicy: true,
        image: 'https://images.unsplash.com/photo-1604908177575-4025a42917b3?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  {
    name: 'Seafood Wraps',
    items: [
      {
        id: 'grilled-fish-wrap',
        name: 'Grilled Fish Wrap',
        description: 'Grilled barramundi with lettuce, tomato, and tartare sauce',
        price: 14.9,
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'crispy-prawn-wrap',
        name: 'Crispy Prawn Wrap',
        description: 'Crispy prawns with Asian slaw and sweet chili mayo',
        price: 15.9,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  {
    name: 'Salads',
    items: [
      {
        id: 'chicken-caesar-salad',
        name: 'Chicken Caesar Salad',
        description: 'Grilled chicken, cos lettuce, parmesan, croutons, and caesar dressing',
        price: 13.9,
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'greek-salad',
        name: 'Greek Salad',
        description: 'Tomatoes, cucumber, feta, olives, onion, and olive oil dressing',
        price: 11.9,
        vegetarian: true,
        image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'quinoa-falafel-salad',
        name: 'Quinoa & Falafel Salad',
        description: 'Quinoa, falafel, mixed greens, roasted vegetables, and tahini dressing',
        price: 13.5,
        vegetarian: true,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  {
    name: 'Sides & Drinks',
    items: [
      {
        id: 'sweet-potato-fries',
        name: 'Sweet Potato Fries',
        description: 'Crispy sweet potato fries with aioli',
        price: 6.9,
        image: 'https://images.unsplash.com/photo-1585238341986-3725f70c0b7f?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'regular-fries',
        name: 'Regular Fries',
        description: 'Golden crispy fries',
        price: 5.5,
        image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'onion-rings',
        name: 'Onion Rings',
        description: 'Beer battered onion rings',
        price: 6.5,
        image: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'soft-drinks',
        name: 'Soft Drinks',
        description: 'Coke, Coke Zero, Sprite, Fanta',
        price: 3.5,
        image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'fresh-juices',
        name: 'Fresh Juices',
        description: 'Orange, Apple, or Mixed Berry',
        price: 5.9,
        image: 'https://images.unsplash.com/photo-1510626176961-4b37d0b4e904?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState(0);
  const { addToCart } = useCart();

  const handleAddToCart = (item: any, categoryName: string) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      category: categoryName,
    });
  };

  return (
    <section id="menu" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full mb-4">
            Our Menu
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Delicious Choices
          </h2>
          <p className="text-gray-600 text-lg">
            Made fresh daily with premium ingredients. All wraps can be customized to your preference.
          </p>
        </div>

        <div className="flex overflow-x-auto gap-3 mb-8 pb-3 scrollbar-hide">
          {menuCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full whitespace-nowrap transition-all ${
                activeCategory === index
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {menuCategories[activeCategory].items.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-red-200 transition-all group"
            >
              <div className="relative mb-4 h-44 overflow-hidden rounded-xl bg-gray-50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/5 to-transparent" />
              </div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl group-hover:text-red-600 transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2">
                  {item.spicy && (
                    <span className="text-red-500" title="Spicy">
                      <Flame className="w-5 h-5" />
                    </span>
                  )}
                  {item.vegetarian && (
                    <span className="text-green-500" title="Vegetarian">
                      <Leaf className="w-5 h-5" />
                    </span>
                  )}
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl text-red-600">${item.price.toFixed(2)}</span>
                <button 
                  onClick={() => handleAddToCart(item, menuCategories[activeCategory].name)}
                  className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all hover:scale-105"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 bg-gray-50 px-8 py-4 rounded-full">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-red-500" />
              <span className="text-gray-700">Spicy</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Vegetarian</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}