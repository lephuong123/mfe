module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // Áp dụng cho file .js hoặc .mjs
        exclude: /node_modules/, // Bỏ qua node_modules
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"], // Chuyển đổi JSX và cú pháp ES6+
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
