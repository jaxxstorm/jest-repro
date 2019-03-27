const path = require('path');

module.exports = {
  projects: [
    {
      displayName: 'test',
      globalSetup: '<rootDir>/components/test_comp/test/0-setup.js',
      rootdir: '<rootDir>/components/test_comp',
      testMatch: ['<rootDir>/**/*.test.js'],
    },
  ],
};
