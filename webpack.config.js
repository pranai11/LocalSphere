const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = {
  // ... other config
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        ...dotenv.config().parsed,
        REACT_APP_API_URL: JSON.stringify(process.env.REACT_APP_API_URL)
      })
    })
  ]
};