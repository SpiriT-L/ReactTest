import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Renders hello world', () => {
    // ARANGE
    render(<App />);
    // ACT
    // const message = screen.queryByText(/Hello World/i);

    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
    // expect(message).toBeVisible();
  });
  it('Renders hi', () => {
    // ARANGE
    render(<App />);
    // ACT
    // const message = screen.queryByText(/Hello World/i);

    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('hi');
    // expect(message).toBeVisible();
  });
});
