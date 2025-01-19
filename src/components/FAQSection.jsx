// src/components/FAQSection.jsx
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is the publishing process?",
    answer: "The publishing process involves manuscript submission, editorial review, formatting, cover design, and distribution across our network."
  },
  {
    question: "How much royalty will I get?",
    answer: "Authors receive competitive royalties based on book sales across all platforms and formats."
  },
  {
    question: "Will I get ISBN number?",
    answer: "Yes, every book published through our platform receives a unique ISBN for both print and digital formats."
  },
  {
    question: "Who owns the rights to my book?",
    answer: "Authors retain full rights to their work while granting us publishing and distribution rights."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-gray-800 font-medium">{question}</span>
        <ChevronDown 
          className={`transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`transition-all duration-200 overflow-hidden ${
          isOpen ? 'max-h-40 mt-2' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const RegisterCard = () => {
  return (
    <div className="bg-[#F4511E] text-white rounded-lg p-8">
      <h3 className="text-2xl font-bold mb-4">
        Still not sure how to get your book published?
      </h3>
      <p className="mb-6">Talk with our Publishing Expert</p>
      <button className="bg-white text-gray-800 px-6 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
        REGISTER NOW
      </button>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-[#F4511E] text-3xl font-bold mb-8">FAQs</h2>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => toggleFAQ(index)}
                />
              ))}
            </div>
            <button className="mt-8 px-6 py-2 bg-gray-100 rounded text-gray-800 hover:bg-gray-200 transition-colors">
              Learn More
            </button>
          </div>
          <div className="flex items-start justify-center pt-8">
            <RegisterCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;