import React from 'react';

const Hero = () => {
  return (
    <section className="pt-0 pb-12 md:pt-40 md:pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-8">
          <span>🚀 New features released</span>
        </div>

        <h1 className="text-5xl md:text-6x font-extrabold text-gray-900 tracking-tight mb-6">
          Transform your business <br />
          <span className="text-blue-600">with data-driven insights</span>
        </h1>

        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          Powerful analytics tools that help you understand your customers better. 
          Scale faster with our enterprise-grade platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">
            Start Free Trial
          </button>
          <button className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all">
            View Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;