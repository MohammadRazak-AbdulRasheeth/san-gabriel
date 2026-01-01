import { 
  HiOutlineViewGrid, 
  HiOutlineLightningBolt, 
  HiOutlineFolder, 
  HiOutlineMinusCircle,
  HiOutlineClock,
  HiOutlineCheck,
  HiOutlineHeart,
  HiOutlineAdjustments
} from 'react-icons/hi';
import ScrollReveal, { StaggeredScrollReveal } from '../../ui/ScrollReveal';
import { ownerOperatorContent } from '../../../data/ownerOperatorContent';

/**
 * Icon mapping for capabilities
 */
const capabilityIconMap = {
  centralize: HiOutlineViewGrid,
  automate: HiOutlineLightningBolt,
  organize: HiOutlineFolder,
  reduce: HiOutlineMinusCircle
};

/**
 * Icon mapping for outcomes
 */
const outcomeIconMap = {
  clock: HiOutlineClock,
  check: HiOutlineCheck,
  calm: HiOutlineHeart,
  fix: HiOutlineAdjustments
};

/**
 * SolutionSection Component
 * Displays what the software does and the outcomes
 * Requirements: 4.1-4.3
 */
const SolutionSection = () => {
  const { solution } = ownerOperatorContent;

  return (
    <section id="solution-section" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title - Requirement 4.1 */}
        <ScrollReveal direction="up" duration={0.6}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 text-center mb-16">
            {solution.title}
          </h2>
        </ScrollReveal>

        {/* Two-column layout for capabilities and outcomes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Capabilities Column - Requirement 4.2 */}
          <div>
            <ScrollReveal direction="up" delay={0.1} duration={0.5}>
              <h3 className="text-xl font-semibold text-primary-800 mb-6 text-center lg:text-left">
                What It Does
              </h3>
            </ScrollReveal>
            <StaggeredScrollReveal 
              staggerDelay={0.1} 
              direction="up" 
              className="space-y-4"
            >
              {solution.capabilities.map((capability, index) => {
                const IconComponent = capabilityIconMap[capability.icon] || HiOutlineViewGrid;
                return (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-5 bg-white rounded-xl border border-neutral-100 shadow-sm"
                  >
                    <div className="flex-shrink-0 w-11 h-11 bg-primary-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary-700" aria-hidden="true" />
                    </div>
                    <p className="text-lg text-neutral-700 leading-relaxed pt-1.5">
                      {capability.text}
                    </p>
                  </div>
                );
              })}
            </StaggeredScrollReveal>
          </div>

          {/* Outcomes Column - Requirement 4.3 */}
          <div>
            <ScrollReveal direction="up" delay={0.2} duration={0.5}>
              <h3 className="text-xl font-semibold text-primary-800 mb-6 text-center lg:text-left">
                What You Get
              </h3>
            </ScrollReveal>
            <StaggeredScrollReveal 
              staggerDelay={0.1} 
              direction="up" 
              className="space-y-4"
            >
              {solution.outcomes.map((outcome, index) => {
                const IconComponent = outcomeIconMap[outcome.icon] || HiOutlineCheck;
                return (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-5 bg-white rounded-xl border border-neutral-100 shadow-sm"
                  >
                    <div className="flex-shrink-0 w-11 h-11 bg-accent-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-accent-600" aria-hidden="true" />
                    </div>
                    <p className="text-lg text-neutral-700 leading-relaxed pt-1.5">
                      {outcome.text}
                    </p>
                  </div>
                );
              })}
            </StaggeredScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
