const mockDir = '__mocks__/file-mock.js';
const transformDir = 'jest-preprocess.js';
const setupFileDir = 'loadershim.js';

module.exports = {
    transform: {
        '^.+\\.jsx?$': `<rootDir>/${transformDir}`,
    },
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/${mockDir}`,
    },
    testPathIgnorePatterns: [`node_modules`, `.cache`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    globals: {
        __PATH_PREFIX__: ``,
    },
    testURL: `http://localhost`,
    setupFiles: [`<rootDir>/${setupFileDir}`],
};
