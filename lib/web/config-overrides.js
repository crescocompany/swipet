/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = (config) => {
  require('react-app-rewire-postcss')(config, {
    plugins: () => [require('tailwindcss'), require('autoprefixer')],
  });
  return config;
};
