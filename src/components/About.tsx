import { Heart, Award, Clock, Utensils } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every wrap is crafted with passion and care using traditional recipes'
  },
  {
    icon: Award,
    title: 'Quality Ingredients',
    description: 'We source only the freshest, highest quality ingredients'
  },
  {
    icon: Clock,
    title: 'Quick Service',
    description: 'Fast preparation without compromising on quality or taste'
  },
  {
    icon: Utensils,
    title: 'Expert Chefs',
    description: 'Our experienced team brings authentic flavors to every dish'
  }
];

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-16 md:py-24 bg-gradient-to-br from-gray-50 to-red-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-3xl blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1630914441316-6d95bbd00caf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwd3JhcCUyMGZvb2R8ZW58MXx8fHwxNzY2MzYxMDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Delicious wrap"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1654458804670-2f4f26ab3154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwaGVhbHRoeXxlbnwxfHx8fDE3NjYyNDYzMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fresh salad"
                className="w-full h-64 object-cover rounded-2xl shadow-lg mt-8"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full mb-4">
              About Tender Wrap
            </div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Fresh, Healthy & Authentic
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              At Tender Wrap, we believe in serving food that's not just delicious, but also 
              healthy and made with authentic recipes. Our journey started with a simple goal: 
              to bring fresh, flavorful wraps to our community.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Every ingredient is carefully selected, every wrap is made to order, and every 
              customer is treated like family. We take pride in offering a diverse menu that 
              caters to all tastes and dietary preferences.
            </p>
            <div className="flex gap-8">
              <div>
                <div className="text-3xl text-red-600 mb-1">50K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors">
                  <Icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
