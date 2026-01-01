import React from 'react';
import { HiOutlineInformationCircle } from 'react-icons/hi';

/**
 * OptionalInformationStep Component
 * 
 * Collects optional information for future engagement including willingness
 * to provide feedback, interest in advanced features, and interest in consulting.
 * All fields are clearly marked as optional.
 * 
 * Requirements: 21.1-21.5
 */
const OptionalInformationStep = ({ data, onChange, errors }) => {
  const radioGroupClasses = "space-y-2";
  
  const radioLabelClasses = `
    flex items-center p-3 rounded-lg border border-gray-200
    cursor-pointer transition-all duration-200
    hover:bg-gray-50 hover:border-gray-300
  `;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-primary-900 mb-2">
          Optional Information
        </h2>
        <p className="text-neutral-600">
          Help us understand how we can best support you in the future. All questions are optional.
        </p>
      </div>

      {/* Optional Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <HiOutlineInformationCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="text-sm font-medium text-blue-900">
              All questions on this page are optional
            </p>
            <p className="text-sm text-blue-700 mt-1">
              You can skip any or all of these questions. Your responses help us plan future features and support.
            </p>
          </div>
        </div>
      </div>

      {/* Feedback/Testimonial Willingness */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Would you be willing to provide feedback or a testimonial later?
          <span className="text-xs text-neutral-500 ml-2">(Optional)</span>
        </label>
        <div className={radioGroupClasses}>
          <label className={radioLabelClasses}>
            <input
              type="radio"
              name="willingToProvideFeedback"
              value="yes"
              checked={data.willingToProvideFeedback === 'yes'}
              onChange={(e) => onChange('willingToProvideFeedback', e.target.value)}
              className="w-4 h-4 text-orange-500 focus:ring-orange-500 focus:ring-2"
            />
            <span className="ml-3 text-gray-700">Yes, I'd be happy to</span>
          </label>
          
          <label className={radioLabelClasses}>
            <input
              type="radio"
              name="willingToProvideFeedback"
              value="maybe"
              checked={data.willingToProvideFeedback === 'maybe'}
              onChange={(e) => onChange('willingToProvideFeedback', e.target.value)}
              className="w-4 h-4 text-orange-500 focus:ring-orange-500 focus:ring-2"
            />
            <span className="ml-3 text-gray-700">Maybe, ask me later</span>
          </label>
          
          <label className={radioLabelClasses}>
            <input
              type="radio"
              name="willingToProvideFeedback"
              value="no"
              checked={data.willingToProvideFeedback === 'no'}
              onChange={(e) => onChange('willingToProvideFeedback', e.target.value)}
              className="w-4 h-4 text-orange-500 focus:ring-orange-500 focus:ring-2"
            />
            <span className="ml-3 text-gray-700">No, thank you</span>
          </label>
        </div>
        <p className="mt-2 text-xs text-neutral-500">
          Your feedback helps us improve the software for all owner-operators
        </p>
      </div>

      {/* Interest in Advanced Features */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Are you interested in advanced features in the future?
          <span className="text-xs text-neutral-500 ml-2">(Optional)</span>
        </label>
        <div className={radioGroupClasses}>
          <label className={radioLabelClasses}>
            <input
              type="radio"
              name="interestedInAdvancedFeatures"
              value="yes"
              checked={data.interestedInAdvancedFeatures === 'yes'}
              onChange={(e) => onChange('interestedInAdvancedFeatures', e.target.value)}
              className="w-4 h-4 text-orange-500 focus:ring-orange-500 focus:ring-2"
            />
            <span className="ml-3 text-gray-700">Yes, keep me informed</span>
          </label>
          
          <label className={radioLabelClasses}>
            <input
              type="radio"
              name="interestedInAdvancedFeatures"
              value="maybe"
              checked={data.interestedInAdvancedFeatures === 'maybe'}
              onChange={(e) => onChange('interestedInAdvancedFeatures', e.target.value)}
              className="w-4 h-4 text-orange-500 focus:ring-orange-500 focus:ring-2"
            />
            <span className="ml-3 text-gray-700">Maybe, depends on the features</span>
          </label>
          
          <label className={radioLabelClasses}>
            <input
              type="radio"
              name="interestedInAdvancedFeatures"
              value="no"
              checked={data.interestedInAdvancedFeatures === 'no'}
              onChange={(e) => onChange('interestedInAdvancedFeatures', e.target.value)}
              className="w-4 h-4 text-orange-500 focus:ring-orange-500 focus:ring-2"
            />
            <span className="ml-3 text-gray-700">No, basic features are enough</span>
          </label>
        </div>
        <p className="mt-2 text-xs text-neutral-500">
          Advanced features might include automation, integrations, or custom workflows
        </p>
      </div>

      {/* Interest in Consulting Support */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Would you be interested in ongoing optimization or consulting support?
          <span className="text-xs text-neutral-500 ml-2">(Optional)</span>
        </label>
        <div className={radioGroupClasses}>
          <label className={radioLabelClasses}>
            <input
              type="radio"
              name="interestedInConsulting"
              value="yes"
              checked={data.interestedInConsulting === 'yes'}
              onChange={(e) => onChange('interestedInConsulting', e.target.value)}
              className="w-4 h-4 text-orange-500 focus:ring-orange-500 focus:ring-2"
            />
            <span className="ml-3 text-gray-700">Yes, I'd like to learn more</span>
          </label>
          
          <label className={radioLabelClasses}>
            <input
              type="radio"
              name="interestedInConsulting"
              value="maybe"
              checked={data.interestedInConsulting === 'maybe'}
              onChange={(e) => onChange('interestedInConsulting', e.target.value)}
              className="w-4 h-4 text-orange-500 focus:ring-orange-500 focus:ring-2"
            />
            <span className="ml-3 text-gray-700">Maybe, tell me more later</span>
          </label>
          
          <label className={radioLabelClasses}>
            <input
              type="radio"
              name="interestedInConsulting"
              value="no"
              checked={data.interestedInConsulting === 'no'}
              onChange={(e) => onChange('interestedInConsulting', e.target.value)}
              className="w-4 h-4 text-orange-500 focus:ring-orange-500 focus:ring-2"
            />
            <span className="ml-3 text-gray-700">No, I prefer self-service</span>
          </label>
        </div>
        <p className="mt-2 text-xs text-neutral-500">
          Consulting support could help optimize your workflows and maximize time savings
        </p>
      </div>

      {/* Skip Notice */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p className="text-sm text-gray-600">
          You can skip all questions on this page and still complete your onboarding. 
          These responses simply help us plan future features and support options.
        </p>
      </div>
    </div>
  );
};

export default OptionalInformationStep;
