import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { agencyServices, getAgencyServiceById } from '../data/agencyServices';
import SEO from '../components/SEO';
import { pageSEOConfig } from '../utils/seo';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  
  // Get preselected service from URL parameter
  const preselectedServiceId = searchParams.get('service');
  const preselectedService = preselectedServiceId ? getAgencyServiceById(preselectedServiceId) : null;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceInterest: preselectedService ? preselectedService.name : '',
    message: ''
  });

  // Update service interest when URL parameter changes
  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({
        ...prev,
        serviceInterest: preselectedService.name
      }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Service interest validation
    if (!formData.serviceInterest) {
      newErrors.serviceInterest = 'Please select a service';
    }

    // Message validation
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
    
    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Capture inquiry details for consultation scheduling
      const inquiryData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim(),
        phone: formData.phone.trim(),
        serviceInterest: formData.serviceInterest,
        message: formData.message.trim(),
        timestamp: new Date().toISOString(),
        source: 'contact_form'
      };

      // Log inquiry data (in production, this would be sent to a backend API)
      console.log('Consultation inquiry captured:', inquiryData);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success state
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
        {/* SEO Meta Tags - Requirements: 19.1, 19.4 */}
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
              We've received your consultation request and will be in touch within 24 hours.
            </p>
            <p className="text-lg text-gray-300">
              In the meantime, feel free to explore our services or call us directly at (437) 344-3563
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* SEO Meta Tags - Requirements: 19.1, 19.4 */}
      <SEO {...pageSEOConfig.contact} />
      
      {/* Enhanced Hero Section with Morphing Background */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/heroimages/homeherosection1.jpeg')`,
          }}
        />
        
        {/* Morphing Background Shapes */}
        <motion.div className="absolute inset-0">
          <motion.div
            className="absolute w-96 h-96 bg-accent-500 rounded-full opacity-20 blur-3xl"
            style={{ top: "10%", left: "10%" }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -50, 100, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute w-80 h-80 bg-blue-500 rounded-full opacity-15 blur-3xl"
            style={{ bottom: "20%", right: "15%" }}
            animate={{
              x: [0, -80, 60, 0],
              y: [0, 80, -40, 0],
              scale: [0.8, 1.3, 0.9, 0.8],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.span
                className="inline-block"
                initial={{ rotateX: -90, scale: 0.5 }}
                animate={{ rotateX: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 200 }}
                whileHover={{ 
                  scale: 1.1,
                  color: "#f97316",
                  textShadow: "0 0 20px rgba(249, 115, 22, 0.5)",
                  transition: { duration: 0.3 }
                }}
              >
                Contact
              </motion.span>{' '}
              <motion.span
                className="inline-block text-accent-500"
                initial={{ rotateX: 90, scale: 0.5 }}
                animate={{ rotateX: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 200 }}
                whileHover={{ 
                  scale: 1.1,
                  rotateZ: 5,
                  transition: { duration: 0.3 }
                }}
              >
                Us
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              Ready to transform your business? Let's start with a conversation about your goals and challenges.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Form Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Floating Geometric Shapes */}
        <motion.div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 border-2 border-accent-500 opacity-20"
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${20 + (i * 8)}%`,
                borderRadius: i % 2 === 0 ? "50%" : "0%",
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
        </motion.div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ 
              scale: 1.01,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              transition: { duration: 0.3 }
            }}
            className="perspective-1000"
          >
            <div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-primary-900 mb-2">
                  Schedule a Discovery Call
                </h2>
                <p className="text-neutral-600">
                  Tell us about your project and we'll provide a comprehensive consultation at no cost.
                </p>
                <p className="text-sm text-neutral-500 mt-2">
                  Serving clients across Canada and North America
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                {errors.submit && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{errors.submit}</p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
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

                  {/* Email */}
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

                  {/* Company */}
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
                      placeholder="Your company name"
                    />
                  </div>

                  {/* Phone */}
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

                  {/* Service Interest */}
                  <div className="md:col-span-2">
                    <label htmlFor="serviceInterest" className="block text-sm font-semibold text-primary-900 mb-2">
                      Service Interest *
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors ${
                        errors.serviceInterest ? 'border-red-500' : 'border-neutral-300'
                      }`}
                    >
                      <option value="">Select a service</option>
                      {agencyServices.map(service => (
                        <option key={service.id} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                    {errors.serviceInterest && (
                      <p className="mt-1 text-sm text-red-600">{errors.serviceInterest}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="mt-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-primary-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors ${
                      errors.message ? 'border-red-500' : 'border-neutral-300'
                    }`}
                    placeholder="Tell us about your project, goals, challenges, and what you hope to achieve..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <div className="mt-8 text-center">
                  <Button 
                    type="submit"
                    variant="primary" 
                    size="lg"
                    disabled={isSubmitting}
                    className="min-w-48"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Schedule a Discovery Call'
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">Email Us</h3>
              <p className="text-neutral-600">contact@sangabrielsolutions.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">Call Us</h3>
              <p className="text-neutral-600">(437) 344-3563</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">Visit Us</h3>
              <p className="text-neutral-600">2967 Dundas Street West<br />Toronto, ON, Canada</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;