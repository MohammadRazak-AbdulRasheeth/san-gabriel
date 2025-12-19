import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getServiceById, getServicesByOrder } from '../data/services';
import { getPortfolioByService } from '../data/portfolio';
import Button from '../components/ui/Button';
import ServicePricing from '../components/sections/services/ServicePricing';
import { Icons } from '../components/ui/ServiceIcons';
import useReducedMotion from '../hooks/useReducedMotion';

// Map service IDs to their corresponding images
// Using promotional images where they fit best
const serviceImages = {
  'revenue-generating-advertising': '/11servicesimages/1.REVENUE-GENERATING ADVERTISING SOLUTIONS .png',
  'branding-banners-signs': '/requirementimage/White-Label-Conferences.png', // Conference essentials - banners, swag
  'mobile-advertising': '/11servicesimages/3.MOBILE ADVERTISING – TRUCKING FLEETS .png',
  'monetize-location': '/11servicesimages/4.MONETIZE YOUR LOCATION.png',
  'advertise-with-us': '/requirementimage/White-Label-Healthcare.png', // Healthcare/SMB prints
  'social-media-digital': '/11servicesimages/6.SOCIAL MEDIA & DIGITAL ADVERTISING SERVICES.png',
  'website-design': '/11servicesimages/7.WEBSITE DESIGN & DEVELOPMENT.png',
  'events-community': '/requirementimage/Community-Charity-Events.png', // Community events - marathon merchandise
  'incorporation-services': '/11servicesimages/9.INCORPORATION & NOT-FOR-PROFIT SERVICES .png',
  'strategy-technology-ai': '/11servicesimages/10.STRATEGY, TECHNOLOGY & AI.png',
};

