module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '~/assets': './assets',
            '~/components': './src/components',
            '~/hooks': './src/hooks',
            '~/scenes': './src/scenes',
            '~/services': './src/services',
            '~/styles': './src/styles',
            '~/types': './src/types',
            '~/utils': './src/utils',
          },
        },
      ],
    ],
  };
};
