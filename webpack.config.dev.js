const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require('fs');
const srcRoot =  path.resolve(__dirname, 'src');
const devPath = path.resolve(__dirname, 'dev');
const pageDir = path.resolve(srcRoot, 'page');
const mainFile = 'index.jsx';
function getHtmlArray(entryMap){
  let htmlArray = [];
  Object.keys(entryMap).forEach((key) => {
    let fullPathName = path.resolve(pageDir, key);
    let fileName = path.resolve(fullPathName, key+ '.html');

    if(fs.existsSync(fileName)) {
      htmlArray.push(new HtmlWebpackPlugin({
        filename: key + '.html',
        template: fileName,
        chunks: [key]
      }))
    }
  })
  return htmlArray
}
// 多文件入口
function getEntry() {
  let entryMap = {};
  // 读取所有的文件
  fs.readdirSync(pageDir).forEach((pathname) => {
    let fullPathName = path.resolve(pageDir, pathname);
    let stat = fs.statSync(fullPathName);
    let fileName = path.resolve(fullPathName, mainFile);
    // 判断是否存在这个文件
    if(stat.isDirectory() && fs.existsSync(fileName)){
      entryMap[pathname] = fileName;
    } 
  });
  return entryMap;
}

const devConfig = {
  mode: 'development',
  devServer:{
    contentBase: devPath
  },
  entry: getEntry(),
  output: {
    path: devPath,
    filename: '[name].min.js'
  },
  resolve: {
      alias: {
          component: path.resolve(srcRoot, 'components')
      },
      extensions: ['.js','.jsx']
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader'
          },
        ],
        include: srcRoot
      },
      {
        test: /\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ],
        include: srcRoot
      },
      {
        test: /\.scss$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: srcRoot + '/components/rem_fun.scss'
            }
          }
        ],
         include: srcRoot
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: 'resources/[name].[ext]'
          }
        }],
        include: srcRoot
      }
    ]
  },
  // optimization: {
  //     splitChunks:{
  //         cacheGroups:{
  //             common: {
  //                 test: /[\\/]node_modules[\\/]/,
  //                 chunks: 'all',
  //                 name: 'common'
  //             }
  //         } 
  //     }
  // },
  plugins:[
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ].concat(getHtmlArray(getEntry())) 
}
module.exports = devConfig;