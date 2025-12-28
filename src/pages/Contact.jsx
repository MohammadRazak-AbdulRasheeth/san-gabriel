import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';
import { pageSEOConfig } from '../utils/seo';
import { audienceTypes, serviceTypes, budgetRanges } from '../data/pricingConfig';

/**
 * Contact / Book Call Page (Updated)
 * - "I am a..." dropdown
 * - Service selector
 * - Budget range (for advertisers)
 * - Calendly/booking integration placeholder
 */
const Contact = () => {
  const [searchParams] = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  
  // Get preselected values from URL parameters
  const preselectedService = searchParams.get('service') || '';
  const preselectedAudience = searchParams.get('audience') || '';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    audienceType: preselectedAudience,
    serviceType: preselectedService,
    budgetRange: '',
    message: ''
  });

  // Update form when URL parameters change
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      audienceType: preselectedAudience || prev.audienceType,
      serviceType: preselectedService || prev.serviceType
    }));
  }, [preselectedAudience, preselectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.audienceType) {
      newErrors.audienceType = 'Please select who you are';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide more details (at least 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const inquiryData = {
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'contact_form'
      };

      console.log('Inquiry captured:', inquiryData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({
        submit: 'There was an error submitting your request. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-20">
        <SEO {...pageSEOConfig.contact} />
        
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 to-primary-600 text-white">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto px-4"
          >
            <div className="w-24 h-24 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Thank You!
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              We've received your request and will be in touch within 24 hours.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              In the meantime, feel free to call us directly at (437) 344-3563
            </p>
            <Button variant="primary" to="/" className="bg-accent-500 hover:bg-accent-600">
              Return Home
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Ready to get started? Let's discuss your advertising or branding needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-neutral-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-primary-900 mb-2">
                  Get in Touch
                </h2>
                <p className="text-neutral-600 mb-6">
                  Fill out the form and we'll respond within 24 hours.
                </p>

                <form onSubmit={handleSubmit}>
                  {errors.submit && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 text-sm">{errors.submit}</p>
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* I am a... */}
                    <div>
                      <label htmlFor="audienceType" className="block text-sm font-semibold text-primary-900 mb-2">
                        I am a... *
                      </label>
                      <select
                        id="audienceType"
                        name="audienceType"
                        value={formData.audienceType}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors ${
                          errors.audienceType ? 'border-red-500' : 'border-neutral-300'
                        }`}
                      >
                        <option value="">Select one</option>
                        {audienceTypes.map(type => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                      {errors.audienceType && (
                        <p className="mt-1 text-sm text-red-600">{errors.audienceType}</p>
                      )}
                    </div>

                    {/* Service Type */}
                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-semibold text-primary-900 mb-2">
                        Service Interest *
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors ${
                          errors.serviceType ? 'border-red-500' : 'border-neutral-300'
                        }`}
                      >
                        <option value="">Select a service</option>
                        {serviceTypes.map(type => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                      {errors.serviceType && (
                        <p className="mt-1 text-sm text-red-600">{errors.serviceType}</p>
                      )}
                    </div>

                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-primary-900 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors ${
                            errors.name ? 'border-red-500' : 'border-neutral-300'
                          }`}
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-primary-900 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors ${
                            errors.email ? 'border-red-500' : 'border-neutral-300'
                          }`}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Company & Phone */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-primary-900 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                          placeholder="Your company"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-primary-900 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Budget Range (show for advertisers) */}
                    {(formData.audienceType === 'advertiser' || formData.serviceType === 'advertising' || formData.serviceType === 'both') && (
                      <div>
                        <label htmlFor="budgetRange" className="block text-sm font-semibold text-primary-900 mb-2">
                          Monthly Budget Range
                        </label>
                        <select
                          id="budgetRange"
                          name="budgetRange"
                          value={formData.budgetRange}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map(range => (
                            <option key={range.value} value={range.value}>
                              {range.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-primary-900 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors ${
                          errors.message ? 'border-red-500' : 'border-neutral-300'
                        }`}
                        placeholder="Tell us about your project or goals..."
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <Button 
                      type="submit"
                      variant="primary" 
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>

                    <p className="text-sm text-neutral-500 text-center">
                      We typically respond within 24 hours.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Booking */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              {/* Contact Info */}
              <div className="bg-primary-900 text-white rounded-2xl p-8 mb-6">
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
                    <a href="tel:437-344-3563" className="hover:text-accent-500 transition-colors">
                      (437) 344-3563
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

              {/* Book a Call Placeholder */}
              <div className="bg-accent-50 border border-accent-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-primary-900 mb-4">Book a Consultation</h3>
                <p className="text-neutral-600 mb-6">
                  Prefer to schedule a call? Book a time that works for you.
                </p>
                {/* Calendly placeholder - replace with actual embed */}
                <div className="bg-white rounded-lg p-6 text-center border border-neutral-200">
                  <p className="text-neutral-500 mb-4">Calendly booking widget coming soon</p>
                  <Button variant="primary" href="tel:437-344-3563">
                    Call Us Now
                  </Button>
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
