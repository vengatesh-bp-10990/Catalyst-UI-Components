/**
 * router/map/map.js — sLyte Router Map
 * ======================================
 * Defines application routes for the demo showcase.
 *
 * When consumed as a library by other teams, these routes are NOT imported.
 * Only the demo app (this project's index.html) uses routing.
 *
 * @see https://www.slyte.dev/1.0.4/doc/route/the-route
 */
class CatalystAppMap {
  map() {
    // Demo showcase routes
    this.route("index", {
      path: "/",
      component: "demo-shell"
    });
    this.route("typography", {
      path: "/typography",
      component: "zcat-typography-comp"
    });
    this.route("colors", {
      path: "/colors",
      component: "zcat-colors-comp"
    });
    this.route("buttons", {
      path: "/buttons",
      component: "zcat-button-comp"
    });
  }
}

export { CatalystAppMap };
