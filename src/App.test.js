import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

// Suppress React Router deprecation warnings in tests
const originalWarn = console.warn;
beforeAll(() => {
  console.warn = (...args) => {
    if (args[0]?.includes?.('React Router Future Flag Warning')) return;
    originalWarn.apply(console, args);
  };
});
afterAll(() => {
  console.warn = originalWarn;
});

test('renders app without crashing', async () => {
  render(<App />);
  // Wait for the app to render
  await waitFor(() => {
    expect(document.body).toBeInTheDocument();
  });
});
