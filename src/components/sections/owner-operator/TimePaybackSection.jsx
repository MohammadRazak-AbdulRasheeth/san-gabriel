import { 
  HiOutlineCurrencyDollar, 
  HiOutlineCog, 
  HiOutlineUsers, 
  HiOutlineTrendingUp,
  HiOutlineClipboardList
} from 'react-icons/hi';
import ScrollReveal, { StaggeredScrollReveal } from '../../ui/ScrollReveal';
import { ownerOperatorContent } from '../../../data/ownerOperatorContent';

/**
 * Icon mapping for time payback examples
 */
const iconMap = {
  money: HiOutlineCurrencyDollar,
  operations: HiOutlineCog,
  family: HiOutlineUsers,
  profit: HiOutlineTrendingUp,
  plan: HiOutlineClipboardList
};

/**
 * TimePaybackSection Component
 * Displays what owner-operators could do with saved time
 * Requirements: 5.1-5.3
 */
const TimePaybackSection = () => {
  const { timePayback } = ownerOperatorContent;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title - Requirement 5.1 */}
        <ScrollReveal direction="up" duration={0.6}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 text-center mb-12">
            {timePayback.title}
          </h2>
        </ScrollReveal>

        {/* Time Savings Examples Grid - Requirement 5.2 */}
        <StaggeredScrollReveal 
          staggerDelay={0.08} 
          direction="up" 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto"
        >
          {timePayback.examples.map((example, index) => {
            const IconComponent = iconMap[example.icon] || HiOutlineCog;
            return (
              <div 
                key={index}
                className="flex items-center gap-4 p-5 bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-primary-700" aria-hidden="true" />
                </div>
                <p className="text-lg text-primary-900 font-medium">
                  {example.text}
                </p>
              </div>
            );
          })}
        </StaggeredScrollReveal>

        {/* Positioning Line - Requirement 5.3 */}
        <ScrollReveal direction="up" delay={0.4} duration={0.6}>
          <p className="text-xl md:text-2xl text-primary-900 font-semibold text-center max-w-3xl mx-auto">
            {timePayback.positioningLine}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TimePaybackSection;
