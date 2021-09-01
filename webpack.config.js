var path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // плагин для загрузки кода Vue
 
module.exports = {
 mode: 'development', //production 
 entry: './src/main.js',
 output: {
   path: path.resolve(__dirname, './static/js/'),
   publicPath: '/static/js/',
   filename: 'main.js'
 },
 module: {
   rules: [
     {
       test: /\.vue$/,
       loader: 'vue-loader'
     }, 
     {
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader'
      ]
    }
   ]
 },
 plugins: [
    new VueLoaderPlugin()
   ]
}