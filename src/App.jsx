import React from 'react';

function App() {
  return (
    <div className="font-sans text-gray-900 antialiased">
      {/* NAVIGATION: Simple Flex Row */}
      <nav className="flex items-center justify-between flex-wrap bg-white p-6 shadow-sm sticky top-0 z-50">
        <div className="flex items-center flex-shrink-0 text-indigo-600 mr-6">
          <span className="font-bold text-xl tracking-tight">SaaSify</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow flex justify-end space-x-8">
            {['Product', 'Features', 'Pricing', 'Company'].map((link) => (
              <a
                key={link}
                href="#"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-indigo-600 font-medium"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="ml-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION: Centered text, large padding */}
      <header className="bg-gray-50 py-20 px-4 text-center border-b border-gray-200">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
          Data analytics <span className="text-indigo-600">made simple.</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8">
          Stop wrestling with spreadsheets. Our platform processes your data in real-time and gives you actionable insights instantly.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 shadow-lg">
            Start Free Trial
          </button>
          <button className="bg-white text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 border border-gray-300">
            View Demo
          </button>
        </div>
      </header>

      {/* FEATURES GRID: 3 Columns */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: 'Real-time Sync', desc: 'Updates propagate instantly across all devices.', icon: '⚡' },
            { title: 'Bank-grade Security', desc: '256-bit encryption keeps your data safe.', icon: '🔒' },
            { title: 'Collaborative', desc: 'Work with your team in the same dashboard.', icon: '🤝' },
          ].map((feature, idx) => (
            <div key={idx} className="p-6 border border-gray-100 rounded-xl hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 text-2xl flex items-center justify-center rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER: Dark background, multiple columns */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2026 SaaSify Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
