import { Car, Building2, Palette, Shield } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Vehicle Wrapping',
    description: 'Full and partial vehicle wraps for cars, trucks, and fleet vehicles. Premium vinyl materials with long-lasting durability.',
    features: ['Car Wraps', 'Truck Wraps', 'Fleet Graphics', 'Color Change']
  },
  {
    icon: Building2,
    title: 'Building Graphics',
    description: 'Large-format building wraps and architectural graphics. Transform your space with eye-catching designs.',
    features: ['Building Wraps', 'Window Graphics', 'Wall Murals', 'Signage']
  },
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Bespoke design services tailored to your brand. From concept to installation, we bring your vision to life.',
    features: ['Brand Design', '3D Mockups', 'Color Matching', 'Creative Concepts']
  },
  {
    icon: Shield,
    title: 'Paint Protection',
    description: 'Premium paint protection film to keep your vehicle looking new. Invisible protection against chips and scratches.',
    features: ['PPF Installation', 'Clear Bra', 'Ceramic Coating', 'Protection Film']
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Professional Wrapping Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            From vehicle wraps to building graphics, we deliver exceptional quality and attention to detail in every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all bg-white group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
