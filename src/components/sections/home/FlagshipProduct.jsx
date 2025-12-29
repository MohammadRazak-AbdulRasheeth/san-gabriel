import { motion } from 'framer-motion';
import Button from '../../ui/Button';
import Badge from '../../ui/Badge';
import { getFlagshipProduct } from '../../../data/vehiclePricing';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * FlagshipProduct Component
 * Features the Rear Window Ad as the "Best Seller" product
 * Displays pricing ($349) and key features
 * 
 * Requirements: 1.4, 2.2
 */
const FlagshipProduct = () => {
  const prefersReducedMotion = useReducedMotion();
  const flagshipProduct = getFlagshipProduct();

  if (!flagshipProduct) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary-600">Flagship</span> Product
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The most popular choice for vehicle advertising
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <motion.div 
                className="relative min-h-[300px] overflow-hidden"
                variants={itemVariants}
              >
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="best-seller" size="lg">
                    Best Seller
                  </Badge>
                </div>
                {flagshipProduct.image ? (
                  <img 
                    src={flagshipProduct.image} 
                    alt={flagshipProduct.name}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                ) : (
                  <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-8 flex items-center justify-center h-full">
                    <div className="text-center text-white">
                      <div className="w-32 h-32 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                        <svg 
                          className="w-16 h-16 text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={1.5} 
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" 
                          />
                        </svg>
                      </div>
                      <p className="text-lg font-medium text-white/90">
                        Rear Window Advertising
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Content Section */}
              <motion.div 
                className="p-8 lg:p-10 flex flex-col justify-center"
                variants={itemVariants}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {flagshipProduct.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {flagshipProduct.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-primary-600">
                    ${flagshipProduct.price}
                  </span>
                  <span className="text-gray-500 ml-2">one-time</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {flagshipProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg 
                        className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="primary"
                  size="lg"
                  to={flagshipProduct.ctaHref}
                  className="w-full sm:w-auto"
                >
                  {flagshipProduct.ctaText}
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlagshipProduct;
