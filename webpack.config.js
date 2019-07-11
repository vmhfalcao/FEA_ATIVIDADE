const webpack = require('webpack');
const path = require('path');
const HtmlWepackPlugin = require('html-webpack-plugin');




module.exports ={
    //Ponto de entrada
    entry: ['./src/js/main.js'],
    output: {
        path: path.join(__dirname,'dist'),
        filename:'bundle.js'
    },
    plugins:[
        new HtmlWepackPlugin(
            {
                filename:'index.html',
                template:path.join(__dirname,'src/index.html')
            }
        ),
    ],
    module:{
        rules:[
            {
                test:/.js/,
                exclude:/node_modules/,
                include:path.join(__dirname,'src'),
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['es2015']
                        }
                    }
                ]
            },
            {
                test:/\.(jpe?g|ico|png|gif|svg)$/i,
                loader:'file-loader?name=img/[name].[ext]'
            },
            {
                test:/\.scss$/,
                use:[
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    devServer:{
        publicPath:"/",
        contentBase:"./dist"
    }
};