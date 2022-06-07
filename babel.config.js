module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
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
          },
        },
      ],
    ],
  };
};
