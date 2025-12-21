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
 * Feature: san-gabriel-pages, Property 3: Contact Form Field Completeness
 * Validates: Requirements 4.2
 * 
 * For any rendering of the Contact page inquiry form, the form SHALL contain 
 * all required fields: name, email, company, phone, service interest, and message.
 */
describe('Property 3: Contact Form Field Completeness', () => {
  test('contact form contains all required fields across multiple renders', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 100 }), // Number of times to render
        (renderCount) => {
          // Render the contact page
          const { unmount } = renderContact();
          
          // Verify all required fields are present
          const nameField = screen.getByLabelText(/name/i);
          const emailField = screen.getByLabelText(/email/i);
          const companyField = screen.getByLabelText(/company/i);
          const phoneField = screen.getByLabelText(/phone/i);
          const serviceInterestField = screen.getByLabelText(/service interest/i);
          const messageField = screen.getByLabelText(/message/i);
          
          // Assert all fields exist
          expect(nameField).toBeInTheDocument();
          expect(emailField).toBeInTheDocument();
          expect(companyField).toBeInTheDocument();
          expect(phoneField).toBeInTheDocument();
          expect(serviceInterestField).toBeInTheDocument();
          expect(messageField).toBeInTheDocument();
          
          // Verify field types
          expect(nameField).toHaveAttribute('type', 'text');
          expect(emailField).toHaveAttribute('type', 'email');
          expect(companyField).toHaveAttribute('type', 'text');
          expect(phoneField).toHaveAttribute('type', 'tel');
          expect(messageField.tagName).toBe('TEXTAREA');
          
          // Cleanup
          unmount();
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});
