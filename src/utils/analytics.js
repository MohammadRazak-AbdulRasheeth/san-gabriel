/**
 * Analytics Utility Functions
 * GA4 + Conversion Events tracking
 * 
 * To enable:
 * 1. Add GA4 script to public/index.html with your GA_MEASUREMENT_ID
 * 2. Add Microsoft Clarity script with your CLARITY_PROJECT_ID
 */

/**
 * Track a custom event in GA4
 * @param {string} eventName - Name of the event
 * @param {Object} eventParams - Event parameters
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, eventParams);
  }
};

/**
 * Track form submission
 * @param {string} formName - Name of the form
 * @param {Object} formData - Form data (sanitized)
 */
export const trackFormSubmit = (formName, formData = {}) => {
  trackEvent('form_submit', {
    form_name: formName,
    audience_type: formData.audienceType || 'unknown',
    service_type: formData.serviceType || 'unknown',
    ...formData
  });
};

/**
 * Track click-to-call
 * @param {string} phoneNumber - Phone number clicked
 * @param {string} location - Where on the site the click occurred
 */
export const trackClickToCall = (phoneNumber, location = 'unknown') => {
  trackEvent('click_to_call', {
    phone_number: phoneNumber,
    click_location: location
  });
};

/**
 * Track booking/consultation request
 * @param {string} bookingType - Type of booking
 * @param {Object} details - Booking details
 */
export const trackBooking = (bookingType, details = {}) => {
  trackEvent('booking_request', {
    booking_type: bookingType,
    ...details
  });
};

/**
 * Track CTA button clicks
 * @param {string} ctaName - Name/label of the CTA
 * @param {string} destination - Where the CTA leads
 * @param {string} location - Where on the page
 */
export const trackCTAClick = (ctaName, destination, location = 'unknown') => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    destination: destination,
    click_location: location
  });
};

/**
 * Track page view (for SPA navigation)
 * @param {string} pagePath - Page path
 * @param {string} pageTitle - Page title
 */
export const trackPageView = (pagePath, pageTitle) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
      page_title: pageTitle
    });
  }
};

/**
 * Track vehicle partner application
 * @param {Object} applicationData - Application details
 */
export const trackVehiclePartnerApplication = (applicationData = {}) => {
  trackEvent('vehicle_partner_application', {
    vehicle_type: applicationData.vehicleType || 'unknown',
    base_city: applicationData.baseCity || 'unknown'
  });
};

/**
 * Track advertising inquiry
 * @param {Object} inquiryData - Inquiry details
 */
export const trackAdvertisingInquiry = (inquiryData = {}) => {
  trackEvent('advertising_inquiry', {
    budget_range: inquiryData.budgetRange || 'unknown',
    service_type: inquiryData.serviceType || 'unknown'
  });
};

/**
 * Track branding quote request
 * @param {Object} quoteData - Quote request details
 */
export const trackBrandingQuote = (quoteData = {}) => {
  trackEvent('branding_quote_request', {
    vehicle_type: quoteData.vehicleType || 'unknown'
  });
};

export default {
  trackEvent,
  trackFormSubmit,
  trackClickToCall,
  trackBooking,
  trackCTAClick,
  trackPageView,
  trackVehiclePartnerApplication,
  trackAdvertisingInquiry,
  trackBrandingQuote
};
