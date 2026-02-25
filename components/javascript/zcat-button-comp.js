/**
 * zcat-button-comp.js — ZCAT Button Component
 * ==============================================
 * sLyte component class for the ZCAT button with variant, size,
 * color, and state support.
 *
 * @see https://www.slyte.dev/1.0.4/doc/components/javascript
 * @see https://zcat-component-docs.netlify.app/#zcat/button
 *
 * Properties (via lt-prop):
 *   lt-prop-variant    : "fill" | "outline" | "text"       (default: "fill")
 *   lt-prop-size       : "lg" | "md" | "sm" | "xs"         (default: "md")
 *   lt-prop-color      : "primary" | "danger" | "success"  (default: "primary")
 *   lt-prop-state      : "default" | "hover" | "disabled"  (default: "default")
 *   lt-prop-label      : String                             (default: "Button Text")
 *   lt-prop-icon-left  : String                             (optional)
 *   lt-prop-icon-right : String                             (optional)
 *
 * Usage:
 *   <zcat-button-comp></zcat-button-comp>
 */
import { Component } from "@slyte/component";

class ZcatButtonComp extends Component {
  constructor() {
    super();
  }

  /**
   * Component data — defines reactive properties for the button.
   */
  data() {
    return {
      variant: "fill",       // "fill" | "outline" | "text"
      size: "md",            // "lg" | "md" | "sm" | "xs"
      color: "primary",      // "primary" | "danger" | "success"
      state: "default",      // "default" | "hover" | "disabled"
      label: "Button Text",
      iconLeft: "",
      iconRight: ""
    };
  }

  /**
   * Actions — event handlers from template.
   */
  static actions() {
    return {
      /**
       * Handle button click. No-op if disabled.
       * @param {Event} event — DOM click event
       */
      handleClick: function (event) {
        var state = this.getData("state");
        if (state === "disabled") {
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        // Dispatch custom event for consumer
        this.dispatchEvent(
          new CustomEvent("zcat-button-click", {
            bubbles: true,
            detail: {
              variant: this.getData("variant"),
              size: this.getData("size"),
              color: this.getData("color")
            }
          })
        );
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

export { ZcatButtonComp };
