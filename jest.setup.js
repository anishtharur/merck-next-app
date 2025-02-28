import "@testing-library/jest-dom";

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Silence specific React act() warnings
const originalError = console.error;
console.error = (...args) => {
  if (
    /Warning: An update to.*inside a test was not wrapped in act/.test(args[0])
  ) {
    return;
  }
  originalError.call(console, ...args);
};
