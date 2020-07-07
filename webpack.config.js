const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: "source-map",

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
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
            }
        ]
    },

    devServer: {
        index: 'index.html',
        compress: true,
        port: 9000,
        inline: false,
        contentBase: path.join(__dirname, 'dist'),
        // hot: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: `./index.html`,
        })
    ]
};