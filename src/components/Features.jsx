import PropTypes from 'prop-types';
import { Users, FileText, Settings, UserCheck } from 'lucide-react';

const FeatureCard = ({ title, description, icon: Icon }) => (
  <div className="flex gap-6 mb-12">
    <div className="flex-shrink-0">
      <div className="w-10 h-10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-orange-500" />
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-base max-w-lg">{description}</p>
    </div>
  </div>
);

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired
};

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Dedicated Teams",
      description: "Benefit from our committed teams who ensure your success is personal. Count on expert guidance and exceptional results throughout your project journey."
    },
    {
      icon: FileText,
      title: "Comprehensive Documentation",
      description: "Integrate with ease using ScrewFast's exhaustive guides and libraries. Achieve seamless product adoption with our full suite of documentation designed for your success."
    },
    {
      icon: Settings,
      title: "Simplicity and Affordability",
      description: "Find easy-to-use, affordable solutions with ScrewFast's line of tools and equipment. Our products make procurement simple and keep projects within budget."
    },
    {
      icon: UserCheck,
      title: "User-Centric Design",
      description: "Experience the difference with ScrewFast's user-focused design — where functionality meets practicality for an enhanced work experience."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column - Text */}
          <div className="md:w-5/12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Meeting Industry Demands</h2>
            <p className="text-gray-600 leading-relaxed">
              At ScrewFast, we tackle the unique challenges encountered in the hardware and construction sectors. 
              From cutting-edge tools to expert services, we re dedicated to helping you overcome obstacles and 
              achieve your goals.
            </p>
          </div>

          {/* Right Column - Features */}
          <div className="md:w-7/12">
            <div className="grid md:grid-cols-2 gap-x-8">
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
        </div>
      </div>
    </section>
  );
};

export default Features;