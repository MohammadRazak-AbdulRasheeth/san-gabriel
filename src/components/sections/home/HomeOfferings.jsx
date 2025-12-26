import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineSpeakerphone, HiOutlineOfficeBuilding, HiOutlineTruck, HiOutlineCheck } from 'react-icons/hi';
import { homeOfferings } from '../../../data/homeOfferings';
import useReducedMotion from '../../../hooks/useReducedMotion';

const iconMap = {
  megaphone: HiOutlineSpeakerphone,
  storefront: HiOutlineOfficeBuilding,
  truck: HiOutlineTruck
};

/**
 * HomeOfferings Component
 * Displays the 3 core offerings in mandatory order
 */
const HomeOfferings = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            From affordable advertising to professional signage, we help your business get noticed.
          </p>
        </div>

        {/* Offerings Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {homeOfferings.map((offering) => {
            const IconComponent = iconMap[offering.icon] || HiOutlineSpeakerphone;
            
            return (
              <motion.div
                key={offering.id}
                variants={cardVariants}
                className="bg-neutral-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Order Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-4xl font-bold text-neutral-200">#{offering.order}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  {offering.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 mb-4">
                  {offering.description}
                </p>

                {/* Pricing (if available) */}
                {offering.pricing && (
                  <div className="inline-block bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {offering.pricing}
                  </div>
                )}

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {offering.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-neutral-600">
                      <HiOutlineCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to={offering.cta.to}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group-hover:translate-x-1 transition-transform duration-300"
                >
                  {offering.cta.label}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeOfferings;
