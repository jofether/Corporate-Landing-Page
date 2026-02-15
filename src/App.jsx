import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    // [BUG - TYPO] 'min-h-scren' is invalid. Background won't cover full height on empty content.
    // [FIX] <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
    <div className="min-h-scren bg-white font-sans text-gray-900 flex flex-col-reverse">
      
      {/* [BUG - LAYOUT] 'flex-col-reverse' flips the whole page. Footer appears at the top. */}
      {/* [FIX] Remove 'flex-col-reverse' from the parent div. */}
      
      <Header />
      
      <main className="flex-1">
        <Hero />
        <Features />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;