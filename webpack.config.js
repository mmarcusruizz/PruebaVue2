module.exports = {
    // ... other configurations
    configureWebpack: {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
      },
    },
  };
  