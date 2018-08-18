const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const precss = require('precss')
// const autoprefixer = require('autoprefixer')

module.exports = {
    mode: 'development',
    entry: [
        'webpack/hot/dev-server',
        path.join(__dirname, 'src/', 'main.js')
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist/'),
        publicPath: '/dist/'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            include: path.join(__dirname, 'src/'),
            loader: 'babel-loader'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            loader: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpe?g|gif|svg)$/,
            loader: 'url-loader',
            query: {
                limit: 1000,
                name: 'img/[name].[hash:7].[ext]'
            }
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        // extensions: ['.js', '.vue', '.json', '.css'],
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    performance: { hints: false },
    // postcss: function() {
    //     return [precss, autoprefixer]
    // }
};
