import React from 'react';
import {
  render,
} from '@testing-library/react';
import Navbar from '..';

describe('Navbar', () => {
  it('should render card when mounted', () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
