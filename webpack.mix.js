const mix = require('laravel-mix');

mix.js( 'src/js/app.js', 'public/js/app.js').extract()
.sass( 'src/scss/header.scss', 'public/css/header.css')
.sass( 'src/scss/footer.scss', 'public/css/footer.css')
.options({
    processCssUrls: false
})
.copyDirectory('src/img', 'public/img');