const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},

    'postcss-preset-env': {
      stage: 3,
      features: {
        'custom-properties': {
          preserve: false,
        },
      },
      autoprefixer: {
        flexbox: 'no-2009',
      },
    },

    ...(isProd
      ? {
          cssnano: {
            preset: 'default',
          },
        }
      : {}),
  },
}
