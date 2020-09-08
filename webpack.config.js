const path = require('path');
const webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
    entry: {
        main: './src/index.js',
        about: './src/pages/about/index.js',
        analytics: './src/pages/analytics/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].[chunkhash].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    isDev ? "style-loader" : {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                        },
                    },
                    "postcss-loader",
                ],
            },
            {
                test: /\.(png|jpg|gif|ico|svg)$/,
                use: [
                    "file-loader?name=./images/[name].[ext]?",
                    {
                        loader: "image-webpack-loader",
                        options: {},
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader",
                options: {
                    name: "./fonts/[name].[ext]",
                },
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ // 
            filename: './styles/[name].[contenthash].css',
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            canPrint: true,
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/index.html',
            filename: 'index.html',
            chunks: ["main"]
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/pages/about/about.html',
            filename: 'about.html',
            chunks: ["about"]
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/pages/analytics/analytics.html',
            filename: 'analytics.html',
            chunks: ["analytics"]
        }),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        }),
        new WebpackMd5Hash()
    ]
};