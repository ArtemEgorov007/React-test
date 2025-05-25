import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../app';

test('renders main heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Моя коллекция фотографий/i);
  expect(headingElement).toBeInTheDocument();
});
