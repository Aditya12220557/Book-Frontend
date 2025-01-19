import PropTypes from 'prop-types';
import { Edit3, Layout, BookOpen, PenTool } from 'lucide-react';

const ProcessStep = ({ number, title, description, icon: Icon }) => (
  <div className="flex flex-col h-full bg-white p-6 rounded-lg">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-orange-500" />
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          {number}. {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

ProcessStep.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

const PublishingProcess = () => {
  const steps = [
    {
      icon: Edit3,
      title: "Registration and Consultation",
      description: "Firstly, you have to register on our website and provide us 5-10 pages sample of your manuscript. We will review it and will forward you a publishing proposal of your book, of course, completely Free of Cost. Thereafter, you have to accept the same to start book publishing. Meanwhile you can discuss your queries with our publishing consultant."
    },
    {
      icon: Layout,
      title: "Design and Formatting",
      description: "Once you accept the proposal, we will ask you to submit the complete manuscript and other inputs through Publishing Input Form (PIF). After receiving inputs, the book publishing process gets started. We'll check the submitted PIF and will start the book cover and interior designing process. Proofreading of the book will also be done if it is included in your proposal."
    },
    {
      icon: BookOpen,
      title: "Proof Review and Approval",
      description: "After completing the designing, we'll share a digital proof copy with you in which you can review the whole book and can request changes (if required). Once the final changes are made, we'll forward you again to review and provide your approval on the same."
    },
    {
      icon: PenTool,
      title: "Pre Order, Launch and Distribution",
      description: "After confirming from you, the book will be forwarded for printing and distribution to worldwide platforms as print and eBook. Author copies will be shipped to you. Firstly, pre-order is done in which the book is made live on our bookstore from where the potential readers can pre order the book. In the meantime, the book is also made available on other online platforms."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16 space-y-4">
        <div className="inline-block px-4 py-2 bg-gray-100 rounded-lg">
          <p className="text-gray-700">How To Self Publish A Book</p>
        </div>
        
        <h2 className="text-4xl font-bold text-orange-500">
          The Complete Self Publishing Process
          <span className="block text-gray-800">With OrangeBooks</span>
        </h2>
        
        <p className="text-gray-600 max-w-3xl mx-auto">
          If you are still confused how to publish a book, then you have come to the right place. 
          You just need to register yourself and our publishing team will do the rest. Below is a 
          detailed flowchart on how to publish your book.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <ProcessStep
            key={index}
            number={index + 1}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
};

export default PublishingProcess;