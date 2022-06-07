module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './src/assets',
            constants: './src/constants',
            context: './src/context',
            hooks: './src/hooks',
            navigation: './src/navigation',
            screens: './src/screens',
            styles: './src/styles',
            types: './src/types',
            utils: './src/utils',
            components: './src/components',
            theme: './src/theme',
            plugins: './src/plugins',
          },
        },
      ],
    ],
  };
};
