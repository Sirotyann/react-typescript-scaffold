const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: ['react-hot-loader/patch', './index.tsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: "source-map",

    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
              }
        ]
    },

    devServer: {
        index: 'index.html',
        compress: true,
        port: 9000,
        inline: true,
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: `./index.html`,
        })
    ]
};