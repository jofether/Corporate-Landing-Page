import React from 'react';

export function Footer() {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Security', 'API', 'Status'],
    Company: ['About', 'Blog', 'Careers', 'Contact', 'Press'],
    Resources: ['Documentation', 'Community', 'Support', 'Partners', 'Legal'],
    Social: ['Twitter', 'LinkedIn', 'GitHub', 'Facebook', 'Instagram'],
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-white text-lg font-bold mb-6">SaaSify</h3>
            <p className="text-sm text-gray-500 mb-4">
              Empowering teams with data-driven insights.
            </p>
            <div className="flex gap-4">
              {['f', 'in', 'gh', 'tw'].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
                  aria-label={social}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            title !== 'Social' && (
              <div key={title}>
                <h4 className="text-white font-semibold mb-4">{title}</h4>
                <ul className="space-y-2">
                  {links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-indigo-400 transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; 2026 SaaSify Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-indigo-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-400 transition-colors text-sm">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
