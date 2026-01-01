import { motion } from 'framer-motion';
import QuoteForm from '../components/sections/contact/QuoteForm';
import SEO from '../components/SEO';
import { pageSEOConfig } from '../utils/seo';
import useReducedMotion from '../hooks/useReducedMotion';

/**
 * Contact / Quote Page
 * Vehicle Advertising Rebrand:
 * - Replace generic form with QuoteForm component
 * - Vehicle-specific quote form with fields for:
 *   - name, email, phone, vehicleType, location (GTA), industry, logoUpload
 * 
 * Requirements: 6.1 (vehicle-advertising-rebrand)
 */
const Contact = () => {
  const prefersReducedMotion = useReducedMotion();

  const handleQuoteSubmit = async (formData) => {
    // Handle form submission
    console.log('Quote form submitted:', {
      ...formData,
      logoFile: formData.logoFile ? {
        name: formData.logoFile.name,
        size: formData.logoFile.size,
        type: formData.logoFile.type
      } : null
    });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In production, this would send to your backend/CRM
    return true;
  };

  return (
    <div className="pt-20">
      <SEO {...pageSEOConfig.contact} />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/heroimages/homeherosection1.jpeg')`,
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Ready to turn your vehicle into a 24/7 moving billboard? 
              Fill out the form below and we'll provide a custom quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Quote Form - Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6 */}
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
              className="lg:col-span-3"
            >
              <QuoteForm 
                onSubmit={handleQuoteSubmit}
                className="shadow-xl"
              />
            </motion.div>

            {/* Contact Info & Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, delay: prefersReducedMotion ? 0 : 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact Info */}
              <div className="bg-primary-900 text-white rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:contact@sangabrielsolutions.com" className="hover:text-accent-500 transition-colors">
                      contact@sangabrielsolutions.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:753-726-4274" className="hover:text-accent-500 transition-colors">
                      (753) SAN GABRIEL
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>2967 Dundas Street West<br />Toronto, ON, Canada</span>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-primary-900 mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-semibold text-primary-900">Professional Design Included</span>
                      <p className="text-sm text-neutral-600">Custom designs tailored to your brand</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-semibold text-primary-900">Premium Materials</span>
                      <p className="text-sm text-neutral-600">3M vinyl and perforated window film</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-semibold text-primary-900">Ontario Safety Compliant</span>
                      <p className="text-sm text-neutral-600">All installations meet safety regulations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-semibold text-primary-900">Fast Turnaround</span>
                      <p className="text-sm text-neutral-600">Most installations completed in 1-2 days</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Service Areas */}
              <div className="bg-accent-50 border border-accent-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-primary-900 mb-4">Service Areas</h3>
                <p className="text-neutral-600 mb-4">
                  We proudly serve the Greater Toronto Area including:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Toronto', 'Mississauga', 'Brampton', 'Vaughan', 'Markham', 'Richmond Hill', 'Oakville', 'Burlington'].map((city) => (
                    <span 
                      key={city}
                      className="bg-white px-3 py-1 rounded-full text-sm text-neutral-700 border border-neutral-200"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
