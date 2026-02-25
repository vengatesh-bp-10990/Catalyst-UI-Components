/**
 * build.js — sLyte build configuration
 * ======================================
 * Used by `lyte build` to create production bundles.
 * Output goes to dist/ and is what other teams consume
 * when they install this package.
 */
module.exports = {
  registries: {
    main: {
      components: [
        "components/javascript/zcat-typography-comp.js",
        "components/javascript/zcat-colors-comp.js",
        "components/javascript/zcat-button-comp.js"
      ],
      templates: [
        "components/templates/zcat-typography-comp.html",
        "components/templates/zcat-colors-comp.html",
        "components/templates/zcat-button-comp.html"
      ],
      styles: [
        "components/styles/zcat-typography-comp.css",
        "components/styles/zcat-colors-comp.css",
        "components/styles/zcat-button-comp.css"
      ]
    }
  },
  output: {
    path: "dist",
    // Library mode — expose components for consumption by other sLyte apps
    library: {
      name: "CatalystUI",
      type: "umd"
    }
  },
  production: {
    minify: true,
    concatenate: true,
    sourceMap: false
  }
};
