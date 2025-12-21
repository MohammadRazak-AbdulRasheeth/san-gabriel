import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { caseStudies } from '../data/caseStudies';
import useReducedMotion from '../hooks/useReducedMotion';
import SEO from '../components/SEO';

/**
 * CaseStudyDetail Page
 * Individual case study detail page with full content
 */
const CaseStudyDetail = () => {
  const { id } = useParams();
  const prefersReducedMotion = useReducedMotion();
  
  const caseStudy = caseStudies.find(cs => cs.id === id);
  
  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  const getDuration = (duration) => prefersReducedMotion ? 0.01 : duration;

  return (
    <div className="pt-20">
      {/* SEO Meta Tags */}
      <SEO 
        title={`${caseStudy.title} - Case Study | San Gabriel Solutions`}
        description={caseStudy.challenge}
        keywords={`case study, ${caseStudy.client}, ${caseStudy.industry}, marketing success`}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: getDuration(0.6) }}
          >
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-gray-300">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li>/</li>
                <li className="text-white font-medium">{caseStudy.client}</li>
              </ol>
            </nav>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {caseStudy.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <div>
                <span className="font-semibold">Client:</span> {caseStudy.client}
              </div>
              <div>
                <span className="font-semibold">Industry:</span> {caseStudy.industry}
              </div>
              {caseStudy.services && caseStudy.services.length > 0 && (
                <div>
                  <span className="font-semibold">Services:</span> {caseStudy.services.join(', ')}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: getDuration(0.5) }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">
              The Challenge
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: getDuration(0.5) }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">
              Our Strategy
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {caseStudy.strategy}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Execution Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: getDuration(0.5) }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">
              Execution
            </h2>
            <div className="prose prose-lg max-w-none">
              {caseStudy.execution.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg text-neutral-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 md:py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: getDuration(0.5) }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Results & Outcomes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: getDuration(0.3), delay: index * 0.1 }}
                  className="bg-white/10 rounded-lg p-6 backdrop-blur-sm"
                >
                  <div className="text-accent-400 text-sm font-semibold mb-2">
                    {outcome.metric}
                  </div>
                  <div className="text-4xl font-bold mb-2">
                    {outcome.result}
                  </div>
                  <div className="text-gray-300 text-sm">
                    in {outcome.timeframe}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      {caseStudy.testimonial && (
        <section className="py-16 md:py-20 bg-neutral-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: getDuration(0.5) }}
              className="bg-white rounded-xl p-8 md:p-12 shadow-lg"
            >
              <svg className="w-12 h-12 text-accent-500 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-xl md:text-2xl text-neutral-800 mb-6 italic">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold text-primary-900">{caseStudy.testimonial.author}</div>
                  <div className="text-neutral-600">{caseStudy.testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: getDuration(0.5) }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Let's discuss how we can help your business achieve its marketing goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-700 transition-colors"
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/case-studies"
                className="inline-block bg-neutral-200 text-neutral-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-300 transition-colors"
              >
                View More Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
