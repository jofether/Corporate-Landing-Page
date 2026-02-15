import React, { useState } from 'react';
import { Button } from './Button';
import { Card } from './Card';

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams exploring data analytics',
      price: isAnnual ? 199 : 29,
      features: [
        'Up to 10 users',
        '1GB data storage',
        'Basic dashboards',
        'Email support',
        'API access',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      description: 'For growing teams with advanced needs',
      price: isAnnual ? 599 : 89,
      features: [
        'Unlimited users',
        '100GB data storage',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'SSO & SAML',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with custom requirements',
      price: 'Custom',
      features: [
        'Unlimited everything',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantee',
        'On-premise deployment',
        'Training & onboarding',
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose the perfect plan for your needs
          </p>

          <div className="flex justify-center items-center gap-4">
            <span className={`text-lg ${!isAnnual ? 'font-bold text-gray-900' : 'text-gray-600'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-300"
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition ${
                  isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'font-bold text-gray-900' : 'text-gray-600'}`}>
              Annual <span className="text-sm text-green-600 font-semibold">(Save 30%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <Card 
              key={idx} 
              variant={plan.highlighted ? 'elevated' : 'default'}
              className={plan.highlighted ? 'ring-2 ring-indigo-600 md:scale-105' : ''}
            >
              {plan.highlighted && (
                <div className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded-full inline-block text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-4xl font-extrabold text-gray-900">
                  {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                </span>
                {typeof plan.price === 'number' && (
                  <span className="text-gray-600 ml-2">/{isAnnual ? 'year' : 'month'}</span>
                )}
              </div>

              <Button 
                variant={plan.highlighted ? 'primary' : 'outline'} 
                className="w-full mb-8"
              >
                Get Started
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
