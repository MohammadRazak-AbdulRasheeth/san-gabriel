import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import FormHeader from '../components/forms/onboarding/FormHeader';
import FormNavigation from '../components/forms/onboarding/FormNavigation';
import FormSubmission from '../components/forms/onboarding/FormSubmission';
import BusinessInformationStep from '../components/forms/onboarding/BusinessInformationStep';
import QualificationStep from '../components/forms/onboarding/QualificationStep';
import TimeWorkflowStep from '../components/forms/onboarding/TimeWorkflowStep';
import CurrentSystemsStep from '../components/forms/onboarding/CurrentSystemsStep';
import TechnicalSetupStep from '../components/forms/onboarding/TechnicalSetupStep';
import ConfirmationConsentStep from '../components/forms/onboarding/ConfirmationConsentStep';
import OptionalInformationStep from '../components/forms/onboarding/OptionalInformationStep';
import { onboardingFormConfig } from '../data/onboardingFormConfig';
import { onboardingService } from '../services/onboardingService';
import { scrollToFirstError } from '../utils/formHelpers';

const OnboardingForm = () => {
  const location = useLocation();
  
  // Determine form mode from URL path
  const mode = location.pathname.includes('/short') ? 'short' : 'full';
  const formConfig = mode === 'short' ? onboardingFormConfig.shortForm : onboardingFormConfig.fullForm;
  
  // Form state
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [submissionId, setSubmissionId] = useState(null);
  const [showTimeoutWarning, setShowTimeoutWarning] = useState(false);
  const [lastActivityTime, setLastActivityTime] = useState(Date.now());

  // Session timeout configuration (30 minutes of inactivity)
  const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
  const WARNING_BEFORE_TIMEOUT = 5 * 60 * 1000; // Show warning 5 minutes before timeout

  // Track user activity
  useEffect(() => {
    const updateActivity = () => {
      setLastActivityTime(Date.now());
      setShowTimeoutWarning(false);
    };

    // Listen for user interactions
    const events = ['mousedown', 'keydown', 'scroll', 'touchstart'];
    events.forEach(event => {
      window.addEventListener(event, updateActivity);
    });

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, updateActivity);
      });
    };
  }, []);

  // Check for session timeout
  useEffect(() => {
    const checkTimeout = setInterval(() => {
      const timeSinceActivity = Date.now() - lastActivityTime;
      const timeUntilTimeout = SESSION_TIMEOUT - timeSinceActivity;

      // Show warning if approaching timeout
      if (timeUntilTimeout <= WARNING_BEFORE_TIMEOUT && timeUntilTimeout > 0 && !submissionId) {
        setShowTimeoutWarning(true);
      }

      // Clear warning if user becomes active again
      if (timeUntilTimeout > WARNING_BEFORE_TIMEOUT) {
        setShowTimeoutWarning(false);
      }
    }, 60000); // Check every minute

    return () => clearInterval(checkTimeout);
  }, [lastActivityTime, submissionId, SESSION_TIMEOUT, WARNING_BEFORE_TIMEOUT]);

  // Dismiss timeout warning
  const dismissTimeoutWarning = () => {
    setShowTimeoutWarning(false);
    setLastActivityTime(Date.now());
  };

  // Load draft on mount
  useEffect(() => {
    const draft = onboardingService.loadDraft();
    if (draft) {
      setFormData(draft);
    }
  }, []);

  // Auto-save draft every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (Object.keys(formData).length > 0 && !submissionId) {
        onboardingService.saveDraft(formData);
      }
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [formData, submissionId]);

  // Handle field changes
  const handleFieldChange = useCallback((field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  }, [errors]);

  // Validate current step
  const validateCurrentStep = () => {
    const currentStep = formConfig.steps[currentStepIndex];
    const newErrors = {};

    switch (currentStep) {
      case 'businessInformation':
        // Required field validation
        if (!formData.legalBusinessName?.trim()) {
          newErrors.legalBusinessName = 'Legal business name is required';
        }
        if (!formData.ownerFullName?.trim()) {
          newErrors.ownerFullName = 'Owner full name is required';
        }
        
        // Email format validation
        if (!formData.email?.trim()) {
          newErrors.email = 'Email is required';
        } else if (!onboardingFormConfig.validation.email.pattern.test(formData.email)) {
          newErrors.email = onboardingFormConfig.validation.email.message;
        }
        
        // Phone number format validation
        if (!formData.phone?.trim()) {
          newErrors.phone = 'Phone number is required';
        } else if (!onboardingFormConfig.validation.phone.pattern.test(formData.phone)) {
          newErrors.phone = onboardingFormConfig.validation.phone.message;
        }
        
        if (!formData.businessAddress?.trim()) {
          newErrors.businessAddress = 'Business address is required';
        }
        if (!formData.businessType) {
          newErrors.businessType = 'Business type is required';
        }
        if (!formData.yearsInOperation || formData.yearsInOperation < 0) {
          newErrors.yearsInOperation = 'Years in operation is required and must be a positive number';
        }
        break;

      case 'qualification':
        if (formData.isPrimaryOperator === undefined || formData.isPrimaryOperator === null) {
          newErrors.isPrimaryOperator = 'This field is required';
        }
        if (!formData.numberOfEmployees || formData.numberOfEmployees < 1) {
          newErrors.numberOfEmployees = 'Number of employees is required and must be at least 1';
        }
        if (formData.responsibleForDailyOps === undefined || formData.responsibleForDailyOps === null) {
          newErrors.responsibleForDailyOps = 'This field is required';
        }
        if (formData.handlesAdminWork === undefined || formData.handlesAdminWork === null) {
          newErrors.handlesAdminWork = 'This field is required';
        }
        break;

      case 'timeWorkflow':
        if (!formData.hoursPerWeekOnAdmin || formData.hoursPerWeekOnAdmin < 0) {
          newErrors.hoursPerWeekOnAdmin = 'Hours per week is required and must be a positive number';
        }
        if (!formData.top3RepetitiveTasks || formData.top3RepetitiveTasks.filter(t => t?.trim()).length < 3) {
          newErrors.top3RepetitiveTasks = 'Please provide 3 repetitive tasks';
        }
        if (!formData.biggestTimeDrain?.trim()) {
          newErrors.biggestTimeDrain = 'This field is required';
        } else if (formData.biggestTimeDrain.length > onboardingFormConfig.validation.textareaMaxLength) {
          newErrors.biggestTimeDrain = `Maximum ${onboardingFormConfig.validation.textareaMaxLength} characters allowed`;
        }
        if (!formData.problemToSolveWithExtraTime?.trim()) {
          newErrors.problemToSolveWithExtraTime = 'This field is required';
        } else if (formData.problemToSolveWithExtraTime.length > onboardingFormConfig.validation.textareaMaxLength) {
          newErrors.problemToSolveWithExtraTime = `Maximum ${onboardingFormConfig.validation.textareaMaxLength} characters allowed`;
        }
        break;

      case 'currentSystems':
        // All fields are optional or allow "None"
        break;

      case 'technicalSetup':
        // Email confirmation matching validation
        if (!formData.preferredEmail?.trim()) {
          newErrors.preferredEmail = 'Preferred email is required';
        } else if (!onboardingFormConfig.validation.email.pattern.test(formData.preferredEmail)) {
          newErrors.preferredEmail = onboardingFormConfig.validation.email.message;
        }
        
        if (!formData.confirmEmail?.trim()) {
          newErrors.confirmEmail = 'Please confirm your email address';
        } else if (formData.preferredEmail && formData.preferredEmail !== formData.confirmEmail) {
          newErrors.confirmEmail = 'Email addresses must match';
        }
        
        if (!formData.primaryDevice) {
          newErrors.primaryDevice = 'Primary device is required';
        }
        if (!formData.operatingSystem) {
          newErrors.operatingSystem = 'Operating system is required';
        }
        break;

      case 'confirmationConsent':
        if (!formData.timeZone) {
          newErrors.timeZone = 'Time zone is required';
        }
        if (!formData.bestContactMethod) {
          newErrors.bestContactMethod = 'Contact method is required';
        }
        
        // Consent checkbox validation
        if (!formData.agreesToAttendOrReschedule) {
          newErrors.agreesToAttendOrReschedule = 'You must agree to attend or reschedule';
        }
        if (!formData.understandsFirst100Limit) {
          newErrors.understandsFirst100Limit = 'This confirmation is required';
        }
        if (!formData.understandsEarlyAdoption) {
          newErrors.understandsEarlyAdoption = 'This confirmation is required';
        }
        if (!formData.understandsFeedbackRequest) {
          newErrors.understandsFeedbackRequest = 'This confirmation is required';
        }
        if (!formData.consentsToStoreInfo) {
          newErrors.consentsToStoreInfo = 'This consent is required';
        }
        if (!formData.consentsToContact) {
          newErrors.consentsToContact = 'This consent is required';
        }
        if (!formData.agreesToTerms) {
          newErrors.agreesToTerms = 'You must agree to the terms';
        }
        break;

      case 'optionalInformation':
        // All fields are optional
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle next step
  const handleNext = () => {
    if (validateCurrentStep()) {
      setCurrentStepIndex(prev => Math.min(prev + 1, formConfig.steps.length - 1));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollToFirstError();
    }
  };

  // Handle previous step
  const handleBack = () => {
    setCurrentStepIndex(prev => Math.max(prev - 1, 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!validateCurrentStep()) {
      scrollToFirstError();
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      const result = await onboardingService.submitOnboarding(formData);
      setSubmissionId(result.submissionId);
      onboardingService.clearDraft();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      // Preserve data on submission failure - formData state is already maintained
      setSubmissionError(error.message || 'An error occurred while submitting the form. Please try again.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render current step component
  const renderCurrentStep = () => {
    const currentStep = formConfig.steps[currentStepIndex];

    const stepProps = {
      data: formData,
      onChange: handleFieldChange,
      errors: errors
    };

    switch (currentStep) {
      case 'businessInformation':
        return <BusinessInformationStep {...stepProps} />;
      case 'qualification':
        return <QualificationStep {...stepProps} />;
      case 'timeWorkflow':
        return <TimeWorkflowStep {...stepProps} />;
      case 'currentSystems':
        return <CurrentSystemsStep {...stepProps} />;
      case 'technicalSetup':
        return <TechnicalSetupStep {...stepProps} />;
      case 'confirmationConsent':
        return <ConfirmationConsentStep {...stepProps} />;
      case 'optionalInformation':
        return <OptionalInformationStep {...stepProps} />;
      default:
        return null;
    }
  };

  const isLastStep = currentStepIndex === formConfig.steps.length - 1;
  const canProceed = Object.keys(errors).length === 0;

  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      <SEO 
        title={formConfig.title}
        description={formConfig.description}
      />
      
      {/* ARIA live region for form errors */}
      <div 
        role="alert" 
        aria-live="polite" 
        aria-atomic="true"
        className="sr-only"
      >
        {Object.keys(errors).length > 0 && (
          `Form has ${Object.keys(errors).length} error${Object.keys(errors).length > 1 ? 's' : ''}. Please review and correct the highlighted fields.`
        )}
      </div>

      {/* ARIA live region for submission status */}
      <div 
        role="status" 
        aria-live="polite" 
        aria-atomic="true"
        className="sr-only"
      >
        {isSubmitting && 'Submitting form, please wait...'}
        {submissionId && 'Form submitted successfully!'}
        {submissionError && `Error: ${submissionError}`}
      </div>

      {/* Session Timeout Warning */}
      {showTimeoutWarning && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full mx-4">
          <div className="bg-amber-50 border-2 border-amber-400 rounded-lg shadow-lg p-4" role="alert" aria-live="assertive">
            <div className="flex items-start gap-3">
              <svg 
                className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <div className="flex-1">
                <h3 className="font-semibold text-amber-900 mb-1">
                  Session Timeout Warning
                </h3>
                <p className="text-sm text-amber-800 mb-3">
                  Your session will expire soon due to inactivity. Your progress has been auto-saved, 
                  but please continue filling out the form to avoid losing your session.
                </p>
                <button
                  onClick={dismissTimeoutWarning}
                  className="text-sm font-medium text-amber-900 hover:text-amber-700 underline"
                >
                  I'm still here
                </button>
              </div>
              <button
                onClick={dismissTimeoutWarning}
                className="text-amber-600 hover:text-amber-800"
                aria-label="Dismiss warning"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
          {!submissionId && (
            <FormHeader 
              currentStep={currentStepIndex + 1}
              totalSteps={formConfig.steps.length}
              mode={mode}
            />
          )}

          {/* Current Step Content */}
          <div className="mb-8" role="main" aria-label={`Step ${currentStepIndex + 1} of ${formConfig.steps.length}`}>
            {renderCurrentStep()}
          </div>

          {/* Navigation or Submission */}
          {!submissionId && !isLastStep && (
            <FormNavigation
              currentStep={currentStepIndex + 1}
              totalSteps={formConfig.steps.length}
              onBack={handleBack}
              onNext={handleNext}
              canProceed={canProceed}
              isLastStep={isLastStep}
            />
          )}

          {!submissionId && isLastStep && (
            <FormSubmission
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              error={submissionError}
            />
          )}

          {submissionId && (
            <FormSubmission
              submissionId={submissionId}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingForm;
