import { motion } from 'framer-motion';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * Client Logo Strip (8-12 logos)
 * Placeholder structure - replace with real client logos
 */
const ClientLogosSection = () => {
  const prefersReducedMotion = useReducedMotion();

  // Placeholder logos - replace with real client logos
  const clientLogos = [
    { id: 1, name: 'Client 1', placeholder: true },
    { id: 2, name: 'Client 2', placeholder: true },
    { id: 3, name: 'Client 3', placeholder: true },
    { id: 4, name: 'Client 4', placeholder: true },
    { id: 5, name: 'Client 5', placeholder: true },
    { id: 6, name: 'Client 6', placeholder: true },
    { id: 7, name: 'Client 7', placeholder: true },
    { id: 8, name: 'Client 8', placeholder: true },
    { id: 9, name: 'Client 9', placeholder: true },
    { id: 10, name: 'Client 10', placeholder: true },
  ];

  return (
    <section className="py-12 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
            Trusted by businesses across the region
          </p>
        </motion.div>

        {/* Logo Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              {logo.placeholder ? (
                // Placeholder logo box
                <div className="w-24 h-12 bg-neutral-200 rounded flex items-center justify-center">
                  <span className="text-xs text-neutral-400 font-medium">Logo</span>
                </div>
              ) : (
                // Real logo image
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 w-auto object-contain"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
