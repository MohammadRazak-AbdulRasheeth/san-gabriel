import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import MissionSection from '../components/sections/about/MissionSection';
import ApproachSection from '../components/sections/about/ApproachSection';
import ValuesSection from '../components/sections/about/ValuesSection';

const AboutUs = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/heroimages/aboutsectionimage.jpeg" 
            alt="About San Gabriel Solutions" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-700/80 to-primary-600/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2 }} 
            className="text-center"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6" 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1, delay: 0.3 }}
            >
              About San Gabriel Solutions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto" 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Your strategic partner in marketing and advertising excellence
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <MissionSection />

      {/* Approach Section */}
      <ApproachSection />

      {/* Values Section */}
      <ValuesSection />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Let's discuss how our strategy-first approach can help you achieve your business goals.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">Schedule a Consultation</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
