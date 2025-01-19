// src/components/YetNotConvinced.jsx


const YetNotConvinced = () => {
  return (
    <div className="bg-orange-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Benefits */}
          <div className="space-y-8">
            {/* 100% Author Royalty */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">100% AUTHOR ROYALTY</h3>
                <p className="text-gray-600">Earn 100% of the net profits on every book you sell. Our distributor network will enable you build an author brand, create growth-hacking strategies.</p>
              </div>
            </div>

            {/* Monthly Sales & Payout */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">MONTHLY SALES & PAYOUT</h3>
                <p className="text-gray-600">Check how many books you have sold on a monthly basis instead of waiting for statements and get your royalty paid every month for every sold book.</p>
              </div>
            </div>

            {/* Worldwide Distribution */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">WORLDWIDE DISTRIBUTION</h3>
                <p className="text-gray-600">We make your book available in upto 150+ countries as paperback and eBook. We are in partnership with largest global book distribution networks.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Call to Action */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-orange-500 mb-4">Yet Not Convinced!</h2>
            <p className="text-gray-600 mb-8">
              Having more queries? Please register yourself to get a complete publishing consultancy right from writing to publishing the book worldwide or you may also check our FAQ section.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition-colors">
                Register Now
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-md hover:bg-gray-50 transition-colors">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YetNotConvinced;