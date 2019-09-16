const React = require('react');

exports.wrapRootElement = ({ element }) => {
    return <BreakTest>{element}</BreakTest>;
};
