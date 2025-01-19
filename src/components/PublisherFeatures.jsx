
import PropTypes from 'prop-types';
import { Book, Star, DollarSign, HandshakeIcon, LineChart, Globe } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-start p-6 space-y-4">
    <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
      <Icon className="w-6 h-6 text-orange-500" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

FeatureCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const PublisherFeatures = () => {
  const features = [
    {
      icon: Book,
      title: "PROFESSIONAL PUBLISHING",
      description: "Creating a great book is a craft. From conceptualising to editing to cover design, our team ensures that your book gets the best."
    },
    {
      icon: Star,
      title: "UNBEATABLE PRICING",
      description: "We use the latest print technology available with the lowest production costs, enabling you to price your book competitively in the market."
    },
    {
      icon: DollarSign,
      title: "HIGHEST ROYALTY",
      description: "Earn 100% of the net profits on every book you sell. Our distributor network will enable you build an author brand, create growth-hacking strategies."
    },
    {
      icon: HandshakeIcon,
      title: "QUICK AUTHOR SUPPORT",
      description: "Get a dedicated project flow while publishing and a caring post-publishing support once released. You are provided with best support platforms."
    },
    {
      icon: LineChart,
      title: "MONTHLY SALES REPORT",
      description: "Check how many books you have sold on a monthly basis instead of waiting for statements. Get accurate book sales data."
    },
    {
      icon: Globe,
      title: "WORLDWIDE DISTRIBUTION",
      description: "We make your book available in up to 150+ countries as paperback and eBook. We are in partnership with largest global book distribution networks."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default PublisherFeatures;