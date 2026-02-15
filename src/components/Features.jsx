import React from 'react';
import { Card } from './Card';

export function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Real-time Sync',
      description: 'Data updates propagate instantly across all your devices and dashboards.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '🔒',
      title: 'Bank-grade Security',
      description: '256-bit encryption and SOC 2 compliance keeps your sensitive data safe.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: '🤝',
      title: 'Collaborative',
      description: 'Work together with your team in the same dashboard with real-time comments.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Powerful visualizations and custom reports for deeper insights.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: '🔧',
      title: 'Easy Integration',
      description: 'Connect to 500+ tools and data sources with a single click.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: '⚙️',
      title: 'Automation',
      description: 'Automate workflows and get alerts when your data meets specific conditions.',
      color: 'from-teal-500 to-green-500',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you extract maximum value from your data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card key={idx} variant="default">
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} text-white text-3xl flex items-center justify-center rounded-xl mb-4 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
