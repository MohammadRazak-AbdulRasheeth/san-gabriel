import React from 'react';

const FormHeader = ({ currentStep, totalSteps, mode }) => {
  const title = mode === 'short' 
    ? 'Quick Onboarding Form' 
    : 'Owner-Operator Onboarding';
  
  const description = mode === 'short'
    ? 'Complete this short form during your calendar call'
    : 'Help us set up your account and understand your needs';

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">
        {title}
      </h1>
      <p className="text-lg text-neutral-600 mb-6">
        {description}
      </p>
      
      {/* Progress Indicator */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm text-neutral-600">
          <span>Step {currentStep} of {totalSteps}</span>
          <span>{Math.round(progressPercentage)}% Complete</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-neutral-200 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-primary-600 h-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
            role="progressbar"
            aria-valuenow={progressPercentage}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label={`Form progress: ${Math.round(progressPercentage)}% complete`}
          />
        </div>
      </div>
    </div>
  );
};

export default FormHeader;
