import PropTypes from 'prop-types';
import { Book, PenTool, FileCheck, Globe, Lightbulb, DollarSign } from 'lucide-react';

const ProcessStep = ({ icon: Icon, title, description, className }) => (
  <div className={`flex flex-col items-start space-y-2 ${className}`}>
    <div className="bg-orange-100 p-3 rounded-lg">
      <Icon className="w-6 h-6 text-orange-500" />
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

ProcessStep.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string
};

ProcessStep.defaultProps = {
  className: ''
};

const PublishingProcess = () => {
  const steps = [
    {
      icon: Book,
      title: "1. Registration and Consultation",
      description: "Register with us by filling a simple form and our book publishing consultant will call you to discuss about your book and will forward you the best proposal."
    },
    {
      icon: PenTool,
      title: "2. Design and Formatting",
      description: "After finalising the proposal, you need to submit your manuscript and other design inputs for book cover designing and publication process."
    },
    {
      icon: FileCheck,
      title: "3. Review and Approval",
      description: "You will be assigned a Project Manager. The final book interior and book cover design will be sent to you for review and approval."
    },
    {
      icon: Globe,
      title: "4. Pre Order, Launch and Distribution",
      description: "After confirming from you, the book will be forwarded for printing and distribution to worldwide platforms as paperback and eBook."
    },
    {
      icon: Lightbulb,
      title: "5. Marketing and Promotions",
      description: "Online book promotions will be done by our team. Marketing assistance and visual creatives will also be provided to boost book sales."
    },
    {
      icon: DollarSign,
      title: "6. Royalty and Support",
      description: "You will get access to the author dashboard for royalty and support. You will get an update and payment of Royalty on Monthly Cycle."
    }
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4 text-orange-600">The Self Publishing Process</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Publishing process with OrangeBooks Publication simplifies your book publication requirements. Our book publishing consultant will guide you throughout the self publishing process to transform your manuscript to a masterpiece book.
        </p>
      </div>

      <div className="relative">
        {/* Mountain Illustration as Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-96 h-96 bg-blue-100 transform rotate-45"></div>
        </div>

        {/* Process Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              className="bg-white p-6 rounded-lg shadow-sm"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublishingProcess;