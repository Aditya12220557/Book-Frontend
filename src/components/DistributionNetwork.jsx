// src/components/DistributionNetwork.jsx


const distributors = [
  {
    name: 'Amazon',
    logo: 'src/assets/distributors/Amazon.png',
    alt: 'Amazon logo'
  },
  {
    name: 'Flipkart',
    logo: 'src/assets/distributors/Flipkart.svg',
    alt: 'Flipkart logo'
  },
  {
    name: 'Walmart',
    logo: 'src/assets/distributors/Walmart.svg',
    alt: 'Walmart logo'
  },
  {
    name: 'Instagram',
    logo: 'src/assets/distributors/Instagram.svg',
    alt: 'Instagram logo'
  },
  {
    name: 'DMV International',
    logo: 'src/assets/distributors/DMV International.svg',
    alt: 'DMV International logo'
  },
  {
    name: 'Dow Jones',
    logo: 'src/assets/distributors/Dow Jones.svg',
    alt: 'Dow Jones logo'
  },
  {
    name: 'Suntour',
    logo: 'src/assets/distributors/Suntour Logo.svg',
    alt: 'Suntour logo'
  },
  {
    name: 'Google',
    logo: 'src/assets/distributors/Google Icon.svg',
    alt: 'Google logo'
  },
  {
    name: 'Lacoste',
    logo: 'src/assets/distributors/Lacoste Logo.svg',
    alt: 'Lacoste logo'
  },
  {
    name: 'eBay',
    logo: 'src/assets/distributors/ebay.svg',
    alt: 'eBay logo'
  }
];
const DistributionNetwork = () => {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-gray-800 text-sm mb-4">
              International Book Distribution
            </span>
            <h2 className="text-4xl font-bold text-[#FF4B07] mb-6">
              Worldwide Distribution Network
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              When you publish your book with OrangeBooks Publication, it is published in both Paperback and eBook (most advanced print replica) and gets available in upto 150+ countries. We are in partnership with largest global book distribution networks. Reach to a larger reader base from all over the world with our distribution network.
            </p>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {distributors.map((distributor, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 border rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={distributor.logo}
                  alt={distributor.alt}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
export default DistributionNetwork;