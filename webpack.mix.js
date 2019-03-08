const mix = require('laravel-mix');

mix.js( 'src/js/app.js', 'public/js/app.js').extract()
.sass( 'src/scss/app.scss', 'public/css/app.css')
.options({
    processCssUrls: false
})
.webpackConfig({
    plugins: [
        new CopyWebpackPlugin([
            {
                from:  themePath + 'src/img',
                to:  themePath + 'public/img',
            }
        ]),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            plugins: [
                imageminMozjpeg({
                    quality: 80,
                })
            ]
        })
    ]
});