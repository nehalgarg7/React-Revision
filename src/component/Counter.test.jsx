import { render, screen } from '@testing-library/react';

import Counter from './Counter';

test('renders learn react link', () => {
  render(<Counter />);
  const linkElement = screen.getByText(/Counter/i);
  expect(linkElement).toBeInTheDocument();
});
