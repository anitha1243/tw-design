import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Carousel } from './components/Carousel';
import { CategoryCarousel } from './components/CategoryCarousel';
import { ProductImageCarousel } from './components/ProductImageCarousel';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { CartProvider, useCart } from './context/CartContext';
import { Checkout } from './components/Checkout';

function AppContent() {
  const { isCheckoutOpen, setIsCheckoutOpen } = useCart();

  if (isCheckoutOpen) {
    return <Checkout onBack={() => setIsCheckoutOpen(false)} />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Carousel />
      <CategoryCarousel />
      <ProductImageCarousel />
      <Menu />
      <Location />
      <Footer />
      <Cart />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}