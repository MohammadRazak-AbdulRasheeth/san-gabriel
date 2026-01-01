import { HiOutlineGift, HiOutlineUserGroup, HiOutlineShieldCheck } from 'react-icons/hi';
import ScrollReveal, { StaggeredScrollReveal } from '../../ui/ScrollReveal';
import { ownerOperatorContent } from '../../../data/ownerOperatorContent';

/**
 * Icon mapping for urgency points
 */
const iconMap = [
  HiOutlineGift,
  HiOutlineUserGroup,
  HiOutlineShieldCheck
];

/**
 * UrgencySection Component
 * Displays the "First 100 free" offer with urgency styling
 * Requirements: 6.1-6.3
 */
const UrgencySection = () => {
  const { urgency } = ownerOperatorContent;

  return (
    <section className="py-20 bg-gradient-to-br from-accent-50 via-white to-accent-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title - Requirement 6.1 */}
        <ScrollReveal direction="up" duration={0.6}>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
              Limited Availability
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">
              {urgency.title}
            </h2>
          </div>
        </ScrollReveal>

        {/* Offer Points - Requirement 6.2 */}
        <StaggeredScrollReveal 
          staggerDelay={0.1} 
          direction="up" 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
        >
          {urgency.points.map((point, index) => {
            const IconComponent = iconMap[index] || HiOutlineGift;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl border-2 border-accent-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                  <IconComponent className="w-7 h-7 text-accent-600" aria-hidden="true" />
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {point}
                </p>
              </div>
            );
          })}
        </StaggeredScrollReveal>

        {/* Trust Reinforcement - Requirement 6.3 */}
        <ScrollReveal direction="up" delay={0.3} duration={0.6}>
          <div className="text-center">
            <p className="text-lg md:text-xl text-primary-800 font-medium max-w-2xl mx-auto italic">
              "{urgency.trustReinforcement}"
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default UrgencySection;
