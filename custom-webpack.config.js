const UglifyEsPlugin = require('uglify-es-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: false,
                //ecma: 6,
                //mangle: true,
                keep_fnames: true,
                keep_classnames: true
              },
        }),
      new UglifyEsPlugin({
          compress: false,
          //ecma: 6,
          //mangle: true,
          keep_fnames: true,
          keep_classnames: true
        
      }),
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: false,
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        // Use multi-process parallel running to improve the build speed
        // Default number of concurrent runs: os.cpus().length - 1
        parallel: true,
        // Enable file caching
        cache: true,
        sourceMap: false,
      }),
    ]
  }
};