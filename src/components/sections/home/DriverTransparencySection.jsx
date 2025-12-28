import { motion } from 'framer-motion';
import { HiOutlineCash, HiOutlineShieldCheck, HiOutlineDocumentText } from 'react-icons/hi';
import Button from '../../ui/Button';
import useReducedMotion from '../../../hooks/useReducedMotion';
import { driverCompensation, verificationOptions } from '../../../data/pricingConfig';

/**
 * Driver Transparency Summary Block
 * Shows earnings ranges and verification requirements
 */
const DriverTransparencySection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Driver Earnings & Transparency
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Earn money with your vehicle. Clear compensation, verified activity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Earnings Card */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <HiOutlineCash className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-4">Monthly Earnings</h3>
            <div className="space-y-3">
              {driverCompensation.earningsByVehicle.map((vehicle, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-neutral-100 last:border-0">
                  <span className="text-neutral-700">{vehicle.type}</span>
                  <span className="font-semibold text-green-600">{vehicle.display}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-neutral-500 mt-4">
              Based on ad size and route coverage
            </p>
          </motion.div>

          {/* Verification Card */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <HiOutlineShieldCheck className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-4">Activity Verification</h3>
            <p className="text-neutral-600 mb-4">
              Earnings require verified vehicle activity. Choose your verification method:
            </p>
            <div className="space-y-3">
              <div className="bg-neutral-50 rounded-lg p-3">
                <p className="font-medium text-primary-900">{verificationOptions.manualUpload.name}</p>
                <p className="text-sm text-neutral-600">{verificationOptions.manualUpload.description}</p>
              </div>
              <div className="bg-neutral-50 rounded-lg p-3">
                <p className="font-medium text-primary-900">{verificationOptions.automatedTracking.name}</p>
                <p className="text-sm text-neutral-600">{verificationOptions.automatedTracking.description}</p>
              </div>
            </div>
          </motion.div>

          {/* Requirements Card */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mb-6">
              <HiOutlineDocumentText className="w-7 h-7 text-accent-600" />
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-4">Payment Terms</h3>
            <ul className="space-y-3">
              {driverCompensation.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700">{req}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-neutral-500 mt-4 italic">
              {driverCompensation.paymentTerms}
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="primary" size="lg" to="/vehicle-partner">
            Become a Vehicle Partner
          </Button>
          <p className="text-sm text-neutral-500 mt-4">
            Tracking is used only to verify advertising activity, not for productivity monitoring.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DriverTransparencySection;
