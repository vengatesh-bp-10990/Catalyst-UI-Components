/**
 * lyte.config.js — sLyte build & serve configuration
 * =====================================================
 * This is the primary config file read by `lyte serve` and `lyte build`.
 *
 * Run:
 *   lyte serve --port=3000      → Dev server with live reload
 *   lyte build                  → Production bundle → dist/
 *   lyte build --production     → Minified production bundle
 *
 * @see https://www.slyte.dev/1.1.0/lyte-cli/introduction
 */
let path = require("path");

module.exports = function () {
  return {
    // Entry point — sLyte resolves this as the application bootstrap
    initialFileToLoad: path.join(process.cwd(), "app-init.js"),

    // Webpack entry map: output bundle name → source files to include
    entry: {
      "app-init.js": [
        "components/javascript/zcat-typography-comp.js",
        "components/javascript/zcat-colors-comp.js",
        "components/javascript/zcat-button-comp.js"
      ]
    },

    // Dev server settings for `lyte serve`
    devServer: {
      port: 3000,
      open: true,
      liveReload: true
    },

    // Static directories served as-is by `lyte serve`
    staticDirs: ["theme", "styles"],

    // Theme config for Less compilation
    theme: {
      config: "theme/config.less"
    }
  };
};
