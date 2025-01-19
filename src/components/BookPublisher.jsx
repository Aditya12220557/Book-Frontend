

const BookPublisher = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/2 space-y-6">
        <div className="inline-block bg-gray-100 px-4 py-2 rounded-lg">
          <p className="text-gray-700 text-sm">Economical Book Publishers In India</p>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-orange-500">Still Confused</span>
          <br />
          <span className="mt-2 block">How To Publish a Book?</span>
        </h1>
        
        <p className="text-gray-600 text-lg leading-relaxed">
          OrangeBooks Publication provides you the platform, independence and flexibility 
          to create and share what you love and feel with the entire world through book 
          publishing. With our team of experts, we ll guide you on how to publish a book 
          and sell globally, earning 100% of the profit.
        </p>
        
        <button className="bg-orange-500 text-white px-6 py-3 rounded-md 
          hover:bg-orange-600 transition-colors duration-200">
          Publish Book Now
        </button>
      </div>
      
      <div className="w-full md:w-1/2 mt-12 md:mt-0">
        <div className="relative">
          {/* Illustration of woman writing */}
          <div className="relative z-10">
            <div className="w-full h-96  rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="assets/img/illustrations/Ecosystem Bro Illustration.png" 
                  alt="Woman writing a book" 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-24 h-24 bg-orange-200 rounded-full opacity-50" />
          <div className="absolute bottom-4 left-4 w-32 h-32 bg-blue-200 rounded-full opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default BookPublisher;