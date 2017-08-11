path = require("path");
webpack = require("webpack");

module.exports = {

    entry:["./src/welcome.ts"],
    output:{
        path: "/",
        filename:"akash.js"
    },

    module:{
          loaders:[{
             test:/\.ts$/,
             loader:"ts-loader"
          }]

    },
    resolve:{
        extensions:[".webpack.js",".ts",".js"]
    }
}