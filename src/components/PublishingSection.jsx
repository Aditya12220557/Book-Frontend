import  { useState } from 'react';
// import { Alert, AlertDescription } from '/components/ui/alert';

const PublishingSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    publishingBudget: '',
    manuscriptStatus: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phoneNumber) {
      setError('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    console.log('Form submitted:', formData);
    setSubmitted(true);
    setError('');
  };

  return (
    <div className="w-full bg-orange-500  ">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Form Section */}
          <div className="w-full lg:w-5/12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <div>
                  <select
                    name="publishingBudget"
                    value={formData.publishingBudget}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Your Publishing Budget</option>
                    <option value="0-1000">$0 - $1,000</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000+">$10,000+</option>
                  </select>
                </div>

                <div>
                  <select
                    name="manuscriptStatus"
                    value={formData.manuscriptStatus}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Your Manuscript Status</option>
                    <option value="not-started">Not Started</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="needs-editing">Needs Editing</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white p-4 rounded font-semibold hover:bg-orange-600 transition-colors"
                >
                  Sign Up For Free Consultation
                </button>

                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {submitted && (
                  <Alert className="bg-green-50 text-green-800 border-green-200">
                    <AlertDescription>
                      Thank you for your interest! We ll contact you soon for the consultation.
                    </AlertDescription>
                  </Alert>
                )}

                <p className="text-sm text-gray-600 mt-4">
                  This site is protected by reCAPTCHA and the Google{' '}
                  <a href="/privacy-policy" className="text-orange-500 hover:underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/terms" className="text-orange-500 hover:underline">
                    Terms of Service
                  </a>{' '}
                  apply.
                </p>
              </form>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-6/12 text-white">
            <div className="inline-block mb-6 px-4 py-2 bg-white bg-opacity-20 rounded-lg">
              <span className="text-sm font-medium">Publish Now</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Still not sure how to get your book published?
            </h2>
            
            <div className="space-y-4 text-lg">
              <p>Want to discuss the packages and publication procedure?</p>
              <p>Talk to our Publishing Consultant or simply register with us to get started!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishingSection;