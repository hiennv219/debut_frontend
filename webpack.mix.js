let mix = require('laravel-mix');

/*
|--------------------------------------------------------------------------
| Mix Asset Management
|--------------------------------------------------------------------------
|
| Mix provides a clean, fluent API for defining some Webpack build steps
| for your Laravel application. By default, we are compiling the Sass
| file for the application as well as bundling up all the JS files.
|
*/
mix.copy('resources/assets/js/common/lib/socket.io.js', 'public/js')
  .js('resources/assets/js/home/app.js', 'public/js')
  .sass('resources/assets/sass/app.scss', 'public/css').version();

mix.webpackConfig({
  plugins: [
  ],
  resolve: {
    alias: {
      "common": path.resolve(__dirname, './resources/assets/js/common'),
    }
  },
});
