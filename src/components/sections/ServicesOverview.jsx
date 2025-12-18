import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getServicesByOrder } from '../../data/services';
import Button from '../ui/Button';

// Service icons mapping
const serviceIcons = {
  'revenue-generating-advertising': '💰',
  'branding-banners-signs': '🎨',
  'mobile-advertising': '🚚',
  'monetize-location': '🏪',
  'advertise-with-us': '📢',
  'social-media-digital': '📱',
  'website-design': '💻',
  'events-community': '🎉',
  'incorporation-services': '📋',
  'strategy-technology-ai': '🤖'
};

const ServicesOverview = () => {
  // Get first 4 services for homepage overview
  const services = getServicesByOrder().slice(0, 4);

  return (
    <section id="services-overview" className="py-20 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-500 rounded-full opacity-20"
            style={{
              left: `${15 + (i * 8)}%`,
              top: `${10 + (i * 6)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Turn traffic into revenue with our comprehensive advertising and business solutions
          </p>
        </motion.div>

        {/* Service categories grid with advanced animations */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 60, rotateY: -15, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
              whileHover={{
                y: -15,
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true }}
              className="group perspective-1000 cursor-pointer"
            >
              <motion.div 
                className="bg-white rounded-xl p-8 shadow-lg border border-neutral-100 h-full flex flex-col transform-gpu relative overflow-hidden"
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  borderColor: "rgba(249, 115, 22, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0, rotate: 0 }}
                  whileHover={{ scale: 1, rotate: 5 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Icon with magnetic effect */}
                <motion.div 
                  className="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10"
                  whileHover={{
                    scale: 1.2,
                    backgroundColor: "#fed7aa",
                    boxShadow: "0 0 25px rgba(249, 115, 22, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.span
                    className="text-3xl"
                    whileHover={{
                      rotate: [0, -10, 10, -5, 0],
                      scale: 1.1,
                      transition: { duration: 0.5 }
                    }}
                  >
                    {serviceIcons[service.id] || '📦'}
                  </motion.span>
                </motion.div>

                {/* Title with text effects */}
                <motion.h3 
                  className="text-xl font-bold text-primary-900 mb-4 text-center relative z-10"
                  whileHover={{
                    scale: 1.05,
                    color: "#f97316",
                    transition: { duration: 0.2 }
                  }}
                >
                  {service.name}
                </motion.h3>

                {/* Description */}
                <p className="text-neutral-600 leading-relaxed text-center mb-6 flex-grow line-clamp-3">
                  {service.tagline}
                </p>

                {/* CTA Button */}
                <div className="text-center mt-auto">
                  <Link to={`/services#service-${service.id}`}>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="group-hover:bg-accent-500 group-hover:text-white group-hover:border-accent-500"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/services">
            <Button variant="primary" size="lg">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;