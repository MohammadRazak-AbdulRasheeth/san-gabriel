// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock window.scrollTo for jsdom
window.scrollTo = jest.fn();

// Mock scrollIntoView for jsdom
Element.prototype.scrollIntoView = jest.fn();

// Mock matchMedia for responsive tests
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};

// Mock IntersectionObserver for framer-motion
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() { return null; }
  unobserve() { return null; }
  disconnect() { return null; }
}
window.IntersectionObserver = MockIntersectionObserver;

// Mock ResizeObserver
class MockResizeObserver {
  observe() { return null; }
  unobserve() { return null; }
  disconnect() { return null; }
}
window.ResizeObserver = MockResizeObserver;
