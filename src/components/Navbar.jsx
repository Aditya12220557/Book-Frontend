// // Components/Navbar.jsx
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// // Color Configuration
// const colors = {
//   primary: 'orange', // Change this to update the primary color
//   text: {
//     primary: 'text-orange-600', // Tailwind class for primary text color
//     hover: 'hover:text-orange-600', // Tailwind class for hover text color
//   },
//   bg: {
//     primary: 'bg-orange-500', // Tailwind class for primary background color
//     hover: 'hover:bg-orange-600', // Tailwind class for hover background color
//   },
// };

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="w-full">
//       {/* Top Bar */}
//       <div className={`${colors.bg.primary} text-white py-4`}>
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           {/* Logo and Company Name */}
//           <div className="flex items-center">
//             <img 
//               src="src/assets/orangebookslogo.png" 
//               alt="OrangeBooks Logo" 
//               className="h-12"
//             />
//           </div>
          
//           {/* Contact Information */}
//           <div className="hidden md:flex items-center space-x-6">
//             <div className="flex items-center">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//               </svg>
//               <div>
//                 <p className="text-sm">Call Us:</p>
//                 <p className="font-medium">+91-8109645082</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//               </svg>
//               <div>
//                 <p className="text-sm">Email Us:</p>
//                 <p className="font-medium">publish@orangebooks.in</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Bar */}
//       <div className="bg-white shadow-md">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-between items-center h-16">
//             {/* Navigation Links - Replace <a> with <Link> */}
//             <div className="hidden md:flex space-x-8">
//               <Link to="/" className={`${colors.text.primary} font-medium`}>Home</Link>
//               <Link to="/Book_price_cal" className={`text-gray-600 ${colors.text.hover}`}>Book price calculator</Link>
//               <Link to="/pricing" className={`text-gray-600 ${colors.text.hover}`}>Pricing</Link>
//               <Link to="/services" className={`text-gray-600 ${colors.text.hover}`}>Services</Link>
//               <Link to="/blog" className={`text-gray-600 ${colors.text.hover}`}>Blog</Link>
//               <Link to="/contact" className={`text-gray-600 ${colors.text.hover}`}>Contact</Link>
//               <Link to="/dashboard" className={`text-gray-600 ${colors.text.hover}`}>Dashboard</Link>
//               <Link to="/login" className={`text-gray-600 ${colors.text.hover}`}>Login</Link>
//             </div>

//             {/* Search and Login */}
//             <div className="hidden md:flex items-center space-x-4">
//               <button className={`p-2 ${colors.bg.hover} rounded-full`}>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </button>
//               <button className={`flex items-center space-x-1 px-4 py-2 text-gray-600 ${colors.text.hover}`}>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                 </svg>
//                 <span>Log in</span>
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button 
//               className="md:hidden p-2"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white border-t">
//           <div className="container mx-auto px-4 py-2">
//             <a href="/" className={`block py-2 ${colors.text.primary}`}>Home</a>
//             <a href="/products" className="block py-2 text-gray-600">Products</a>
//             <a href="/pricing" className="block py-2 text-gray-600">Price</a>
//             <a href="/services" className="block py-2 text-gray-600">Services</a>
//             <a href="/blog" className="block py-2 text-gray-600">Blog</a>
//             <a href="/contact" className="block py-2 text-gray-600">Contact</a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
// Components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Color Configuration
const colors = {
  primary: 'orange', // Change this to update the primary color
  text: {
    primary: 'text-orange-600', // Tailwind class for primary text color
    hover: 'hover:text-orange-600', // Tailwind class for hover text color
  },
  bg: {
    primary: 'bg-orange-500', // Tailwind class for primary background color
    hover: 'hover:bg-orange-600', // Tailwind class for hover background color
  },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full">
      {/* Top Bar */}
      <div className={`${colors.bg.primary} text-white py-4`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo and Company Name */}
          <div className="flex items-center">
            <img 
              src="src/assets/orangebookslogo.png" 
              alt="OrangeBooks Logo" 
              className="h-12"
            />
          </div>
          
          {/* Contact Information */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="text-sm">Call Us:</p>
                <p className="font-medium">+91-8109645082</p>
              </div>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-sm">Email Us:</p>
                <p className="font-medium">publish@orangebooks.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Navigation Links - Replace <a> with <Link> */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className={`${colors.text.primary} font-medium`}>Home</Link>
              <Link to="/Book_price_cal" className={`text-gray-600 ${colors.text.hover}`}>Book price calculator</Link>
              <Link to="/pricing" className={`text-gray-600 ${colors.text.hover}`}>Pricing</Link>
              <Link to="/services" className={`text-gray-600 ${colors.text.hover}`}>Services</Link>
              <Link to="/blog" className={`text-gray-600 ${colors.text.hover}`}>Blog</Link>
              <Link to="/contact" className={`text-gray-600 ${colors.text.hover}`}>Contact</Link>
              <Link to="/dashboard" className={`text-gray-600 ${colors.text.hover}`}>Dashboard</Link>
              <Link to="/login" className={`text-gray-600 ${colors.text.hover}`}>Login</Link>
            </div>

            {/* Search and Login */}
            <div className="hidden md:flex items-center space-x-4">
              <button className={`p-2 ${colors.bg.hover} rounded-full`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              {/* Login Button */}
              <Link to="/login" className={`flex items-center space-x-1 px-4 py-2 text-gray-600 ${colors.text.hover}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Log in</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <a href="/" className={`block py-2 ${colors.text.primary}`}>Home</a>
            <a href="/products" className="block py-2 text-gray-600">Products</a>
            <a href="/pricing" className="block py-2 text-gray-600">Price</a>
            <a href="/services" className="block py-2 text-gray-600">Services</a>
            <a href="/blog" className="block py-2 text-gray-600">Blog</a>
            <a href="/contact" className="block py-2 text-gray-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
