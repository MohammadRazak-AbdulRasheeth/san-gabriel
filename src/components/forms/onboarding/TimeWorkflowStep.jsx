import React from 'react';

/**
 * TimeWorkflowStep Component
 * 
 * Collects time and workflow assessment information to understand the applicant's 
 * time challenges and personalize onboarding.
 * 
 * Requirements: 15.1-15.5
 */
const TimeWorkflowStep = ({ data, onChange, errors }) => {
  const MAX_TEXTAREA_LENGTH = 500;

  // Calculate remaining characters for textareas
  const getRemainingChars = (fieldName) => {
    const currentLength = (data[fieldName] || '').length;
    return MAX_TEXTAREA_LENGTH - currentLength;
  };

  const inputClasses = (fieldName) => `
    w-full px-4 py-3 border rounded-lg 
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent
    focus:shadow-lg focus:scale-[1.01]
    touch-manipulation min-h-[48px]
    ${errors[fieldName] ? 'border-red-500 bg-red-50 focus:ring-red-500' : 'border-gray-300 hover:border-gray-400 focus:border-orange-500'}
  `;

  const textareaClasses = (fieldName) => `
    w-full px-4 py-3 border rounded-lg 
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent
    focus:shadow-lg focus:scale-[1.01]
    touch-manipulation min-h-[120px]
    resize-vertical
    ${errors[fieldName] ? 'border-red-500 bg-red-50 focus:ring-red-500' : 'border-gray-300 hover:border-gray-400 focus:border-orange-500'}
  `;

  const labelClasses = `
    block text-sm font-medium text-gray-700 mb-2
    after:content-['*'] after:text-red-500 after:ml-1
  `;

  const sliderClasses = `
    w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
    accent-orange-500
  `;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary-900 mb-2">
          Time & Workflow Assessment
        </h2>
        <p className="text-neutral-600">
          Help us understand your time challenges so we can personalize your onboarding.
        </p>
      </div>

      {/* Hours per week on admin tasks */}
      <div>
        <label htmlFor="hoursPerWeekOnAdmin" className={labelClasses}>
          Approximate hours per week spent on admin tasks
        </label>
        <div className="space-y-3">
          <input
            type="range"
            id="hoursPerWeekOnAdmin"
            name="hoursPerWeekOnAdmin"
            min="0"
            max="80"
            step="1"
            value={data.hoursPerWeekOnAdmin || 0}
            onChange={(e) => onChange('hoursPerWeekOnAdmin', e.target.value)}
            className={sliderClasses}
            required
          />
          <div className="flex justify-between items-center">
            <span className="text-sm text-neutral-600">0 hours</span>
            <div className="text-center">
              <span className="text-2xl font-bold text-orange-500">
                {data.hoursPerWeekOnAdmin || 0}
              </span>
              <span className="text-sm text-neutral-600 ml-1">hours/week</span>
            </div>
            <span className="text-sm text-neutral-600">80 hours</span>
          </div>
        </div>
        {errors.hoursPerWeekOnAdmin && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {errors.hoursPerWeekOnAdmin}
          </p>
        )}
      </div>

      {/* Top 3 repetitive tasks */}
      <div>
        <label className={labelClasses}>
          Top 3 repetitive tasks you do weekly
        </label>
        <div className="space-y-3">
          <input
            type="text"
            id="repetitiveTask1"
            name="repetitiveTask1"
            value={(data.top3RepetitiveTasks && data.top3RepetitiveTasks[0]) || ''}
            onChange={(e) => {
              const tasks = data.top3RepetitiveTasks || ['', '', ''];
              tasks[0] = e.target.value;
              onChange('top3RepetitiveTasks', tasks);
            }}
            placeholder="Task 1"
            className={inputClasses('top3RepetitiveTasks')}
            required
          />
          <input
            type="text"
            id="repetitiveTask2"
            name="repetitiveTask2"
            value={(data.top3RepetitiveTasks && data.top3RepetitiveTasks[1]) || ''}
            onChange={(e) => {
              const tasks = data.top3RepetitiveTasks || ['', '', ''];
              tasks[1] = e.target.value;
              onChange('top3RepetitiveTasks', tasks);
            }}
            placeholder="Task 2"
            className={inputClasses('top3RepetitiveTasks')}
            required
          />
          <input
            type="text"
            id="repetitiveTask3"
            name="repetitiveTask3"
            value={(data.top3RepetitiveTasks && data.top3RepetitiveTasks[2]) || ''}
            onChange={(e) => {
              const tasks = data.top3RepetitiveTasks || ['', '', ''];
              tasks[2] = e.target.value;
              onChange('top3RepetitiveTasks', tasks);
            }}
            placeholder="Task 3"
            className={inputClasses('top3RepetitiveTasks')}
            required
          />
        </div>
        {errors.top3RepetitiveTasks && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {errors.top3RepetitiveTasks}
          </p>
        )}
      </div>

      {/* Biggest time drain */}
      <div>
        <label htmlFor="biggestTimeDrain" className={labelClasses}>
          What's your biggest time drain in the business?
        </label>
        <textarea
          id="biggestTimeDrain"
          name="biggestTimeDrain"
          value={data.biggestTimeDrain || ''}
          onChange={(e) => {
            if (e.target.value.length <= MAX_TEXTAREA_LENGTH) {
              onChange('biggestTimeDrain', e.target.value);
            }
          }}
          placeholder="Describe the activity or process that consumes the most time..."
          className={textareaClasses('biggestTimeDrain')}
          maxLength={MAX_TEXTAREA_LENGTH}
          required
        />
        <div className="flex justify-between items-center mt-1">
          <p className="text-xs text-neutral-500">
            Be specific - this helps us understand your needs
          </p>
          <p className={`text-xs ${getRemainingChars('biggestTimeDrain') < 50 ? 'text-orange-600' : 'text-neutral-500'}`}>
            {getRemainingChars('biggestTimeDrain')} characters remaining
          </p>
        </div>
        {errors.biggestTimeDrain && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {errors.biggestTimeDrain}
          </p>
        )}
      </div>

      {/* Problem to solve with extra time */}
      <div>
        <label htmlFor="problemToSolveWithExtraTime" className={labelClasses}>
          If you had 5-10 extra hours per week, what problem would you solve?
        </label>
        <textarea
          id="problemToSolveWithExtraTime"
          name="problemToSolveWithExtraTime"
          value={data.problemToSolveWithExtraTime || ''}
          onChange={(e) => {
            if (e.target.value.length <= MAX_TEXTAREA_LENGTH) {
              onChange('problemToSolveWithExtraTime', e.target.value);
            }
          }}
          placeholder="What would you focus on if you had more time available..."
          className={textareaClasses('problemToSolveWithExtraTime')}
          maxLength={MAX_TEXTAREA_LENGTH}
          required
        />
        <div className="flex justify-between items-center mt-1">
          <p className="text-xs text-neutral-500">
            This helps us show you the most relevant features
          </p>
          <p className={`text-xs ${getRemainingChars('problemToSolveWithExtraTime') < 50 ? 'text-orange-600' : 'text-neutral-500'}`}>
            {getRemainingChars('problemToSolveWithExtraTime')} characters remaining
          </p>
        </div>
        {errors.problemToSolveWithExtraTime && (
          <p className="mt-2 text-sm text-red-600" role="alert">
            {errors.problemToSolveWithExtraTime}
          </p>
        )}
      </div>
    </div>
  );
};

export default TimeWorkflowStep;
