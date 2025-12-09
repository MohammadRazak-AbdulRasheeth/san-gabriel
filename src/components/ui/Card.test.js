import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card Component', () => {
  test('renders card with title and description', () => {
    render(
      <Card 
        title="Test Title" 
        description="Test description content" 
      />
    );
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test description content')).toBeInTheDocument();
  });

  test('renders card with string icon', () => {
    render(
      <Card 
        title="Test Title" 
        icon="Marketing"
      />
    );
    
    // Should render first letter of icon string
    expect(screen.getByText('M')).toBeInTheDocument();
  });

  test('renders card with JSX icon', () => {
    const TestIcon = () => <span data-testid="test-icon">📊</span>;
    
    render(
      <Card 
        title="Test Title" 
        icon={<TestIcon />}
      />
    );
    
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  test('renders card with action button', () => {
    const mockAction = {
      label: 'Learn More',
      href: '/test-link'
    };
    
    render(
      <Card 
        title="Test Title" 
        action={mockAction}
      />
    );
    
    const actionButton = screen.getByRole('link');
    expect(actionButton).toHaveTextContent('Learn More');
    expect(actionButton).toHaveAttribute('href', '/test-link');
  });

  test('renders card with action button using onClick', () => {
    const mockClick = jest.fn();
    const mockAction = {
      label: 'Click Me',
      onClick: mockClick
    };
    
    render(
      <Card 
        title="Test Title" 
        action={mockAction}
      />
    );
    
    const actionButton = screen.getByRole('button');
    expect(actionButton).toHaveTextContent('Click Me');
    
    fireEvent.click(actionButton);
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  test('uses default action label when none provided', () => {
    const mockAction = {
      href: '/test'
    };
    
    render(
      <Card 
        title="Test Title" 
        action={mockAction}
      />
    );
    
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  test('applies default variant styles', () => {
    render(<Card title="Test Title" data-testid="test-card" />);
    
    const card = screen.getByTestId('test-card');
    expect(card).toHaveClass('hover:border-orange-200');
  });

  test('applies service variant styles', () => {
    render(<Card title="Test Title" variant="service" data-testid="test-card" />);
    
    const card = screen.getByTestId('test-card');
    expect(card).toHaveClass('hover:border-blue-200');
    expect(card).toHaveClass('hover:bg-blue-50/30');
  });

  test('applies feature variant styles', () => {
    render(<Card title="Test Title" variant="feature" data-testid="test-card" />);
    
    const card = screen.getByTestId('test-card');
    expect(card).toHaveClass('hover:border-orange-200');
    expect(card).toHaveClass('hover:bg-orange-50/30');
  });

  test('applies custom className', () => {
    render(<Card title="Test Title" className="custom-class" data-testid="test-card" />);
    
    const card = screen.getByTestId('test-card');
    expect(card).toHaveClass('custom-class');
  });

  test('applies base styles to all cards', () => {
    render(<Card title="Test Title" data-testid="test-card" />);
    
    const card = screen.getByTestId('test-card');
    expect(card).toHaveClass('bg-white');
    expect(card).toHaveClass('rounded-lg');
    expect(card).toHaveClass('shadow-md');
    expect(card).toHaveClass('border');
    expect(card).toHaveClass('border-gray-200');
    expect(card).toHaveClass('p-6');
    expect(card).toHaveClass('transition-all');
    expect(card).toHaveClass('duration-300');
    expect(card).toHaveClass('hover:shadow-lg');
    expect(card).toHaveClass('flex');
    expect(card).toHaveClass('flex-col');
    expect(card).toHaveClass('h-full');
  });

  test('renders card without optional props', () => {
    render(<Card data-testid="empty-card" />);
    
    // Should render empty card without errors
    const card = screen.getByTestId('empty-card');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('bg-white');
  });

  test('handles action with custom variant and size', () => {
    const mockAction = {
      label: 'Custom Action',
      variant: 'primary',
      size: 'lg',
      href: '/custom'
    };
    
    render(
      <Card 
        title="Test Title" 
        action={mockAction}
      />
    );
    
    const actionButton = screen.getByRole('link');
    expect(actionButton).toHaveTextContent('Custom Action');
    expect(actionButton).toHaveClass('bg-orange-500'); // primary variant
    expect(actionButton).toHaveClass('px-8'); // lg size
  });

  test('card content is properly structured with flex layout', () => {
    render(
      <Card 
        title="Test Title" 
        description="Test description"
        action={{ label: 'Action' }}
        data-testid="structured-card"
      />
    );
    
    const card = screen.getByTestId('structured-card');
    const contentSection = card.querySelector('.flex-grow');
    const actionSection = card.querySelector('.mt-auto');
    
    expect(contentSection).toBeInTheDocument();
    expect(actionSection).toBeInTheDocument();
  });

  test('icon section renders with proper styling', () => {
    render(<Card title="Test Title" icon="Test" />);
    
    const iconContainer = screen.getByText('T').closest('div');
    expect(iconContainer).toHaveClass('w-12');
    expect(iconContainer).toHaveClass('h-12');
    expect(iconContainer).toHaveClass('bg-orange-100');
    expect(iconContainer).toHaveClass('rounded-full');
    expect(iconContainer).toHaveClass('flex');
    expect(iconContainer).toHaveClass('items-center');
    expect(iconContainer).toHaveClass('justify-center');
  });

  test('title has proper styling', () => {
    render(<Card title="Test Title" />);
    
    const title = screen.getByText('Test Title');
    expect(title).toHaveClass('text-xl');
    expect(title).toHaveClass('font-semibold');
    expect(title).toHaveClass('text-gray-900');
    expect(title).toHaveClass('mb-3');
    expect(title).toHaveClass('text-center');
  });

  test('description has proper styling', () => {
    render(<Card description="Test description" />);
    
    const description = screen.getByText('Test description');
    expect(description).toHaveClass('text-gray-600');
    expect(description).toHaveClass('text-center');
    expect(description).toHaveClass('leading-relaxed');
    expect(description).toHaveClass('mb-4');
  });

  test('passes through additional props', () => {
    render(<Card title="Test Title" data-testid="custom-card" />);
    
    expect(screen.getByTestId('custom-card')).toBeInTheDocument();
  });
});