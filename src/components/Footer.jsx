// src/components/Footer.jsx

import { Facebook, Instagram, Twitter, Youtube, Phone } from 'lucide-react';

const footerLinks = {
  'Self Publishing': [
    { name: 'How To Publish', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Calculate Royalty', href: '#' }
  ],
  'Author Support': [
    { name: 'New Author', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Publishing Process', href: '#' },
    { name: 'Contact Us', href: '#' }
  ],
  'Company': [
    { name: 'About Us', href: '#' },
    { name: 'Career', href: '#' },
    { name: 'Blogs', href: '#' },
    { name: 'Reviews', href: '#' }
  ],
  'Bookstore': [
    { name: 'New Releases', href: '#' },
    { name: 'Bookstore', href: '#' },
    { name: 'Login / Sign-Up', href: '#' }
  ]
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'Youtube' }
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Footer Link Columns */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={title} className={index === 4 ? 'col-span-2 md:col-span-1' : ''}>
              <h3 className="text-[#F4511E] font-medium mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-[#F4511E] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Head Office Column */}
          <div>
            <h3 className="text-[#F4511E] font-medium mb-4">Head Office</h3>
            <p className="text-gray-600 mb-2">Smriti Nagar, Bhilai</p>
            <p className="text-gray-600 mb-4">Chhattisgarh - 490020</p>
            <a 
              href="tel:+918109645082"
              className="flex items-center text-[#F4511E] hover:text-[#D84315] transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              +91-8109645082
            </a>
          </div>
        </div>

        {/* Company Description */}
        <div className="mb-8">
          <p className="text-gray-600 text-sm leading-relaxed">
            At OrangeBooks Publication we always believes in giving chance to emerging authors to publish their books completely, get it available worldwide and live their dreams. We believes in supporting the dreams of young eyes who wishes of being published. Currently we have one of the largest book distribution network in the world for paperback and eBooks. Most promising self-publishing company in India. We provide you the platform, independence, and flexibility to create and share what you love and feel with the entire world through book publishing.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-end space-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="bg-white p-2 rounded-md hover:bg-gray-50 transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-gray-600" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;