import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { WrappedApp, App } from './App';

describe('App', () => {
  it('Renders hello world', () => {
    // ARANGE
    render(<WrappedApp />);
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
    render(<WrappedApp />);
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

  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-eaist']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('404 Not Found');
  });
});
