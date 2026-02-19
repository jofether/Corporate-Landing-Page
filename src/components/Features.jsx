import React from 'react';

const features = [
  { title: "Analytics", desc: "Real-time data processing for instant insights." },
  { title: "Security", desc: "Enterprise-grade encryption and compliance." },
  { title: "Integration", desc: "Seamlessly connects with your existing tools." },
  { title: "Scalability", desc: "Built to handle millions of requests per second." },
  { title: "Support", desc: "24/7 dedicated support team for your needs." },
  { title: "Automation", desc: "Automate repetitive tasks with ease." },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Everything you need</h2>
          <p className="mt-4 text-lg text-gray-500">Comprehensive tools for modern teams.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-0">
          {features.map((feature, index) => (
            <div key={index} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/50 transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-6">
                ★
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;