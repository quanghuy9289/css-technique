// PostCSS configuration
module.exports = (cfg) => {
  // import tokens as Sass variables
  const variables = require("./tokens.json");

  const dev = cfg.env === "development",
    scss = cfg.file.extname === ".scss";

  return {
    map: dev ? { inline: false } : false,
    parser: scss ? "postcss-scss" : false,
    plugins: [
      require("postcss-advanced-variables")({ variables }), // variables defined in tokens.json will override variables defined in scss
      require("postcss-map-get")(), // get map value as SASS map
      require("postcss-nested")(), // nesting rule
      require("postcss-sort-media-queries")(), // group media query
      require("postcss-assets")({
        loadPaths: ["src/images/"],
      }), // resolves CSS image URLs, adds cache-busting, defines image dimensions, and inline files using base64 notation
      require("autoprefixer")(),
      dev ? null : require("cssnano")(),
    ],
  };
};
