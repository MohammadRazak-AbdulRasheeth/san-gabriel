import React from 'react';
import { HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';

const FormSubmission = ({ onSubmit, isSubmitting, error, submissionId }) => {
  // If submission was successful, show confirmation
  if (submissionId) {
    return (
      <div className="py-12 text-center" role="status" aria-live="polite">
        <div className="flex justify-center mb-6">
          <HiCheckCircle className="w-20 h-20 text-green-500" aria-hidden="true" />
        </div>
        
        <h2 className="text-3xl font-bold text-primary-900 mb-4">
          Submission Successful!
        </h2>
        
        <p className="text-lg text-neutral-600 mb-4">
          Thank you for completing the onboarding form.
        </p>
        
        <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 max-w-md mx-auto mb-6">
          <p className="text-sm text-neutral-600 mb-2">
            Your submission ID:
          </p>
          <p className="text-xl font-mono font-semibold text-primary-900 break-all" aria-label={`Submission ID: ${submissionId}`}>
            {submissionId}
          </p>
        </div>
        
        <p className="text-neutral-600">
          We'll be in touch soon to get you set up.
        </p>
      </div>
    );
  }

  // Otherwise, show submit button
  return (
    <div className="pt-6 border-t border-neutral-200">
      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3" role="alert" aria-live="assertive">
          <HiExclamationCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h3 className="font-semibold text-red-900 mb-1">
              Submission Failed
            </h3>
            <p className="text-sm text-red-700">
              {error}
            </p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onSubmit}
          disabled={isSubmitting}
          className={`
            px-8 py-3 rounded-lg font-semibold text-lg
            transition-all duration-200
            ${isSubmitting
              ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
              : 'bg-accent-500 text-white hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-400'
            }
          `}
          aria-label="Submit onboarding form"
          aria-busy={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg 
                className="animate-spin h-5 w-5" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Submitting...
            </span>
          ) : (
            'Submit Form'
          )}
        </button>
      </div>
    </div>
  );
};

export default FormSubmission;
