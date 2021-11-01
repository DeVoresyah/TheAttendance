module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      {useTransformReactJSXExperimental: true},
    ],
  ],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.svg',
        ],
        alias: {
          '@images': './assets/images',
          '@svg': './assets/svg',
          '@components': './src/components',
          '@config': './src/config',
          '@translate': './src/i18n',
          '@models': './src/models',
          '@navigators': './src/navigators',
          '@screens': './src/screens',
          '@api': './src/services/api',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    ['@babel/plugin-proposal-optional-catch-binding'],
  ],
};
