module.exports = ({ platform }, { module, resolve }) => ({
  entry: `./src/index.tsx`,
  module: {
    ...module,
    rules: [
      ...module.rules,
      {
        test: /\.tsx?$/,
        exclude: "/node_modules/",
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    ...resolve,
    extensions: [
      ".ts",
      ".tsx",
      `.${platform}.ts`,
      ".native.ts",
      `.${platform}.tsx`,
      ".native.tsx",
      ...resolve.extensions,
    ],
  },
});
