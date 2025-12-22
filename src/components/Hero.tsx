import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { FloatingOrderButton } from './FloatingOrderButton';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Hero() {
  const { ref, isVisible } = useScrollAnimation();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative pt-20 min-h-screen flex items-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.88)), url("/navbar-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className={`space-y-6 md:space-y-8 relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full">
              Fresh • Healthy • Delicious
            </div>
            <FloatingOrderButton />
            <h1 className="text-5xl md:text-6xl lg:text-7xl">
              Wraps That
              <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Wrap You Up
              </span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl">
              Experience the perfect combination of fresh ingredients, authentic flavors, 
              and healthy choices. Made fresh daily with love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('menu')}
                className="px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                View Menu
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="px-8 py-4 bg-white text-gray-700 rounded-full hover:bg-gray-50 transition-all border-2 border-gray-200 flex items-center justify-center gap-2"
              >
                Find Us
              </button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl text-red-600">100%</div>
                <div className="text-gray-600">Fresh Ingredients</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div>
                <div className="text-3xl text-red-600">Daily</div>
                <div className="text-gray-600">Made Fresh</div>
              </div>
            </div>
          </div>
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-br from-red-400/30 to-orange-400/30 rounded-[3rem] blur-3xl" />
            <div className="relative">
              <ImageWithFallback
                src="/ChatGPT-Image-Jul-24-2025-12_40_59-PM.png"
                alt="Delicious wrap presentation"
                className="w-full h-auto rounded-[3rem] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
