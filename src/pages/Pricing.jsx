import { motion } from 'framer-motion';
import { HiOutlineCheck, HiOutlineX } from 'react-icons/hi';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';
import useReducedMotion from '../hooks/useReducedMotion';
import { advertisingPricing, signagePackages, driverCompensation, footerDisclaimers } from '../data/pricingConfig';

/**
 * Pricing Page
 * Section A: Advertising Pricing
 * Section B: Branding Packages
 * Section C: How Driver Payments Work
 */
const Pricing = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pt-20">
      <SEO 
        title="Pricing | Advertising & Branding Packages | San Gabriel Solutions"
        description="Transparent pricing for vehicle advertising and branding. Advertising from $1/sq ft/month. Branding packages from $249. Driver earnings $50-$500+/month."
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-16 md:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Transparent Pricing
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Clear pricing for advertising, branding, and driver compensation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section A: Advertising Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Section A</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mt-2 mb-4">
              Advertising Pricing
            </h2>
            <p className="text-xl text-neutral-600">
              Monthly media space on our vehicle network
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Pricing Card */}
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-900 to-primary-700 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Media Space Rate</h3>
              <div className="text-5xl font-bold mb-2">$1</div>
              <p className="text-blue-200 mb-6">per square foot per month</p>
              
              <div className="space-y-3 mb-6">
                <p className="text-sm text-blue-200">Includes:</p>
                {advertisingPricing.includes.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <HiOutlineCheck className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Button variant="primary" to="/advertise" className="w-full bg-accent-500 hover:bg-accent-600">
                Learn More
              </Button>
            </motion.div>

            {/* Excludes Card */}
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-neutral-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Not Included</h3>
              <p className="text-neutral-600 mb-6">
                The $1/sq ft rate covers media space only. Production services are available separately.
              </p>
              
              <div className="space-y-3 mb-6">
                {advertisingPricing.excludes.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <HiOutlineX className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-neutral-500 italic">
                Need production? See our Signage & Wraps packages below.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section B: Branding Packages */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Section B</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mt-2 mb-4">
              Branding Packages
            </h2>
            <p className="text-xl text-neutral-600">
              Turnkey packages including design, materials, and installation
            </p>
          </motion.div>

          {/* Cars Table */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-xl font-bold text-primary-900 mb-4">{signagePackages.cars.title}</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
                <thead className="bg-primary-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Package</th>
                    <th className="px-6 py-4 text-left">Description</th>
                    <th className="px-6 py-4 text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {signagePackages.cars.packages.map((pkg, idx) => (
                    <tr key={idx} className="border-b border-neutral-100 last:border-0">
                      <td className="px-6 py-4 font-semibold text-primary-900">{pkg.name}</td>
                      <td className="px-6 py-4 text-neutral-600">{pkg.description}</td>
                      <td className="px-6 py-4 text-right font-bold text-accent-600">{pkg.priceDisplay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Trucks Table */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-xl font-bold text-primary-900 mb-4">{signagePackages.straightTrucks.title}</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
                <thead className="bg-primary-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Package</th>
                    <th className="px-6 py-4 text-left">Description</th>
                    <th className="px-6 py-4 text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {signagePackages.straightTrucks.packages.map((pkg, idx) => (
                    <tr key={idx} className="border-b border-neutral-100 last:border-0">
                      <td className="px-6 py-4 font-semibold text-primary-900">{pkg.name}</td>
                      <td className="px-6 py-4 text-neutral-600">{pkg.description}</td>
                      <td className="px-6 py-4 text-right font-bold text-accent-600">{pkg.priceDisplay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Trailers Table */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-primary-900 mb-4">{signagePackages.trailers.title}</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
                <thead className="bg-primary-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Package</th>
                    <th className="px-6 py-4 text-left">Description</th>
                    <th className="px-6 py-4 text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {signagePackages.trailers.packages.map((pkg, idx) => (
                    <tr key={idx} className="border-b border-neutral-100 last:border-0">
                      <td className="px-6 py-4 font-semibold text-primary-900">{pkg.name}</td>
                      <td className="px-6 py-4 text-neutral-600">{pkg.description}</td>
                      <td className="px-6 py-4 text-right font-bold text-accent-600">{pkg.priceDisplay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Button variant="primary" to="/signage-wraps">
              View All Packages
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section C: Driver Payments */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Section C</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mt-2 mb-4">
              How Driver Payments Work
            </h2>
            <p className="text-xl text-neutral-600">
              Transparent compensation for vehicle partners
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Earnings Table */}
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-primary-900 mb-4">Monthly Earnings by Vehicle Type</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-neutral-50 rounded-xl overflow-hidden">
                  <thead className="bg-green-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Vehicle Type</th>
                      <th className="px-6 py-4 text-right">Monthly Earnings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {driverCompensation.earningsByVehicle.map((vehicle, idx) => (
                      <tr key={idx} className="border-b border-neutral-200 last:border-0">
                        <td className="px-6 py-4 font-semibold text-primary-900">{vehicle.type}</td>
                        <td className="px-6 py-4 text-right font-bold text-green-600">{vehicle.display}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-neutral-500 mt-4">
                Earnings based on ad size and route coverage. {driverCompensation.ratePerSqFt.displayText}
              </p>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-primary-900 mb-4">Payment Requirements</h3>
              <div className="bg-neutral-50 rounded-xl p-6">
                <ul className="space-y-4">
                  {driverCompensation.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-accent-600 font-bold text-sm">{idx + 1}</span>
                      </div>
                      <span className="text-neutral-700">{req}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Payment Terms:</strong> {driverCompensation.paymentTerms}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="primary" to="/vehicle-partner">
                  Become a Vehicle Partner
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimers */}
      <section className="py-8 bg-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-neutral-500 space-y-1">
            <p>{footerDisclaimers.pricingSeparation}</p>
            <p>{footerDisclaimers.driverEarnings}</p>
            <p>{footerDisclaimers.trackingDisclaimer}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Have Questions About Pricing?
          </h2>
          <p className="text-blue-200 mb-6">
            Contact us for a custom quote or to discuss your specific needs.
          </p>
          <Button variant="primary" size="lg" to="/contact" className="bg-accent-500 hover:bg-accent-600">
            Get a Quote
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
