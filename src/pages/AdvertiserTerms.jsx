import { motion } from 'framer-motion';
import SEO from '../components/SEO';

/**
 * Advertiser Terms Page (Placeholder)
 */
const AdvertiserTerms = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Advertiser Terms | San Gabriel Solutions"
        description="Terms and conditions for advertisers using the San Gabriel Solutions vehicle advertising network."
      />

      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Advertiser Terms</h1>
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
              This page is a placeholder. Full advertiser terms and conditions will be added here.
            </p>

            <h2>1. Overview</h2>
            <p>
              These Advertiser Terms govern your use of the San Gabriel Solutions vehicle advertising network for advertising campaigns.
            </p>

            <h2>2. Pricing</h2>
            <p>
              Advertising space is priced at $1 per square foot per month. This rate covers media space only and does not include design, printing, or installation services.
            </p>

            <h2>3. Campaign Terms</h2>
            <p>
              Campaigns are billed monthly with flexible terms. Minimum campaign duration is one month.
            </p>

            <h2>4. Creative Requirements</h2>
            <p>
              All advertising creative must comply with applicable laws and our content guidelines. We reserve the right to reject inappropriate content.
            </p>

            <h2>5. Reporting</h2>
            <p>
              Advertisers receive monthly reports including route coverage and estimated impressions.
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

export default AdvertiserTerms;
