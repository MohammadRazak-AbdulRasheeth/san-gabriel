import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../../ui/ScrollReveal';
import Button from '../../ui/Button';
import { Form, FormField } from '../../ui/Form';
import { careersData } from '../../../data/careersData';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * ApplicationSection Component
 * Displays unified hiring advertisement and application form
 * Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 5.4, 5.5, 6.1, 6.3
 */
const ApplicationSection = () => {
  const { hiringAd, applicationForm } = careersData;
  const prefersReducedMotion = useReducedMotion();
  
  // Form visibility state - Requirement 4.3
  const [showForm, setShowForm] = useState(false);
  
  // Form data state - Requirements 4.3, 4.4, 4.5
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    salesPathPreference: '',
    message: ''
  });

  // Handle form field changes
  const handleFieldChange = (field) => (value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle "Apply Now" button click - Requirement 4.3
  const handleApplyClick = () => {
    setShowForm(true);
    // Smooth scroll to form
    setTimeout(() => {
      document.getElementById('application-form')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 100);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation is handled by FormField components
    // In production, this would submit to backend API
    console.log('Application submitted:', formData);
    alert('Thank you for your application! We will be in touch soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      salesPathPreference: '',
      message: ''
    });
    setShowForm(false);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unified Hiring Advertisement - Requirements 4.1, 5.4, 5.5 */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {hiringAd.title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                {hiringAd.description}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                What You'll Do
              </h3>
              <div className="space-y-4">
                {hiringAd.responsibilities.map((responsibility, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                    whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg">
                      {responsibility}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits - Requirements 5.4, 5.5 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 shadow-lg border-2 border-green-200 mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Why Join Us
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {hiringAd.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                    whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-800 font-medium">
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Apply Now CTA - Requirement 4.2 */}
            <div className="text-center mb-12">
              {!showForm && (
                <ScrollReveal delay={0.3}>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleApplyClick}
                    className="text-xl px-12 py-5"
                  >
                    Apply Now
                  </Button>
                  <p className="mt-4 text-gray-600">
                    Start your journey as a sales partner today
                  </p>
                </ScrollReveal>
              )}
            </div>

            {/* Application Form - Requirements 4.3, 4.4, 4.5 */}
            <AnimatePresence>
              {showForm && (
                <motion.div
                  id="application-form"
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                  animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? {} : { opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl p-8 sm:p-10 shadow-2xl border border-gray-200"
                >
                  <div className="mb-8 text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      Submit Your Application
                    </h3>
                    <p className="text-gray-600">
                      Fill out the form below and we'll be in touch soon
                    </p>
                  </div>

                  <Form onSubmit={handleSubmit}>
                    {/* Name field - Requirement 4.3 */}
                    <FormField
                      label="Full Name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleFieldChange('name')}
                      placeholder="Enter your full name"
                    />

                    {/* Email field - Requirements 4.3, 4.5 (email format validation) */}
                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleFieldChange('email')}
                      placeholder="your.email@example.com"
                    />

                    {/* Phone field - Requirements 4.3, 4.5 (phone format validation) */}
                    <FormField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleFieldChange('phone')}
                      placeholder="(555) 123-4567"
                    />

                    {/* Screening Question - Requirements 4.4, 4.5 */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        {applicationForm.screeningQuestion}
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <div className="space-y-3">
                        {applicationForm.options.map((option) => (
                          <label
                            key={option.value}
                            className={`
                              flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer
                              transition-all duration-200 min-h-[44px]
                              ${formData.salesPathPreference === option.value
                                ? 'border-orange-500 bg-orange-50'
                                : 'border-gray-300 hover:border-gray-400 bg-white'
                              }
                            `}
                          >
                            <input
                              type="radio"
                              name="salesPathPreference"
                              value={option.value}
                              checked={formData.salesPathPreference === option.value}
                              onChange={(e) => handleFieldChange('salesPathPreference')(e.target.value)}
                              required
                              className="mt-1 w-4 h-4 text-orange-500 focus:ring-orange-500"
                            />
                            <span className="text-gray-800 font-medium flex-1">
                              {option.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Optional message field */}
                    <FormField
                      label="Additional Information (Optional)"
                      name="message"
                      type="textarea"
                      value={formData.message}
                      onChange={handleFieldChange('message')}
                      placeholder="Tell us about your experience or ask any questions..."
                    />

                    {/* Submit button */}
                    <div className="flex gap-4 justify-center mt-8">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="flex-1 sm:flex-none"
                      >
                        Submit Application
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        onClick={() => setShowForm(false)}
                        className="flex-1 sm:flex-none"
                      >
                        Cancel
                      </Button>
                    </div>
                  </Form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ApplicationSection;
