import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { services, getServiceById } from '../data/services';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Get preselected service from URL parameter
  const preselectedServiceId = searchParams.get('service');
  const preselectedService = preselectedServiceId ? getServiceById(preselectedServiceId) : null;
  
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="pt-20">
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
              In the meantime, feel free to explore our services or call us directly at (555) 123-4567
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Enhanced Hero Section with Morphing Background */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white relative overflow-hidden">
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
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                      placeholder="Your name"
                    />
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
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                      placeholder="your@email.com"
                    />
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
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service.id} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </select>
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
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                    placeholder="Tell us about your project, goals, challenges, and what you hope to achieve..."
                  ></textarea>
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
                      'Request Free Consultation'
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
              <p className="text-neutral-600">hello@sangabrielconsulting.com</p>
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
              <p className="text-neutral-600">(555) 123-4567</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">Response Time</h3>
              <p className="text-neutral-600">Within 24 hours</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;