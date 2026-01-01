import React from 'react';
import { onboardingFormConfig } from '../../../data/onboardingFormConfig';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { 
  getFieldWrapperProps, 
  getInputProps, 
  getInputClasses, 
  getLabelClasses,
  renderErrorMessage
} from '../../../utils/formHelpers';

/**
 * TechnicalSetupStep Component
 * 
 * Collects technical setup information including preferred email for software access,
 * device type, and operating system. Includes email confirmation matching validation.
 * 
 * Requirements: 17.1-17.6
 */
const TechnicalSetupStep = ({ data, onChange, errors }) => {
  // Check if preferred email differs from primary contact email
  const emailsDiffer = data.preferredEmail && 
                       data.email && 
                       data.preferredEmail.toLowerCase() !== data.email.toLowerCase();

  // Validate email format
  const validateEmail = (email) => {
    return onboardingFormConfig.validation.email.pattern.test(email);
  };

  const handleEmailBlur = (field) => {
    if (data[field] && !validateEmail(data[field])) {
      // Email validation will be handled by parent component through errors prop
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary-900 mb-2">
          Technical Setup
        </h2>
        <p className="text-neutral-600">
          Help us configure your software access and ensure compatibility.
        </p>
      </div>

      {/* Preferred Email for Software Access */}
      <div {...getFieldWrapperProps('preferredEmail', errors)}>
        <label htmlFor="preferredEmail" className={getLabelClasses(true)}>
          Preferred Email for Software Access
        </label>
        <input
          type="email"
          id="preferredEmail"
          name="preferredEmail"
          value={data.preferredEmail || ''}
          onChange={(e) => onChange('preferredEmail', e.target.value)}
          onBlur={() => handleEmailBlur('preferredEmail')}
          placeholder="software.access@example.com"
          className={getInputClasses('preferredEmail', errors)}
          required
          {...getInputProps('preferredEmail', errors)}
        />
        <p className="mt-1 text-xs text-neutral-500">
          This email will be used to access the software
        </p>
        {renderErrorMessage('preferredEmail', errors)}
      </div>

      {/* Email Confirmation */}
      <div {...getFieldWrapperProps('confirmEmail', errors)}>
        <label htmlFor="confirmEmail" className={getLabelClasses(true)}>
          Confirm Email Address
        </label>
        <input
          type="email"
          id="confirmEmail"
          name="confirmEmail"
          value={data.confirmEmail || ''}
          onChange={(e) => onChange('confirmEmail', e.target.value)}
          onBlur={() => handleEmailBlur('confirmEmail')}
          placeholder="Confirm your email address"
          className={getInputClasses('confirmEmail', errors)}
          required
          {...getInputProps('confirmEmail', errors)}
        />
        <p className="mt-1 text-xs text-neutral-500">
          Please re-enter your email to confirm spelling
        </p>
        {renderErrorMessage('confirmEmail', errors)}
      </div>

      {/* Email Difference Warning */}
      {emailsDiffer && !errors.preferredEmail && (
        <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg" role="alert" aria-live="polite">
          <HiOutlineExclamationCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="text-sm font-medium text-amber-900">
              Different Email Addresses
            </p>
            <p className="text-sm text-amber-700 mt-1">
              Your software access email ({data.preferredEmail}) is different from your primary contact email ({data.email}). 
              Please confirm this is correct.
            </p>
          </div>
        </div>
      )}

      {/* Secondary User */}
      <div {...getFieldWrapperProps('needsSecondaryUser', errors)}>
        <label className={getLabelClasses(true)}>
          Do you need a secondary user account?
        </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="needsSecondaryUser"
              value="true"
              checked={data.needsSecondaryUser === true}
              onChange={() => onChange('needsSecondaryUser', true)}
              className="w-4 h-4 text-orange-500 focus:ring-orange-500 focus:ring-2"
            />
            <span className="ml-3 text-gray-700">Yes, I need a secondary user</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="needsSecondaryUser"
              value="false"
              checked={data.needsSecondaryUser === false}
              onChange={() => onChange('needsSecondaryUser', false)}
              className="w-4 h-4 text-orange-500 focus:ring-orange-500 focus:ring-2"
            />
            <span className="ml-3 text-gray-700">No, just one user account</span>
          </label>
        </div>
        {renderErrorMessage('needsSecondaryUser', errors)}
      </div>

      {/* Primary Device */}
      <div {...getFieldWrapperProps('primaryDevice', errors)}>
        <label htmlFor="primaryDevice" className={getLabelClasses(true)}>
          Primary Device
        </label>
        <select
          id="primaryDevice"
          name="primaryDevice"
          value={data.primaryDevice || ''}
          onChange={(e) => onChange('primaryDevice', e.target.value)}
          className={getInputClasses('primaryDevice', errors)}
          required
          {...getInputProps('primaryDevice', errors)}
        >
          <option value="">Select your primary device</option>
          {onboardingFormConfig.devices.map((device) => (
            <option key={device} value={device}>
              {device}
            </option>
          ))}
        </select>
        <p className="mt-1 text-xs text-neutral-500">
          Which device will you primarily use to access the software?
        </p>
        {renderErrorMessage('primaryDevice', errors)}
      </div>

      {/* Operating System */}
      <div {...getFieldWrapperProps('operatingSystem', errors)}>
        <label htmlFor="operatingSystem" className={getLabelClasses(true)}>
          Operating System
        </label>
        <select
          id="operatingSystem"
          name="operatingSystem"
          value={data.operatingSystem || ''}
          onChange={(e) => onChange('operatingSystem', e.target.value)}
          className={getInputClasses('operatingSystem', errors)}
          required
          {...getInputProps('operatingSystem', errors)}
        >
          <option value="">Select your operating system</option>
          {onboardingFormConfig.operatingSystems.map((os) => (
            <option key={os} value={os}>
              {os}
            </option>
          ))}
        </select>
        <p className="mt-1 text-xs text-neutral-500">
          What operating system does your primary device use?
        </p>
        {renderErrorMessage('operatingSystem', errors)}
      </div>
    </div>
  );
};

export default TechnicalSetupStep;
