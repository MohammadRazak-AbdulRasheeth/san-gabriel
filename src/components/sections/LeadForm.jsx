import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { serviceCategories } from '../../data/services';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceInterest: '',
    description: '',
    budgetRange: '',
    contactMethod: 'email',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000+'
  ];

  const timelines = [
    'ASAP',
    'Within 1 month',
    '1-3 months',
    '3+ months'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="lead-form" className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Thank You!
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We've received your request and will get back to you within 24 hours.
            </p>
            <Button 
              variant="primary"
              onClick={() => setIsSubmitted(false)}
            >
              Submit Another Request
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="py-20 bg-primary-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tell us about your project and we'll provide a free consultation to discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 text-gray-900">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                  placeholder="Your company name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Service Interest */}
              <div>
                <label htmlFor="serviceInterest" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Interest *
                </label>
                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                >
                  <option value="">Select a service</option>
                  {serviceCategories.map(category => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label htmlFor="budgetRange" className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget Range
                </label>
                <select
                  id="budgetRange"
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                Project Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                placeholder="Tell us about your project, goals, and challenges..."
              ></textarea>
            </div>

            {/* Bottom row */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {/* Contact Method */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex gap-4">
                  {['email', 'phone', 'whatsapp'].map(method => (
                    <label key={method} className="flex items-center">
                      <input
                        type="radio"
                        name="contactMethod"
                        value={method}
                        checked={formData.contactMethod === method}
                        onChange={handleChange}
                        className="mr-2 text-accent-500 focus:ring-accent-500"
                      />
                      <span className="capitalize">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                  Timeline to Start
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                >
                  <option value="">Select timeline</option>
                  {timelines.map(timeline => (
                    <option key={timeline} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button 
                type="submit"
                variant="primary" 
                size="lg"
                disabled={isSubmitting}
                className="min-w-48"
              >
                {isSubmitting ? 'Sending...' : 'Schedule a Consultation'}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadForm;