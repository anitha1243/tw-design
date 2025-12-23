import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import logo from 'figma:asset/09923dc6780fc4b4332b38784509941f7da09fd1.png';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Tender Wrap" className="h-16 w-16" />
            </div>
            <p className="text-gray-400 mb-4">
              Fresh, healthy, and delicious wraps made daily with love and authentic flavors.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('hero')} className="hover:text-red-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('menu')} className="hover:text-red-400 transition-colors">
                  Menu
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-red-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('location')} className="hover:text-red-400 transition-colors">
                  Location
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Menu Categories</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('menu')} className="hover:text-red-400 transition-colors">
                  Chicken Wraps
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('menu')} className="hover:text-red-400 transition-colors">
                  Beef Wraps
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('menu')} className="hover:text-red-400 transition-colors">
                  Vegetarian Wraps
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('menu')} className="hover:text-red-400 transition-colors">
                  Salads
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  104 Ware St<br />
                  Fairfield NSW 2165, Australia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="tel:+61 457 083 748" className="text-gray-400 hover:text-red-400 transition-colors">
                  +61 457 083 748
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="mailto:info@tenderwrap.com.au" className="text-gray-400 hover:text-red-400 transition-colors">
                  info@tenderwrap.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2025 Tender Wrap. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
