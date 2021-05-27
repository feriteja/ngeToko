module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@router': './src/config/router',
          '@redux': './src/config/redux',
          '@screens': './src/screens',
          '@components': './src/components',
          '@constant': './src/constant',
        },
      },
    ],
  ],
};
