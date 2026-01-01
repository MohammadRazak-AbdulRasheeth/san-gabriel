import { motion } from 'framer-motion';
import { HiOutlineCheck, HiOutlineTruck, HiOutlineSparkles, HiOutlineShieldCheck, HiArrowRight } from 'react-icons/hi';
import { FaCar } from 'react-icons/fa';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';
import useReducedMotion from '../hooks/useReducedMotion';

/**
 * Signage & Wraps Page (Production)
 * Service overview - pricing details on Pricing page
 * Includes materials/design/install info
 */
const SignageWraps = () => {
  const prefersReducedMotion = useReducedMotion();

  const processSteps = [
    { step: 1, title: 'Design', description: 'Our team creates custom designs tailored to your brand and vehicle' },
    { step: 2, title: 'Proof', description: 'Review and approve digital mockups before production' },
    { step: 3, title: 'Print', description: 'High-quality printing on premium vinyl materials' },
    { step: 4, title: 'Install', description: 'Professional installation by certified technicians' }
  ];

  const vehicleTypes = [
    {
      icon: FaCar,
      title: 'Cars & Sedans',
      description: 'Perfect for personal vehicles, rideshare drivers, and small business owners',
      features: ['Back panel decals', 'Hood wraps', 'Side door signs', 'Full vehicle branding']
    },
    {
      icon: HiOutlineTruck,
      title: 'Vans & Box Trucks',
      description: 'Ideal for delivery services, contractors, and service businesses',
      features: ['Single side wraps', 'Full coverage packages', 'Rear door branding', 'Fleet consistency']
    },
    {
      icon: HiOutlineTruck,
      title: '53\' Trailers',
      description: 'Maximum visibility for long-haul trucking and logistics companies',
      features: ['Single side wraps', 'Full trailer coverage', 'High-impact graphics', 'Fleet-grade materials']
    }
  ];

  const benefits = [
    { icon: HiOutlineSparkles, title: 'Premium Materials', description: '3M and Avery certified vinyl for durability and vibrant colors' },
    { icon: HiOutlineShieldCheck, title: 'Professional Installation', description: 'Certified technicians with years of experience' },
    { icon: HiOutlineCheck, title: 'Design Included', description: 'Custom designs tailored to your brand identity' },
    { icon: HiOutlineCheck, title: 'Warranty Coverage', description: 'Materials and installation backed by warranty' }
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Signage & Wraps | Vehicle Branding Services | San Gabriel Solutions"
        description="Professional vehicle and fleet branding. Turnkey packages including design, premium materials, and professional installation for cars, trucks, and trailers."
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
              Professional Vehicle & Fleet Branding — Installed Right
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Turnkey packages including design, premium materials, and professional installation
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" size="lg" to="/contact?service=signage-wraps">
                Get a Free Quote
              </Button>
              <Button variant="secondary" size="lg" to="/pricing" className="!bg-transparent !border-white !text-white hover:!bg-white hover:!text-primary-900">
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              We Brand All Vehicle Types
            </h2>
            <p className="text-xl text-neutral-600">
              From personal cars to full commercial fleets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {vehicleTypes.map((vehicle, index) => (
              <motion.div
                key={vehicle.title}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-accent-500/30">
                  <vehicle.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">{vehicle.title}</h3>
                <p className="text-neutral-600 mb-4">{vehicle.description}</p>
                <ul className="space-y-2">
                  {vehicle.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-neutral-700">
                      <HiOutlineCheck className="w-4 h-4 text-accent-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA to Pricing */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button variant="outline" size="lg" to="/pricing" className="group">
              View All Pricing Options
              <HiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-neutral-600">
              Quality materials, expert installation, lasting results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-sm"
              >
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="font-bold text-primary-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-neutral-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
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

      {/* Portfolio Gallery */}
      <section className="py-20 bg-neutral-50">
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
              { src: '/11servicesimages/3.MOBILE ADVERTISING – TRUCKING FLEETS .png', alt: 'Mobile Advertising - Trucking Fleets' },
              { src: '/heroimages/servicesherosectionimage.jpeg', alt: 'Vehicle Branding Services' },
              { src: '/heroimages/Truck-hero-home.png', alt: 'Truck Wrap Advertising' },
              { src: '/product-image/rear-window-ad.png', alt: 'Rear Window Advertising' },
              { src: '/product-image/truck-backandside-ad.png', alt: 'Truck Back and Side Advertising' },
              { src: '/product-image/Hoodwrap-ad.png', alt: 'Hood Wrap Advertising' }
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-video bg-neutral-100 rounded-xl overflow-hidden group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
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
              Ready to Brand Your Vehicle?
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Get a custom quote for your vehicle or fleet. We'll help you choose the right package.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" size="lg" to="/contact?service=signage-wraps">
                Get a Free Quote
              </Button>
              <Button variant="secondary" size="lg" to="/pricing" className="!bg-transparent !border-white !text-white hover:!bg-white hover:!text-primary-900">
                View Pricing
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

export default SignageWraps;
