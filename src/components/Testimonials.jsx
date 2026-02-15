import React from 'react';
import { Card } from './Card';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      company: 'TechVenture Inc',
      image: '👩‍💼',
      text: 'SaaSify transformed how we analyze data. What used to take weeks now takes minutes. Our team is more productive than ever.',
    },
    {
      name: 'Michael Chen',
      role: 'Data Analytics Manager',
      company: 'Global Enterprises',
      image: '👨‍💼',
      text: 'The intuitive interface means our non-technical team can create reports without waiting for IT. ROI was immediate.',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Product Manager',
      company: 'StartupHub',
      image: '👩‍💻',
      text: 'Best investment we made this year. The integrations with our existing tools were seamless and the support team is incredible.',
    },
    {
      name: 'David Kim',
      role: 'Operations Director',
      company: 'Enterprise Solutions',
      image: '👨‍💻',
      text: 'Security was our top concern, but SaaSify exceeded all expectations. Compliance reporting is now automated.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Loved by teams worldwide
          </h2>
          <p className="text-xl text-gray-600">
            See what our customers have to say about SaaSify
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} variant="default">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-5xl">{testimonial.image}</span>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-indigo-600 font-semibold">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>

              <p className="text-gray-700 italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
