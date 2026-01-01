import { motion } from 'framer-motion';
import { HiOutlineCheck, HiOutlineX, HiOutlineLocationMarker } from 'react-icons/hi';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';
import useReducedMotion from '../hooks/useReducedMotion';
import { advertisingPricing } from '../data/pricingConfig';

/**
 * Advertise Page (Monthly Media)
 * Keep $1/sq ft pricing for media space only
 * Clear includes/excludes boxes
 */
const Advertise = () => {
  const prefersReducedMotion = useReducedMotion();

  const faqs = [
    {
      question: 'How long does it take to go live?',
      answer: 'Most campaigns can go live within 1-2 weeks after creative approval and vehicle matching.'
    },
    {
      question: 'What routes and coverage areas are available?',
      answer: 'We cover major urban areas, commercial zones, and high-traffic corridors. Coverage varies by market.'
    },
    {
      question: 'What are the contract terms?',
      answer: 'We offer flexible monthly terms with no long-term commitment required. Minimum 1-month campaigns.'
    },
    {
      question: 'Can I swap creative during a campaign?',
      answer: 'Yes, creative swaps are available. Additional production costs may apply for new materials.'
    },
    {
      question: 'What reporting do I receive?',
      answer: 'Monthly reports include route coverage, estimated impressions, and campaign performance metrics.'
    }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Advertise on Our Network | $1/sq ft/month | San Gabriel Solutions"
        description="Outcome-driven mobile advertising at $1 per square foot per month. Place your ads on vehicles across our network. Media space only - flexible monthly terms."
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
              Outcome-Driven Mobile Advertising
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">
              Your message on vehicles across the city. Real-world visibility that works every day.
            </p>
            
            {/* Pricing Highlight */}
            <div className="inline-flex items-center bg-accent-500/20 border border-accent-400/30 rounded-full px-8 py-4 mb-8">
              <span className="text-accent-300 font-semibold text-xl">
                <span className="text-white text-4xl font-bold">{advertisingPricing.displayText}</span>
              </span>
            </div>
            <p className="text-blue-300 mb-8">(Media space only)</p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" size="lg" to="/contact?service=advertising" className="bg-accent-500 hover:bg-accent-600">
                Check Availability
              </Button>
              <Button variant="secondary" size="lg" to="/contact?service=advertising" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary-900">
                Get Campaign Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Includes / Does Not Include */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              What's Included in $1/sq ft/month
            </h2>
            <p className="text-xl text-neutral-600">
              Clear pricing, no surprises
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Includes */}
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-green-50 border border-green-200 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <HiOutlineCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-800">Includes</h3>
              </div>
              <ul className="space-y-3">
                {advertisingPricing.includes.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <HiOutlineCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-green-900">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Does Not Include */}
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-red-50 border border-red-200 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <HiOutlineX className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-red-800">Does Not Include</h3>
              </div>
              <ul className="space-y-3">
                {advertisingPricing.excludes.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <HiOutlineX className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-red-900">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-red-700 italic">
                Need production? See our <a href="/signage-wraps" className="underline font-medium">Signage & Wraps packages</a>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scarcity/Availability Module */}
      <section className="py-12 bg-accent-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">Limited Vehicle Slots Available</h3>
              <p className="text-accent-100">High-demand routes fill up fast. Check availability for your target area.</p>
            </div>
            <Button variant="secondary" size="lg" to="/contact?service=advertising" className="!bg-white !text-accent-600 !border-white hover:!bg-gray-100 whitespace-nowrap">
              Check Availability
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Route/Coverage Map Module */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Coverage Areas
            </h2>
            <p className="text-xl text-neutral-600">
              Our network covers major urban and commercial zones
            </p>
          </motion.div>

          {/* Simple Map Placeholder - Replace with actual Google Map embed */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="aspect-video bg-neutral-200 flex items-center justify-center">
              <div className="text-center p-8">
                <HiOutlineLocationMarker className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                <p className="text-neutral-600 mb-4">Coverage map coming soon</p>
                <p className="text-sm text-neutral-500">
                  Currently serving Greater Toronto Area, Southern Ontario, and expanding
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-primary-900 mb-2">{faq.question}</h3>
                <p className="text-neutral-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Advertise?
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Get your campaign quote today. We'll match you with the right vehicles and routes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" size="lg" to="/contact?service=advertising" className="bg-accent-500 hover:bg-accent-600">
                Get Campaign Quote
              </Button>
              <Button variant="secondary" size="lg" href="tel:753-726-4274" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary-900">
                Call (753) SAN GABRIEL
              </Button>
            </div>
            <p className="text-sm text-blue-300 mt-6">
              We typically respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Advertise;
