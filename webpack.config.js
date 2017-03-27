var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template',
            minify: {
                collapseWhitespace: true
            },
            hash : true,
            template:  __dirname + '/src/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
        })
    ]
}
