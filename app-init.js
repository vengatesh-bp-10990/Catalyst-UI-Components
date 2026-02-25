/**
 * app-init.js — sLyte Application Entry Point
 * ==============================================
 * This is the webpack entry point loaded by `lyte serve` / `lyte build`.
 * It bootstraps the sLyte application and registers all ZCAT components.
 *
 * sLyte auto-discovers matching templates and styles by convention:
 *   components/javascript/zcat-button-comp.js
 *   components/templates/zcat-button-comp.html    ← matched by basename
 *   components/styles/zcat-button-comp.css         ← matched by basename
 *
 * @see https://www.slyte.dev/1.0.4/doc/introduction
 */
import { Component } from "@slyte/component";
import { CatalystApp } from "./app.js";

// ── Router ──────────────────────────────────────────────────────────────────
import { CatalystAppMap } from "./router/map/map.js";

// ── Register ZCAT Components ────────────────────────────────────────────────
// Each import registers the component class with sLyte.
// The framework pairs it with the <template tag-name="..."> in the HTML file.
import { ZcatTypographyComp } from "./components/javascript/zcat-typography-comp.js";
import { ZcatColorsComp } from "./components/javascript/zcat-colors-comp.js";
import { ZcatButtonComp } from "./components/javascript/zcat-button-comp.js";

// ── Bootstrap Application ───────────────────────────────────────────────────
var app = new CatalystApp({
  performance: true,
  debug: true
});

export { app };
