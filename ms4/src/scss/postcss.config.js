module.exports = ({ file, options, env }) => ({
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    }
  }
})
