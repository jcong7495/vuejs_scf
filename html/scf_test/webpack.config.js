// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: 'development',
  // エントリーポイントの設定
  entry: './src/js/app.js',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス（絶対パスを指定する必要がある）
    path: path.join(__dirname, 'public/js')
  },
  module:{
      rules: [
          // .vue ファイルを組み込むためのモジュール
          {
              test: /\.vue$/,
              loader: 'vue-loader'
          },
      ]
  },
  resolve: {
      extensions: ['.js', '.vue'],
      modules: [
          "node_modules"
      ],
      alias: {
          // vue.js のビルドを指定する
          vue: 'vue/dist/vue.common.js'
      }
  },
  plugins: [new VueLoaderPlugin()]
};
