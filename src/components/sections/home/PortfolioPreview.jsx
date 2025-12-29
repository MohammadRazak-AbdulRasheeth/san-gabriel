import { motion } from 'framer-motion';
import Button from '../../ui/Button';
import useReducedMotion from '../../../hooks/useReducedMotion';
import { SECONDARY_CTAS } from '../../../data/ctaConfig';

/**
 * Portfolio/Visual Proof Section
 * Before-after, installs, vehicles on road (image-first)
 * 
 * Requirements: 8.2 - No duplicate CTAs per section
 */
const PortfolioPreview = () => {
  const prefersReducedMotion = useReducedMotion();

  // Portfolio items with vehicle/fleet branding images
  const portfolioItems = [
    {
      id: 1,
      title: 'Fleet Branding',
      category: 'Full Wrap',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=80',
      description: 'Complete fleet transformation'
    },
    {
      id: 2,
      title: 'Delivery Van',
      category: 'Partial Wrap',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
      description: 'High-visibility branding'
    },
    {
      id: 3,
      title: 'Box Truck',
      category: 'Full Wrap',
      image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&q=80',
      description: 'Maximum road presence'
    },
    {
      id: 4,
      title: 'Trailer Graphics',
      category: '53\' Trailer',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80',
      description: 'Interstate advertising'
    }
  ];

  return (
    <section className="py-20 bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Work in Action
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            See how we transform vehicles into powerful advertising platforms
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden aspect-square"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-accent-400 text-sm font-medium">{item.category}</span>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="primary" size="lg" to={SECONDARY_CTAS.viewPortfolio.href} className="bg-accent-500 hover:bg-accent-600">
            {SECONDARY_CTAS.viewPortfolio.text}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
