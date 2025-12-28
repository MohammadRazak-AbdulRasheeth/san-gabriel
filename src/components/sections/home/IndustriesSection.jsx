import { motion } from 'framer-motion';
import { 
  HiOutlineShoppingBag, 
  HiOutlineHome,
  HiOutlineTruck,
  HiOutlineBriefcase,
  HiOutlineSparkles
} from 'react-icons/hi';
import { 
  MdOutlineRestaurant, 
  MdOutlineLocalHospital,
  MdOutlineConstruction
} from 'react-icons/md';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * Industries Section
 * Shows industries served
 */
const IndustriesSection = () => {
  const prefersReducedMotion = useReducedMotion();

  const industries = [
    { name: 'Restaurants & Food', Icon: MdOutlineRestaurant },
    { name: 'Retail & E-commerce', Icon: HiOutlineShoppingBag },
    { name: 'Real Estate', Icon: HiOutlineHome },
    { name: 'Healthcare', Icon: MdOutlineLocalHospital },
    { name: 'Construction', Icon: MdOutlineConstruction },
    { name: 'Logistics & Delivery', Icon: HiOutlineTruck },
    { name: 'Professional Services', Icon: HiOutlineBriefcase },
    { name: 'Events & Entertainment', Icon: HiOutlineSparkles }
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">
            Industries We Serve
          </h2>
          <p className="text-neutral-600">
            Trusted by businesses across diverse sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <industry.Icon className="w-6 h-6 text-accent-600" />
              </div>
              <span className="text-sm font-medium text-primary-900">{industry.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
