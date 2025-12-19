import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getServiceById, getServicesByOrder } from '../data/services';
import { getPortfolioByService } from '../data/portfolio';
import Button from '../components/ui/Button';
import ServicePricing from '../components/sections/services/ServicePricing';
import { ServiceIcon, Icons } from '../components/ui/ServiceIcons';
import useReducedMotion from '../hooks/useReducedMotion';

/**
 * ServiceDetail Page
 * Individual service page with full content, how it works, benefits, and CTAs
 */
const ServiceDetail = () => {
  const { category } = useParams();
  const prefersReducedMotion = useReducedMotion();
  
  const service = getServiceById(category);
  
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const portfolioItems = getPortfolioByService(service.id);
  const allServices = getServicesByOrder();
  const otherServices = allServices.filter(s => s.id !== service.id).slice(0, 3);

  const getDuration = (duration) => prefersReducedMotion ? 0.01 : duration;
  const getDelay = (delay) => prefersReducedMotion ? 0 : delay;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-accent-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-green-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: getDuration(0.6) }}
          >
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-gray-300">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li>/</li>
                <li className="text-accent-400">{service.name}</li>
              </ol>
            </nav>

            {service.isCore && (
              <span className="inline-block bg-accent-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                CORE SERVICE
              </span>
            )}
            {service.isFoundational && (
              <span className="inline-block bg-neutral-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                FOUNDATIONAL SERVICE
              </span>
            )}

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <ServiceIcon serviceId={service.id} className="w-10 h-10 md:w-12 md:h-12 text-accent-400" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold">{service.name}</h1>
            </div>

            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-8 leading-relaxed">
              {service.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {service.ctas?.map((cta, index) => (
                <motion.div
                  key={index}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                >
                  <Link to={`/contact?service=${cta.servicePreselect || service.id}`}>
                    <Button
                      variant={cta.primary ? 'primary' : 'outline'}
                      size="lg"
                      className={`min-h-[48px] ${!cta.primary ? 'border-white text-white hover:bg-white hover:text-primary-900' : ''}`}
                    >
                      {cta.label}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Description Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: getDuration(0.5) }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">
              About This Service
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-700">
              {service.fullDescription?.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Case Section */}
      {service.businessCase && (
        <section className="py-16 md:py-20 bg-neutral-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: getDuration(0.5) }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
                {service.businessCase.title || 'Why This Service Exists'}
              </h2>
              <p className="text-lg text-neutral-600">
                Understanding the problems we solve
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {service.businessCase.problems?.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: getDuration(0.4), delay: getDelay(index * 0.1) }}
                  className="bg-white rounded-xl p-6 shadow-md border-l-4 border-accent-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icons.Warning className="w-5 h-5 text-amber-600" />
                    </div>
                    <p className="text-neutral-700 text-lg">{problem}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How It Works Section */}
      {service.howItWorks && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: getDuration(0.5) }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-neutral-600">
                Our simple process to get you started
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {service.howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: getDuration(0.5), delay: getDelay(index * 0.15) }}
                  className="relative"
                >
                  {index < service.howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-accent-200 -translate-x-1/2 z-0" />
                  )}
                  
                  <div className="bg-neutral-50 rounded-xl p-6 text-center relative z-10">
                    <div className="w-16 h-16 bg-accent-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-primary-900 text-lg mb-2">{step.title}</h3>
                    <p className="text-neutral-600 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services & Benefits Grid */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: getDuration(0.5) }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">
                What We Offer
              </h2>
              <ul className="space-y-4">
                {service.services?.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: getDuration(0.3), delay: getDelay(index * 0.1) }}
                    className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm"
                  >
                    <Icons.Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {service.benefits && (
              <motion.div
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: getDuration(0.5) }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">
                  Key Benefits
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: getDuration(0.3), delay: getDelay(index * 0.1) }}
                      className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm border-l-4 border-accent-500"
                    >
                      <Icons.Star className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 font-medium">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {service.advantages && service.advantages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: getDuration(0.5), delay: getDelay(0.2) }}
              className="mt-12 bg-primary-900 rounded-2xl p-8 text-white"
            >
              <h3 className="text-xl font-bold mb-6 text-center">Design Advantage</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {service.advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/10 rounded-lg p-3">
                    <Icons.Star className="w-5 h-5 text-accent-400 flex-shrink-0" />
                    <span className="text-sm">{advantage}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Pricing Section */}
      {service.pricing && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: getDuration(0.5) }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
                Transparent Pricing
              </h2>
              <p className="text-lg text-neutral-600">
                Clear, honest pricing with no hidden fees
              </p>
            </motion.div>
            
            <ServicePricing
              amount={service.pricing.amount}
              unit={service.pricing.unit}
              note={service.pricing.note}
            />
          </div>
        </section>
      )}

      {/* Portfolio Proof Section */}
      {service.portfolioProof && (
        <section className="py-16 md:py-20 bg-green-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: getDuration(0.5) }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
                Portfolio Proof
              </h2>
              <p className="text-lg text-green-700 mb-8">
                {service.portfolioProof.attribution}
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                {service.portfolioProof.websites?.map((website, index) => (
                  <motion.a
                    key={index}
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 min-w-[200px]"
                    whileHover={prefersReducedMotion ? {} : { y: -5, scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icons.Globe className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-green-700 font-bold text-lg">{website.name}</div>
                    <div className="text-green-600 text-sm mt-2 flex items-center justify-center gap-1">
                      Visit Site
                      <Icons.ExternalLink className="w-4 h-4" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Portfolio Items */}
      {portfolioItems.length > 0 && (
        <section className="py-16 md:py-20 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: getDuration(0.5) }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
                Our Work
              </h2>
              <p className="text-lg text-neutral-600">
                Examples of this service in action
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.slice(0, 6).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: getDuration(0.4), delay: getDelay(index * 0.1) }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[4/3] bg-neutral-200 relative">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    {item.featured && (
                      <span className="absolute top-3 right-3 bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-primary-900">{item.title}</h3>
                    <p className="text-neutral-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: getDuration(0.5) }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how {service.name.toLowerCase()} can help your business grow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {service.ctas?.map((cta, index) => (
                <motion.div
                  key={index}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                >
                  <Link to={`/contact?service=${cta.servicePreselect || service.id}`}>
                    <Button
                      variant={cta.primary ? 'primary' : 'outline'}
                      size="lg"
                      className={`min-h-[48px] min-w-[200px] ${!cta.primary ? 'border-white text-white hover:bg-white hover:text-primary-900' : ''}`}
                    >
                      {cta.label}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* More Services Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: getDuration(0.5) }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
              Explore More Services
            </h2>
            <p className="text-lg text-neutral-600">
              Discover other ways we can help your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((otherService, index) => (
              <motion.div
                key={otherService.id}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: getDuration(0.4), delay: getDelay(index * 0.1) }}
              >
                <Link
                  to={`/services/${otherService.id}`}
                  className="block bg-neutral-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 h-full border border-neutral-200 hover:border-accent-300"
                >
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                    <ServiceIcon serviceId={otherService.id} className="w-6 h-6 text-accent-600" />
                  </div>
                  <h3 className="font-bold text-primary-900 text-lg mb-2">{otherService.name}</h3>
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{otherService.tagline}</p>
                  <span className="text-accent-600 font-medium text-sm inline-flex items-center gap-1">
                    Learn More
                    <Icons.ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {service.isFoundational && (
        <div className="bg-neutral-100 py-4 text-center">
          <p className="text-neutral-600 text-sm italic">
            This service supports the ecosystem — it does not lead it.
          </p>
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;
