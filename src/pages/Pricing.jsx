import { motion } from 'framer-motion';
import { HiOutlineCheck } from 'react-icons/hi';
import SEO from '../components/SEO';
import useReducedMotion from '../hooks/useReducedMotion';
import Button from '../components/ui/Button';

/**
 * Pricing Page
 * Displays vehicle branding pricing with tables for each vehicle category
 */
const Pricing = () => {
  const prefersReducedMotion = useReducedMotion();

  const pricingData = {
    carsAndSedans: {
      title: 'Cars & Sedans',
      includes: ['Design', 'Premium materials', 'Professional installation'],
      packages: [
        { name: 'Back Panel', description: 'Rear window', price: '$329' },
        { name: 'Hood Wrap', description: 'Full hood coverage', price: '$499' },
        { name: 'Side Door Signs', description: 'Signage on a Side Door', price: '$239' },
        { name: 'Full Branding', description: 'Complete vehicle branding package', price: '$999–$1499' },
      ]
    },
    cargoVans: {
      title: 'Cargo & Sprinter Vans',
      includes: ['Design', 'Premium materials', 'Professional installation'],
      packages: [
        { name: 'One Side', description: 'Single side wrap', price: '$1,000+' },
        { name: 'Both Sides + Rear', description: 'Full coverage package', price: '$2500–$3000' },
      ]
    },
    straightTrucks: {
      title: 'Straight Trucks & Box Trucks 20Ft',
      includes: ['Design', 'Commercial-grade materials', 'Professional installation'],
      packages: [
        { name: 'One Side', description: 'Single side wrap', price: '$1,500+' },
        { name: 'Both Sides + Rear', description: 'Full coverage package', price: '$3,000–$3,500' },
      ]
    },
    trailers: {
      title: "53' Trailers",
      includes: ['Design', 'Fleet-grade materials', 'Professional installation'],
      packages: [
        { name: 'One Side', description: 'Single side wrap', price: '$3,500+' },
        { name: 'Full Wrap (2 Sides + Rear)', description: 'Complete trailer branding', price: '$6,500–$7,500' },
      ]
    }
  };

  const PricingTable = ({ data, index }) => (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="mb-12"
    >
      <h3 className="text-2xl font-bold text-primary-900 mb-6">{data.title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
          <thead className="bg-primary-900 text-white">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">Package</th>
              <th className="px-6 py-4 text-left font-semibold">Description</th>
              <th className="px-6 py-4 text-right font-semibold">Price</th>
            </tr>
          </thead>
          <tbody>
            {data.packages.map((pkg, idx) => (
              <tr key={idx} className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50 transition-colors">
                <td className="px-6 py-5 font-medium text-primary-900">{pkg.name}</td>
                <td className="px-6 py-5 text-neutral-600">{pkg.description}</td>
                <td className="px-6 py-5 text-right font-bold text-accent-600 text-lg">{pkg.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {data.includes.map((item, idx) => (
          <span key={idx} className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-sm font-medium">
            <HiOutlineCheck className="w-4 h-4" /> {item}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="pt-20">
      <SEO 
        title="Pricing | Vehicle Branding Packages | San Gabriel Solutions"
        description="Transparent pricing for vehicle branding. Cars from $239, vans from $1,000, trucks from $1,500, trailers from $3,500. All packages include design and installation."
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
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Professional vehicle branding packages with design, premium materials, and installation included
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" size="lg" to="/contact?service=signage-wraps">
                Get a Free Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tables Section */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
              Vehicle Branding Packages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mt-2 mb-4">
              Pricing by Vehicle Type
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              All packages include professional design, premium materials, and expert installation
            </p>
          </motion.div>

          {/* Cars & Sedans */}
          <PricingTable data={pricingData.carsAndSedans} index={0} />

          {/* Cargo & Sprinter Vans */}
          <PricingTable data={pricingData.cargoVans} index={1} />

          {/* Straight Trucks */}
          <PricingTable data={pricingData.straightTrucks} index={2} />

          {/* 53' Trailers */}
          <PricingTable data={pricingData.trailers} index={3} />
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              What's Included
            </h2>
            <p className="text-lg text-neutral-600">
              Every package comes with everything you need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Design',
                description: 'Professional designers create graphics tailored to your brand and vehicle',
                icon: '🎨'
              },
              {
                title: 'Premium Materials',
                description: '3M and Avery certified vinyl for durability, vibrant colors, and weather resistance',
                icon: '✨'
              },
              {
                title: 'Expert Installation',
                description: 'Certified technicians ensure perfect application with warranty coverage',
                icon: '🔧'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-50 rounded-2xl p-8 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Brand Your Vehicle?
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Get a custom quote for your vehicle or fleet. We'll help you choose the right package for your needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" size="lg" to="/contact?service=signage-wraps">
                Get a Free Quote
              </Button>
              <Button variant="secondary" size="lg" to="/signage-wraps" className="!bg-transparent !border-white !text-white hover:!bg-white hover:!text-primary-900">
                Learn More
              </Button>
            </div>
            <p className="text-sm text-blue-300 mt-6">
              We typically respond within 24 hours
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
