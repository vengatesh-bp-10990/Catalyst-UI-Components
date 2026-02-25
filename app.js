/**
 * app.js — sLyte Application Class
 * ==================================
 * Root application class for the Catalyst UI component library.
 * `lyte serve` instantiates this from app-init.js to boot the dev server.
 *
 * @see https://www.slyte.dev/1.0.4/doc/introduction
 */
import { Component } from "@slyte/component";

class CatalystApp {
  constructor(options) {
    this.performance = options.performance || false;
    this.debug = options.debug || false;
    this.name = "catalyst-ui-components";
    this.version = "1.0.0";
  }

  /**
   * Returns current theme from the <html> data-theme attribute.
   * @returns {"light"|"dark"}
   */
  getTheme() {
    return document.documentElement.getAttribute("data-theme") || "light";
  }

  /**
   * Sets the active theme on the <html> element.
   * All ZCAT CSS custom property tokens respond automatically.
   * @param {"light"|"dark"} theme
   */
  setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }
}

export { CatalystApp };
