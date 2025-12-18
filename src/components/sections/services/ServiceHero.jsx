import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';

/**
 * ServiceHero Component
 * Hero section introducing traffic monetization as the core value proposition
 * Displays: Traffic → Visibility → Monetization flow
 * Requirements: 1.1, 1.2
 */
const ServiceHero = () => {
  const flowSteps = [
    { label: 'Traffic', icon: '🚗', description: 'High-traffic locations & routes' },
    { label: 'Visibility', icon: '👁️', description: 'Physical & digital advertising' },
    { label: 'Monetization', icon: '💰', description: 'Revenue-generating assets' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ scale: 0.8, rotate: 0 }}
        animate={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent-500 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-500 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-500 rounded-full blur-xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Turn{' '}
            <span className="text-accent-500">High-Traffic Environments</span>
            <br />
            Into Revenue-Generating Assets
          </motion.h1>

          {/* Subheadline - Core Value Proposition */}
          <motion.p
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            San Gabriel Solutions converts foot traffic, vehicle traffic, delivery routes, 
            and digital attention into new income streams for businesses, trucking companies, 
            property owners, and nonprofit organizations.
          </motion.p>

          {/* Traffic → Visibility → Monetization Flow */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {flowSteps.map((step, index) => (
              <div key={step.label} className="flex items-center">
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center min-w-[160px]"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-4xl mb-2">{step.icon}</div>
                  <div className="text-xl font-bold text-accent-500">{step.label}</div>
                  <div className="text-sm text-gray-300 mt-1">{step.description}</div>
                </motion.div>
                
                {/* Arrow between steps */}
                {index < flowSteps.length - 1 && (
                  <motion.div
                    className="hidden md:block text-3xl text-accent-500 mx-4"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                  >
                    →
                  </motion.div>
                )}
                
                {/* Mobile arrow (vertical) */}
                {index < flowSteps.length - 1 && (
                  <motion.div
                    className="md:hidden text-3xl text-accent-500 my-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                  >
                    ↓
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/contact?service=revenue-generating-advertising">
              <Button variant="primary" size="lg" className="min-w-[220px]">
                Turn My Traffic Into Revenue
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="min-w-[220px] border-white text-white hover:bg-white hover:text-primary-900"
              onClick={() => {
                document.getElementById('services-list')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore All Services
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            onClick={() => {
              document.getElementById('services-list')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <motion.div
              className="w-1.5 h-3 bg-white/70 rounded-full mt-2"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
