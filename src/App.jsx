import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

// Import pages
import Home from './pages/Home';
import Advertise from './pages/Advertise';
import SignageWraps from './pages/SignageWraps';
import Pricing from './pages/Pricing';
import RevenuePerVehicle from './pages/RevenuePerVehicle';
import VehiclePartner from './pages/VehiclePartner';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import DriverTerms from './pages/DriverTerms';
import AdvertiserTerms from './pages/AdvertiserTerms';

// Legacy pages (kept for backward compatibility)
import ServiceDetail from './pages/ServiceDetail';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Advertising from './pages/Advertising';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import Industries from './pages/Industries';
import Careers from './pages/Careers';
import Portfolio from './pages/Portfolio';

// Import layout components
import Header from './components/layout/Header';
import Footer from './components/sections/Footer';

// ScrollToTop component to handle page navigation scroll behavior
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <ScrollToTop />
      <div className="App min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-grow overflow-x-hidden">
          <Routes>
            {/* Primary Routes (New Navigation) */}
            <Route path="/" element={<Home />} />
            <Route path="/advertise" element={<Advertise />} />
            <Route path="/signage-wraps" element={<SignageWraps />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/revenue-per-vehicle" element={<RevenuePerVehicle />} />
            <Route path="/vehicle-partner" element={<VehiclePartner />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Legal Pages */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/driver-terms" element={<DriverTerms />} />
            <Route path="/advertiser-terms" element={<AdvertiserTerms />} />
            
            {/* Legacy Routes (Backward Compatibility) */}
            <Route path="/advertising" element={<Advertising />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:category" element={<ServiceDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightDetail />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
