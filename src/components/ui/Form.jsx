import React, { useState } from 'react';

// FormField component with validation
export const FormField = ({ 
  label, 
  name, 
  type = 'text', 
  required = false, 
  options = [], 
  validation = {}, 
  value = '', 
  onChange,
  placeholder = '',
  className = ''
}) => {
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  // Validation functions
  const validateField = (fieldValue) => {
    if (required && !fieldValue.trim()) {
      return `${label} is required`;
    }

    if (type === 'email' && fieldValue) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(fieldValue)) {
        return 'Please enter a valid email address';
      }
    }

    if (type === 'tel' && fieldValue) {
      const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(fieldValue.replace(/[\s\-()]/g, ''))) {
        return 'Please enter a valid phone number';
      }
    }

    if (validation.minLength && fieldValue.length < validation.minLength) {
      return `${label} must be at least ${validation.minLength} characters`;
    }

    if (validation.maxLength && fieldValue.length > validation.maxLength) {
      return `${label} must be no more than ${validation.maxLength} characters`;
    }

    if (validation.pattern && !validation.pattern.test(fieldValue)) {
      return validation.message || `${label} format is invalid`;
    }

    return '';
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
    
    if (touched) {
      const validationError = validateField(newValue);
      setError(validationError);
    }
  };

  const handleBlur = () => {
    setTouched(true);
    const validationError = validateField(value);
    setError(validationError);
  };

  const baseInputClasses = `
    w-full px-4 py-3 border rounded-lg 
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent
    focus:shadow-lg focus:scale-[1.01]
    touch-manipulation min-h-[44px]
    ${error ? 'border-red-500 bg-red-50 focus:ring-red-500' : 'border-gray-300 hover:border-gray-400 focus:border-orange-500'}
    ${className}
  `;

  const labelClasses = `
    block text-sm font-medium text-gray-700 mb-2
    ${required ? "after:content-['*'] after:text-red-500 after:ml-1" : ''}
  `;

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder}
            className={`${baseInputClasses} min-h-[120px] resize-vertical`}
            required={required}
            rows={4}
          />
        );

      case 'select':
        return (
          <select
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            className={baseInputClasses}
            required={required}
          >
            <option value="">{placeholder || `Select ${label}`}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      default:
        return (
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder}
            className={baseInputClasses}
            required={required}
          />
        );
    }
  };

  return (
    <div className="mb-6">
      <label htmlFor={name} className={labelClasses}>
        {label}
      </label>
      {renderInput()}
      {error && (
        <p className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

// Form container component
export const Form = ({ children, onSubmit, className = '' }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      {children}
    </form>
  );
};

export default FormField;