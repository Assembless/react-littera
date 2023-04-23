const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
  const isProd = env.prod === true;
  let type = 'lib';

  console.log(`Compiling: ${type} in mode: ${isProd ? 'production' : 'development'}`);

  const entries = {
    lib: './src/index.ts',
  };

  const outputPaths = {
    lib: path.resolve(__dirname, 'dist'),
  };

  const plugins = [new CopyPlugin({ patterns: [{ from: 'types', to: './' }] })];

  const config = {
    mode: isProd ? 'production' : 'development',
    entry: entries[type],
    output: {
      path: outputPaths[type],
      filename: 'index.js',
      libraryTarget: 'commonjs2',
    },
    devtool: 'source-map',
    plugins,
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
      rules: [
        { test: /\.tsx?$/, use: 'ts-loader' },
        { enforce: 'pre', test: /\.js$/, use: 'source-map-loader' },
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.svg$/,
          type: 'asset/source',
        },
      ],
    },
  };

  return config;
};