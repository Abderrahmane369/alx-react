const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "../src/index.js"),
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "bundle.js",
        clean: true
    },
    devtool: "inline-source-map",
    devServer: {
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "assets/resource"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Nosquare",
            template: "../dist/index.html"
        })
    ]
};
