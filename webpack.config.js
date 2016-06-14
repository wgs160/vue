/**
 * Created by 15031493 on 2016/6/14.
 */
var webpack = require('webpack')
module.exports = {
    entry: "./src/js/entry.js",
    output: {
        path: "build/js",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.json$/, loader: "json" }

        ]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by qgn at '+new Date().toLocaleString())//×¢ÊÍÍ·
    ]
};