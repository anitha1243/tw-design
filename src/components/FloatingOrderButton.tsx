import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function FloatingOrderButton() {
  const { setIsCartOpen, cartItemCount } = useCart();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="absolute -left-20 -top-6 z-50 group"
      aria-label="Cart"
    >
      <div className="relative">
        {/* Main Button */}
        <div className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center">
          <ShoppingBag className="w-6 h-6" />
        </div>
        
        {/* Item Count Badge */}
        {cartItemCount > 0 && (
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
            {cartItemCount}
          </div>
        )}
      </div>
      
      {/* Tooltip */}
      <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Cart
      </span>
    </button>
  );
}