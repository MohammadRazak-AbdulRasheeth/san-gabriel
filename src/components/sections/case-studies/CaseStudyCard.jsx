import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Custom SVG Icons
const ArrowRightIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const CheckCircleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

/**
 * CaseStudyCard Component
 * Displays individual case study with title, client, challenge, strategy, execution, outcomes
 * Professional presentation emphasizing results
 * Requirements: 13.2
 */
const CaseStudyCard = ({ caseStudy, index = 0 }) => {
  const {
    id,
    title,
    client,
    industry,
    services,
    challenge,
    strategy,
    execution,
    outcomes,
    testimonial,
    featured
  } = caseStudy;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
        featured ? 'ring-2 ring-blue-600' : ''
      }`}
    >
      {featured && (
        <div className="bg-blue-600 text-white text-xs font-semibold px-4 py-2 text-center">
          Featured Case Study
        </div>
      )}

      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{client}</p>
        </div>

        {/* Challenge */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
          <p className="text-gray-700 leading-relaxed">{challenge}</p>
        </div>

        {/* Strategy */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h4>
          <p className="text-gray-700 leading-relaxed">{strategy}</p>
        </div>

        {/* Execution */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Execution</h4>
          <p className="text-gray-700 leading-relaxed">{execution}</p>
        </div>

        {/* Outcomes */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Measurable Outcomes</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {outcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-lg p-4 border border-gray-200"
              >
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{outcome.metric}</p>
                    <p className="text-2xl font-bold text-blue-600 mt-1">{outcome.result}</p>
                    <p className="text-xs text-gray-600 mt-1">{outcome.timeframe}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        {testimonial && (
          <div className="mb-6 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
            <blockquote className="text-gray-700 italic mb-3">
              "{testimonial.quote}"
            </blockquote>
            <div className="text-sm">
              <p className="font-semibold text-gray-900">{testimonial.author}</p>
              <p className="text-gray-600">{testimonial.company}</p>
            </div>
          </div>
        )}

        {/* Link to full case study (if available) */}
        <div className="pt-4 border-t border-gray-200">
          <Link
            to={`/case-studies/${id}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
          >
            View Full Case Study
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;
