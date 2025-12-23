import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, ShoppingBag, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import logo from 'figma:asset/09923dc6780fc4b4332b38784509941f7da09fd1.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsCartOpen, cartItemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg border-b border-red-100'
          : 'bg-gradient-to-r from-red-50/90 via-white to-red-50/90 backdrop-blur-md border-b border-red-100/70'
      }`}
      style={{
        backgroundImage: isScrolled
          ? 'linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95))'
          : 'linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.88)), url("/navbar-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollToSection('hero')} className="flex items-center">
            <img
              src={logo}
              alt="Tender Wrap"
              className="h-16 w-16 rounded-full object-cover shadow-md ring-2 ring-red-100"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="heading-font text-red-700 font-semibold hover:text-red-800 transition-colors"
            >
              Home
            </button>            
            <button
              onClick={() => scrollToSection('about')}
              className="heading-font text-red-700 font-semibold hover:text-red-800 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="heading-font text-red-700 font-semibold hover:text-red-800 transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="heading-font text-red-700 font-semibold hover:text-red-800 transition-colors"
            >
              Dubai Chocolate
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="heading-font text-red-700 font-semibold hover:text-red-800 transition-colors"
            >
              Catering
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="heading-font text-red-700 font-semibold hover:text-red-800 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative px-4 py-2 text-red-600 hover:text-red-700 transition-colors flex items-center gap-2"
              aria-label="Open cart"
            >
              <ShoppingCart className="w-5 h-5" />
              Cart
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="relative px-6 py-2.5 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Order Now
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <MenuIcon className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('hero')}
              className="heading-font block w-full text-left px-4 py-2 text-red-700 font-semibold hover:bg-red-50 rounded-lg"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="heading-font block w-full text-left px-4 py-2 text-red-700 font-semibold hover:bg-red-50 rounded-lg"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="heading-font block w-full text-left px-4 py-2 text-red-700 font-semibold hover:bg-red-50 rounded-lg"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="heading-font block w-full text-left px-4 py-2 text-red-700 font-semibold hover:bg-red-50 rounded-lg"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="heading-font block w-full text-left px-4 py-2 text-red-700 font-semibold hover:bg-red-50 rounded-lg"
            >
              Location
            </button>
            <button 
              onClick={() => { setIsCartOpen(true); setIsMobileMenuOpen(false); }}
              className="relative block w-full text-left px-4 py-2 text-red-600 rounded-lg hover:bg-gray-50 flex items-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              Cart {cartItemCount > 0 && `(${cartItemCount})`}
            </button>
            <button 
              onClick={() => {
                scrollToSection('menu');
                setIsMobileMenuOpen(false);
              }}
              className="relative block w-full text-left px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Order Now {cartItemCount > 0 && `(${cartItemCount})`}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}