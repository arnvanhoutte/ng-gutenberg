const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    optimization: {
        minimizer: [new TerserPlugin({
            parallel: true,
            cache: true,
            terserOptions: {
                ecma: 8,
                warnings: false,
                parse: {},
                compress:false,
                mangle: true, // Note `mangle.properties` is `false` by default.
                module: false,
                output: null,
                toplevel: false,
                nameCache: null,
                ie8: false,
                keep_classnames: true,
                keep_fnames: true,
                safari10: false
            }
        })]
    }
};