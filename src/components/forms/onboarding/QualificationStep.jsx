import React from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

/**
 * QualificationStep Component
 * 
 * Collects qualification information to confirm the applicant fits the owner-operator profile.
 * Displays eligibility message if qualification criteria are not met.
 * 
 * Requirements: 14.1-14.5
 */
const QualificationStep = ({ data, onChange, errors }) => {
  // Check if user qualifies based on responses
  const checkQualification = () => {
    // User should be primary operator, responsible for daily ops, and handle admin work
    const isPrimaryOperator = data.isPrimaryOperator === true || data.isPrimaryOperator === 'true';
    const responsibleForDailyOps = data.responsibleForDailyOps === true || data.responsibleForDailyOps === 'true';
    const handlesAdminWork = data.handlesAdminWork === true || data.handlesAdminWork === 'true';
    
    // If any of these are false, user may not qualify
    if (isPrimaryOperator === false || responsibleForDailyOps === false || handlesAdminWork === false) {
      return false;
    }
    
    return true;
  };

  const isQualified = checkQualification();
  const hasAnsweredQuestions = 
    data.isPrimaryOperator !== undefined && 
    data.responsibleForDailyOps !== undefined && 
    data.handlesAdminWork !== undefined;

  const inputClasses = (fieldName) => `
    w-full px-4 py-3 border rounded-lg 
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent
    focus:shadow-lg focus:scale-[1.01]
    touch-manipulation min-h-[48px]
    ${errors[fieldName] ? 'border-red-500 bg-red-50 focus:ring-red-500' : 'border-gray-300 hover:border-gray-400 focus:border-orange-500'}
  `;

  const labelClasses = `
    block text-sm font-medium text-gray-700 mb-2
    after:content-['*'] after:text-red-500 after:ml-1
  `;

  const radioGroupClasses = `
    flex gap-4 mt-3
  `;

  const radioLabelClasses = `
    flex items-center gap-2 cursor-pointer
  `;

  const radioInputClasses = `
    w-5 h-5 text-orange-500 border-gray-300 focus:ring-orange-500 cursor-pointer
  `;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary-900 mb-2">
          Qualification
        </h2>
        <p className="text-neutral-600">
          Help us confirm you're a good fit for this program.
        </p>
      </div>

      {/* Question 1: Primary Operator */}
      <div>
        <label className={labelClasses}>
          Are you the primary operator of the business?
        </label>
        <div className={radioGroupClasses}>
          <label className={radioLabelClasses}>
            <input
              type="radio"
              name="isPrimaryOperator"
              value="true"
              checked={data.isPrimaryOperator === true || data.isPrimaryOperator === 'true'}
              onChange={(e) => onChange('isPrimaryOperator', true)}
              className={radioInputClasses}
              required
            />
            <span>Yes</span>
          </label>
          <label className={radioLabelClasses}>
            <input
              type="radio"
              name="isPrimaryOperator"
              value="false"
              checked={data.isPrimaryOperator === false || data.isPrimaryOperator === 'false'}
              onChange={(e) => onChange('isPrimaryOperator', false)}
              className={radioInputClasses}
              required
            />
            <span>No</span>
          </label>
        </div>
        {errors.isPrimaryOperator && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {errors.isPrimaryOperator}
          </p>
        )}
      </div>

      {/* Question 2: Number of Employees */}
      <div>
        <label htmlFor="numberOfEmployees" className={labelClasses}>
          Number of employees (including yourself)
        </label>
        <input
          type="number"
          id="numberOfEmployees"
          name="numberOfEmployees"
          value={data.numberOfEmployees || ''}
          onChange={(e) => onChange('numberOfEmployees', e.target.value)}
          placeholder="1"
          min="1"
          max="1000"
          className={inputClasses('numberOfEmployees')}
          required
        />
        {errors.numberOfEmployees && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {errors.numberOfEmployees}
          </p>
        )}
      </div>

      {/* Question 3: Responsible for Daily Operations */}
      <div>
        <label className={labelClasses}>
          Are you responsible for daily operations?
        </label>
        <div className={radioGroupClasses}>
          <label className={radioLabelClasses}>
            <input
              type="radio"
              name="responsibleForDailyOps"
              value="true"
              checked={data.responsibleForDailyOps === true || data.responsibleForDailyOps === 'true'}
              onChange={(e) => onChange('responsibleForDailyOps', true)}
              className={radioInputClasses}
              required
            />
            <span>Yes</span>
          </label>
          <label className={radioLabelClasses}>
            <input
              type="radio"
              name="responsibleForDailyOps"
              value="false"
              checked={data.responsibleForDailyOps === false || data.responsibleForDailyOps === 'false'}
              onChange={(e) => onChange('responsibleForDailyOps', false)}
              className={radioInputClasses}
              required
            />
            <span>No</span>
          </label>
        </div>
        {errors.responsibleForDailyOps && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {errors.responsibleForDailyOps}
          </p>
        )}
      </div>

      {/* Question 4: Handles Admin Work */}
      <div>
        <label className={labelClasses}>
          Do you personally handle admin, scheduling, or reporting?
        </label>
        <div className={radioGroupClasses}>
          <label className={radioLabelClasses}>
            <input
              type="radio"
              name="handlesAdminWork"
              value="true"
              checked={data.handlesAdminWork === true || data.handlesAdminWork === 'true'}
              onChange={(e) => onChange('handlesAdminWork', true)}
              className={radioInputClasses}
              required
            />
            <span>Yes</span>
          </label>
          <label className={radioLabelClasses}>
            <input
              type="radio"
              name="handlesAdminWork"
              value="false"
              checked={data.handlesAdminWork === false || data.handlesAdminWork === 'false'}
              onChange={(e) => onChange('handlesAdminWork', false)}
              className={radioInputClasses}
              required
            />
            <span>No</span>
          </label>
        </div>
        {errors.handlesAdminWork && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {errors.handlesAdminWork}
          </p>
        )}
      </div>

      {/* Eligibility Message */}
      {hasAnsweredQuestions && !isQualified && (
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex gap-3" role="alert" aria-live="polite">
          <HiOutlineExclamationCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h3 className="font-semibold text-yellow-900 mb-1">
              Eligibility Notice
            </h3>
            <p className="text-sm text-yellow-800">
              Based on your responses, this program is specifically designed for owner-operators who are 
              actively involved in daily operations and administrative tasks. If you believe this assessment 
              is incorrect, please continue with the form and we'll review your application individually.
            </p>
          </div>
        </div>
      )}

      {/* Positive Confirmation Message */}
      {hasAnsweredQuestions && isQualified && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex gap-3" role="status" aria-live="polite">
          <svg 
            className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <div>
            <h3 className="font-semibold text-green-900 mb-1">
              Great! You're a perfect fit
            </h3>
            <p className="text-sm text-green-800">
              Based on your responses, you match the profile we're looking for. Let's continue with your onboarding.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QualificationStep;
