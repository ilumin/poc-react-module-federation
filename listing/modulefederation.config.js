const { dependencies } = require('./package.json');

module.exports = {
  name: 'listing',
  exposes: {
    // './Button': './src/Button',
  },
  filename: 'remoteEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
