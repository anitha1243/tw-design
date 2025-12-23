import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const hours = [
  { day: 'Monday - Friday', time: '10:00 AM - 9:00 PM' },
  { day: 'Saturday', time: '11:00 AM - 10:00 PM' },
  { day: 'Sunday', time: '11:00 AM - 8:00 PM' },
];

export function Location() {
  return (
    <section id="location" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full mb-4">
            Visit Us
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Find Tender Wrap
          </h2>
          <p className="text-gray-600 text-lg">
            Come visit us and experience the difference of fresh, made-to-order wraps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Location</h3>
                  <p className="text-gray-600">
                    104 Ware St<br />
                    Fairfield NSW 2165<br />
                    Australia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Phone</h3>
                  <a href="tel:+61212345678" className="text-gray-600 hover:text-red-600 transition-colors">
                    +61 457 083 748
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Email</h3>
                  <a href="mailto:info@tenderwrap.com.au" className="text-gray-600 hover:text-red-600 transition-colors">
                    info@tenderwrap.com.au
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl">Opening Hours</h3>
              </div>
              <div className="space-y-4">
                {hours.map((item, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-200 last:border-0">
                    <span className="text-gray-700">{item.day}</span>
                    <span className="text-red-600">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-2xl overflow-hidden h-[500px] md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106249.79278853785!2d151.1033323!3d-33.8473567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tender Wrap Location"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-2xl">
            <p className="text-lg mb-2">
              <strong>Order online for pickup or delivery</strong>
            </p>
            <p className="text-sm opacity-90">
              Call us at +61 457 083 748 or order through our delivery partners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
