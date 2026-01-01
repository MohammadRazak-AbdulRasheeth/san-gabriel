import React, { useEffect } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

const FormNavigation = ({ 
  currentStep, 
  totalSteps, 
  onBack, 
  onNext, 
  canProceed, 
  isLastStep 
}) => {
  const isFirstStep = currentStep === 1;

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && canProceed && !isLastStep) {
        e.preventDefault();
        onNext();
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [canProceed, isLastStep, onNext]);

  return (
    <div className="flex items-center justify-between pt-6 border-t border-neutral-200">
      {/* Back Button */}
      <button
        type="button"
        onClick={onBack}
        disabled={isFirstStep}
        className={`
          flex items-center gap-2 px-6 py-3 rounded-lg font-semibold
          transition-all duration-200
          ${isFirstStep 
            ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed' 
            : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400'
          }
        `}
        aria-label="Go to previous step"
        aria-disabled={isFirstStep}
      >
        <HiArrowLeft className="w-5 h-5" aria-hidden="true" />
        <span>Back</span>
      </button>

      {/* Next Button (hidden on last step) */}
      {!isLastStep && (
        <button
          type="button"
          onClick={onNext}
          disabled={!canProceed}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-lg font-semibold
            transition-all duration-200
            ${!canProceed
              ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
              : 'bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500'
            }
          `}
          aria-label="Go to next step"
          aria-disabled={!canProceed}
        >
          <span>Next</span>
          <HiArrowRight className="w-5 h-5" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

export default FormNavigation;
