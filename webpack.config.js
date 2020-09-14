const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');

module.exports = () => {
  const OUTPUT_DIR = path.resolve(__dirname, 'dist');

  return {
    mode: 'production',
    target: 'web',
    entry: './src/index.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.build.json'
          }
        }
      ]
    },
    optimization: { minimizer: [new TerserJSPlugin({})] },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    output: {
      libraryTarget: 'commonjs',
      filename: 'index.js',
      path: OUTPUT_DIR
    },
    externals: {
      react: {
        commonjs: 'react'
      }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new BundleStatsWebpackPlugin({
        outDir: '../'
      })
    ]
  };
};
