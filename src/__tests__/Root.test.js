const React = require('react');
const { render } = require('@testing-library/react');

const { wrapRootElement: Root } = require('../../gatsby-browser');

test('should load the gatsby root element', () => {
    render(<Root />);
});
