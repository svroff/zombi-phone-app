// Unit test for Header component
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';
import React from 'react';

describe('Header', () => {
  it('renders phone number', () => {
    render(
      <Header
        content={{
          logo: <div>Logo</div>,
          menu: <div>Menu</div>,
          contact: <div>666 777 888</div>,
        }}
      />,
    );
    expect(screen.getByText('666 777 888')).toBeInTheDocument();
  });
});
