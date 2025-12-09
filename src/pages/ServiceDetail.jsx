import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { serviceCategories, services } from '../data/services';
import Button from '../components/ui/Button';

const ServiceDetail = () => {
  const { category } = useParams();
  
  // Find the category
  const serviceCategory = serviceCategories.find(cat => cat.slug === category);
  
  if (!serviceCategory) {
    return <Navigate to="/" replace />;
  }
  
  // Get services for this category
  const categoryServices = services.filter(service => service.category === serviceCategory.id);

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-center">
              {React.createElement(serviceCategory.icon, { className: "w-16 h-16 text-white mx-auto mb-6" })}
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {serviceCategory.name}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
                {serviceCategory.description}
              </p>
              <Button 
                variant="primary" 
                size="lg"
                onClick={scrollToForm}
              >
                Get Started Today
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our {serviceCategory.name} Include
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your specific needs and business goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {categoryServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">
                    {service.name}
                  </h3>
                  
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary-900 mb-3">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.deliverables.slice(0, 4).map((item, idx) => (
                        <li key={idx} className="flex items-center text-neutral-600">
                          <span className="text-accent-500 mr-3">✓</span>
                          {item}
                        </li>
                      ))}
                      {service.deliverables.length > 4 && (
                        <li className="text-neutral-500 text-sm">
                          + {service.deliverables.length - 4} more deliverables
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Best For */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary-900 mb-3">
                      Best For:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.bestFor.map((item, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-accent-50 text-accent-700 rounded-full text-sm font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between pt-6 border-t border-neutral-200">
                    <div>
                      <span className="text-sm text-neutral-500 uppercase tracking-wide font-semibold">
                        Starting at
                      </span>
                      <div className="text-2xl font-bold text-accent-500">
                        ${service.pricing.startingAt.toLocaleString()}
                      </div>
                    </div>
                    <Button variant="primary" onClick={scrollToForm}>
                      Get Quote
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Contact us today to discuss your {serviceCategory.name.toLowerCase()} needs and get a custom quote.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 text-gray-900">
              <form className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    placeholder={`Tell us about your ${serviceCategory.name.toLowerCase()} needs...`}
                  ></textarea>
                </div>

                <div className="md:col-span-2 text-center">
                  <Button type="submit" variant="primary" size="lg">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;