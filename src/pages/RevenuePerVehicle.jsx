import { motion } from 'framer-motion';
import { HiOutlineTruck, HiOutlineLocationMarker, HiOutlineCurrencyDollar } from 'react-icons/hi';
import { FaCar, FaTruck, FaTrailer } from 'react-icons/fa';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';
import useReducedMotion from '../hooks/useReducedMotion';
import { revenuePerVehicle, driverCompensation } from '../data/pricingConfig';

/**
 * Revenue Per Vehicle Page
 * Explains unit economics, builds trust, recruits vehicles/advertisers
 */
const RevenuePerVehicle = () => {
  const prefersReducedMotion = useReducedMotion();

  const vehicleData = [
    { ...revenuePerVehicle.carVan, Icon: FaCar },
    { ...revenuePerVehicle.straightTruck, Icon: FaTruck },
    { ...revenuePerVehicle.trailer53, Icon: FaTrailer }
  ];

  const whereAdsSeen = [
    { location: 'Urban Streets', description: 'High-traffic downtown areas and commercial districts' },
    { location: 'Highways & Interstates', description: 'Long-haul routes with maximum exposure' },
    { location: 'Industrial Zones', description: 'Business parks and manufacturing areas' },
    { location: 'Retail Corridors', description: 'Shopping centers and retail destinations' },
    { location: 'Residential Areas', description: 'Neighborhood delivery routes' },
    { location: 'Event Venues', description: 'Sports arenas, concert halls, and convention centers' }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Revenue Per Vehicle | How the Network Works | San Gabriel Solutions"
        description="Understand the unit economics of vehicle advertising. See revenue potential by vehicle type and how earnings are shared between drivers and network operations."
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              How the Network Works
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">
              Transparent unit economics for advertisers and vehicle partners
            </p>
          </motion.div>
        </div>
      </section>

      {/* Revenue Tables by Vehicle Type */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Revenue by Vehicle Type
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              See how advertising revenue is generated and distributed
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {vehicleData.map((vehicle, index) => (
              <motion.div
                key={vehicle.type}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-50 rounded-2xl overflow-hidden"
              >
                {/* Header */}
                <div className="bg-primary-900 text-white p-6 text-center">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <vehicle.Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold">{vehicle.type}</h3>
                  <p className="text-blue-200 text-sm">{vehicle.adSpace} ad space</p>
                </div>

                {/* Revenue Breakdown */}
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                      <span className="text-neutral-600">Monthly Revenue</span>
                      <span className="font-bold text-primary-900">{vehicle.monthlyRevenue}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                      <span className="text-neutral-600">Driver Share</span>
                      <span className="font-bold text-green-600">{vehicle.driverShare}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-neutral-600">Network Ops</span>
                      <span className="font-bold text-blue-600">{vehicle.networkOps}</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-neutral-100 rounded-lg">
                    <p className="text-sm text-neutral-600">
                      <strong>Typical Routes:</strong> {vehicle.routes}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-neutral-500 mt-8"
          >
            Revenue based on $1/sq ft/month advertising rate. Actual earnings vary by campaign and route coverage.
          </motion.p>
        </div>
      </section>

      {/* Revenue Share Explanation */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              How Revenue is Shared
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiOutlineCurrencyDollar className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">Advertiser Pays</h3>
              <p className="text-neutral-600">
                Advertisers pay $1/sq ft/month for media space on vehicles in our network.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiOutlineTruck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">Driver Compensation</h3>
              <p className="text-neutral-600">
                Drivers earn {driverCompensation.ratePerSqFt.displayText} based on verified activity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">Network Operations</h3>
              <p className="text-neutral-600">
                Covers campaign management, reporting, advertiser matching, and platform operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Where Ads Are Seen */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Where Ads Are Seen
            </h2>
            <p className="text-xl text-neutral-600">
              Our network covers diverse high-traffic locations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whereAdsSeen.map((item, index) => (
              <motion.div
                key={item.location}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl"
              >
                <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiOutlineLocationMarker className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <h3 className="font-bold text-primary-900">{item.location}</h3>
                  <p className="text-sm text-neutral-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Split CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Advertisers CTA */}
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">For Advertisers</h3>
              <p className="text-blue-200 mb-6">
                Calculate your campaign reach and get a custom quote for your advertising goals.
              </p>
              <Button variant="primary" size="lg" to="/contact?audience=advertiser" className="bg-accent-500 hover:bg-accent-600">
                Calculate My Campaign Reach
              </Button>
            </motion.div>

            {/* Drivers CTA */}
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">For Drivers</h3>
              <p className="text-blue-200 mb-6">
                See how much you can earn with your vehicle. Join our network today.
              </p>
              <Button variant="primary" size="lg" to="/vehicle-partner" className="bg-green-500 hover:bg-green-600">
                See How Much I Can Earn
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RevenuePerVehicle;
