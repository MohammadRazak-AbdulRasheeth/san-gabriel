import { 
  HiOutlineExclamationCircle, 
  HiOutlineRefresh, 
  HiOutlineDocumentText, 
  HiOutlineClock 
} from 'react-icons/hi';
import ScrollReveal from '../../ui/ScrollReveal';
import { ownerOperatorContent } from '../../../data/ownerOperatorContent';

/**
 * Icon mapping for pain points
 */
const iconMap = {
  disconnect: HiOutlineExclamationCircle,
  repeat: HiOutlineRefresh,
  paperwork: HiOutlineDocumentText,
  time: HiOutlineClock
};

/**
 * PainSection Component
 * Displays pain points that owner-operators face
 * Requirements: 3.1-3.3
 */
const PainSection = () => {
  const { pain } = ownerOperatorContent;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" duration={0.6}>
          {/* Section Title - Requirement 3.1 */}
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 text-center mb-12">
            {pain.title}
          </h2>
        </ScrollReveal>

        {/* Pain Points - Requirement 3.2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {pain.points.map((point, index) => {
            const IconComponent = iconMap[point.icon] || HiOutlineExclamationCircle;
            return (
              <ScrollReveal 
                key={index} 
                direction="up" 
                delay={index * 0.1}
                duration={0.5}
              >
                <div className="flex items-start gap-4 p-6 bg-neutral-50 rounded-xl border border-neutral-100">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-red-600" aria-hidden="true" />
                  </div>
                  <p className="text-lg text-neutral-700 leading-relaxed pt-2">
                    {point.text}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bridge Statement - Requirement 3.3 */}
        <ScrollReveal direction="up" delay={0.4} duration={0.6}>
          <p className="text-xl md:text-2xl text-primary-900 font-semibold text-center max-w-3xl mx-auto">
            {pain.bridgeStatement}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PainSection;
