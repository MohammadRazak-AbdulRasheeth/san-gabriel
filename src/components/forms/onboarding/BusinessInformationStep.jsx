import React from 'react';
import { onboardingFormConfig } from '../../../data/onboardingFormConfig';
import { 
  getFieldWrapperProps, 
  getInputProps, 
  getInputClasses, 
  getLabelClasses,
  renderErrorMessage,
  formatPhoneNumber 
} from '../../../utils/formHelpers';

/**
 * BusinessInformationStep Component
 * 
 * Collects basic business and owner information for onboarding.
 * Includes validation for email format and phone number formatting.
 * 
 * Requirements: 13.1-13.9
 */
const BusinessInformationStep = ({ data, onChange, errors }) => {
  const handlePhoneChange = (value) => {
    const formatted = formatPhoneNumber(value);
    onChange('phone', formatted);
  };

  // Validate email format
  const validateEmail = (email) => {
    return onboardingFormConfig.validation.email.pattern.test(email);
  };

  const handleEmailBlur = () => {
    if (data.email && !validateEmail(data.email)) {
      // Email validation will be handled by parent component through errors prop
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary-900 mb-2">
          Business Information
        </h2>
        <p className="text-neutral-600">
          Tell us about your business so we can set up your account.
        </p>
      </div>

      {/* Legal Business Name */}
      <div {...getFieldWrapperProps('legalBusinessName', errors)}>
        <label htmlFor="legalBusinessName" className={getLabelClasses(true)}>
          Legal Business Name
        </label>
        <input
          type="text"
          id="legalBusinessName"
          name="legalBusinessName"
          value={data.legalBusinessName || ''}
          onChange={(e) => onChange('legalBusinessName', e.target.value)}
          placeholder="Enter your legal business name"
          className={getInputClasses('legalBusinessName', errors)}
          required
          {...getInputProps('legalBusinessName', errors)}
        />
        {renderErrorMessage('legalBusinessName', errors)}
      </div>

      {/* Operating/Trade Name */}
      <div {...getFieldWrapperProps('tradeName', errors)}>
        <label htmlFor="tradeName" className={getLabelClasses(false)}>
          Operating or Trade Name (if different)
        </label>
        <input
          type="text"
          id="tradeName"
          name="tradeName"
          value={data.tradeName || ''}
          onChange={(e) => onChange('tradeName', e.target.value)}
          placeholder="Enter your trade name (optional)"
          className={getInputClasses('tradeName', errors)}
          {...getInputProps('tradeName', errors)}
        />
        {renderErrorMessage('tradeName', errors)}
      </div>

      {/* Owner Full Name */}
      <div {...getFieldWrapperProps('ownerFullName', errors)}>
        <label htmlFor="ownerFullName" className={getLabelClasses(true)}>
          Owner Full Name
        </label>
        <input
          type="text"
          id="ownerFullName"
          name="ownerFullName"
          value={data.ownerFullName || ''}
          onChange={(e) => onChange('ownerFullName', e.target.value)}
          placeholder="Enter your full name"
          className={getInputClasses('ownerFullName', errors)}
          required
          {...getInputProps('ownerFullName', errors)}
        />
        {renderErrorMessage('ownerFullName', errors)}
      </div>

      {/* Email Address */}
      <div {...getFieldWrapperProps('email', errors)}>
        <label htmlFor="email" className={getLabelClasses(true)}>
          Primary Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email || ''}
          onChange={(e) => onChange('email', e.target.value)}
          onBlur={handleEmailBlur}
          placeholder="your.email@example.com"
          className={getInputClasses('email', errors)}
          required
          {...getInputProps('email', errors)}
        />
        <p className="mt-1 text-xs text-neutral-500">
          This will be used for login and important notifications
        </p>
        {renderErrorMessage('email', errors)}
      </div>

      {/* Phone Number */}
      <div {...getFieldWrapperProps('phone', errors)}>
        <label htmlFor="phone" className={getLabelClasses(true)}>
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={data.phone || ''}
          onChange={(e) => handlePhoneChange(e.target.value)}
          placeholder="(555) 123-4567"
          className={getInputClasses('phone', errors)}
          required
          {...getInputProps('phone', errors)}
        />
        {renderErrorMessage('phone', errors)}
      </div>

      {/* Business Address */}
      <div {...getFieldWrapperProps('businessAddress', errors)}>
        <label htmlFor="businessAddress" className={getLabelClasses(true)}>
          Business Address
        </label>
        <input
          type="text"
          id="businessAddress"
          name="businessAddress"
          value={data.businessAddress || ''}
          onChange={(e) => onChange('businessAddress', e.target.value)}
          placeholder="City and Province/State"
          className={getInputClasses('businessAddress', errors)}
          required
          {...getInputProps('businessAddress', errors)}
        />
        <p className="mt-1 text-xs text-neutral-500">
          City and province/state are sufficient
        </p>
        {renderErrorMessage('businessAddress', errors)}
      </div>

      {/* Business Type */}
      <div {...getFieldWrapperProps('businessType', errors)}>
        <label htmlFor="businessType" className={getLabelClasses(true)}>
          Business Type or Industry
        </label>
        <select
          id="businessType"
          name="businessType"
          value={data.businessType || ''}
          onChange={(e) => onChange('businessType', e.target.value)}
          className={getInputClasses('businessType', errors)}
          required
          {...getInputProps('businessType', errors)}
        >
          <option value="">Select your business type</option>
          {onboardingFormConfig.businessTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {renderErrorMessage('businessType', errors)}
      </div>

      {/* Years in Operation */}
      <div {...getFieldWrapperProps('yearsInOperation', errors)}>
        <label htmlFor="yearsInOperation" className={getLabelClasses(true)}>
          Years in Operation
        </label>
        <input
          type="number"
          id="yearsInOperation"
          name="yearsInOperation"
          value={data.yearsInOperation || ''}
          onChange={(e) => onChange('yearsInOperation', e.target.value)}
          placeholder="0"
          min="0"
          max="100"
          className={getInputClasses('yearsInOperation', errors)}
          required
          {...getInputProps('yearsInOperation', errors)}
        />
        {renderErrorMessage('yearsInOperation', errors)}
      </div>
    </div>
  );
};

export default BusinessInformationStep;
