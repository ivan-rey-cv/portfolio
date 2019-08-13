import React from 'react';
import { render } from '@testing-library/react';
import { wrapRootElement as RootComponent } from '../gatsby-browser';

test('should load the gatsby root element', () => {
    render(<RootComponent />);
});
