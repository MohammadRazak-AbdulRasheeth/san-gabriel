import React from 'react';

/**
 * CurrentSystemsStep Component
 * 
 * Collects information about current tools and systems the applicant uses
 * to plan integration and setup. Allows "None" and "N/A" responses.
 * 
 * Requirements: 16.1-16.7
 */
const CurrentSystemsStep = ({ data, onChange, errors }) => {
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

  const checkboxLabelClasses = `
    flex items-center gap-3 cursor-pointer p-3 border rounded-lg hover:bg-gray-50 transition-colors
  `;

  const checkboxInputClasses = `
    w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer
  `;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary-900 mb-2">
          Current Systems & Tools
        </h2>
        <p className="text-neutral-600">
          Tell us what tools you currently use so we can plan integration and setup.
        </p>
      </div>

      {/* Current Accounting Software */}
      <div>
        <label htmlFor="currentAccountingSoftware" className={labelClasses}>
          Current accounting software or tools
        </label>
        <input
          type="text"
          id="currentAccountingSoftware"
          name="currentAccountingSoftware"
          value={data.currentAccountingSoftware || ''}
          onChange={(e) => onChange('currentAccountingSoftware', e.target.value)}
          placeholder='e.g., QuickBooks, Excel, or "None"'
          className={inputClasses('currentAccountingSoftware')}
          required
        />
        <p className="mt-1 text-xs text-neutral-500">
          Enter "None" or "N/A" if you don't use any accounting software
        </p>
        {errors.currentAccountingSoftware && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {errors.currentAccountingSoftware}
          </p>
        )}
      </div>

      {/* Current Scheduling Software */}
      <div>
        <label htmlFor="currentSchedulingSoftware" className={labelClasses}>
          Current scheduling software or tools
        </label>
        <input
          type="text"
          id="currentSchedulingSoftware"
          name="currentSchedulingSoftware"
          value={data.currentSchedulingSoftware || ''}
          onChange={(e) => onChange('currentSchedulingSoftware', e.target.value)}
          placeholder='e.g., Google Calendar, paper planner, or "None"'
          className={inputClasses('currentSchedulingSoftware')}
          required
        />
        <p className="mt-1 text-xs text-neutral-500">
          Enter "None" or "N/A" if you don't use any scheduling software
        </p>
        {errors.currentSchedulingSoftware && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {errors.currentSchedulingSoftware}
          </p>
        )}
      </div>

      {/* Current CRM */}
      <div>
        <label htmlFor="currentCRM" className={labelClasses}>
          Current CRM (Customer Relationship Management) software or tools
        </label>
        <input
          type="text"
          id="currentCRM"
          name="currentCRM"
          value={data.currentCRM || ''}
          onChange={(e) => onChange('currentCRM', e.target.value)}
          placeholder='e.g., Salesforce, HubSpot, or "None"'
          className={inputClasses('currentCRM')}
          required
        />
        <p className="mt-1 text-xs text-neutral-500">
          Enter "None" or "N/A" if you don't use any CRM software
        </p>
        {errors.currentCRM && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {errors.currentCRM}
          </p>
        )}
      </div>

      {/* Spreadsheets or Manual Tracking */}
      <div>
        <label className={checkboxLabelClasses}>
          <input
            type="checkbox"
            id="usesSpreadsheets"
            name="usesSpreadsheets"
            checked={data.usesSpreadsheets || false}
            onChange={(e) => onChange('usesSpreadsheets', e.target.checked)}
            className={checkboxInputClasses}
          />
          <div>
            <span className="font-medium text-gray-900">
              I use spreadsheets or manual tracking
            </span>
            <p className="text-xs text-neutral-600 mt-0.5">
              Check this if you track things in Excel, Google Sheets, or on paper
            </p>
          </div>
        </label>
        {errors.usesSpreadsheets && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {errors.usesSpreadsheets}
          </p>
        )}
      </div>

      {/* Multiple Tools for Same Task */}
      <div>
        <label className={labelClasses}>
          Do you use multiple tools for the same task?
        </label>
        <p className="text-xs text-neutral-600 mb-3">
          For example, tracking expenses in both QuickBooks and a spreadsheet
        </p>
        <div className={radioGroupClasses}>
          <label className={radioLabelClasses}>
            <input
              type="radio"
              name="usesMultipleToolsForSameTask"
              value="true"
              checked={data.usesMultipleToolsForSameTask === true || data.usesMultipleToolsForSameTask === 'true'}
              onChange={(e) => onChange('usesMultipleToolsForSameTask', true)}
              className={radioInputClasses}
              required
            />
            <span>Yes</span>
          </label>
          <label className={radioLabelClasses}>
            <input
              type="radio"
              name="usesMultipleToolsForSameTask"
              value="false"
              checked={data.usesMultipleToolsForSameTask === false || data.usesMultipleToolsForSameTask === 'false'}
              onChange={(e) => onChange('usesMultipleToolsForSameTask', false)}
              className={radioInputClasses}
              required
            />
            <span>No</span>
          </label>
        </div>
        {errors.usesMultipleToolsForSameTask && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {errors.usesMultipleToolsForSameTask}
          </p>
        )}
      </div>

      {/* Fully Manual Tasks */}
      <div>
        <label className={labelClasses}>
          Are any tasks fully manual today?
        </label>
        <p className="text-xs text-neutral-600 mb-3">
          Tasks you do entirely by hand without any software or tools
        </p>
        <div className={radioGroupClasses}>
          <label className={radioLabelClasses}>
            <input
              type="radio"
              name="hasFullyManualTasks"
              value="true"
              checked={data.hasFullyManualTasks === true || data.hasFullyManualTasks === 'true'}
              onChange={(e) => onChange('hasFullyManualTasks', true)}
              className={radioInputClasses}
              required
            />
            <span>Yes</span>
          </label>
          <label className={radioLabelClasses}>
            <input
              type="radio"
              name="hasFullyManualTasks"
              value="false"
              checked={data.hasFullyManualTasks === false || data.hasFullyManualTasks === 'false'}
              onChange={(e) => onChange('hasFullyManualTasks', false)}
              className={radioInputClasses}
              required
            />
            <span>No</span>
          </label>
        </div>
        {errors.hasFullyManualTasks && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {errors.hasFullyManualTasks}
          </p>
        )}
      </div>

      {/* Info Box */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex gap-3">
          <svg 
            className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <div>
            <h3 className="font-semibold text-blue-900 mb-1">
              Why we ask about your current tools
            </h3>
            <p className="text-sm text-blue-800">
              Understanding your current setup helps us configure the software to work with your existing 
              processes and identify opportunities for automation. We can also help you consolidate tools 
              if you're using multiple systems for the same tasks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentSystemsStep;
