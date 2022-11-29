# PostCSS Demonstration

This example project demonstrates how to use [PostCSS](https://postcss.org/) to compile Sass-compatible `.scss` files to CSS. The Sass compiler is not required.

Clone the project then run `npm install` to install all dependencies. PostCSS and all plugins are installed locally.

Example Sass files are provided in the `src/scss/` folder. `main.scss` is responsible for including all partials.


## Basic example

A basic example includes partials, variables, mixins, nesting, and auto-prefixing. A source map is generated in development mode when you run:

```bash
npm run css:basic
```

or

```bash
npx postcss src/scss/main.scss --output build/css/main.css --env development --config ./config/ --verbose
```

`config/postcss.config.js` configures the compile process. An uncompressed CSS file is created at `build/css/main.css` with a source map referenced at `build/css/main.css.map`. The CSS will not work as intended because support for [Sass maps](https://sass-lang.com/documentation/values/maps) and inline assets has not been added.


## Advanced example

An advanced example includes design tokens, partials, variables, maps, mixins, nesting, asset management, media-query optimization, and auto-prefixing. A source map is generated in development mode when you run:

```bash
npm run css:dev
```

or

```bash
npx postcss src/scss/main.scss --output build/css/main.css --env development --verbose
```

The root `postcss.config.js` file configures the compile process. An uncompressed CSS file is created at `build/css/main.css` with a source map referenced at `build/css/main.css.map`.


## Watch and auto-compile

To watch for file changes and auto-compile the advanced example, use:

```bash
npm run css:watch
```

or

```bash
npx postcss src/scss/main.scss --output build/css/main.css --env development --verbose --watch
```


## Output production code

To minify the resulting CSS and omit the source map in production mode, run:

```bash
npm run css:build
```

or

```bash
npx postcss src/scss/main.scss --output build/css/main.css --env production --verbose
```
