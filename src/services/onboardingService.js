/**
 * Onboarding Service
 * 
 * Handles form submission, email validation, and draft management for the owner-operator onboarding process.
 * Integrates with backend API and provides localStorage-based draft auto-save functionality.
 */

const DRAFT_STORAGE_KEY = 'onboarding-draft';
const API_BASE_URL = process.env.REACT_APP_API_URL || '/api';

/**
 * Submit onboarding form data to the backend
 * @param {Object} data - Complete onboarding form data
 * @returns {Promise<{submissionId: string, success: boolean}>}
 * @throws {Error} If submission fails
 */
export const submitOnboarding = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/onboarding`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Submission failed');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Onboarding submission error:', error);
    throw error;
  }
};

/**
 * Check if an email address is available (not already registered)
 * @param {string} email - Email address to check
 * @returns {Promise<{available: boolean}>}
 */
export const checkEmailAvailability = async (email) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/onboarding/check-email?email=${encodeURIComponent(email)}`
    );

    if (!response.ok) {
      throw new Error('Email availability check failed');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Email availability check error:', error);
    // Return available: true on error to not block the user
    return { available: true };
  }
};

/**
 * Save form data as draft to localStorage
 * @param {Object} data - Partial or complete form data
 * @returns {void}
 */
export const saveDraft = (data) => {
  try {
    const draftData = {
      data,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draftData));
  } catch (error) {
    console.error('Error saving draft:', error);
    // Silently fail - don't block the user if localStorage is unavailable
  }
};

/**
 * Load draft form data from localStorage
 * @returns {Object|null} Draft data or null if no draft exists
 */
export const loadDraft = () => {
  try {
    const draftJson = localStorage.getItem(DRAFT_STORAGE_KEY);
    if (!draftJson) {
      return null;
    }

    const draft = JSON.parse(draftJson);
    return draft.data || null;
  } catch (error) {
    console.error('Error loading draft:', error);
    return null;
  }
};

/**
 * Clear draft form data from localStorage
 * @returns {void}
 */
export const clearDraft = () => {
  try {
    localStorage.removeItem(DRAFT_STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing draft:', error);
    // Silently fail
  }
};

/**
 * Get the timestamp of the last saved draft
 * @returns {string|null} ISO timestamp or null if no draft exists
 */
export const getDraftTimestamp = () => {
  try {
    const draftJson = localStorage.getItem(DRAFT_STORAGE_KEY);
    if (!draftJson) {
      return null;
    }

    const draft = JSON.parse(draftJson);
    return draft.timestamp || null;
  } catch (error) {
    console.error('Error getting draft timestamp:', error);
    return null;
  }
};

// Export all functions as a service object
export const onboardingService = {
  submitOnboarding,
  checkEmailAvailability,
  saveDraft,
  loadDraft,
  clearDraft,
  getDraftTimestamp,
};

export default onboardingService;
