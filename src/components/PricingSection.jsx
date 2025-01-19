// src/components/PricingSection.jsx

import PropTypes from 'prop-types';

const PricingCard = ({ title, subtitle, price, features, isPopular }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${isPopular ? 'border-2 border-orange-500' : ''}`}>
      {isPopular && (
        <div className="bg-orange-500 text-white text-center py-1 px-4 rounded-full text-sm mb-4 w-fit mx-auto">
          Most Popular Plan
        </div>
      )}
      <h3 className="text-2xl font-bold text-orange-500 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm h-12">{subtitle}</p>
      <div className="flex items-baseline mb-6">
        <span className="text-gray-500 text-lg">₹</span>
        <span className="text-4xl font-bold">{price}</span>
      </div>

      <div className="space-y-4">
        {/* Cover Designing */}
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Cover Designing</h4>
          <ul className="space-y-2">
            {features.coverDesigning.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Interior Designing */}
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Interior Designing</h4>
          <ul className="space-y-2">
            {features.interiorDesigning.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Manuscript Editing */}
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Manuscript Editing</h4>
          <ul className="space-y-2">
            {features.manuscriptEditing.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Security */}
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Content Security</h4>
          <ul className="space-y-2">
            {features.contentSecurity.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Marketing */}
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Marketing</h4>
          <ul className="space-y-2">
            {features.marketing.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Royalty & Support */}
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Royalty & Support</h4>
          <ul className="space-y-2">
            {features.royaltySupport.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button className={`w-full mt-8 py-2 px-4 rounded-md ${isPopular ? 'bg-orange-500 text-white' : 'border-2 border-gray-300 text-gray-700'} hover:bg-orange-600 hover:text-white transition-colors`}>
        GET STARTED
      </button>
    </div>
  );
};

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  isPopular: PropTypes.bool,
  features: PropTypes.shape({
    coverDesigning: PropTypes.arrayOf(PropTypes.string).isRequired,
    interiorDesigning: PropTypes.arrayOf(PropTypes.string).isRequired,
    manuscriptEditing: PropTypes.arrayOf(PropTypes.string).isRequired,
    contentSecurity: PropTypes.arrayOf(PropTypes.string).isRequired,
    marketing: PropTypes.arrayOf(PropTypes.string).isRequired,
    royaltySupport: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

PricingCard.defaultProps = {
  isPopular: false,
};

const PricingSection = () => {
  const pricingData = [
    {
      title: "Starter",
      subtitle: "Lets you get started. Recommended for small fiction/poetry books.",
      price: "9,990",
      features: {
        coverDesigning: [
          "Standard Cover Design",
          "1 Cover Sample",
          "Paperback cover",
          "2 Cover Revision Round"
        ],
        interiorDesigning: [
          "Paperback & ebook",
          "B/W Interior Type",
          "Basic Interior Design",
          "2 Interior Revision Round",
          "Plain Text (Limit 150 Pages)"
        ],
        manuscriptEditing: [
          "Basic Spelling Correction",
          "Manuscript Proofreading"
        ],
        contentSecurity: [
          "ISBN / Barcode",
          "Copyright With Author"
        ],
        marketing: [
          "Pre-Orders (Add-On)",
          "Amazon Sponsored Ads (Add-On)",
          "Amazon Kindle Promotions (Add-On)",
          "AudioBook Publishing (Add-On)"
        ],
        royaltySupport: [
          "Monthly Royalty Update",
          "Payout on Request",
          "100% Profit Share",
          "Project Manager",
          "Post-Publishing Support"
        ]
      }
    },
    {
      title: "Standard",
      subtitle: "Recommended for fiction/Non-fiction & poetry books. With Basic marketing.",
      price: "15,990",
      features: {
        coverDesigning: [
          "Standard Cover Design",
          "2 Cover Sample",
          "Paperback cover",
          "4 Cover Revision Round"
        ],
        interiorDesigning: [
          "Paperback & ebook",
          "B/W Interior Type",
          "Standard Interior Design",
          "4 Interior Revision Round",
          "Table & Image Text (Limit 150 Pages)"
        ],
        manuscriptEditing: [
          "Basic Spelling Correction",
          "Manuscript Proofreading"
        ],
        contentSecurity: [
          "ISBN / Barcode",
          "Copyright With Author"
        ],
        marketing: [
          "Pre-Orders",
          "Amazon Sponsored Ads (Add-On)",
          "Amazon Kindle Promotions (Add-On)",
          "AudioBook Publishing (Add-On)"
        ],
        royaltySupport: [
          "Monthly Royalty Update",
          "Payout on Request",
          "100% Profit Share",
          "Project Manager",
          "Post-Publishing Support"
        ]
      }
    },
    {
      title: "Professional",
      subtitle: "Best for Academic/Thesis/Competitive books. Advance marketing included.",
      price: "24,990",
      isPopular: true,
      features: {
        coverDesigning: [
          "Customized Cover Design",
          "3 Cover Sample",
          "Paperback cover",
          "6 Cover Revision Round"
        ],
        interiorDesigning: [
          "Paperback & ebook",
          "B/W or Colour Interior",
          "Premium Interior Design",
          "6 Interior Revision Round",
          "Table & Image Text (Limit 200 Pages)"
        ],
        manuscriptEditing: [
          "Basic Spelling Correction",
          "Editing (Upto 20k Words)",
          "Proofreading (Upto 20k Words)"
        ],
        contentSecurity: [
          "ISBN / Barcode",
          "Copyright With Author",
          "Government Copyright"
        ],
        marketing: [
          "Amazon Prime Placement (Add-On)",
          "Pre-Orders",
          "Amazon Sponsored Ads (Add-On)",
          "Amazon Kindle Promotions (included)",
          "AudioBook Publishing (Add-On)",
          "Custom Bookmarks"
        ],
        royaltySupport: [
          "Monthly Royalty Update",
          "Payout on Request",
          "100% Profit Share",
          "Project Manager",
          "Post-Publishing Support"
        ]
      }
    },
    {
      title: "Expert",
      subtitle: "Best for Academic/Thesis/Competitive books. Advance marketing included.",
      price: "64,990",
      features: {
        coverDesigning: [
          "Customized Cover Design",
          "5 Cover Sample",
          "Paperback cover",
          "Unlimited Cover Revision",
          "Hardback cover"
        ],
        interiorDesigning: [
          "Paperback & ebook",
          "B/W or Colour Interior",
          "Custom Interior Design",
          "Unlimited Interior Revision",
          "Table & Image Text (Limit 300 Pages)"
        ],
        manuscriptEditing: [
          "Basic Spelling Correction",
          "Editing (Upto 50k Words)",
          "Proofreading (Upto 30k Words)"
        ],
        contentSecurity: [
          "ISBN / Barcode",
          "Copyright With Author",
          "Government Copyright"
        ],
        marketing: [
          "Amazon Prime Placement (included)",
          "Pre-Orders",
          "Amazon Sponsored Ads (included)",
          "Amazon Kindle Promotions (included)",
          "AudioBook Publishing (included)",
          "Custom Bookmarks",
          "Online Press Release (included)"
        ],
        royaltySupport: [
          "Monthly Royalty Update",
          "Payout on Request",
          "100% Profit Share",
          "Project Manager",
          "Post-Publishing Support"
        ]
      }
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <button className="bg-white text-gray-800 px-6 py-2 rounded-md mb-8">
            Book Publishing Services
          </button>
          <h2 className="text-4xl font-bold text-orange-500 mb-4">
            Everything you need to become a<br />Best Seller Author!
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At OrangeBooks Publication, you get the best options for self publishing services in India that helps you to self publish your book professionally. Complete set of publishing services. From designing book covers to publishing, promotion to distribution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingData.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;