/**
 * ServiceDetail Page
 * Individual service page with impressive layout featuring service images
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
  const serviceImage = serviceImages[service.id];

  const getDuration = (duration) => prefersReducedMotion ? 0.01 : duration;
  const getDelay = (delay) => prefersReducedMotion ? 0 : delay;

  return (
    <div className="pt-20">
      {/* Hero Section with Large Image */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Content Side */}
            <motion.div 
              className="w-full lg:w-1/2 px-6 sm:px-8 lg:px-12 py-12 lg:py-20"
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: getDuration(0.6) }}
            >
              {/* Breadcrumb */}
              <nav className="mb-6">
                <ol className="flex items-center gap-2 text-sm text-neutral-500">
                  <li><Link to="/" className="hover:text-primary-900 transition-colors">Home</Link></li>
                  <li>/</li>
                  <li><Link to="/services" className="hover:text-primary-900 transition-colors">Services</Link></li>
                  <li>/</li>
                  <li className="text-primary-900 font-medium">{service.name}</li>
                </ol>
              </nav>

              {/* Service Badge */}
              {service.isCore && (
                <span className="inline-block bg-accent-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                  CORE SERVICE
                </span>
              )}
              {service.isFoundational && (
                <span className="inline-block bg-neutral-700 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                  FOUNDATIONAL SERVICE
                </span>
              )}

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-4">
                {service.name}
              </h1>

              {/* Decorative Wavy Line */}
              <div className="mb-6">
                <svg 
                  width="120" 
                  height="12" 
                  viewBox="0 0 120 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary-900"
                >
                  <path 
                    d="M2 6C2 6 7 2 12 6C17 10 22 6 22 6C22 6 27 2 32 6C37 10 42 6 42 6C42 6 47 2 52 6C57 10 62 6 62 6C62 6 67 2 72 6C77 10 82 6 82 6C82 6 87 2 92 6C97 10 102 6 102 6C102 6 107 2 112 6C117 10 118 6 118 6" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Tagline */}
              <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed">
                {service.tagline}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link to={`/contact?service=${service.id}`}>
                  <Button
                    variant="primary"
                    size="lg"
                    className="bg-primary-900 hover:bg-primary-800 text-white px-8 py-3 rounded-md font-medium"
                  >
                    Contact us
                  </Button>
                </Link>
                <Link to="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white px-8 py-3 rounded-md font-medium"
                  >
                    All Services
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: getDuration(0.6), delay: 0.2 }}
            >
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
                <img
                  src={serviceImage}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Description Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: getDuration(0.5) }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">
              About This Service
            </h2>
            <div className="mb-6">
              <svg width="80" height="8" viewBox="0 0 80 8" fill="none" className="text-primary-900">
                <path d="M2 4C2 4 6 1 10 4C14 7 18 4 18 4C18 4 22 1 26 4C30 7 34 4 34 4C34 4 38 1 42 4C46 7 50 4 50 4C50 4 54 1 58 4C62 7 66 4 66 4C66 4 70 1 74 4C78 7 78 4 78 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="prose prose-lg max-w-none text-neutral-600">
              {service.fullDescription?.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Case Section */}
      {service.businessCase && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Image */}
              <motion.div 
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: getDuration(0.5) }}
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={serviceImage}
                    alt={service.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div 
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: getDuration(0.5), delay: 0.1 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">
                  {service.businessCase.title || 'Why This Service Exists'}
                </h2>
                <div className="mb-6">
                  <svg width="80" height="8" viewBox="0 0 80 8" fill="none" className="text-primary-900">
                    <path d="M2 4C2 4 6 1 10 4C14 7 18 4 18 4C18 4 22 1 26 4C30 7 34 4 34 4C34 4 38 1 42 4C46 7 50 4 50 4C50 4 54 1 58 4C62 7 66 4 66 4C66 4 70 1 74 4C78 7 78 4 78 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <ul className="space-y-4">
                  {service.businessCase.problems?.map((problem, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: getDuration(0.3), delay: getDelay(index * 0.1) }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icons.Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-neutral-700 text-lg">{problem}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* How It Works Section */}
      {service.howItWorks && (
        <section className="py-16 md:py-24 bg-primary-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: getDuration(0.5) }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                How It Works
              </h2>
              <div className="flex justify-center mb-4">
                <svg width="80" height="8" viewBox="0 0 80 8" fill="none" className="text-accent-400">
                  <path d="M2 4C2 4 6 1 10 4C14 7 18 4 18 4C18 4 22 1 26 4C30 7 34 4 34 4C34 4 38 1 42 4C46 7 50 4 50 4C50 4 54 1 58 4C62 7 66 4 66 4C66 4 70 1 74 4C78 7 78 4 78 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-lg text-gray-300">
                Our simple process to get you started
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: getDuration(0.5), delay: getDelay(index * 0.15) }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-accent-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services & Benefits Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-start gap-12">
            {/* Image */}
            <motion.div 
              className="w-full lg:w-1/2 lg:sticky lg:top-24"
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: getDuration(0.5) }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={serviceImage}
                  alt={service.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: getDuration(0.5) }}
            >
              {/* What We Offer */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">
                  What We Offer
                </h2>
                <div className="mb-6">
                  <svg width="80" height="8" viewBox="0 0 80 8" fill="none" className="text-primary-900">
                    <path d="M2 4C2 4 6 1 10 4C14 7 18 4 18 4C18 4 22 1 26 4C30 7 34 4 34 4C34 4 38 1 42 4C46 7 50 4 50 4C50 4 54 1 58 4C62 7 66 4 66 4C66 4 70 1 74 4C78 7 78 4 78 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <ul className="space-y-4">
                  {service.services?.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: getDuration(0.3), delay: getDelay(index * 0.1) }}
                      className="flex items-start gap-3 bg-neutral-50 rounded-lg p-4"
                    >
                      <Icons.Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Key Benefits */}
              {service.benefits && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">
                    Key Benefits
                  </h2>
                  <div className="mb-6">
                    <svg width="80" height="8" viewBox="0 0 80 8" fill="none" className="text-primary-900">
                      <path d="M2 4C2 4 6 1 10 4C14 7 18 4 18 4C18 4 22 1 26 4C30 7 34 4 34 4C34 4 38 1 42 4C46 7 50 4 50 4C50 4 54 1 58 4C62 7 66 4 66 4C66 4 70 1 74 4C78 7 78 4 78 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: getDuration(0.3), delay: getDelay(index * 0.1) }}
                        className="flex items-start gap-3 bg-accent-50 rounded-lg p-4 border-l-4 border-accent-500"
                      >
                        <Icons.Star className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700 font-medium">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>

          {/* Design Advantages */}
          {service.advantages && service.advantages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: getDuration(0.5), delay: getDelay(0.2) }}
              className="mt-16 bg-primary-900 rounded-2xl p-8 text-white"
            >
              <h3 className="text-xl font-bold mb-6 text-center">Design Advantage</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {service.advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/10 rounded-lg p-4">
                    <Icons.Star className="w-5 h-5 text-accent-400 flex-shrink-0" />
                    <span>{advantage}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Pricing Section */}
      {service.pricing && (
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: getDuration(0.5) }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">
                Transparent Pricing
              </h2>
              <div className="flex justify-center mb-4">
                <svg width="80" height="8" viewBox="0 0 80 8" fill="none" className="text-primary-900">
                  <path d="M2 4C2 4 6 1 10 4C14 7 18 4 18 4C18 4 22 1 26 4C30 7 34 4 34 4C34 4 38 1 42 4C46 7 50 4 50 4C50 4 54 1 58 4C62 7 66 4 66 4C66 4 70 1 74 4C78 7 78 4 78 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
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
        <section className="py-16 md:py-24 bg-green-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: getDuration(0.5) }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">
                Portfolio Proof
              </h2>
              <div className="flex justify-center mb-4">
                <svg width="80" height="8" viewBox="0 0 80 8" fill="none" className="text-green-700">
                  <path d="M2 4C2 4 6 1 10 4C14 7 18 4 18 4C18 4 22 1 26 4C30 7 34 4 34 4C34 4 38 1 42 4C46 7 50 4 50 4C50 4 54 1 58 4C62 7 66 4 66 4C66 4 70 1 74 4C78 7 78 4 78 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
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
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: getDuration(0.5) }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">
                Our Work
              </h2>
              <div className="flex justify-center mb-4">
                <svg width="80" height="8" viewBox="0 0 80 8" fill="none" className="text-primary-900">
                  <path d="M2 4C2 4 6 1 10 4C14 7 18 4 18 4C18 4 22 1 26 4C30 7 34 4 34 4C34 4 38 1 42 4C46 7 50 4 50 4C50 4 54 1 58 4C62 7 66 4 66 4C66 4 70 1 74 4C78 7 78 4 78 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
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
                  className="bg-neutral-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
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
      <section className="py-16 md:py-24 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-accent-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-green-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: getDuration(0.5) }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <div className="flex justify-center mb-6">
              <svg width="80" height="8" viewBox="0 0 80 8" fill="none" className="text-accent-400">
                <path d="M2 4C2 4 6 1 10 4C14 7 18 4 18 4C18 4 22 1 26 4C30 7 34 4 34 4C34 4 38 1 42 4C46 7 50 4 50 4C50 4 54 1 58 4C62 7 66 4 66 4C66 4 70 1 74 4C78 7 78 4 78 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how {service.name.toLowerCase()} can help your business grow.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to={`/contact?service=${service.id}`}>
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-md font-medium min-w-[200px]"
                >
                  Contact us
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary-900 px-8 py-3 rounded-md font-medium min-w-[200px]"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* More Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: getDuration(0.5) }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">
              Explore More Services
            </h2>
            <div className="flex justify-center mb-4">
              <svg width="80" height="8" viewBox="0 0 80 8" fill="none" className="text-primary-900">
                <path d="M2 4C2 4 6 1 10 4C14 7 18 4 18 4C18 4 22 1 26 4C30 7 34 4 34 4C34 4 38 1 42 4C46 7 50 4 50 4C50 4 54 1 58 4C62 7 66 4 66 4C66 4 70 1 74 4C78 7 78 4 78 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="text-lg text-neutral-600">
              Discover other ways we can help your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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
                  className="block bg-neutral-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full border border-neutral-200 hover:border-accent-300 group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={serviceImages[otherService.id]}
                      alt={otherService.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-primary-900 text-lg mb-2">{otherService.name}</h3>
                    <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{otherService.tagline}</p>
                    <span className="text-accent-600 font-medium text-sm inline-flex items-center gap-1">
                      Learn More
                      <Icons.ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white"
              >
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
