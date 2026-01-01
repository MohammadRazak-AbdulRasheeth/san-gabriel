import React from 'react';
import { onboardingFormConfig } from '../../../data/onboardingFormConfig';
import { HiOutlineCalendar } from 'react-icons/hi';
import { Link } from 'react-router-dom';

/**
 * ConfirmationConsentStep Component
 * 
 * Displays scheduled call information and collects eligibility confirmations,
 * required consents, and optional consent for updates. Includes links to
 * Privacy Policy and Terms of Service.
 * 
 * Requirements: 18.1-18.5, 19.1-19.5, 20.1-20.6
 */
const ConfirmationConsentStep = ({ data, onChange, errors }) => {
  // Format date and time for display
  const formatDateTime = (isoString) => {
    if (!isoString) return 'Not scheduled';
    
    try {
      const date = new Date(isoString);
      return date.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        timeZoneName: 'short'
      });
    } catch (e) {
      return isoString;
    }
  };

  const checkboxClasses = (fieldName) => `
    w-5 h-5 text-orange-500 border-gray-300 rounded
    focus:ring-orange-500 focus:ring-2
    transition-all duration-200
    ${errors[fieldName] ? 'border-red-500' : ''}
  `;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-primary-900 mb-2">
          Confirmation & Consent
        </h2>
        <p className="text-neutral-600">
          Review your scheduled call details and provide required confirmations.
        </p>
      </div>

      {/* Scheduled Call Information */}
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <HiOutlineCalendar className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" aria-hidden="true" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-orange-900 mb-3">
              Your Scheduled Call
            </h3>
            
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-orange-800">Date & Time</p>
                <p className="text-base text-orange-900">
                  {formatDateTime(data.scheduledCallDateTime)}
                </p>
              </div>

              {/* Time Zone */}
              <div>
                <label htmlFor="timeZone" className="text-sm font-medium text-orange-800 block mb-2">
                  Time Zone
                </label>
                <select
                  id="timeZone"
                  name="timeZone"
                  value={data.timeZone || ''}
                  onChange={(e) => onChange('timeZone', e.target.value)}
                  className="w-full px-3 py-2 border border-orange-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Select your time zone</option>
                  {onboardingFormConfig.timeZones.map((tz) => (
                    <option key={tz} value={tz}>
                      {tz.replace('America/', '').replace('_', ' ')}
                    </option>
                  ))}
                </select>
              </div>

              {/* Best Contact Method */}
              <div>
                <label htmlFor="bestContactMethod" className="text-sm font-medium text-orange-800 block mb-2">
                  Best Contact Method
                </label>
                <select
                  id="bestContactMethod"
                  name="bestContactMethod"
                  value={data.bestContactMethod || ''}
                  onChange={(e) => onChange('bestContactMethod', e.target.value)}
                  className="w-full px-3 py-2 border border-orange-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Select contact method</option>
                  {onboardingFormConfig.contactMethods.map((method) => (
                    <option key={method} value={method}>
                      {method}
                    </option>
                  ))}
                </select>
              </div>

              {/* Attendance Agreement */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="agreesToAttendOrReschedule"
                    checked={data.agreesToAttendOrReschedule || false}
                    onChange={(e) => onChange('agreesToAttendOrReschedule', e.target.checked)}
                    className={checkboxClasses('agreesToAttendOrReschedule')}
                    required
                  />
                  <span className="text-sm text-orange-900 group-hover:text-orange-700">
                    I agree to attend this call or reschedule if needed
                    <span className="text-red-500 ml-1">*</span>
                  </span>
                </label>
                {errors.agreesToAttendOrReschedule && (
                  <p className="mt-2 ml-8 text-sm text-red-600" role="alert">
                    {errors.agreesToAttendOrReschedule}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility Confirmation */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Eligibility Confirmation
        </h3>
        <p className="text-sm text-neutral-600 mb-4">
          Please confirm you understand the following about the free access program:
        </p>
        
        <div className="space-y-3">
          {/* First 100 Limit */}
          <label className="flex items-start gap-3 cursor-pointer group p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <input
              type="checkbox"
              name="understandsFirst100Limit"
              checked={data.understandsFirst100Limit || false}
              onChange={(e) => onChange('understandsFirst100Limit', e.target.checked)}
              className={checkboxClasses('understandsFirst100Limit')}
              required
            />
            <span className="text-sm text-gray-700 group-hover:text-gray-900">
              I understand access is limited to the first 100 owner-operators
              <span className="text-red-500 ml-1">*</span>
            </span>
          </label>
          {errors.understandsFirst100Limit && (
            <p className="ml-8 text-sm text-red-600" role="alert">
              {errors.understandsFirst100Limit}
            </p>
          )}

          {/* Early Adoption */}
          <label className="flex items-start gap-3 cursor-pointer group p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <input
              type="checkbox"
              name="understandsEarlyAdoption"
              checked={data.understandsEarlyAdoption || false}
              onChange={(e) => onChange('understandsEarlyAdoption', e.target.checked)}
              className={checkboxClasses('understandsEarlyAdoption')}
              required
            />
            <span className="text-sm text-gray-700 group-hover:text-gray-900">
              I understand this free access is part of early adoption
              <span className="text-red-500 ml-1">*</span>
            </span>
          </label>
          {errors.understandsEarlyAdoption && (
            <p className="ml-8 text-sm text-red-600" role="alert">
              {errors.understandsEarlyAdoption}
            </p>
          )}

          {/* Feedback Request */}
          <label className="flex items-start gap-3 cursor-pointer group p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <input
              type="checkbox"
              name="understandsFeedbackRequest"
              checked={data.understandsFeedbackRequest || false}
              onChange={(e) => onChange('understandsFeedbackRequest', e.target.checked)}
              className={checkboxClasses('understandsFeedbackRequest')}
              required
            />
            <span className="text-sm text-gray-700 group-hover:text-gray-900">
              I understand feedback may be requested to improve the software
              <span className="text-red-500 ml-1">*</span>
            </span>
          </label>
          {errors.understandsFeedbackRequest && (
            <p className="ml-8 text-sm text-red-600" role="alert">
              {errors.understandsFeedbackRequest}
            </p>
          )}
        </div>
      </div>

      {/* Required Consents */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Required Consents
        </h3>
        <p className="text-sm text-neutral-600 mb-4">
          The following consents are required to proceed:
        </p>
        
        <div className="space-y-3">
          {/* Store Information */}
          <label className="flex items-start gap-3 cursor-pointer group p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <input
              type="checkbox"
              name="consentsToStoreInfo"
              checked={data.consentsToStoreInfo || false}
              onChange={(e) => onChange('consentsToStoreInfo', e.target.checked)}
              className={checkboxClasses('consentsToStoreInfo')}
              required
            />
            <span className="text-sm text-gray-700 group-hover:text-gray-900">
              I consent to San Gabriel Solutions storing my business information securely
              <span className="text-red-500 ml-1">*</span>
            </span>
          </label>
          {errors.consentsToStoreInfo && (
            <p className="ml-8 text-sm text-red-600" role="alert">
              {errors.consentsToStoreInfo}
            </p>
          )}

          {/* Contact for Onboarding */}
          <label className="flex items-start gap-3 cursor-pointer group p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <input
              type="checkbox"
              name="consentsToContact"
              checked={data.consentsToContact || false}
              onChange={(e) => onChange('consentsToContact', e.target.checked)}
              className={checkboxClasses('consentsToContact')}
              required
            />
            <span className="text-sm text-gray-700 group-hover:text-gray-900">
              I consent to be contacted for onboarding and support purposes
              <span className="text-red-500 ml-1">*</span>
            </span>
          </label>
          {errors.consentsToContact && (
            <p className="ml-8 text-sm text-red-600" role="alert">
              {errors.consentsToContact}
            </p>
          )}

          {/* Terms Agreement */}
          <label className="flex items-start gap-3 cursor-pointer group p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <input
              type="checkbox"
              name="agreesToTerms"
              checked={data.agreesToTerms || false}
              onChange={(e) => onChange('agreesToTerms', e.target.checked)}
              className={checkboxClasses('agreesToTerms')}
              required
            />
            <span className="text-sm text-gray-700 group-hover:text-gray-900">
              I agree to the{' '}
              <Link 
                to="/terms-of-service" 
                target="_blank"
                className="text-orange-600 hover:text-orange-700 underline"
              >
                Terms of Service
              </Link>
              {' '}and{' '}
              <Link 
                to="/privacy-policy" 
                target="_blank"
                className="text-orange-600 hover:text-orange-700 underline"
              >
                Privacy Policy
              </Link>
              <span className="text-red-500 ml-1">*</span>
            </span>
          </label>
          {errors.agreesToTerms && (
            <p className="ml-8 text-sm text-red-600" role="alert">
              {errors.agreesToTerms}
            </p>
          )}
        </div>
      </div>

      {/* Optional Consent */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Optional
        </h3>
        
        <label className="flex items-start gap-3 cursor-pointer group p-3 rounded-lg hover:bg-gray-50 transition-colors">
          <input
            type="checkbox"
            name="optInToUpdates"
            checked={data.optInToUpdates || false}
            onChange={(e) => onChange('optInToUpdates', e.target.checked)}
            className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500 focus:ring-2"
          />
          <span className="text-sm text-gray-700 group-hover:text-gray-900">
            I would like to receive updates about new features and improvements
            <span className="text-xs text-neutral-500 block mt-1">
              (Optional - you can change this preference later)
            </span>
          </span>
        </label>
      </div>

      {/* Required Fields Notice */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p className="text-sm text-gray-600">
          <span className="text-red-500">*</span> Required fields must be completed to proceed
        </p>
      </div>
    </div>
  );
};

export default ConfirmationConsentStep;
