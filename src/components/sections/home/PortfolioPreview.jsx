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
      title: 'Rear Window Advertising',
      category: 'Best Seller',
      image: '/product-image/rear-window-ad.png',
      description: 'Perforated vinyl rear window ads'
    },
    {
      id: 2,
      title: 'Truck Side Branding',
      category: 'Side Wrap',
      image: '/product-image/truck-side-ad.png',
      description: 'High-visibility side panel branding'
    },
    {
      id: 3,
      title: 'Full Truck Wrap',
      category: 'Commercial',
      image: '/heroimages/servicesherosectionimage.jpeg',
      description: 'Complete truck visibility package'
    },
    {
      id: 4,
      title: 'Hood Branding',
      category: 'Premium',
      image: '/product-image/Hoodwrap-ad.png',
      description: 'Maximum front-facing impact'
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
