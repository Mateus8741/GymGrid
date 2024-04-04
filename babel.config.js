// babel.config.js
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      'react-native-reanimated/plugin',
      ['module:react-native-dotenv', { moduleName: '@env' }],
      [
        'module-resolver',
        {
          root: '.',
          alias: {
            '@models': './src/models',
            '@schemas': './src/schemas',
            '@assets': './src/assets',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@screens': './src/screens',
            '@storage': './src/storage',
            '@utils': './src/utils',
            '@services': './src/services',
            '@contexts': './src/contexts',
            '@routes': './src/routes',
            '@theme': './src/theme',
            '@domain': './src/domain',
            '@brand': './src/brand',
            '@api': './src/api',
            '@types': './src/types',
            '@infra': './src/infra',
            '@mock': './src/mock',
          },
        },
      ],
    ],
  }
}
