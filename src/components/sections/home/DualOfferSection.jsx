import { motion } from 'framer-motion';
import { HiOutlineSpeakerphone, HiOutlineTruck, HiOutlineCheck } from 'react-icons/hi';
import Button from '../../ui/Button';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * Dual Offer Section - Two distinct value propositions
 * (A) Advertise on Our Network
 * (B) Vehicle & Fleet Branding
 */
const DualOfferSection = () => {
  const prefersReducedMotion = useReducedMotion();

  const offers = [
    {
      id: 'advertise',
      icon: HiOutlineSpeakerphone,
      title: 'Advertise on Our Network',
      subtitle: 'Monthly Media Space',
      description: 'Place your ads on vehicles across our network. Pay only for media space at $1/sq ft/month.',
      pricing: '$1/sq ft/month',
      features: [
        'Access to vehicle advertising network',
        'Flexible monthly terms',
        'Route-based targeting',
        'Performance reporting',
        'No production costs included'
      ],
      cta: { label: 'Start Advertising', to: '/advertise' },
      color: 'primary',
      bgGradient: 'from-primary-900 to-primary-700'
    },
    {
      id: 'branding',
      icon: HiOutlineTruck,
      title: 'Vehicle & Fleet Branding',
      subtitle: 'Turnkey Packages',
      description: 'Professional vehicle wraps and signage. Complete packages including design, materials, and installation.',
      pricing: 'From $249',
      features: [
        'Full design services included',
        'Premium materials',
        'Professional installation',
        'Cars, trucks, and trailers',
        'Fleet discounts available'
      ],
      cta: { label: 'Get My Vehicle Priced', to: '/signage-wraps' },
      color: 'accent',
      bgGradient: 'from-accent-600 to-accent-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Two Ways to Work With Us
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Whether you want to advertise your business or brand your vehicles, we have the right solution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${offer.bgGradient} text-white`}
            >
              <div className="p-8 md:p-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <offer.icon className="w-8 h-8" />
                </div>

                {/* Subtitle */}
                <span className="text-sm font-medium uppercase tracking-wider opacity-80">
                  {offer.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                  {offer.title}
                </h3>

                {/* Description */}
                <p className="text-lg opacity-90 mb-6">
                  {offer.description}
                </p>

                {/* Pricing */}
                <div className="inline-block bg-white/20 rounded-full px-6 py-2 mb-6">
                  <span className="text-2xl font-bold">{offer.pricing}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <HiOutlineCheck className="w-5 h-5 flex-shrink-0" />
                      <span className="opacity-90">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="secondary"
                  size="lg"
                  to={offer.cta.to}
                  className={offer.color === 'primary' 
                    ? '!bg-white !text-primary-900 !border-white hover:!bg-gray-100' 
                    : '!bg-white !text-accent-600 !border-white hover:!bg-gray-100'
                  }
                >
                  {offer.cta.label}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clarification Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-neutral-500 mt-8"
        >
          Note: Advertising space pricing ($1/sq ft/month) is separate from signage production and installation packages.
        </motion.p>
      </div>
    </section>
  );
};

export default DualOfferSection;
