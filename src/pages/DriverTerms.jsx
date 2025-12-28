import { motion } from 'framer-motion';
import SEO from '../components/SEO';

/**
 * Driver Terms Page (Placeholder)
 */
const DriverTerms = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Driver Terms | San Gabriel Solutions"
        description="Terms and conditions for vehicle partners in the San Gabriel Solutions advertising network."
      />

      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Driver Terms</h1>
          <p className="text-blue-200 mt-2">Last updated: December 2024</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-neutral-600 italic">
              This page is a placeholder. Full driver terms and conditions will be added here.
            </p>

            <h2>1. Overview</h2>
            <p>
              These Driver Terms govern your participation in the San Gabriel Solutions vehicle advertising network as a vehicle partner.
            </p>

            <h2>2. Eligibility</h2>
            <p>
              To participate in our program, you must have a valid driver's license, vehicle registration, and insurance.
            </p>

            <h2>3. Compensation</h2>
            <p>
              Driver compensation is based on verified vehicle activity and active campaigns. Earnings range from $0.50-$1.00 per square foot per month.
            </p>

            <h2>4. Activity Verification</h2>
            <p>
              Drivers must verify vehicle activity through either daily trip uploads or opt-in automated tracking. Tracking is used only to verify advertising activity, not for productivity monitoring.
            </p>

            <h2>5. Minimum Requirements</h2>
            <p>
              Vehicles must meet minimum daily movement thresholds to qualify for full earnings. If thresholds are not met, payment may be reduced or paused.
            </p>

            <h2>6. Contact</h2>
            <p>
              For questions about these terms, contact us at contact@sangabrielsolutions.com.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DriverTerms;
