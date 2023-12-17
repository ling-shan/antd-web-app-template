// config-overrides.js文件内容：
const path = require('path')
const { override, addWebpackAlias, addBundleVisualizer, addWebpackResolve } = require('customize-cra')

const isProd = process.env.NODE_ENV === "production"

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),

  addWebpackResolve({
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
    }
  }),

  isProd && addBundleVisualizer(),
)
