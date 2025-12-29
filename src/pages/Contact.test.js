import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import fc from 'fast-check';
import Contact from './Contact';

// Helper to render Contact page with router
const renderContact = () => {
  return render(
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  );
};

/**
 * Feature: vehicle-advertising-rebrand, Property 6: Quote Form Data Capture
 * Validates: Requirements 6.1, 6.2, 6.3, 6.4, 6.5, 6.6
 * 
 * For any rendering of the Contact page quote form, the form SHALL contain 
 * all required fields: name, email, phone, vehicleType, location, and industry.
 */
describe('Property 6: Quote Form Field Completeness', () => {
  test('quote form contains all required fields across multiple renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 100 }), // Number of times to render
        (renderCount) => {
          // Render the contact page
          const { unmount } = renderContact();
          
          // Verify all required fields are present (Requirements 6.1-6.5)
          const nameField = screen.getByLabelText(/name/i);
          const emailField = screen.getByLabelText(/email/i);
          const phoneField = screen.getByLabelText(/phone/i);
          const vehicleTypeField = screen.getByLabelText(/vehicle type/i);
          const locationField = screen.getByLabelText(/location/i);
          const industryField = screen.getByLabelText(/industry/i);
          
          // Assert all fields exist
          expect(nameField).toBeInTheDocument();
          expect(emailField).toBeInTheDocument();
          expect(phoneField).toBeInTheDocument();
          expect(vehicleTypeField).toBeInTheDocument();
          expect(locationField).toBeInTheDocument();
          expect(industryField).toBeInTheDocument();
          
          // Verify field types
          expect(nameField).toHaveAttribute('type', 'text');
          expect(emailField).toHaveAttribute('type', 'email');
          expect(phoneField).toHaveAttribute('type', 'tel');
          expect(vehicleTypeField.tagName).toBe('SELECT');
          expect(locationField.tagName).toBe('SELECT');
          expect(industryField.tagName).toBe('SELECT');
          
          // Cleanup
          unmount();
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});
