import React from 'react';
import { Button } from './Button';

export function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Ready to transform your data?
        </h2>
        <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
          Join thousands of companies using SaaSify to make data-driven decisions faster. Start your free trial today—no credit card required.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="secondary">
            Start Free Trial
          </Button>
          <Button size="lg" className="text-white border-white hover:bg-white/10">
            Schedule Demo
          </Button>
        </div>

        <p className="text-indigo-200 mt-8 text-sm">
          14-day free trial. No credit card required. Full access to all features.
        </p>
      </div>
    </section>
  );
}

export default CTA;
