import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import './i18n'; // Initialize i18n for tests

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('renders navigation bar', () => {
    render(<App />);
    // Check if the app renders successfully - navbar should be present
    const navElement = document.querySelector('nav');
    expect(navElement).toBeInTheDocument();
  });
});
