/**
 * zcat-colors-comp.js — ZCAT Colors Component
 * ==============================================
 * sLyte component class for displaying all ZCAT color tokens.
 *
 * @see https://www.slyte.dev/1.0.4/doc/components/javascript
 * @see https://zcat-component-docs.netlify.app/#base/colors
 *
 * Usage:
 *   <zcat-colors-comp></zcat-colors-comp>
 */
import { Component } from "@slyte/component";

class ZcatColorsComp extends Component {
  constructor() {
    super();
  }

  /**
   * Component data — empty since all tokens are CSS custom properties
   * rendered directly in the template.
   */
  data() {
    return {};
  }

  static actions() {
    return {};
  }

  static methods() {
    return {};
  }

  static observers() {
    return {};
  }
}

export { ZcatColorsComp };
