/*
 * @Author: dean.zhu86.@gmail.com 
 * @Date: 2018-03-28 10:33:42 
 * @Last Modified by: dean.zhu86@gmail.com
 * @Last Modified time: 2018-04-20 09:30:50
 */

const webpack = require('webpack');
const path = require('path');
const util = require('./util');
// 一些插件安装
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//清理dist目录
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 生成manifest.json
const ManifestPlugin = require('webpack-manifest-plugin');
// 提取公共模块
const HTMLWebpackPlugin = require('html-webpack-plugin');
// js压缩
const uglify = require('uglifyjs-webpack-plugin');

// 加载入口文件
const entries = util.getEntries('./app/static/js/*.js');
console.log('entries:', entries);
// webpack核心配置
const config = {
    entry: entries,
    output:{
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, '../static'),
        publicPath: '/'
    },
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true // css压缩
                        }
                    }, 'sass-loader']
                })
                // use: [
                //     'style-loader',
                //     'css-loader'
                // ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: { // jpeg格式图片压缩配置
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false
                            },
                            pngquant: {  // png格式图片压缩配置
                                quality: '65-90',
                                spee: 4
                            },
                            gitsicle: {  // git格式图片压缩配置
                                interlaced: false
                            },
                            svgo: {

                            },
                            webp: {  // jpg和png格式图片压缩成webp（更优的压缩算法，支持无/有损模式，支持alpha透明及动画，转化效果稳定）
                                quality: 75
                            }

                        }
                    }
                ]
            },
            {
                test: '/\.js$/',
                exclude: /node_module/, //排除对指定目录的转译
                use: {
                    loader: 'babel-loader'
                },
                
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['../static']),
        new ExtractTextPlugin({
            filename: (getPath) => {
                return getPath('[name].[chunkhash].css').replace('js', 'css');
            }
        }),
        // new HTMLWebpackPlugin({
        //     title: 'code splitting'
        // }),
        new webpack.HashedModuleIdsPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor'
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'manifest'
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',  // 公共bundle的名称
            filename: 'js/common.[chunkhash].js',
            minChunks: function (module, count) {
                const resource = module.resource
                // 以 .css 结尾的资源，重复 require 大于 1 次
                return resource && /\.css$/.test(resource) && count > 1
              }
        }),
        new uglify(),
        new ManifestPlugin()
    ],
    watch: false
};

module.exports = config;