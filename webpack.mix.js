let mix = require('laravel-mix');

mix.options({
        processCssUrls: true,
    })
    .combine([
        'js/jquery.js',
        'js/jquery.touchSwipe.js',
        'js/gmaps.js',
        'js/jqBootstrapValidation.js',
        'js/bootstrap.js',
        'js/blocs.js',
        'js/formHandler.js',
    ], 'dist/app.js')
    .combine([
        'css/bootstrap.css',
        'css/font-awesome.css',
        'css/et-line.css',
        'css/style.css',
    ], 'dist/app.css');