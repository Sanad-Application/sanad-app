module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    ['module-resolver',
      {
        root: ['./src'],
        extensions: ['.tsx', '.ts'],
        alias: {
          '~assets': './assets',
          '~navigation': './src/navigation',
          '~components': './src/components',
          '~screens': './src/screens',
          '~locals': './src/locals',
          '~utils': './src/utils',
          '~services': './src/services',
          '~helpers': './src/helpers',
          '~store': './src/store',
          '~types': './src/types',
          '~hooks': './src/hooks',
          '~theme': './src/theme'
        },
      }]
  ]
}
