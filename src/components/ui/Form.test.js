import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormField, Form } from './Form';

describe('FormField Component', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  describe('Basic Rendering', () => {
    test('renders text input with label', () => {
      render(
        <FormField
          label="Full Name"
          name="fullName"
          value=""
          onChange={mockOnChange}
        />
      );

      expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    test('renders required field with asterisk', () => {
      render(
        <FormField
          label="Email"
          name="email"
          type="email"
          required={true}
          value=""
          onChange={mockOnChange}
        />
      );

      const label = screen.getByText('Email');
      expect(label).toHaveClass("after:content-['*']");
    });

    test('renders textarea when type is textarea', () => {
      render(
        <FormField
          label="Description"
          name="description"
          type="textarea"
          value=""
          onChange={mockOnChange}
        />
      );

      expect(screen.getByRole('textbox')).toHaveAttribute('rows', '4');
    });

    test('renders select with options', () => {
      const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' }
      ];

      render(
        <FormField
          label="Service Interest"
          name="serviceInterest"
          type="select"
          options={options}
          value=""
          onChange={mockOnChange}
        />
      );

      expect(screen.getByRole('combobox')).toBeInTheDocument();
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
    });
  });

  describe('Input Handling', () => {
    test('calls onChange when input value changes', async () => {
      render(
        <FormField
          label="Full Name"
          name="fullName"
          value=""
          onChange={mockOnChange}
        />
      );

      const input = screen.getByRole('textbox');
      await userEvent.type(input, 'John Doe');

      expect(mockOnChange).toHaveBeenCalledTimes(8); // One call per character
      // Check that onChange was called with each character
      expect(mockOnChange).toHaveBeenNthCalledWith(1, 'J');
      expect(mockOnChange).toHaveBeenNthCalledWith(8, 'e');
    });

    test('handles select option changes', async () => {
      const options = [
        { value: 'marketing', label: 'Marketing Services' },
        { value: 'strategy', label: 'Strategy Consulting' }
      ];

      render(
        <FormField
          label="Service Interest"
          name="serviceInterest"
          type="select"
          options={options}
          value=""
          onChange={mockOnChange}
        />
      );

      const select = screen.getByRole('combobox');
      await userEvent.selectOptions(select, 'marketing');

      expect(mockOnChange).toHaveBeenCalledWith('marketing');
    });
  });

  describe('Validation Logic', () => {
    test('shows required field error when field is empty and touched', async () => {
      render(
        <FormField
          label="Full Name"
          name="fullName"
          required={true}
          value=""
          onChange={mockOnChange}
        />
      );

      const input = screen.getByRole('textbox');
      await userEvent.click(input);
      await userEvent.tab(); // Trigger blur event

      await waitFor(() => {
        expect(screen.getByText('Full Name is required')).toBeInTheDocument();
      });
    });

    test('validates email format', async () => {
      render(
        <FormField
          label="Email"
          name="email"
          type="email"
          value="invalid-email"
          onChange={mockOnChange}
        />
      );

      const input = screen.getByRole('textbox');
      await userEvent.click(input);
      fireEvent.blur(input); // Use fireEvent for blur

      await waitFor(() => {
        expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
      });
    });

    test('validates phone number format', async () => {
      render(
        <FormField
          label="Phone"
          name="phone"
          type="tel"
          value="invalid-phone"
          onChange={mockOnChange}
        />
      );

      const input = screen.getByRole('textbox');
      await userEvent.click(input);
      fireEvent.blur(input);

      await waitFor(() => {
        expect(screen.getByText('Please enter a valid phone number')).toBeInTheDocument();
      });
    });

    test('validates minimum length', async () => {
      render(
        <FormField
          label="Description"
          name="description"
          value="Hi"
          validation={{ minLength: 10 }}
          onChange={mockOnChange}
        />
      );

      const input = screen.getByRole('textbox');
      await userEvent.click(input);
      fireEvent.blur(input);

      await waitFor(() => {
        expect(screen.getByText('Description must be at least 10 characters')).toBeInTheDocument();
      });
    });

    test('validates maximum length', async () => {
      const longText = 'a'.repeat(101);
      
      render(
        <FormField
          label="Description"
          name="description"
          value={longText}
          validation={{ maxLength: 100 }}
          onChange={mockOnChange}
        />
      );

      const input = screen.getByRole('textbox');
      await userEvent.click(input);
      fireEvent.blur(input);

      await waitFor(() => {
        expect(screen.getByText('Description must be no more than 100 characters')).toBeInTheDocument();
      });
    });

    test('validates custom pattern', async () => {
      render(
        <FormField
          label="Company Code"
          name="companyCode"
          value="invalid123"
          validation={{ 
            pattern: /^[A-Z]{3}[0-9]{3}$/, 
            message: 'Company code must be 3 letters followed by 3 numbers' 
          }}
          onChange={mockOnChange}
        />
      );

      const input = screen.getByRole('textbox');
      await userEvent.click(input);
      fireEvent.blur(input);

      await waitFor(() => {
        expect(screen.getByText('Company code must be 3 letters followed by 3 numbers')).toBeInTheDocument();
      });
    });

    test('clears error when valid input is provided', async () => {
      const { rerender } = render(
        <FormField
          label="Email"
          name="email"
          type="email"
          required={true}
          value=""
          onChange={mockOnChange}
        />
      );

      const input = screen.getByRole('textbox');
      await userEvent.click(input);
      fireEvent.blur(input);

      await waitFor(() => {
        expect(screen.getByText('Email is required')).toBeInTheDocument();
      });

      // Update with valid email
      rerender(
        <FormField
          label="Email"
          name="email"
          type="email"
          required={true}
          value="test@example.com"
          onChange={mockOnChange}
        />
      );

      await userEvent.click(input);
      fireEvent.blur(input);

      await waitFor(() => {
        expect(screen.queryByText('Email is required')).not.toBeInTheDocument();
        expect(screen.queryByText('Please enter a valid email address')).not.toBeInTheDocument();
      });
    });
  });

  describe('Accessibility', () => {
    test('associates label with input using htmlFor and id', () => {
      render(
        <FormField
          label="Full Name"
          name="fullName"
          value=""
          onChange={mockOnChange}
        />
      );

      const input = screen.getByRole('textbox');
      const label = screen.getByText('Full Name');
      
      expect(input).toHaveAttribute('id', 'fullName');
      expect(label).toHaveAttribute('for', 'fullName');
    });

    test('error message has role="alert"', async () => {
      render(
        <FormField
          label="Email"
          name="email"
          type="email"
          required={true}
          value=""
          onChange={mockOnChange}
        />
      );

      const input = screen.getByRole('textbox');
      await userEvent.click(input);
      fireEvent.blur(input);

      await waitFor(() => {
        const errorMessage = screen.getByText('Email is required');
        expect(errorMessage).toHaveAttribute('role', 'alert');
      });
    });
  });

  describe('Styling', () => {
    test('applies error styling when validation fails', async () => {
      render(
        <FormField
          label="Email"
          name="email"
          type="email"
          required={true}
          value=""
          onChange={mockOnChange}
        />
      );

      const input = screen.getByRole('textbox');
      await userEvent.click(input);
      fireEvent.blur(input);

      await waitFor(() => {
        expect(input).toHaveClass('border-red-500', 'bg-red-50');
      });
    });

    test('applies focus styling', () => {
      render(
        <FormField
          label="Full Name"
          name="fullName"
          value=""
          onChange={mockOnChange}
        />
      );

      const input = screen.getByRole('textbox');
      expect(input).toHaveClass('focus:ring-2', 'focus:ring-orange-500');
    });
  });
});

describe('Form Component', () => {
  test('renders form with children', () => {
    const mockOnSubmit = jest.fn();
    
    render(
      <Form onSubmit={mockOnSubmit}>
        <div>Form content</div>
      </Form>
    );

    expect(screen.getByText('Form content')).toBeInTheDocument();
    // Use querySelector instead of getByRole for form
    const form = document.querySelector('form');
    expect(form).toBeInTheDocument();
  });

  test('prevents default form submission and calls onSubmit', async () => {
    const mockOnSubmit = jest.fn();
    
    render(
      <Form onSubmit={mockOnSubmit}>
        <button type="submit">Submit</button>
      </Form>
    );

    const submitButton = screen.getByRole('button');
    await userEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });

  test('applies custom className', () => {
    render(
      <Form className="custom-form-class">
        <div>Form content</div>
      </Form>
    );

    const form = document.querySelector('form');
    expect(form).toHaveClass('custom-form-class');
  });
});