import React from 'react';
import { motion } from 'framer-motion';
import { serviceCategories } from '../data/services';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="pt-20">
      {/* Hero Section with Advanced Animations */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ scale: 0.8, rotate: 0 }}
          animate={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-10 left-10 w-32 h-32 bg-accent-500 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-xl" />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Our
              </motion.span>{' '}
              <motion.span
                className="text-accent-500"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Services
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Comprehensive business solutions designed to help your company thrive in today's competitive market
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-lg hover:shadow-xl hover:border-accent-200 transition-all duration-300 h-full">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-100 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-accent-500" />
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-primary-900 mb-4">
                      {category.name}
                    </h2>

                    {/* Description */}
                    <p className="text-neutral-600 leading-relaxed mb-8">
                      {category.description}
                    </p>

                    {/* CTA Button */}
                    <Link to={`/services/${category.slug}`}>
                      <Button 
                        variant="outline" 
                        className="group-hover:bg-accent-500 group-hover:text-white group-hover:border-accent-500"
                      >
                        Explore Services
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Contact us today to discuss your business needs and discover how we can help you achieve your goals.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Get Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;