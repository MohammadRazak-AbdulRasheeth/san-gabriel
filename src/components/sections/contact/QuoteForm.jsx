import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import { companyInfo } from '../../../data/companyInfo';

/**
 * QuoteForm Component
 * Vehicle advertising quote form with fields for:
 * - name, email, phone (required)
 * - vehicleYear, vehicleMake, vehicleModel (required)
 * - vehicleType, location (GTA), industry (default: Real Estate)
 * - preferredLocation (installation location)
 * - logoUpload (optional)
 * - termsAccepted (required checkbox)
 * 
 * Form submissions route to: Sales@sangabrielsolutions.com
 * 
 * Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6
 */

// Export constants for reuse and testing
export const VEHICLE_TYPES = [
  { value: 'sedan', label: 'Sedan' },
  { value: 'suv', label: 'SUV' },
  { value: 'truck', label: 'Truck' },
  { value: 'van', label: 'Van' },
  { value: 'trailer', label: 'Trailer' },
  { value: 'other', label: 'Other' }
];

// Export constants for reuse and testing
export const GTA_LOCATIONS = [
  { value: 'toronto', label: 'Toronto' },
  { value: 'mississauga', label: 'Mississauga' },
  { value: 'brampton', label: 'Brampton' },
  { value: 'vaughan', label: 'Vaughan' },
  { value: 'markham', label: 'Markham' },
  { value: 'richmond-hill', label: 'Richmond Hill' },
  { value: 'oakville', label: 'Oakville' },
  { value: 'burlington', label: 'Burlington' },
  { value: 'hamilton', label: 'Hamilton' },
  { value: 'ajax', label: 'Ajax' },
  { value: 'pickering', label: 'Pickering' },
  { value: 'oshawa', label: 'Oshawa' },
  { value: 'other-gta', label: 'Other GTA Area' }
];

export const INDUSTRIES = [
  { value: 'real-estate', label: 'Real Estate' },
  { value: 'construction', label: 'Construction' },
  { value: 'food-beverage', label: 'Food & Beverage' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'retail', label: 'Retail' },
  { value: 'professional-services', label: 'Professional Services' },
  { value: 'transportation', label: 'Transportation' },
  { value: 'technology', label: 'Technology' },
  { value: 'other', label: 'Other' }
];

// Generate year options (current year down to 20 years ago)
const currentYear = new Date().getFullYear();
export const VEHICLE_YEARS = Array.from({ length: 25 }, (_, i) => currentYear - i);

// Installation locations from company info
export const INSTALLATION_LOCATIONS = companyInfo.installationLocations || [];

