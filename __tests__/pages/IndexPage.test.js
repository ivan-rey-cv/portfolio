import React from 'react';
import { StaticQuery } from 'gatsby';
import { render } from '@testing-library/react';
import IndexPage from '../../src/pages/index';

beforeEach(() => {
    StaticQuery.mockImplementationOnce(mock => {
        return mock.render({
            site: {
                siteMetadata: {
                    title: 'Ivan Rey C.V. Portfolio',
                },
            },
        });
    });
});

test('should load the index page', () => {
    render(<IndexPage />);
});
