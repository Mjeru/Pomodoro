const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { HotModuleReplacementPlugin, DefinePlugin } = require("webpack");
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === "development";
const GLOBAL_CSS_REGEXP = /\.global\.css$/;
const DEV_PLUGINS = [
  new CleanWebpackPlugin(),
  new HotModuleReplacementPlugin(),
];
const COMMON_PLUGINS = [
  new DefinePlugin({ "process.env.CLIENT_ID": "'ggLLRhNWxtdijvy6bXe65g'" }),
];

module.exports = {
  target: "node",
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: path.resolve(__dirname, "../src/server/server.js"),
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "server.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/,/\.mp3$/],
        loader: require.resolve("url-loader"),
        options: {
          emitFile: false,
          limit: 10000,
          name: "static/media/[name].[hash:8].[ext]",
        },
      },
      {
        test: /\.[tj]sx?$/,
        use: ["ts-loader"],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
              onlyLocals: true,
            },
          },
        ],
        exclude: GLOBAL_CSS_REGEXP,
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ["css-loader"],
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  devtool: IS_DEV ? "eval" : false,
  plugins: [
    new DefinePlugin({ "process.env.CLIENT_ID": `'${process.env.CLIENT_ID}'` }),
  ],
};
