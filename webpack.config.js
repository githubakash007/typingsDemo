path = require("path");
//webpack = require("webpack");

module.exports = {

    entry:"./src/app.ts",
    output:{
        path: path.resolve("dist"),
        publicPath:"/asset/js",
        filename:"akash.js"
    },
    watch:true,

    module:{
          loaders:[{
             test:/\.ts$/,
             exclude:/node_modules/,
             loader:"ts-loader"
          }]

    },
    resolve:{
        extensions:[".js",".ts"]
    }
}