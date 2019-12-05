import webpack from 'webpack';
import path from 'path';

export default {
    // Dont pay much attention to this, its just basic
    // setup for a nodejs environment
    entry: {
        server: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'index.js'
    },
    target: 'node',
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
    },
    // This is the important part
    // setting up our resolvers
    resolve: {
        modules: [
          path.resolve('./src')
        ],
        alias: {
          math: path.resolve('./src/common/utils/helpers/math')
        }
    }
}