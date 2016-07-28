var path = require('path');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var config_option;
module.exports = {
    entry:{
        index:[
            'webpack-dev-server/client?http://0.0.0.0:8080',
            'webpack/hot/only-dev-server',
            './entry/index'
        ]
    },
    output: {
        path: path.join(__dirname, 'assets'),
        filename: '[name].js',
        publicPath: '/assets/'
    },
    resolve: {
        extensions: ['', '.coffee','.json', '.js','.css','.less','.jpg','.png','.gif']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        commonsPlugin
        // new webpack.DefinePlugin({
        // __DEVTOOLS__: !!process.env.DEBUG
        // })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
            },
            {
                test: /\.json/,
                loader: 'json-loader'
            },
            {
                test: /\.(css)$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    }
}