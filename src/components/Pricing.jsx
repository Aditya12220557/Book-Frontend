
import { Check } from 'lucide-react';


const PriceCard = ({ 
  title, price, 
  description, 
  features, 
  buttonText, 
  isHighlighted = false,
  tag
}) => (
  <div className={`rounded-3xl p-8 ${isHighlighted ? 'bg-orange-500 text-white' : 'bg-gray-900 text-white'}`}>
    <div className="flex flex-col h-full">
      {tag && (
        <div className="self-end mb-2">
          <span className="bg-orange-200 text-orange-700 text-xs px-3 py-1 rounded-full uppercase font-medium">
            {tag}
          </span>
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-1">{title}</h3>
      <p className="text-sm text-gray-300 mb-6">{description}</p>
      
      <div className="mb-8">
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-gray-300 ml-1">.00</span>
        <span className="text-gray-300 ml-2">USD / monthly</span>
      </div>

      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Check className="w-5 h-5 flex-shrink-0" />
            <span className={`text-sm ${isHighlighted ? 'text-white' : 'text-gray-300'}`}>
              {feature}
            </span>
          </div>
        ))}
      </div>

      <button className={`w-full py-3 rounded-lg mt-auto font-medium transition-colors
        ${isHighlighted 
          ? 'bg-white text-orange-500 hover:bg-orange-50' 
          : 'bg-gray-700 text-white hover:bg-gray-600'}`}>
        {buttonText}
      </button>
    </div>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      title: "Starter Kit",
      price: "49",
      description: "Best option for DIY projects",
      features: [
        "Key hardware tools",
        "Access to guides & tutorials",
        "Standard support"
      ],
      buttonText: "Get the Starter Kit"
    },
    {
      title: "Professional Toolbox",
      price: "89",
      description: "Best for large scale uses",
      features: [
        "Premium tool selection",
        "Priority support",
        "Exclusive content & deals",
        "Bulk order discounts"
      ],
      buttonText: "Get the Professional Toolbox",
      isHighlighted: true,
      tag: "Best value"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Simple, Transparent Pricing</h2>
          <p className="text-gray-600">Boost efficiency with ScrewFast s clear, value-driven plans.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <PriceCard key={index} {...plan} />
          ))}
        </div>

        <div className="text-center mt-8 space-x-6">
          <span className="text-gray-600">Enterprise Solutions?</span>
          <a href="#" className="text-gray-900 font-medium underline">
            Get a Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;