/**
 * lib/index.js — Catalyst UI Components Library Entry Point
 * ===========================================================
 * This is the main entry point consumed by OTHER teams when they
 * install this package via npm.
 *
 * ┌─────────────────────────────────────────────────────────────┐
 * │  INSTALLATION (in your sLyte project)                       │
 * │                                                             │
 * │  npm install catalyst-ui-components                         │
 * │      --registry http://cm-npmregistry                       │
 * │                                                             │
 * │  IMPORT ALL COMPONENTS:                                     │
 * │  import "catalyst-ui-components";                           │
 * │                                                             │
 * │  IMPORT INDIVIDUAL COMPONENTS:                              │
 * │  import "catalyst-ui-components/components/button";         │
 * │  import "catalyst-ui-components/components/typography";     │
 * │  import "catalyst-ui-components/components/colors";         │
 * │                                                             │
 * │  IMPORT CSS TOKENS (in HTML <head>):                        │
 * │  <link rel="stylesheet"                                     │
 * │    href="node_modules/catalyst-ui-components/               │
 * │         theme/zcat-tokens.css">                             │
 * │  <link rel="stylesheet"                                     │
 * │    href="node_modules/catalyst-ui-components/               │
 * │         theme/zcat-typography.css">                         │
 * │                                                             │
 * │  USE IN YOUR TEMPLATE:                                      │
 * │  <!-- sLyte custom element -->                              │
 * │  <zcat-button-comp                                          │
 * │    lt-prop-variant="fill"                                   │
 * │    lt-prop-color="primary"                                  │
 * │    lt-prop-size="md">                                       │
 * │  </zcat-button-comp>                                        │
 * │                                                             │
 * │  <!-- Or use CSS classes directly -->                       │
 * │  <button class="zcat-btn zcat-btn--fill                     │
 * │    zcat-btn--primary zcat-btn--md">                         │
 * │    Submit                                                   │
 * │  </button>                                                  │
 * └─────────────────────────────────────────────────────────────┘
 *
 * @module catalyst-ui-components
 * @version 1.0.0
 */

// ── Register all ZCAT components with sLyte ─────────────────────
// Importing a component JS file registers its class with the sLyte
// framework. The framework auto-discovers the matching template
// (components/templates/<name>.html) and styles
// (components/styles/<name>.css) by basename convention.

import { ZcatTypographyComp } from "../components/javascript/zcat-typography-comp.js";
import { ZcatColorsComp } from "../components/javascript/zcat-colors-comp.js";
import { ZcatButtonComp } from "../components/javascript/zcat-button-comp.js";

// ── Named exports for advanced usage ────────────────────────────
// Other teams can destructure individual component classes if they
// need programmatic access (e.g., extending a component).
export {
  ZcatTypographyComp,
  ZcatColorsComp,
  ZcatButtonComp
};

// ── Version info ────────────────────────────────────────────────
export var CATALYST_UI_VERSION = "1.0.0";
