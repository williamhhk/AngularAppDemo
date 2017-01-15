var webpack = require('webpack');
var path = require("path");
var nodeModules = path.resolve(__dirname, "node_modules");

var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    context : __dirname ,
    entry: {
        app: "./index.js",
        vendor: [
            'angular',
            'angular-ui-grid',
        ]
    },
    output: {
        path : __dirname + '/dist' ,
        filename: "app.bundle.js"
    },
    module: {

        loaders: [

            //{
            //    test: /\.css$/,
            //    include: [
            //      __dirname, "./angular-ui-grid/ui-grid.min.css",
            //    ],
            //    loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            //},
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(svg|png|jpe?g|gif)(\?\S*)?$/, loader: 'url?limit=100000&name=img/[name].[ext]' },
            { test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/, loader: 'url?limit=100000&name=fonts/[name].[ext]' },
            //{ test: /\.html$/, loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, './app')) + '/!html'},
        ],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
        new ExtractTextPlugin("styles.css")
    ],
    watch : true,  // Auto rebuild of files when any changes are detected.
};