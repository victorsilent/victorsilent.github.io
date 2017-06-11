const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'bundle.js',
        publicPath: '/public/dist'
    },
    resolve: {
        extensions: ['.js','.jsx'],
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx|)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.svg/,
                exclude: /node_modules/,
                loader: 'file-loader'
            }
        ]
    }
}