import ScrollReveal from '../../ui/ScrollReveal';
import { careersData } from '../../../data/careersData';

/**
 * RolesSection Component
 * Displays both sales paths (Inventory Acquisition and Advertising Sales) side-by-side
 * Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 3.4, 6.1, 6.3
 */
const RolesSection = () => {
  const { roles } = careersData;

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Two Sales Paths. One Opportunity.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the path that fits your strengths. Both roles offer unlimited earning potential.
            </p>
          </div>
        </ScrollReveal>

        {/* Roles Grid - Two columns on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {roles.map((role, index) => (
            <ScrollReveal key={role.id} delay={index * 0.2}>
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:border-orange-300">
                {/* Role Header */}
                <div className="mb-6">
                  <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-3">
                    {role.subtitle}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {role.title}
                  </h3>
                  <p className="text-gray-600">
                    {role.summary}
                  </p>
                </div>

                {/* Responsibilities / Target Customers */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {role.id === 'inventory' ? 'Who You Onboard:' : 'Who You Sell To:'}
                  </h4>
                  <ul className="space-y-2">
                    {(role.responsibilities || role.targetCustomers).map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pitch Examples */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Example Pitches:
                  </h4>
                  <div className="space-y-2">
                    {role.pitchExamples.map((pitch, idx) => (
                      <div
                        key={idx}
                        className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded"
                      >
                        <p className="text-gray-800 italic">"{pitch}"</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compensation */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Your Earnings:
                  </h4>
                  <ul className="space-y-2">
                    {role.compensation.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal Candidate */}
                <div className="mt-auto">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Ideal Candidate:
                  </h4>
                  <ul className="space-y-2">
                    {role.idealCandidate.map((trait, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{trait}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
