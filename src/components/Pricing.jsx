import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Simple pricing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-xl font-bold text-white">Starter</h3>
            <p className="text-4xl font-bold text-white mt-4">$0<span className="text-lg text-gray-400">/mo</span></p>
            <ul className="mt-8 space-y-4 text-gray-400">
              <li>✓ 1 User</li>
              <li>✓ 5 Projects</li>
            </ul>
            <button className="w-full mt-8 py-3 bg-gray-700 text-white rounded-lg font-bold">Get Started</button>
          </div>

          {/* Card 2 (Popular) */}
          <div className="bg-white p-8 rounded-2xl border-2 border-blue-500 relative transform md:-translate-y-4">
            <span className="fixed top-0 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              Most Popular
            </span>
            
            <h3 className="text-xl font-bold text-gray-900">Pro</h3>
            <p className="text-4xl font-bold text-white mt-4">$49<span className="text-lg text-gray-500">/mo</span></p>
            
            <ul className="mt-8 space-y-4 text-gray-600">
              <li>✓ 5 Users</li>
              <li>✓ Unlimited Projects</li>
              <li>✓ Analytics</li>
            </ul>
            <button className="w-full mt-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">Get Started</button>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-xl font-bold text-white">Enterprise</h3>
            <p className="text-4xl font-bold text-white mt-4">$99<span className="text-lg text-gray-400">/mo</span></p>
            <ul className="mt-8 space-y-4 text-gray-400">
              <li>✓ Unlimited Users</li>
              <li>✓ 24/7 Support</li>
            </ul>
            <button className="w-full mt-8 py-3 bg-gray-700 text-white rounded-lg font-bold">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;