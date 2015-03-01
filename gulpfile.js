var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
	mix.phpUnit();
    mix.sass('jot.scss');
    mix.copy('vendor/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.min.js', 'public/js/vendor/bootstrap.min.js');
    mix.copy('vendor/bower_components/jquery/dist/jquery.min.js', 'public/js/vendor/jquery.min.js');

});
