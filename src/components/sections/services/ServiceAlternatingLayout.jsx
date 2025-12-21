import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAgencyServicesByOrder } from '../../../data/agencyServices';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * ServiceAlternatingLayout Component
 * Displays services in alternating image-text layout
 */
const ServiceAlternatingLayout = () => {
  const services = getAgencyServicesByOrder();
  const prefersReducedMotion = useReducedMotion();

  const getDuration = (duration) => prefersReducedMotion ? 0.01 : duration;

  return (
    <div className="space-y-24">
      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: getDuration(0.6), delay: getDuration(0.2) }}
            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                {service.heroImage ? (
                  <img
                    src={service.heroImage}
                    alt={service.name}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-[400px] bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                    <span className="text-white text-6xl font-bold opacity-20">
                      {service.order}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : (isEven ? 40 : -40) }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: getDuration(0.6), delay: getDuration(0.3) }}
              >
                {/* Service Number */}
                <div className="inline-block bg-primary-100 text-primary-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Service {service.order}
                </div>

                {/* Service Name */}
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                  {service.name}
                </h2>

                {/* Decorative Line */}
                <div className="w-20 h-1 bg-accent-500 mb-6" />

                {/* Short Description */}
                <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Key Offerings */}
                {service.offerings && service.offerings.length > 0 && (
                  <ul className="space-y-3 mb-8">
                    {service.offerings.slice(0, 4).map((offering, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-neutral-700">{offering}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA Button */}
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 bg-primary-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Learn More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ServiceAlternatingLayout;
