import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  test('renders as link when href is provided', () => {
    render(<Button href="/test">Link Button</Button>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/test');
    expect(link).toHaveTextContent('Link Button');
  });

  test('applies primary variant styles by default', () => {
    render(<Button>Primary Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-orange-500');
    expect(button).toHaveClass('text-white');
  });

  test('applies secondary variant styles', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-transparent');
    expect(button).toHaveClass('text-orange-500');
    expect(button).toHaveClass('border-orange-500');
  });

  test('applies outline variant styles', () => {
    render(<Button variant="outline">Outline Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-transparent');
    expect(button).toHaveClass('text-blue-900');
    expect(button).toHaveClass('border-blue-900');
  });

  test('applies small size styles', () => {
    render(<Button size="sm">Small Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('px-4');
    expect(button).toHaveClass('py-2');
    expect(button).toHaveClass('text-sm');
  });

  test('applies medium size styles by default', () => {
    render(<Button>Medium Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('px-6');
    expect(button).toHaveClass('py-3');
    expect(button).toHaveClass('text-base');
  });

  test('applies large size styles', () => {
    render(<Button size="lg">Large Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('px-8');
    expect(button).toHaveClass('py-4');
    expect(button).toHaveClass('text-lg');
  });

  test('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies disabled state correctly', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Disabled Button</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-50');
    expect(button).toHaveClass('cursor-not-allowed');
    
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('applies custom className', () => {
    render(<Button className="custom-class">Custom Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  test('applies base styles to all buttons', () => {
    render(<Button>Test Button</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveClass('font-semibold');
    expect(button).toHaveClass('rounded-lg');
    expect(button).toHaveClass('transition-all');
    expect(button).toHaveClass('cursor-pointer');
    expect(button).toHaveClass('inline-flex');
    expect(button).toHaveClass('items-center');
    expect(button).toHaveClass('justify-center');
  });

  test('sets correct button type', () => {
    render(<Button type="submit">Submit Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  test('defaults to button type', () => {
    render(<Button>Default Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });
});