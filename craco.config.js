const path = require("path");

module.exports = {
  webpack: {
    resolve: {
      fallback: {
        crypto: false, // ou 'crypto': require.resolve('crypto-browserify') se for necessário
      },
    },
  },
};