const QuoteForm = ({ onSubmit, className = '' }) => {
  const fileInputRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleType: '',
    location: '',
    preferredInstallLocation: '',
    industry: 'real-estate',
    message: '',
    termsAccepted: false
  });
  
  const [logoFile, setLogoFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/png', 'image/svg+xml', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, logoFile: 'Please upload a valid image file (JPEG, PNG, SVG, or WebP)' }));
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, logoFile: 'File size must be less than 5MB' }));
        return;
      }
      setLogoFile(file);
      setErrors(prev => ({ ...prev, logoFile: '' }));
    }
  };

  const removeFile = () => {
    setLogoFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[\d\s\-()]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.vehicleYear) newErrors.vehicleYear = 'Vehicle year is required';
    if (!formData.vehicleMake.trim()) newErrors.vehicleMake = 'Vehicle make is required';
    if (!formData.vehicleModel.trim()) newErrors.vehicleModel = 'Vehicle model is required';
    if (!formData.vehicleType) newErrors.vehicleType = 'Please select a vehicle type';
    if (!formData.location) newErrors.location = 'Please select your location';
    if (!formData.industry) newErrors.industry = 'Please select your industry';
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the Terms & Conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const submissionData = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        vehicleYear: formData.vehicleYear,
        vehicleMake: formData.vehicleMake.trim(),
        vehicleModel: formData.vehicleModel.trim(),
        vehicleType: formData.vehicleType,
        location: formData.location,
        preferredInstallLocation: formData.preferredInstallLocation,
        industry: formData.industry,
        message: formData.message.trim() || null,
        termsAccepted: formData.termsAccepted,
        logoFile: logoFile ? { name: logoFile.name, size: logoFile.size, type: logoFile.type, file: logoFile } : null,
        timestamp: new Date().toISOString(),
        source: 'vehicle_quote_form',
        routeTo: 'sales@sangabrielsolutions.com'
      };

      if (onSubmit) {
        await onSubmit(submissionData);
      } else {
        console.log('Quote form submitted to sales@sangabrielsolutions.com:', submissionData);
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      setSubmitStatus('success');
      setFormData({
        name: '', email: '', phone: '', vehicleYear: '', vehicleMake: '', vehicleModel: '',
        vehicleType: '', location: '', preferredInstallLocation: '', industry: 'real-estate',
        message: '', termsAccepted: false
      });
      setLogoFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className={`bg-white rounded-2xl p-8 text-center ${className}`}>
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-primary-900 mb-4">Quote Request Received!</h3>
        <p className="text-neutral-600 mb-6">Thank you for your interest. We'll review your request and get back to you within 24 hours.</p>
        <Button variant="primary" onClick={() => setSubmitStatus(null)}>Submit Another Request</Button>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className={`bg-white rounded-2xl p-8 ${className}`}>
      <h2 className="text-2xl font-bold text-primary-900 mb-2">Get Your Free Quote</h2>
      <p className="text-neutral-600 mb-6">Fill out the form below and we'll provide a custom quote for your vehicle advertising needs.</p>

      {/* Installation Locations Section */}
      <div className="mb-8 p-4 bg-primary-50 rounded-lg border border-primary-100">
        <h3 className="text-lg font-semibold text-primary-900 mb-3 flex items-center gap-2">
          <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Installation Locations
        </h3>
        <div className="space-y-2">
          {INSTALLATION_LOCATIONS.map((loc, index) => (
            <div key={index} className="flex items-start gap-3 text-sm">
              <span className="font-semibold text-accent-600 min-w-[85px]">{loc.day}:</span>
              <span className="text-neutral-700">{loc.full}</span>
            </div>
          ))}
        </div>
      </div>

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">There was an error submitting your request. Please try again or contact us directly at {companyInfo.phoneFormatted}.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="space-y-6">
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-primary-900 mb-2">Name <span className="text-red-500">*</span></label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors min-h-[44px] ${errors.name ? 'border-red-500 bg-red-50' : 'border-neutral-300'}`}
                placeholder="Your full name" />
              {errors.name && <p className="mt-1 text-sm text-red-600" role="alert">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-primary-900 mb-2">Email <span className="text-red-500">*</span></label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors min-h-[44px] ${errors.email ? 'border-red-500 bg-red-50' : 'border-neutral-300'}`}
                placeholder="your@email.com" />
              {errors.email && <p className="mt-1 text-sm text-red-600" role="alert">{errors.email}</p>}
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-primary-900 mb-2">Phone <span className="text-red-500">*</span></label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors min-h-[44px] ${errors.phone ? 'border-red-500 bg-red-50' : 'border-neutral-300'}`}
              placeholder="(555) 123-4567" />
            {errors.phone && <p className="mt-1 text-sm text-red-600" role="alert">{errors.phone}</p>}
          </div>

          {/* Vehicle Year, Make, Model */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="vehicleYear" className="block text-sm font-semibold text-primary-900 mb-2">Vehicle Year <span className="text-red-500">*</span></label>
              <select id="vehicleYear" name="vehicleYear" value={formData.vehicleYear} onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors min-h-[44px] ${errors.vehicleYear ? 'border-red-500 bg-red-50' : 'border-neutral-300'}`}>
                <option value="">Select year</option>
                {VEHICLE_YEARS.map(year => <option key={year} value={year}>{year}</option>)}
              </select>
              {errors.vehicleYear && <p className="mt-1 text-sm text-red-600" role="alert">{errors.vehicleYear}</p>}
            </div>
            <div>
              <label htmlFor="vehicleMake" className="block text-sm font-semibold text-primary-900 mb-2">Vehicle Make <span className="text-red-500">*</span></label>
              <input type="text" id="vehicleMake" name="vehicleMake" value={formData.vehicleMake} onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors min-h-[44px] ${errors.vehicleMake ? 'border-red-500 bg-red-50' : 'border-neutral-300'}`}
                placeholder="e.g., Toyota" />
              {errors.vehicleMake && <p className="mt-1 text-sm text-red-600" role="alert">{errors.vehicleMake}</p>}
            </div>
            <div>
              <label htmlFor="vehicleModel" className="block text-sm font-semibold text-primary-900 mb-2">Vehicle Model <span className="text-red-500">*</span></label>
              <input type="text" id="vehicleModel" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors min-h-[44px] ${errors.vehicleModel ? 'border-red-500 bg-red-50' : 'border-neutral-300'}`}
                placeholder="e.g., Camry" />
              {errors.vehicleModel && <p className="mt-1 text-sm text-red-600" role="alert">{errors.vehicleModel}</p>}
            </div>
          </div>

          {/* Vehicle Type & Location */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="vehicleType" className="block text-sm font-semibold text-primary-900 mb-2">Vehicle Type <span className="text-red-500">*</span></label>
              <select id="vehicleType" name="vehicleType" value={formData.vehicleType} onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors min-h-[44px] ${errors.vehicleType ? 'border-red-500 bg-red-50' : 'border-neutral-300'}`}>
                <option value="">Select vehicle type</option>
                {VEHICLE_TYPES.map(type => <option key={type.value} value={type.value}>{type.label}</option>)}
              </select>
              {errors.vehicleType && <p className="mt-1 text-sm text-red-600" role="alert">{errors.vehicleType}</p>}
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-semibold text-primary-900 mb-2">Your Location (GTA) <span className="text-red-500">*</span></label>
              <select id="location" name="location" value={formData.location} onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors min-h-[44px] ${errors.location ? 'border-red-500 bg-red-50' : 'border-neutral-300'}`}>
                <option value="">Select your location</option>
                {GTA_LOCATIONS.map(loc => <option key={loc.value} value={loc.value}>{loc.label}</option>)}
              </select>
              {errors.location && <p className="mt-1 text-sm text-red-600" role="alert">{errors.location}</p>}
            </div>
          </div>

          {/* Preferred Installation Location */}
          <div>
            <label htmlFor="preferredInstallLocation" className="block text-sm font-semibold text-primary-900 mb-2">Preferred Installation Location <span className="text-neutral-500 font-normal">(Optional)</span></label>
            <select id="preferredInstallLocation" name="preferredInstallLocation" value={formData.preferredInstallLocation} onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors min-h-[44px]">
              <option value="">Select preferred location</option>
              {INSTALLATION_LOCATIONS.map((loc, index) => (
                <option key={index} value={loc.day}>{loc.day} - {loc.city}</option>
              ))}
            </select>
          </div>

          {/* Industry */}
          <div>
            <label htmlFor="industry" className="block text-sm font-semibold text-primary-900 mb-2">Industry <span className="text-red-500">*</span></label>
            <select id="industry" name="industry" value={formData.industry} onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors min-h-[44px] ${errors.industry ? 'border-red-500 bg-red-50' : 'border-neutral-300'}`}>
              <option value="">Select your industry</option>
              {INDUSTRIES.map(ind => <option key={ind.value} value={ind.value}>{ind.label}</option>)}
            </select>
            {errors.industry && <p className="mt-1 text-sm text-red-600" role="alert">{errors.industry}</p>}
          </div>

          {/* Logo Upload */}
          <div>
            <label htmlFor="logoUpload" className="block text-sm font-semibold text-primary-900 mb-2">Upload Your Logo <span className="text-neutral-500 font-normal">(Optional)</span></label>
            <div className={`border-2 border-dashed rounded-lg p-4 text-center transition-colors ${errors.logoFile ? 'border-red-500 bg-red-50' : 'border-neutral-300 hover:border-accent-500'}`}>
              {logoFile ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div className="text-left">
                      <p className="text-sm font-medium text-primary-900">{logoFile.name}</p>
                      <p className="text-xs text-neutral-500">{(logoFile.size / 1024).toFixed(1)} KB</p>
                    </div>
                  </div>
                  <button type="button" onClick={removeFile} className="text-red-500 hover:text-red-700 p-2 min-h-[44px] min-w-[44px]" aria-label="Remove file">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ) : (
                <label htmlFor="logoUpload" className="cursor-pointer block">
                  <svg className="w-10 h-10 text-neutral-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-sm text-neutral-600"><span className="text-accent-500 font-medium">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-neutral-500 mt-1">PNG, JPG, SVG or WebP (max 5MB)</p>
                </label>
              )}
              <input type="file" id="logoUpload" ref={fileInputRef} onChange={handleFileChange} accept="image/jpeg,image/png,image/svg+xml,image/webp" className="hidden" />
            </div>
            {errors.logoFile && <p className="mt-1 text-sm text-red-600" role="alert">{errors.logoFile}</p>}
          </div>

          {/* Additional Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-primary-900 mb-2">Additional Details <span className="text-neutral-500 font-normal">(Optional)</span></label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors min-h-[120px]"
              placeholder="Tell us more about your advertising goals, timeline, or any specific requirements..." />
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className={`p-4 rounded-lg ${errors.termsAccepted ? 'bg-red-50 border border-red-200' : 'bg-neutral-50'}`}>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange}
                className="mt-1 w-5 h-5 text-accent-500 border-neutral-300 rounded focus:ring-accent-500 cursor-pointer" />
              <span className="text-sm text-neutral-700">
                I agree to the{' '}
                <Link to="/terms" className="text-accent-600 hover:text-accent-700 underline font-medium" target="_blank" rel="noopener noreferrer">
                  Terms & Conditions
                </Link>
                {' '}and{' '}
                <Link to="/privacy" className="text-accent-600 hover:text-accent-700 underline font-medium" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </Link>
                <span className="text-red-500"> *</span>
              </span>
            </label>
            {errors.termsAccepted && <p className="mt-2 text-sm text-red-600" role="alert">{errors.termsAccepted}</p>}
          </div>

          {/* Submit Button */}
          <Button type="submit" variant="primary" size="lg" disabled={isSubmitting || !formData.termsAccepted} className="w-full">
            {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
          </Button>

          <p className="text-sm text-neutral-500 text-center">We typically respond within 24 hours. No spam, ever.</p>
        </div>
      </form>
    </motion.div>
  );
};

export default QuoteForm;
