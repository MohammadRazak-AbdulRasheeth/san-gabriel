import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services-overview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-600 to-primary-500 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Transform Your Business With{' '}
              <span className="text-accent-500">Expert Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              San Gabriel Consulting delivers comprehensive business solutions across marketing, strategy, technology, and branding to help your company thrive in today's competitive landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="shadow-2xl w-full sm:w-auto"
                >
                  Request a Free Consultation
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToServices}
                className="bg-white bg-opacity-10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-900 w-full sm:w-auto"
              >
                View Our Services
              </Button>
            </div>
          </motion.div>
          
          {/* Right column - Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Animated border container */}
              <motion.div 
                className="absolute inset-0 rounded-lg"
                style={{
                  background: 'linear-gradient(45deg, #f97316, #3b82f6, #10b981, #f97316)',
                  backgroundSize: '300% 300%'
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Inner content with animated border */}
              <div className="relative m-1 w-full h-96 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm overflow-hidden">
                <motion.img 
                  src="/sangabriel-hero-image.jpg"
                  alt="Business Growth Analytics"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-accent-500 rounded-full opacity-80"
              ></motion.div>
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-white bg-opacity-20 rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            className="text-white text-center cursor-pointer group"
            onClick={scrollToServices}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.p 
              className="text-sm mb-2 opacity-80 group-hover:opacity-100 transition-opacity"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll to explore
            </motion.p>
            <motion.div
              className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center relative overflow-hidden group-hover:border-accent-500 transition-colors"
              whileHover={{ borderColor: "#f97316" }}
            >
              <motion.div
                className="w-1 h-3 bg-white bg-opacity-80 rounded-full mt-2 group-hover:bg-accent-500"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;