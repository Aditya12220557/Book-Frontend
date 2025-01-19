import { useState } from 'react';

// Color Configuration
const colors = {
  primary: 'orange', // Change this to update the primary color
  text: {
    primary: 'text-orange-500', // Tailwind class for primary text color
    hover: 'hover:text-orange-600', // Tailwind class for hover text color
  },
  bg: {
    primary: 'bg-orange-500', // Tailwind class for primary background color
    hover: 'hover:bg-orange-600', // Tailwind class for hover background color
  },
};

const HomePage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    publishingBudget: '',
    manuscriptStatus: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`${colors.bg.primary} py-12 relative`}>
      {/* Wave-like bottom shape */}
      <div className="absolute bottom-0 w-full">
        <svg className="w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="white" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,37.3C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-8 pb-20">
        {/* Header Text */}
        <div className="text-center text-white mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Writing Takes Time, Publishing With Us 
          </h1>
          <p className="text-xl">
            Central India s Fastest Growing Self-Publishing Company
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Form Section */}
          <div className="w-full md:w-1/2 max-w-md">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-6">
              <div className="space-y-4">
                <div>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Your Full Name"
                      className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:border-orange-500"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:border-orange-500"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Your Phone Number"
                      className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:border-orange-500"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <select
                  name="publishingBudget"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-500"
                  value={formData.publishingBudget}
                  onChange={handleChange}
                >
                  <option value="">Your Publishing Budget</option>
                  <option value="0-25000">₹0 - ₹25,000</option>
                  <option value="25000-50000">₹25,000 - ₹50,000</option>
                  <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                  <option value="100000+">₹1,00,000+</option>
                </select>

                <select
                  name="manuscriptStatus"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-500"
                  value={formData.manuscriptStatus}
                  onChange={handleChange}
                >
                  <option value="">Your Manuscript Status</option>
                  <option value="completed">Completed</option>
                  <option value="in-progress">In Progress</option>
                  <option value="not-started">Not Started</option>
                </select>

                <button
                  type="submit"
                  className={`w-full ${colors.bg.primary} text-white py-3 rounded-md ${colors.bg.hover} transition duration-300`}
                >
                  Sign Up For Free Consultation
                </button>
              </div>
              
              <p className="text-xs text-gray-500 mt-4">
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="#" className={`${colors.text.primary}`}>Privacy Policy</a> and{' '}
                <a href="#" className={`${colors.text.primary}`}>Terms of Service</a> apply.
              </p>
            </form>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img 
              src="src/assets/self_publishinglogo.png" 
              alt="Publishing illustration" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;