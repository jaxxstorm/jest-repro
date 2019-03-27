module.exports = {
  getTestEnvironmentComponents: function (component) {
    const contents = require('.././components/'+component+'/tmp/test-manifest.json');
    return contents;
  },
};
