import { HiOutlineCheck, HiOutlineX } from 'react-icons/hi';
import ScrollReveal, { StaggeredScrollReveal } from '../../ui/ScrollReveal';
import { ownerOperatorContent } from '../../../data/ownerOperatorContent';

/**
 * QualificationSection Component
 * Displays who the software is and isn't for in two columns
 * Requirements: 8.1-8.3
 */
const QualificationSection = () => {
  const { qualification } = ownerOperatorContent;

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title - Requirement 8.1 */}
        <ScrollReveal direction="up" duration={0.6}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 text-center mb-16">
            {qualification.title}
          </h2>
        </ScrollReveal>

        {/* Two-column layout for "For You" and "Not For You" */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {/* For You Column - Requirement 8.2 */}
          <div className="bg-white rounded-2xl p-8 border-2 border-green-200 shadow-sm">
            <ScrollReveal direction="up" delay={0.1} duration={0.5}>
              <h3 className="text-xl font-semibold text-green-700 mb-6 text-center flex items-center justify-center gap-2">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <HiOutlineCheck className="w-5 h-5 text-green-600" aria-hidden="true" />
                </span>
                This Is For You
              </h3>
            </ScrollReveal>
            <StaggeredScrollReveal 
              staggerDelay={0.1} 
              direction="up" 
              className="space-y-4"
            >
              {qualification.forYou.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                >
                  <HiOutlineCheck 
                    className="w-5 h-5 text-green-600 flex-shrink-0" 
                    aria-hidden="true" 
                  />
                  <p className="text-neutral-700">{item}</p>
                </div>
              ))}
            </StaggeredScrollReveal>
          </div>

          {/* Not For You Column - Requirement 8.3 */}
          <div className="bg-white rounded-2xl p-8 border-2 border-neutral-200 shadow-sm">
            <ScrollReveal direction="up" delay={0.2} duration={0.5}>
              <h3 className="text-xl font-semibold text-neutral-600 mb-6 text-center flex items-center justify-center gap-2">
                <span className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center">
                  <HiOutlineX className="w-5 h-5 text-neutral-500" aria-hidden="true" />
                </span>
                Not For You
              </h3>
            </ScrollReveal>
            <StaggeredScrollReveal 
              staggerDelay={0.1} 
              direction="up" 
              className="space-y-4"
            >
              {qualification.notForYou.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg"
                >
                  <HiOutlineX 
                    className="w-5 h-5 text-neutral-400 flex-shrink-0" 
                    aria-hidden="true" 
                  />
                  <p className="text-neutral-600">{item}</p>
                </div>
              ))}
            </StaggeredScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
