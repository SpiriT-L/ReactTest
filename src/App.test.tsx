import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { WrappedApp, App } from './App';

describe('App', () => {
  it('Renders hello world', () => {
    render(<WrappedApp />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });
  it('Renders hi', () => {
    render(<WrappedApp />);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('hi');
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
