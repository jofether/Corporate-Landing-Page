import React from 'react';
import {
  Header,
  Hero,
  Features,
  Pricing,
  Testimonials,
  CTA,
  Footer,
} from './components';

function App() {
  return (
    <div className="font-sans text-gray-900 antialiased bg-white">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
