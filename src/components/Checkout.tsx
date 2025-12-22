import { ArrowLeft, MapPin, Phone, Mail, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CheckoutProps {
  onBack: () => void;
}

export function Checkout({ onBack }: CheckoutProps) {
  const { cart, cartTotal } = useCart();

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed successfully! This is a demo - in production, this would process your payment and send your order to the restaurant.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-600 text-white p-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-red-700 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl">Checkout</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Form */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl mb-4">Contact Information</h2>
              <form onSubmit={handleSubmitOrder} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    placeholder="+61 400 000 000"
                  />
                </div>

                <div className="pt-4">
                  <h3 className="mb-3">Delivery Method *</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-red-500 transition-colors">
                      <input type="radio" name="deliveryMethod" value="pickup" defaultChecked className="w-4 h-4 text-red-600" />
                      <div>
                        <div className="font-medium">Pickup</div>
                        <div className="text-sm text-gray-500">Pick up from restaurant</div>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-red-500 transition-colors">
                      <input type="radio" name="deliveryMethod" value="delivery" className="w-4 h-4 text-red-600" />
                      <div>
                        <div className="font-medium">Delivery</div>
                        <div className="text-sm text-gray-500">Delivery to your address</div>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Delivery Address
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    rows={3}
                    placeholder="Street address, Suburb, Postcode"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Special Instructions
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    rows={3}
                    placeholder="Any special requests or dietary requirements..."
                  />
                </div>

                <div className="pt-4">
                  <h3 className="mb-3">
                    <CreditCard className="w-4 h-4 inline mr-1" />
                    Payment Method *
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-red-500 transition-colors">
                      <input type="radio" name="paymentMethod" value="cash" defaultChecked className="w-4 h-4 text-red-600" />
                      <div>
                        <div className="font-medium">Cash on Pickup/Delivery</div>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-red-500 transition-colors">
                      <input type="radio" name="paymentMethod" value="card" className="w-4 h-4 text-red-600" />
                      <div>
                        <div className="font-medium">Card on Pickup/Delivery</div>
                      </div>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors mt-6"
                >
                  Place Order - ${cartTotal.toFixed(2)}
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-start pb-4 border-b border-gray-200">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.category}</p>
                      <p className="text-sm text-gray-600 mt-1">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-red-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-500">
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t border-gray-200 pt-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>GST (10%)</span>
                  <span>${(cartTotal * 0.1).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl pt-3 border-t-2 border-gray-300">
                  <span>Total</span>
                  <span className="text-red-600">${(cartTotal * 1.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Estimated Time:</strong> 25-35 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
