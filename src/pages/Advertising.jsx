import { motion } from 'framer-motion';
import { HiOutlineCheck, HiOutlineLocationMarker, HiOutlineTruck, HiOutlineCurrencyDollar } from 'react-icons/hi';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';
import useReducedMotion from '../hooks/useReducedMotion';

/**
 * Advertising Page
 * Advertise on Our Signs - Sales focused page
 */
const Advertising = () => {
  const prefersReducedMotion = useReducedMotion();

  const benefits = [
    { icon: HiOutlineCurrencyDollar, title: 'Affordable Rates', description: 'Starting from just $1 per sq.ft per month' },
    { icon: HiOutlineLocationMarker, title: 'Prime Locations', description: 'High-traffic storefronts and busy routes' },
    { icon: HiOutlineTruck, title: 'Mobile Reach', description: 'Vehicle ads that travel across the city' },
  ];

  const adTypes = [
    {
      title: 'Storefront Signs',
      description: 'Advertise on active store signs in high-traffic areas',
      features: ['Prime retail locations', 'High visibility', 'Flexible durations'],
      price: 'From $1/sq.ft/month'
    },
    {
      title: 'Vehicle Advertising',
      description: 'Your message on cars, vans, and trucks across the city',
      features: ['Mobile exposure', 'Wide coverage', 'Daily impressions'],
      price: 'Custom pricing'
    },
    {
      title: 'Window Displays',
      description: 'Eye-catching window graphics in retail locations',
      features: ['Street-level visibility', 'Professional design', 'Quick installation'],
      price: 'From $1/sq.ft/month'
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Advertise on Our Signs | San Gabriel Solutions"
        description="Affordable advertising from $1/sq.ft/month. Advertise on store signs and vehicles with flexible monthly pricing. Real-world visibility without digital ad fatigue."
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20 md:py-28 overflow-hidden">
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
              Affordable Advertising That Works Every Day
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">
              Real-world visibility without digital ad fatigue
            </p>
            
            {/* Pricing Highlight */}
            <div className="inline-flex items-center bg-accent-500/20 border border-accent-400/30 rounded-full px-8 py-4 mb-8">
              <span className="text-accent-300 font-semibold text-xl">
                Starting from <span className="text-white text-3xl font-bold">$1</span> per sq.ft per month
              </span>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" size="lg" to="/contact" className="bg-accent-500 hover:bg-accent-600">
                Check Availability
              </Button>
              <Button variant="secondary" size="lg" to="/contact" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary-900">
                Get Rates
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Why Pay Thousands for Billboards?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Our platform offers advertising from just <strong>$1 per sq.ft per month</strong> with 
              flexible terms and real exposure in your community.
            </p>
            
            {/* Sales Pitch Highlight Box */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 max-w-3xl mx-auto mb-12">
              <p className="text-lg text-neutral-700 leading-relaxed">
                Businesses can advertise on active store signs and vehicles with flexible monthly pricing — 
                ideal for <strong>local promotions</strong>, <strong>seasonal campaigns</strong>, and <strong>brand awareness</strong>. 
                Get real-world visibility without digital ad fatigue.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-neutral-50 rounded-2xl"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Types */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Advertising Options
            </h2>
            <p className="text-xl text-neutral-600">
              Choose the format that works best for your campaign
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {adTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-primary-900 mb-3">{type.title}</h3>
                <p className="text-neutral-600 mb-4">{type.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-neutral-700">
                      <HiOutlineCheck className="w-5 h-5 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-neutral-100">
                  <span className="text-lg font-bold text-accent-600">{type.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Perfect For
              </h2>
              <ul className="space-y-4">
                {[
                  'Local business promotions',
                  'Seasonal campaigns',
                  'Brand awareness',
                  'Event advertising',
                  'Product launches',
                  'Grand openings'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center">
                      <HiOutlineCheck className="w-4 h-4 text-accent-600" />
                    </div>
                    <span className="text-lg text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
              <p className="text-blue-200 mb-6">
                Get in touch today for availability and custom rates for your campaign.
              </p>
              <div className="space-y-4">
                <Button variant="primary" to="/contact" className="w-full bg-accent-500 hover:bg-accent-600">
                  Start Advertising
                </Button>
                <Button variant="outline" href="tel:753-726-4274" className="w-full border-white text-white hover:bg-white hover:text-primary-900">
                  Call (753) SAN GABRIEL
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advertising;
