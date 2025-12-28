import { motion } from 'framer-motion';
import { HiOutlineCurrencyDollar, HiOutlineShieldCheck, HiOutlineLightningBolt, HiOutlineSupport } from 'react-icons/hi';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * Why Choose Us Section
 */
const WhyChooseUsSection = () => {
  const prefersReducedMotion = useReducedMotion();

  const reasons = [
    {
      icon: HiOutlineCurrencyDollar,
      title: 'Transparent Pricing',
      description: 'Clear pricing with no hidden fees. Advertising at $1/sq ft/month, branding packages from $249.'
    },
    {
      icon: HiOutlineShieldCheck,
      title: 'Quality Guaranteed',
      description: 'Premium materials and professional installation. We stand behind our work.'
    },
    {
      icon: HiOutlineLightningBolt,
      title: 'Fast Turnaround',
      description: 'Quick design-to-installation process. Get your campaign live in days, not weeks.'
    },
    {
      icon: HiOutlineSupport,
      title: 'Dedicated Support',
      description: 'Personal account management and ongoing campaign optimization.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Why Choose San Gabriel Solutions
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            We make vehicle advertising simple, affordable, and effective
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-lg font-bold text-primary-900 mb-2">{reason.title}</h3>
              <p className="text-neutral-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
