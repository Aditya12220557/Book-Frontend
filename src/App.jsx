// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookCarousel from "./components/BookCarousel";  
import BookCarousel2 from "./components/BookCarousel2";
import PublishingProcess from "./components/PublishingProcess.jsx";
import Features from './components/Features';
import Pricing from './components/Pricing';
import DistributionNetwork from './components/DistributionNetwork';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import PricingSection from './components/PricingSection.jsx';
import YetNotConvinced from './components/YetNotConvinced.jsx';
import ContactPage from './components/ContactPage.jsx';
import BookPriceCalculator from './components/BookPriceCalculator';
import PublishingSection from './components/PublishingSection';
import BlogHeader from './components/Blog';
import Bloghero  from './components/Blog-hero-section';
import Bloginsight from './components/Blog-insights';
import LoginPage from './components/Login';
import DashboardPage from './pages/DashboardPage';

import BookPublisher from './components/BookPublisher';
import PublisherFeatures from './components/PublisherFeatures'
import PublishingProcessServices from './components/PublishingProcesServices';
import ProjectStats from './components/ProjectStats';
// Create a HomePage component that includes all your home page components
const HomePage = () => {
  return (
    <>
      <Home />
      <BookCarousel />
      <BookCarousel2 />
      <PublishingProcess />
      <Features />
      <Pricing />
      <DistributionNetwork />
      <FAQSection />

    </>
  );
};

const PricingPage = () => {
  return (
    <>
      <PricingSection />
      <YetNotConvinced/>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <ContactPage/>
    </>
  );
};

const Calculator = () => {
  return (
    <>
       <BookPriceCalculator/>
       <FAQSection />
       <PublishingSection/>
    </>
  );
};

const Blogs = () => {
  return (
    <>
       <BlogHeader/>
       <Bloghero/>
       <Bloginsight/>
    </>
  );
};
const Services  = () => {
  return (
    <>
      <BookPublisher/>
      <PublisherFeatures/>
      <PublishingProcessServices/>
      <ProjectStats/>
      <PublishingSection/>
    </>
  );
};
 
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/Book_price_cal" element={<Calculator />} />
            <Route path="/services" element={<Services/>} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/login" element={<LoginPage />} />


          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;