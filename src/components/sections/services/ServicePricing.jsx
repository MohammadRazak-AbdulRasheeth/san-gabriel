import { motion } from 'framer-motion';
import { HiOutlineCurrencyDollar, HiOutlineCheckCircle } from 'react-icons/hi';

/**
 * ServicePricing Component
 * Clear pricing display with amount, unit, and conditional notes
 * Requirements: 4.4, 5.3
 * 
 * @param {string} amount - Price value (e.g., "$300–$500", "$200", "Custom")
 * @param {string} unit - Per unit description (e.g., "per truck or trailer", "per window")
 * @param {string} note - Additional pricing notes/conditions
 */
const ServicePricing = ({ amount, unit, note }) => {
  if (!amount) return null;

  return (
    <motion.div
      className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-5"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        {/* Pricing Label */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <HiOutlineCurrencyDollar className="w-6 h-6 text-green-600" />
          </div>
          <span className="font-semibold text-green-800 text-sm uppercase tracking-wide">
            Revenue Pricing
          </span>
        </div>

        {/* Price Display */}
        <div className="text-right md:text-left">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-3xl md:text-4xl font-bold text-green-700">
              {amount}
            </span>
            {unit && (
              <span className="text-lg text-green-600 font-medium">
                {unit}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Pricing Note/Conditions */}
      {note && (
        <p className="mt-3 text-sm text-green-700 italic border-t border-green-200 pt-3">
          * {note}
        </p>
      )}

      {/* Clear & Transparent Badge */}
      <div className="mt-3 flex items-center gap-2">
        <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
          <HiOutlineCheckCircle className="w-4 h-4" />
          Transparent Pricing
        </span>
      </div>
    </motion.div>
  );
};

export default ServicePricing;
