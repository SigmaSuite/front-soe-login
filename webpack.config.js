const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "Sigma",
    projectName: "login",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
      module: {
     rules:[{
       test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
     use:[{loader: 'url-loader?limit=100000'}]
     }]},
     externals: ['react', 'react-dom']
    // modify the webpack config however you'd like to by adding to this object
  });
};
