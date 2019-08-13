import React from 'react';
import { StaticQuery } from 'gatsby';
import { render } from '@testing-library/react';
import ErrorPage from '../../src/pages/404';

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

test('should load the 404(error) page', () => {
    render(<ErrorPage />);
});
