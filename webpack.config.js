const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
    devServer: {
        port: 8080,
        publicPath: '/dist/',
        contentBase: './'
    },
    plugins: [ 
        new ExtractTextPlugin('style.bundle.css')
    ],
    module: {
        rules: [
            {
                test: /\.css|.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [ 'css-loader', 'sass-loader']
                })
            },
            {
                test: /\.woff|.woff2|.ttf|.eot|.svg|.png*.*$/,
                loader: 'file-loader'
            }
        ]
    }
  }