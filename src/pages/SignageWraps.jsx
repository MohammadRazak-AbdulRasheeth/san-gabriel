import { motion } from 'framer-motion';
import { HiOutlineCheck } from 'react-icons/hi';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';
import useReducedMotion from '../hooks/useReducedMotion';
import { signagePackages } from '../data/pricingConfig';

/**
 * Signage & Wraps Page (Production)
 * Package-based pricing - NOT $1/sq ft
 * Includes materials/design/install
 */
const SignageWraps = () => {
  const prefersReducedMotion = useReducedMotion();

  const processSteps = [
    { step: 1, title: 'Design', description: 'Our team creates custom designs tailored to your brand and vehicle' },
    { step: 2, title: 'Proof', description: 'Review and approve digital mockups before production' },
    { step: 3, title: 'Print', description: 'High-quality printing on premium vinyl materials' },
    { step: 4, title: 'Install', description: 'Professional installation by certified technicians' }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Signage & Wraps | Vehicle Branding Packages | San Gabriel Solutions"
        description="Professional vehicle and fleet branding. Turnkey packages including design, premium materials, and professional installation. Cars from $249, trucks from $1,500."
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-600 via-accent-500 to-accent-600 text-white py-20 md:py-28 overflow-hidden">
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
              Professional Vehicle & Fleet Branding — Installed Right
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8">
              Turnkey packages including design, premium materials, and professional installation
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" to="/contact?service=signage-wraps" className="!bg-white !text-accent-600 !border-white hover:!bg-gray-100">
                Get My Vehicle Priced
              </Button>
              <Button variant="secondary" size="lg" to="#packages" className="!bg-transparent !border-white !text-white hover:!bg-white hover:!text-accent-600">
                View Packages
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="packages" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Branding Packages
            </h2>
            <p className="text-xl text-neutral-600">
              All packages include design, materials, and professional installation
            </p>
          </motion.div>

          {/* Cars & Sedans */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-primary-900 mb-6">{signagePackages.cars.title}</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-neutral-50 rounded-xl overflow-hidden">
                <thead className="bg-primary-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Package</th>
                    <th className="px-6 py-4 text-left">Description</th>
                    <th className="px-6 py-4 text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {signagePackages.cars.packages.map((pkg, idx) => (
                    <tr key={idx} className="border-b border-neutral-200 last:border-0">
                      <td className="px-6 py-4 font-semibold text-primary-900">{pkg.name}</td>
                      <td className="px-6 py-4 text-neutral-600">{pkg.description}</td>
                      <td className="px-6 py-4 text-right font-bold text-accent-600">{pkg.priceDisplay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {signagePackages.cars.includes.map((item, idx) => (
                <span key={idx} className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  <HiOutlineCheck className="w-4 h-4" /> {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Straight Trucks */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-primary-900 mb-6">{signagePackages.straightTrucks.title}</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-neutral-50 rounded-xl overflow-hidden">
                <thead className="bg-primary-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Package</th>
                    <th className="px-6 py-4 text-left">Description</th>
                    <th className="px-6 py-4 text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {signagePackages.straightTrucks.packages.map((pkg, idx) => (
                    <tr key={idx} className="border-b border-neutral-200 last:border-0">
                      <td className="px-6 py-4 font-semibold text-primary-900">{pkg.name}</td>
                      <td className="px-6 py-4 text-neutral-600">{pkg.description}</td>
                      <td className="px-6 py-4 text-right font-bold text-accent-600">{pkg.priceDisplay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {signagePackages.straightTrucks.includes.map((item, idx) => (
                <span key={idx} className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  <HiOutlineCheck className="w-4 h-4" /> {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 53' Trailers */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary-900 mb-6">{signagePackages.trailers.title}</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-neutral-50 rounded-xl overflow-hidden">
                <thead className="bg-primary-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Package</th>
                    <th className="px-6 py-4 text-left">Description</th>
                    <th className="px-6 py-4 text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {signagePackages.trailers.packages.map((pkg, idx) => (
                    <tr key={idx} className="border-b border-neutral-200 last:border-0">
                      <td className="px-6 py-4 font-semibold text-primary-900">{pkg.name}</td>
                      <td className="px-6 py-4 text-neutral-600">{pkg.description}</td>
                      <td className="px-6 py-4 text-right font-bold text-accent-600">{pkg.priceDisplay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {signagePackages.trailers.includes.map((item, idx) => (
                <span key={idx} className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  <HiOutlineCheck className="w-4 h-4" /> {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-neutral-600">
              From concept to completion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Connector */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-accent-300" />
                )}
                
                <div className="relative">
                  <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl relative z-10">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-primary-900 mb-2">{step.title}</h3>
                  <p className="text-neutral-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Work
            </h2>
            <p className="text-xl text-neutral-600">
              See our vehicle branding in action
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=80',
              'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
              'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600&q=80',
              'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80',
              'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80',
              'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80'
            ].map((imageUrl, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-video bg-neutral-100 rounded-xl overflow-hidden"
              >
                <img
                  src={imageUrl}
                  alt={`Portfolio item ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-neutral-400">Portfolio Image</div>';
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-accent-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Brand Your Vehicle?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Get a custom quote for your vehicle or fleet. We'll help you choose the right package.
            </p>
            <Button variant="secondary" size="lg" to="/contact?service=signage-wraps" className="!bg-white !text-accent-600 !border-white hover:!bg-gray-100">
              Get My Vehicle Priced
            </Button>
            <p className="text-sm text-orange-200 mt-6">
              We typically respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SignageWraps;
