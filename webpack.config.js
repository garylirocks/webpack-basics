const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    plugins: [
        // generating hashed module names for each module
        new webpack.HashedModuleIdsPlugin({ 
            hashDigestLength: 5,
        })
    ],
    devServer: {
        inline: true,
        contentBase: './build',
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader',
            },
            {
                test: /\.(png|jpg)/,
                loader: 'url-loader?limit=200000'
            }
        ]
    }
}
