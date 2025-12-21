import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineCheckCircle, HiOutlineStar } from 'react-icons/hi';
import Button from '../../ui/Button';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * ServiceDetailContent Component
 * Display full service information: description, offerings, benefits, process
 * Show related case studies and insights with prominent CTA
 * Requirements: 7.3, 8.3, 9.3, 10.3, 11.3 (san-gabriel-agency-rebrand)
 */
const ServiceDetailContent = ({ service, relatedCaseStudies = [], relatedInsights = [] }) => {
  const prefersReducedMotion = useReducedMotion();

  const getDuration = (duration) => prefersReducedMotion ? 0.01 : duration;
  const getDelay = (delay) => prefersReducedMotion ? 0 : delay;

  return (
    <div>
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

      {/* Offerings & Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Offerings */}
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: getDuration(0.5) }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">
                What We Offer
              </h2>
              <div className="mb-6">
                <svg width="80" height="8" viewBox="0 0 80 8" fill="none" className="text-primary-900">
                  <path d="M2 4C2 4 6 1 10 4C14 7 18 4 18 4C18 4 22 1 26 4C30 7 34 4 34 4C34 4 38 1 42 4C46 7 50 4 50 4C50 4 54 1 58 4C62 7 66 4 66 4C66 4 70 1 74 4C78 7 78 4 78 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <ul className="space-y-4">
                {service.offerings?.map((offering, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: getDuration(0.3), delay: getDelay(index * 0.1) }}
                    className="flex items-start gap-3 bg-neutral-50 rounded-lg p-4"
                  >
                    <HiOutlineCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{offering}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: getDuration(0.5) }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">
                Key Benefits
              </h2>
              <div className="mb-6">
                <svg width="80" height="8" viewBox="0 0 80 8" fill="none" className="text-primary-900">
                  <path d="M2 4C2 4 6 1 10 4C14 7 18 4 18 4C18 4 22 1 26 4C30 7 34 4 34 4C34 4 38 1 42 4C46 7 50 4 50 4C50 4 54 1 58 4C62 7 66 4 66 4C66 4 70 1 74 4C78 7 78 4 78 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <ul className="space-y-4">
                {service.benefits?.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: getDuration(0.3), delay: getDelay(index * 0.1) }}
                    className="flex items-start gap-3 bg-accent-50 rounded-lg p-4 border-l-4 border-accent-500"
                  >
                    <HiOutlineStar className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700 font-medium">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      {service.process && service.process.length > 0 && (
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
                Our Process
              </h2>
              <div className="flex justify-center mb-4">
                <svg width="80" height="8" viewBox="0 0 80 8" fill="none" className="text-accent-400">
                  <path d="M2 4C2 4 6 1 10 4C14 7 18 4 18 4C18 4 22 1 26 4C30 7 34 4 34 4C34 4 38 1 42 4C46 7 50 4 50 4C50 4 54 1 58 4C62 7 66 4 66 4C66 4 70 1 74 4C78 7 78 4 78 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-lg text-gray-300">
                Our proven approach to delivering results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, index) => (
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

      {/* Related Case Studies Section */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: getDuration(0.5) }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">
                Success Stories
              </h2>
              <div className="flex justify-center mb-4">
                <svg width="80" height="8" viewBox="0 0 80 8" fill="none" className="text-primary-900">
                  <path d="M2 4C2 4 6 1 10 4C14 7 18 4 18 4C18 4 22 1 26 4C30 7 34 4 34 4C34 4 38 1 42 4C46 7 50 4 50 4C50 4 54 1 58 4C62 7 66 4 66 4C66 4 70 1 74 4C78 7 78 4 78 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-lg text-neutral-600">
                See how we've helped clients achieve their goals
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedCaseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: getDuration(0.4), delay: getDelay(index * 0.1) }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold text-primary-900 text-lg mb-2">{caseStudy.title}</h3>
                  <p className="text-neutral-600 text-sm mb-4">{caseStudy.client}</p>
                  <Link
                    to="/case-studies"
                    className="text-accent-600 font-medium text-sm hover:text-accent-700"
                  >
                    Read Case Study →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Insights Section */}
      {relatedInsights.length > 0 && (
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
                Related Insights
              </h2>
              <div className="flex justify-center mb-4">
                <svg width="80" height="8" viewBox="0 0 80 8" fill="none" className="text-primary-900">
                  <path d="M2 4C2 4 6 1 10 4C14 7 18 4 18 4C18 4 22 1 26 4C30 7 34 4 34 4C34 4 38 1 42 4C46 7 50 4 50 4C50 4 54 1 58 4C62 7 66 4 66 4C66 4 70 1 74 4C78 7 78 4 78 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-lg text-neutral-600">
                Learn more about this service area
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedInsights.map((insight, index) => (
                <motion.div
                  key={insight.id}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: getDuration(0.4), delay: getDelay(index * 0.1) }}
                  className="bg-neutral-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {insight.category}
                  </span>
                  <h3 className="font-bold text-primary-900 text-lg mb-2">{insight.title}</h3>
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{insight.excerpt}</p>
                  <Link
                    to={`/insights/${insight.slug}`}
                    className="text-accent-600 font-medium text-sm hover:text-accent-700"
                  >
                    Read More →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prominent CTA Section */}
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
              Schedule a consultation to explore how we can work together.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to={`/contact?service=${service.id}`}>
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-md font-medium min-w-[200px]"
                >
                  {service.cta}
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
    </div>
  );
};

export default ServiceDetailContent;
