// PostCSS configuration
// cfg object with properties set by the postcss command
/*
 * cfg object example:
    {
        cwd: '/home/name/postcss-demo',
        env: 'development',
        options: {
            map: undefined,
            parser: undefined,
            syntax: undefined,
            stringifier: undefined
        },
        file: {
            dirname: '/home/name/postcss-demo/src/scss',
            basename: 'main.scss',
            extname: '.scss'
        }
    }
*/
module.exports = (cfg) => {
  const devMode = cfg.env === "development";

  return {
    map: devMode ? "inline" : null,
    plugins: [require("postcss-import")(), require("autoprefixer"), devMode ? null : require("cssnano")],
  };
};
