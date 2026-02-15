import React from 'react';
import { Button } from './Button';

export function Hero() {
  return (
    <header className="bg-gradient-to-br from-gray-50 via-white to-indigo-50 py-24 px-4 text-center border-b border-gray-200 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-block mb-6 px-4 py-2 bg-indigo-100 rounded-full">
          <span className="text-sm font-semibold text-indigo-700">✨ New: Real-time Analytics Dashboard</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
          Data analytics <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">made simple</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-4 leading-relaxed">
          Stop wrestling with spreadsheets. Our intelligent platform processes your data in real-time and delivers actionable insights that drive growth.
        </p>
        
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
          Join 10,000+ companies already transforming their data strategy.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button size="lg" variant="primary">
            Start Free Trial
          </Button>
          <Button size="lg" variant="secondary">
            View Demo
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-gray-600 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🚀</span> Deploy in minutes
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔒</span> Enterprise security
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">💬</span> 24/7 Support
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
