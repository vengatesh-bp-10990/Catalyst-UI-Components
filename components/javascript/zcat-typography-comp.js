/**
 * zcat-typography-comp.js — ZCAT Typography Component
 * =====================================================
 * sLyte component class for rendering the full ZCAT typographic scale.
 *
 * @see https://www.slyte.dev/1.0.4/doc/components/javascript
 * @see https://zcat-component-docs.netlify.app/#base/typography
 *
 * Properties:
 *   lt-prop-font  {String}  "inter" | "puvi" — Active font family (default: "inter")
 *
 * Usage:
 *   <zcat-typography-comp></zcat-typography-comp>
 *   <zcat-typography-comp lt-prop-font="puvi"></zcat-typography-comp>
 */
import { Component } from "@slyte/component";

class ZcatTypographyComp extends Component {
  constructor() {
    super();
  }

  /**
   * Component data block — defines reactive properties.
   * `fontFamily` controls which ZCAT primary font is active.
   */
  data() {
    return {
      fontFamily: "inter" // "inter" | "puvi"
    };
  }

  /**
   * Actions block — handles user interactions from the template.
   */
  static actions() {
    return {
      /**
       * Switch the active font family.
       * Updates the data-font attribute on the component root to trigger
       * the CSS custom property override defined in zcat-typography.css.
       *
       * @param {String} font — "inter" or "puvi"
       */
      switchFont: function (font) {
        this.setData("fontFamily", font);
        var compEl = this.querySelector(".zcat-typography");
        if (compEl) {
          compEl.setAttribute("data-font", font === "puvi" ? "puvi" : "");
        }
      }
    };
  }

  static methods() {
    return {};
  }

  static observers() {
    return {};
  }
}

export { ZcatTypographyComp };
