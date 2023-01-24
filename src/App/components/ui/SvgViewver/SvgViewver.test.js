import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SvgViewver from './SvgViewver';

describe('<SvgViewver />', () => {
  test('it should mount', () => {
    render(<SvgViewver />);
    
    const svgViewver = screen.getByTestId('SvgViewver');

    expect(svgViewver).toBeInTheDocument();
  });
});