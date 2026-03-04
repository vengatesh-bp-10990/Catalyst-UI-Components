import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Component } from "../../node_modules/@slyte/component/index.js";

// ═══════════════════════════════════════════
// ZCAT Component File Contents for Download
// ═══════════════════════════════════════════

const ZCAT_FILES = {
  tokens: {
    css: `/* ========================
   ZCAT Design Tokens
   ======================== */

:root {
  /* Font Family */
  --zcat-font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --zcat-font-family-mono: 'Roboto Mono', monospace;

  /* Button Font Sizes */
  --zcat-button-font-weight: 500;
  --zcat-button-font-default: 14px/1;
  --zcat-button-font-sm: 13px/1;
  --zcat-button-font-exsm: 12px/1;
  --zcat-button-font-lg: 16px/1;

  /* ---- Fill Button ---- */
  --zcat-btn-fill-bg-primary-default: #2B6AF3;
  --zcat-btn-fill-bg-primary-hover: #1A5AE0;
  --zcat-btn-fill-bg-primary-click: #1550CC;
  --zcat-btn-fill-bg-primary-disabled: #A3C1FA;
  --zcat-btn-fill-bg-success-default: #19A35E;
  --zcat-btn-fill-bg-success-hover: #148B50;
  --zcat-btn-fill-bg-success-click: #107842;
  --zcat-btn-fill-bg-success-disabled: #8DD4B0;
  --zcat-btn-fill-bg-danger-default: #E03C31;
  --zcat-btn-fill-bg-danger-hover: #CC2E24;
  --zcat-btn-fill-bg-danger-click: #B8241A;
  --zcat-btn-fill-bg-danger-disabled: #F3A6A1;
  --zcat-btn-fill-text-default: #FFFFFF;
  --zcat-btn-fill-text-click: #F0F0F0;
  --zcat-btn-fill-text-disabled: #FFFFFF;
  --zcat-btn-fill-icon-default: #FFFFFF;
  --zcat-btn-fill-icon-click: #F0F0F0;
  --zcat-btn-fill-icon-disabled: #FFFFFF;
  --zcat-btn-fill-splitLine-default: rgba(255, 255, 255, 0.3);

  /* ---- Outline Button ---- */
  --zcat-btn-outline-text-primary-default: #2B6AF3;
  --zcat-btn-outline-text-primary-hover: #1A5AE0;
  --zcat-btn-outline-text-primary-click: #1550CC;
  --zcat-btn-outline-text-primary-disabled: #A3C1FA;
  --zcat-btn-outline-border-primary-default: #2B6AF3;
  --zcat-btn-outline-border-primary-hover: #1A5AE0;
  --zcat-btn-outline-border-primary-click: #1550CC;
  --zcat-btn-outline-border-primary-disabled: #A3C1FA;
  --zcat-btn-outline-bg-primaryHover: rgba(43, 106, 243, 0.06);
  --zcat-btn-outline-text-success-default: #19A35E;
  --zcat-btn-outline-text-success-hover: #148B50;
  --zcat-btn-outline-text-success-click: #107842;
  --zcat-btn-outline-text-success-disabled: #8DD4B0;
  --zcat-btn-outline-border-success-default: #19A35E;
  --zcat-btn-outline-border-success-hover: #148B50;
  --zcat-btn-outline-border-success-click: #107842;
  --zcat-btn-outline-border-success-disabled: #8DD4B0;
  --zcat-btn-outline-bg-successHover: rgba(25, 163, 94, 0.06);
  --zcat-btn-outline-text-danger-default: #E03C31;
  --zcat-btn-outline-text-danger-hover: #CC2E24;
  --zcat-btn-outline-text-danger-click: #B8241A;
  --zcat-btn-outline-text-danger-disabled: #F3A6A1;
  --zcat-btn-outline-border-danger-default: #E03C31;
  --zcat-btn-outline-border-danger-hover: #CC2E24;
  --zcat-btn-outline-border-danger-click: #B8241A;
  --zcat-btn-outline-border-danger-disabled: #F3A6A1;
  --zcat-btn-outline-bg-dangerHover: rgba(224, 60, 49, 0.06);
  --zcat-btn-outline-icon-primary-default: #2B6AF3;
  --zcat-btn-outline-icon-primary-hover: #1A5AE0;
  --zcat-btn-outline-icon-primary-click: #1550CC;
  --zcat-btn-outline-icon-primary-disabled: #A3C1FA;
  --zcat-btn-outline-icon-success-default: #19A35E;
  --zcat-btn-outline-icon-success-hover: #148B50;
  --zcat-btn-outline-icon-success-click: #107842;
  --zcat-btn-outline-icon-success-disabled: #8DD4B0;
  --zcat-btn-outline-icon-danger-default: #E03C31;
  --zcat-btn-outline-icon-danger-hover: #CC2E24;
  --zcat-btn-outline-icon-danger-click: #B8241A;
  --zcat-btn-outline-icon-danger-disabled: #F3A6A1;

  /* ---- Grey Button ---- */
  --zcat-btn-grey-bg-default: #F0F1F3;
  --zcat-btn-grey-bg-hover: #E4E6EA;
  --zcat-btn-grey-bg-click: #D8DBE0;
  --zcat-btn-grey-bg-disabled: #F0F1F3;
  --zcat-btn-grey-text-default: #3B4A68;
  --zcat-btn-grey-text-hover: #2C3A54;
  --zcat-btn-grey-text-click: #1F2C40;
  --zcat-btn-grey-text-disabled: #A0A8B8;
  --zcat-btn-grey-border-default: #E0E2E6;
  --zcat-btn-grey-border-hover: #CBCED4;
  --zcat-btn-grey-border-click: #B8BCC4;
  --zcat-btn-grey-border-disabled: #E0E2E6;
  --zcat-btn-grey-icon-default: #3B4A68;
  --zcat-btn-grey-icon-hover: #2C3A54;
  --zcat-btn-grey-icon-click: #1F2C40;
  --zcat-btn-grey-icon-disabled: #A0A8B8;

  /* ---- Ghost Button ---- */
  --zcat-btn-ghost-text-primary-default: #2B6AF3;
  --zcat-btn-ghost-text-primary-hover: #1A5AE0;
  --zcat-btn-ghost-text-primary-click: #1550CC;
  --zcat-btn-ghost-text-primary-disabled: #A3C1FA;
  --zcat-btn-ghost-bg-primary-hover: rgba(43, 106, 243, 0.08);
  --zcat-btn-ghost-text-success-default: #19A35E;
  --zcat-btn-ghost-text-success-hover: #148B50;
  --zcat-btn-ghost-text-success-click: #107842;
  --zcat-btn-ghost-text-success-disabled: #8DD4B0;
  --zcat-btn-ghost-bg-success-hover: rgba(25, 163, 94, 0.08);
  --zcat-btn-ghost-text-danger-default: #E03C31;
  --zcat-btn-ghost-text-danger-hover: #CC2E24;
  --zcat-btn-ghost-text-danger-click: #B8241A;
  --zcat-btn-ghost-text-danger-disabled: #F3A6A1;
  --zcat-btn-ghost-bg-danger-hover: rgba(224, 60, 49, 0.08);
  --zcat-btn-ghost-icon-primary-default: #2B6AF3;
  --zcat-btn-ghost-icon-primary-hover: #1A5AE0;
  --zcat-btn-ghost-icon-primary-click: #1550CC;
  --zcat-btn-ghost-icon-primary-disabled: #A3C1FA;
  --zcat-btn-ghost-icon-success-default: #19A35E;
  --zcat-btn-ghost-icon-success-hover: #148B50;
  --zcat-btn-ghost-icon-success-click: #107842;
  --zcat-btn-ghost-icon-success-disabled: #8DD4B0;
  --zcat-btn-ghost-icon-danger-default: #E03C31;
  --zcat-btn-ghost-icon-danger-hover: #CC2E24;
  --zcat-btn-ghost-icon-danger-click: #B8241A;
  --zcat-btn-ghost-icon-danger-disabled: #F3A6A1;

  /* ---- Input Field ---- */
  --zcat-inputField-bg-default: #FFFFFF;
  --zcat-inputField-bg-hover: #F7FAFF;
  --zcat-inputField-bg-active: #F7FAFF;
  --zcat-inputField-bg-disabled: #F7F8FB;
  --zcat-inputField-bg-error: #FCE9E9;
  --zcat-inputField-border-default: 1px solid #D6DDEF;
  --zcat-inputField-border-hover: 1px solid #7DA2FB;
  --zcat-inputField-border-active: 1px solid #2A65F0;
  --zcat-inputField-border-disabled: #EFF2FA;
  --zcat-inputField-border-error: #EE7979;
  --zcat-inputField-text-placeholder: #7988A8;
  --zcat-inputField-text-active: #101F3E;
  --zcat-inputField-text-disabled: #A6B1C9;
  --zcat-inputField-text-label: #4D618A;
  --zcat-inputField-text-error: #E22020;
  --zcat-inputField-text-optional: #7988A8;
  --zcat-inputField-icon-placeholder: #7988A8;
  --zcat-inputField-icon-active: #101F3E;
  --zcat-inputField-icon-disabled: #A6B1C9;
  --zcat-inputField-icon-label: #4D618A;

  /* ---- Body / General ---- */
  --zcat-body-bg: #FFFFFF;
  --zcat-body-text-primary: #101F3E;
  --zcat-body-text-secondary: #3B4A68;
  --zcat-body-text-grey: #6B7590;
  --zcat-body-icons-static-primary: #3B4A68;
  --zcat-body-border: #E0E2E6;

  /* ---- Menu List ---- */
  --zcat-menuList-icon-active: #2B6AF3;
}

/* Dark mode */
html[data-user-color-scheme="dark"] {
  --zcat-btn-fill-bg-primary-default: #4A85F6;
  --zcat-btn-fill-bg-primary-hover: #3A75E6;
  --zcat-btn-fill-bg-primary-click: #2A65D6;
  --zcat-btn-fill-bg-primary-disabled: #1E3A6E;
  --zcat-btn-fill-bg-success-default: #2AB96E;
  --zcat-btn-fill-bg-success-hover: #20A860;
  --zcat-btn-fill-bg-success-click: #189A52;
  --zcat-btn-fill-bg-success-disabled: #143E2B;
  --zcat-btn-fill-bg-danger-default: #F04A40;
  --zcat-btn-fill-bg-danger-hover: #E03830;
  --zcat-btn-fill-bg-danger-click: #D02820;
  --zcat-btn-fill-bg-danger-disabled: #5E1E1A;
  --zcat-btn-fill-text-default: #FFFFFF;
  --zcat-btn-fill-text-click: #E8E8E8;
  --zcat-btn-fill-text-disabled: #666666;
  --zcat-btn-fill-icon-default: #FFFFFF;
  --zcat-btn-fill-icon-click: #E8E8E8;
  --zcat-btn-fill-icon-disabled: #666666;
  --zcat-btn-outline-text-primary-default: #6BA1F8;
  --zcat-btn-outline-text-primary-hover: #5A90E8;
  --zcat-btn-outline-text-primary-click: #4A80D8;
  --zcat-btn-outline-text-primary-disabled: #2A4878;
  --zcat-btn-outline-border-primary-default: #4A85F6;
  --zcat-btn-outline-border-primary-hover: #3A75E6;
  --zcat-btn-outline-border-primary-click: #2A65D6;
  --zcat-btn-outline-border-primary-disabled: #1E3A6E;
  --zcat-btn-outline-bg-primaryHover: rgba(74, 133, 246, 0.1);
  --zcat-btn-outline-text-success-default: #3CC87E;
  --zcat-btn-outline-border-success-default: #2AB96E;
  --zcat-btn-outline-bg-successHover: rgba(42, 185, 110, 0.1);
  --zcat-btn-outline-text-danger-default: #F06A60;
  --zcat-btn-outline-border-danger-default: #F04A40;
  --zcat-btn-outline-bg-dangerHover: rgba(240, 74, 64, 0.1);
  --zcat-btn-grey-bg-default: #2A2D35;
  --zcat-btn-grey-bg-hover: #35383F;
  --zcat-btn-grey-bg-click: #40434A;
  --zcat-btn-grey-bg-disabled: #1E2028;
  --zcat-btn-grey-text-default: #C0C6D0;
  --zcat-btn-grey-text-hover: #D0D5DD;
  --zcat-btn-grey-text-click: #E0E2E6;
  --zcat-btn-grey-text-disabled: #555A66;
  --zcat-btn-grey-border-default: #3A3D44;
  --zcat-btn-grey-border-hover: #44474E;
  --zcat-btn-grey-border-click: #50535A;
  --zcat-btn-grey-border-disabled: #2A2D35;
  --zcat-btn-grey-icon-default: #C0C6D0;
  --zcat-btn-grey-icon-hover: #D0D5DD;
  --zcat-btn-grey-icon-click: #E0E2E6;
  --zcat-btn-grey-icon-disabled: #555A66;
  --zcat-btn-ghost-text-primary-default: #6BA1F8;
  --zcat-btn-ghost-text-primary-hover: #5A90E8;
  --zcat-btn-ghost-text-primary-click: #4A80D8;
  --zcat-btn-ghost-text-primary-disabled: #2A4878;
  --zcat-btn-ghost-bg-primary-hover: rgba(74, 133, 246, 0.12);
  --zcat-btn-ghost-text-success-default: #3CC87E;
  --zcat-btn-ghost-bg-success-hover: rgba(42, 185, 110, 0.12);
  --zcat-btn-ghost-text-danger-default: #F06A60;
  --zcat-btn-ghost-bg-danger-hover: rgba(240, 74, 64, 0.12);
  --zcat-inputField-bg-default: #1A1B1D;
  --zcat-inputField-bg-hover: #1F2022;
  --zcat-inputField-bg-active: #1F2022;
  --zcat-inputField-bg-disabled: #242424;
  --zcat-inputField-bg-error: #2A1E20;
  --zcat-inputField-border-default: 1px solid #484D58;
  --zcat-inputField-border-hover: 1px solid #355A8D;
  --zcat-inputField-border-active: 1px solid #458BFF;
  --zcat-inputField-border-disabled: #292A2F;
  --zcat-inputField-border-error: #682B2D;
  --zcat-inputField-text-placeholder: #888888;
  --zcat-inputField-text-active: #EEEEEE;
  --zcat-inputField-text-disabled: #666666;
  --zcat-inputField-text-label: #AAAAAA;
  --zcat-inputField-text-error: #DE5E60;
  --zcat-inputField-text-optional: #888888;
  --zcat-inputField-icon-placeholder: #888888;
  --zcat-inputField-icon-active: #EEEEEE;
  --zcat-inputField-icon-disabled: #666666;
  --zcat-inputField-icon-label: #AAAAAA;
  --zcat-body-bg: #14161E;
  --zcat-body-text-primary: #EEEEEE;
  --zcat-body-text-secondary: #C0C6D0;
  --zcat-body-text-grey: #8C95A8;
  --zcat-body-icons-static-primary: #C0C6D0;
  --zcat-body-border: #2A2D35;
}
`
  },
  button: {
    html: `<template tag-name="zcat-button">
    <!-- Normal button (non-split) -->
    <template lyte-if="{{zcatProp.type !== 'split'}}">
        <button
            class="zcat-btn {{zcatProp.variant}} {{zcatProp.color}} {{zcatProp.size === 'small' ? 'zcat-btn-sm' : zcatProp.size === 'extra-small' ? 'zcat-btn-exsm' : zcatProp.size === 'large' ? 'zcat-btn-lg' : ''}} {{zcatProp.label === undefined || zcatProp.label === null ? 'icon-only' : ''}} {{zcatProp.loading ? 'loading' : ''}} {{zcatProp.classCss}}"
            onclick="{{action('customLbindForButtonClick')}}"
            disabled="{{zcatProp.disabled}}"
        >
            <template lyte-if="{{zcatProp.icon && zcatProp.icon.position === 'left' && zcatProp.icon.name}}">
                <svg class="zcat-btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </template>
            <span lyte-if="{{zcatProp.label !== undefined && zcatProp.label !== null}}" class="zcat-btn-text">{{zcatProp.label}}</span>
            <template lyte-if="{{zcatProp.icon && zcatProp.icon.position === 'right' && zcatProp.icon.name}}">
                <svg class="zcat-btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </template>
            <div class="zcat-btn-loader-wrap">
                <div class="zcat-btn-loader"></div>
            </div>
        </button>
    </template>

    <!-- Split button -->
    <template lyte-if="{{zcatProp.type === 'split'}}">
        <div class="zcat-split-group">
            <button
                class="zcat-btn {{zcatProp.variant}} {{zcatProp.color}} {{zcatProp.size === 'small' ? 'zcat-btn-sm' : zcatProp.size === 'extra-small' ? 'zcat-btn-exsm' : zcatProp.size === 'large' ? 'zcat-btn-lg' : ''}} split-body {{zcatProp.loading ? 'loading' : ''}}"
                onclick="{{action('customLbindForButtonClick')}}"
                disabled="{{zcatProp.disabled}}"
            >
                <template lyte-if="{{zcatProp.icon && zcatProp.icon.position === 'left' && zcatProp.icon.name}}">
                    <svg class="zcat-btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </template>
                <span lyte-if="{{zcatProp.label !== undefined && zcatProp.label !== null}}" class="zcat-btn-text">{{zcatProp.label}}</span>
                <template lyte-if="{{zcatProp.icon && zcatProp.icon.position === 'right' && zcatProp.icon.name}}">
                    <svg class="zcat-btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </template>
                <div class="zcat-btn-loader-wrap">
                    <div class="zcat-btn-loader"></div>
                </div>
            </button>
            <button
                class="zcat-btn {{zcatProp.variant}} {{zcatProp.color}} {{zcatProp.size === 'small' ? 'zcat-btn-sm' : zcatProp.size === 'extra-small' ? 'zcat-btn-exsm' : zcatProp.size === 'large' ? 'zcat-btn-lg' : ''}} split-arrow"
                onclick="{{action('buttonClick')}}"
                disabled="{{zcatProp.disabled}}"
            >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
        </div>
    </template>
</template>
`,
    js: `import { Component } from '@slyte/component';
import { prop } from '@slyte/core';

class ZcatButton extends Component {
  constructor() {
    super();
  }

  data() {
    return {
      self: prop('object'),
      zcatProp: prop('object')
    };
  }

  static methods() {
    return {};
  }

  static actions() {
    return {
      async customLbindForButtonClick(a, b, c, d) {
        const self = this.getData('self');
        const prop = this.getData('zcatProp');
        if (prop.callback.name && prop.callback.type !== 'submit') {
          if (prop.callback?.arguments?.length) {
            await self.executeMethod(prop.callback.name, prop.callback.arguments);
          } else {
            await self.executeMethod(prop.callback.name);
          }
        }
      },
      async customLbindForMenuClick(item) {
        const self = this.getData('self');
        if (item.callback.name) {
          await self.executeMethod(item.callback.name, item);
        }
      },
      buttonClick(a, b, c) {
        this.executeMethod('clickAction', a, b, c);
      }
    };
  }

  static observers() {
    return {};
  }
}

export { ZcatButton };
`,
    css: `zcat-button * {
  box-sizing: border-box;
}

/* Base button */
.zcat-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font: var(--zcat-button-font-weight) var(--zcat-button-font-default) var(--zcat-font-family-primary);
  padding: 0 14px;
  width: auto;
  border-radius: 6px;
  border: 1px solid transparent;
  user-select: none;
  cursor: pointer;
  height: 36px;
  white-space: nowrap;
  outline: none;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
}
.zcat-btn-text { margin: 0; pointer-events: none; }
.zcat-btn-icon { flex-shrink: 0; pointer-events: none; }

/* Sizes */
.zcat-btn.zcat-btn-sm {
  padding: 0 10px; font: var(--zcat-button-font-weight) var(--zcat-button-font-sm) var(--zcat-font-family-primary);
  height: 28px; border-radius: 6px; gap: 4px;
}
.zcat-btn.zcat-btn-exsm {
  padding: 0 8px; height: 24px;
  font: var(--zcat-button-font-weight) var(--zcat-button-font-exsm) var(--zcat-font-family-primary);
  border-radius: 6px; gap: 4px;
}
.zcat-btn.zcat-btn-lg {
  height: 50px; padding: 0 20px;
  font: var(--zcat-button-font-weight) var(--zcat-button-font-lg) var(--zcat-font-family-primary);
  gap: 8px;
}

/* Fill Variant */
.zcat-btn.fill { color: var(--zcat-btn-fill-text-default) !important; border: none; }
.zcat-btn.fill.primary { background: var(--zcat-btn-fill-bg-primary-default); }
.zcat-btn.fill.success { background: var(--zcat-btn-fill-bg-success-default); }
.zcat-btn.fill.danger  { background: var(--zcat-btn-fill-bg-danger-default); }
.zcat-btn.fill.primary:hover { background: var(--zcat-btn-fill-bg-primary-hover); }
.zcat-btn.fill.success:hover { background: var(--zcat-btn-fill-bg-success-hover); }
.zcat-btn.fill.danger:hover  { background: var(--zcat-btn-fill-bg-danger-hover); }
.zcat-btn.fill:active { color: var(--zcat-btn-fill-text-click) !important; }
.zcat-btn.fill.primary:active { background: var(--zcat-btn-fill-bg-primary-click); }
.zcat-btn.fill.success:active { background: var(--zcat-btn-fill-bg-success-click); }
.zcat-btn.fill.danger:active  { background: var(--zcat-btn-fill-bg-danger-click); }
.zcat-btn.fill:disabled { color: var(--zcat-btn-fill-text-disabled) !important; opacity: 0.5; pointer-events: none; }
.zcat-btn.fill svg { stroke: var(--zcat-btn-fill-icon-default); }

/* Outline Variant */
.zcat-btn.outline { background: transparent; }
.zcat-btn.outline.primary { color: var(--zcat-btn-outline-text-primary-default); border-color: var(--zcat-btn-outline-border-primary-default); }
.zcat-btn.outline.success { color: var(--zcat-btn-outline-text-success-default); border-color: var(--zcat-btn-outline-border-success-default); }
.zcat-btn.outline.danger  { color: var(--zcat-btn-outline-text-danger-default); border-color: var(--zcat-btn-outline-border-danger-default); }
.zcat-btn.outline.primary:hover { color: var(--zcat-btn-outline-text-primary-hover); border-color: var(--zcat-btn-outline-border-primary-hover); background: var(--zcat-btn-outline-bg-primaryHover); }
.zcat-btn.outline.success:hover { color: var(--zcat-btn-outline-text-success-hover); border-color: var(--zcat-btn-outline-border-success-hover); background: var(--zcat-btn-outline-bg-successHover); }
.zcat-btn.outline.danger:hover  { color: var(--zcat-btn-outline-text-danger-hover); border-color: var(--zcat-btn-outline-border-danger-hover); background: var(--zcat-btn-outline-bg-dangerHover); }
.zcat-btn.outline:disabled { opacity: 0.5; pointer-events: none; }
.zcat-btn.outline.primary svg { stroke: var(--zcat-btn-outline-icon-primary-default); }
.zcat-btn.outline.success svg { stroke: var(--zcat-btn-outline-icon-success-default); }
.zcat-btn.outline.danger svg  { stroke: var(--zcat-btn-outline-icon-danger-default); }

/* Grey Variant */
.zcat-btn.grey { background: var(--zcat-btn-grey-bg-default); color: var(--zcat-btn-grey-text-default); border-color: var(--zcat-btn-grey-border-default); }
.zcat-btn.grey:hover { background: var(--zcat-btn-grey-bg-hover); border-color: var(--zcat-btn-grey-border-hover); color: var(--zcat-btn-grey-text-hover); }
.zcat-btn.grey:active { background: var(--zcat-btn-grey-bg-click); color: var(--zcat-btn-grey-text-click); }
.zcat-btn.grey:disabled { opacity: 0.5; pointer-events: none; }
.zcat-btn.grey svg { stroke: var(--zcat-btn-grey-icon-default); }

/* Ghost Variant */
.zcat-btn.ghost { border-color: transparent; background: transparent; }
.zcat-btn.ghost.primary { color: var(--zcat-btn-ghost-text-primary-default); }
.zcat-btn.ghost.success { color: var(--zcat-btn-ghost-text-success-default); }
.zcat-btn.ghost.danger  { color: var(--zcat-btn-ghost-text-danger-default); }
.zcat-btn.ghost.primary:hover { background: var(--zcat-btn-ghost-bg-primary-hover); }
.zcat-btn.ghost.success:hover { background: var(--zcat-btn-ghost-bg-success-hover); }
.zcat-btn.ghost.danger:hover  { background: var(--zcat-btn-ghost-bg-danger-hover); }
.zcat-btn.ghost:disabled { opacity: 0.5; pointer-events: none; }

/* Icon Only */
.zcat-btn.icon-only { padding: 0; width: 36px; }
.zcat-btn.zcat-btn-sm.icon-only { width: 28px; }
.zcat-btn.zcat-btn-exsm.icon-only { width: 24px; }

/* Split */
.zcat-split-group { display: inline-flex; }
.zcat-btn.split-body { border-radius: 6px 0 0 6px; }
.zcat-btn.fill.split-body { border-right: 1px solid var(--zcat-btn-fill-splitLine-default) !important; }
.zcat-btn.split-arrow { border-radius: 0 6px 6px 0; padding: 0 8px; min-width: auto; }

/* Loader */
.zcat-btn-loader-wrap {
  position: absolute; display: flex; align-items: center; justify-content: center;
  inset: 0; opacity: 0; pointer-events: none;
}
.zcat-btn-loader {
  border: 1.5px solid currentColor; border-top-color: transparent; border-radius: 50%;
  width: 16px; height: 16px; animation: zcat-btn-spin 1s linear infinite;
}
.zcat-btn.loading .zcat-btn-text, .zcat-btn.loading .zcat-btn-icon { opacity: 0; }
.zcat-btn.loading .zcat-btn-loader-wrap { opacity: 1; }
.zcat-btn.loading { pointer-events: none; }
@keyframes zcat-btn-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
.zcat-btn.zcat-w100p { width: 100%; }
`
  },
  input: {
    html: `<template tag-name="zcat-input">
    <div class="zcat-input-wrapper {{zcatProp.disabled ? 'zcat-input-disabled' : ''}} {{zcatProp.errorMessage ? 'zcat-input-error' : ''}}">
        <template lyte-if="{{zcatProp.label}}">
            <div class="zcat-input-label-row">
                <label class="zcat-input-label">{{zcatProp.label}}</label>
                <template lyte-if="{{zcatProp.isOptional}}">
                    <span class="zcat-input-optional">(Optional)</span>
                </template>
            </div>
        </template>
        <div class="zcat-input-field-wrap {{zcatProp.iconLeft ? 'has-icon-left' : ''}} {{zcatProp.iconRight ? 'has-icon-right' : ''}}">
            <template lyte-if="{{zcatProp.iconLeft && zcatProp.iconLeft.name}}">
                <svg class="zcat-input-icon-l" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--zcat-inputField-icon-placeholder)" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </template>
            <template lyte-if="{{zcatProp.type === 'textarea'}}">
                <textarea
                    class="zcat-input-el {{zcatProp.size === 'small' ? 'zcat-input-sm' : zcatProp.size === 'extra-small' ? 'zcat-input-exsm' : ''}}"
                    placeholder="{{zcatProp.placeholder || ''}}"
                    disabled="{{zcatProp.disabled || false}}"
                    style="{{zcatProp.width ? 'width:' + zcatProp.width : ''}}"
                    oninput="{{action('onInputChange')}}"
                    onfocus="{{action('onInputFocus')}}"
                ></textarea>
            </template>
            <template lyte-if="{{zcatProp.type !== 'textarea'}}">
                <input
                    type="text"
                    class="zcat-input-el {{zcatProp.size === 'small' ? 'zcat-input-sm' : zcatProp.size === 'extra-small' ? 'zcat-input-exsm' : ''}}"
                    placeholder="{{zcatProp.placeholder || ''}}"
                    disabled="{{zcatProp.disabled || false}}"
                    style="{{zcatProp.width ? 'width:' + zcatProp.width : ''}}"
                    oninput="{{action('onInputChange')}}"
                    onfocus="{{action('onInputFocus')}}"
                />
            </template>
            <template lyte-if="{{zcatProp.iconRight && zcatProp.iconRight.name}}">
                <svg class="zcat-input-icon-r" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--zcat-inputField-icon-placeholder)" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </template>
        </div>
        <template lyte-if="{{zcatProp.errorMessage}}">
            <div class="zcat-input-error-msg">{{zcatProp.errorMessage}}</div>
        </template>
    </div>
</template>
`,
    js: `import { Component } from '@slyte/component';
import { prop } from '@slyte/core';

class ZcatInput extends Component {
  constructor() {
    super();
  }

  data() {
    return {
      self: prop('object'),
      zcatProp: prop('object'),
      value: prop('string', { default: '' })
    };
  }

  static methods() {
    return {};
  }

  static actions() {
    return {
      onInputChange(event) {
        this.setData('value', event.target.value);
      },
      onInputFocus() {}
    };
  }

  static observers() {
    return {};
  }
}

export { ZcatInput };
`,
    css: `zcat-input * { box-sizing: border-box; }

.zcat-input-wrapper {
  display: flex; flex-direction: column;
  font-family: var(--zcat-font-family-primary);
}

/* Label */
.zcat-input-label-row { display: flex; align-items: center; gap: 6px; margin-bottom: 6px; }
.zcat-input-label { font-size: 13px; font-weight: 500; color: var(--zcat-inputField-text-label); }
.zcat-input-optional { font-size: 12px; color: var(--zcat-inputField-text-optional); }

/* Field wrapper */
.zcat-input-field-wrap { position: relative; display: flex; align-items: center; }

/* Input element */
.zcat-input-el {
  width: 100%; height: 36px; padding: 0 12px; font-size: 14px;
  font-family: var(--zcat-font-family-primary); color: var(--zcat-body-text-primary);
  background: var(--zcat-inputField-bg-default); border: var(--zcat-inputField-border-default);
  border-radius: 8px; outline: none;
  transition: border-color 0.15s, background 0.15s, box-shadow 0.15s;
}
textarea.zcat-input-el { height: 80px; padding: 10px 12px; resize: vertical; line-height: 1.5; }
.zcat-input-el::placeholder { color: var(--zcat-inputField-text-placeholder); }
.zcat-input-el:hover { background: var(--zcat-inputField-bg-hover); border: var(--zcat-inputField-border-hover); }
.zcat-input-el:focus { background: var(--zcat-inputField-bg-active); border: var(--zcat-inputField-border-active); color: var(--zcat-inputField-text-active); }

/* Sizes */
.zcat-input-el.zcat-input-sm { height: 30px; font-size: 13px; padding: 0 10px; }
.zcat-input-el.zcat-input-exsm { height: 24px; font-size: 12px; padding: 0 8px; border-radius: 6px; }

/* Disabled */
.zcat-input-disabled .zcat-input-el {
  background: var(--zcat-inputField-bg-disabled); border: 1px solid var(--zcat-inputField-border-disabled);
  color: var(--zcat-inputField-text-disabled); cursor: not-allowed; opacity: 0.6;
}
.zcat-input-disabled .zcat-input-label { color: var(--zcat-inputField-text-disabled); }

/* Error */
.zcat-input-error .zcat-input-el { background: var(--zcat-inputField-bg-error) !important; border-color: var(--zcat-inputField-border-error) !important; }
.zcat-input-error-msg { margin-top: 4px; font-size: 12px; color: var(--zcat-inputField-text-error); }

/* Icons */
.zcat-input-icon-l, .zcat-input-icon-r { position: absolute; top: 50%; transform: translateY(-50%); z-index: 2; pointer-events: none; }
.zcat-input-icon-l { left: 10px; }
.zcat-input-icon-r { right: 10px; }
.has-icon-left .zcat-input-el { padding-left: 32px; }
.has-icon-right .zcat-input-el { padding-right: 32px; }
`
  },
  dropdown: {
    html: `<template tag-name="zcat-dropdown">
  <div class="zcat-dropdown-wrapper
    {{zcatProp.size === 'small' ? 'zcat-dropdown-sm' : zcatProp.size === 'extra-small' ? 'zcat-dropdown-exsm' : ''}}
    {{zcatProp.variant === 'ghost' ? 'zcat-dropdown-ghost' : ''}}
    {{zcatProp.disabled ? 'zcat-dropdown-disabled' : ''}}
    {{zcatProp.errorMessage ? 'zcat-dropdown-error' : ''}}
    {{zcatProp.width === 'zcat-w-fc' ? 'zcat-dropdown-fit-content' : zcatProp.width === 'zcat-w100p' ? 'zcat-dropdown-fullwidth' : zcatProp.width === 'zcat-w300' ? 'zcat-dropdown-w300' : ''}}">

    <template lyte-if="{{zcatProp.label}}">
      <div class="zcat-dropdown-label-row {{zcatProp.disabled ? 'zcat-dropdown-label-disabled' : ''}}">
        <label class="zcat-dropdown-label">
          {{zcatProp.label}}
          <span lyte-if="{{zcatProp.isOptional}}" class="zcat-dropdown-optional">(Optional)</span>
        </label>
        <template lyte-if="{{zcatProp.infoIcon}}">
          <svg class="zcat-dropdown-info-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--zcat-inputField-icon-label)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        </template>
      </div>
    </template>

    <div class="zcat-dropdown-trigger-wrap">
      <template lyte-if="{{zcatProp.icon}}">
        <svg class="zcat-dropdown-icon-left {{zcatProp.disabled ? 'zcat-dropdown-icon-disabled' : ''}}" width="{{zcatProp.size === 'small' || zcatProp.size === 'extra-small' ? '14' : '16'}}" height="{{zcatProp.size === 'small' || zcatProp.size === 'extra-small' ? '14' : '16'}}" viewBox="0 0 24 24" fill="none" stroke="var(--zcat-inputField-icon-label)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      </template>
      <div class="zcat-dropdown-trigger {{isOpen ? 'active' : ''}} {{zcatProp.icon ? 'has-icon-left' : ''}}" onclick="{{action('toggleDropdown')}}" tabindex="0" onkeydown="{{action('onTriggerKeydown')}}">
        <span lyte-if="{{selectedLabel}}" class="zcat-dropdown-value">{{selectedLabel}}</span>
        <span lyte-if="{{!selectedLabel}}" class="zcat-dropdown-placeholder">{{zcatProp.placeholder || 'Select Option'}}</span>
        <span class="zcat-dropdown-arrow"></span>
      </div>
    </div>

    <div class="zcat-dropdown-menu {{isOpen ? 'open' : ''}}">
      <template lyte-if="{{zcatProp.isSearchable}}">
        <div class="zcat-dropdown-search-wrap">
          <svg class="zcat-dropdown-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" class="zcat-dropdown-search-input" placeholder="Search" oninput="{{action('onSearchInput')}}"/>
        </div>
      </template>
      <div class="zcat-dropdown-menu-body">
        <template lyte-if="{{zcatProp.dropLabel && filteredOptions.length}}">
          <div class="zcat-dropdown-menu-header">{{zcatProp.dropLabel}}</div>
        </template>
        <template lyte-for="{{filteredOptions}} as item index">
          <div class="zcat-dropdown-item {{item.value === selectedValue ? 'selected' : ''}} {{item.disabled ? 'disabled' : ''}}"
               onclick="{{action('selectItem', item)}}">
            <template lyte-if="{{item.icon}}">
              <svg class="zcat-dropdown-item-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--zcat-menuList-icon-active)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </template>
            <span class="zcat-dropdown-item-text">{{item.name}}</span>
          </div>
        </template>
        <div lyte-if="{{!filteredOptions.length}}" class="zcat-dropdown-no-result">No results found</div>
      </div>
      <template lyte-if="{{zcatProp.createNewBtn}}">
        <div class="zcat-dropdown-footer">
          <div class="zcat-dropdown-create-btn" onclick="{{action('createNewClicked')}}">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            <span>{{zcatProp.createNewBtn.label || 'Create New'}}</span>
          </div>
        </div>
      </template>
    </div>

    <span lyte-if="{{zcatProp.errorMessage}}" class="zcat-dropdown-error-msg">{{zcatProp.errorMessage}}</span>
  </div>
</template>
`,
    js: `import { Component } from '@slyte/component';
import { prop } from '@slyte/core';

class ZcatDropdown extends Component {
  constructor() {
    super();
  }

  data() {
    return {
      self: prop('object'),
      zcatProp: prop('object', { default: {} }, { watch: true }),
      isOpen: prop('boolean', { default: false }),
      selectedValue: prop('string', { default: '' }),
      selectedLabel: prop('string', { default: '' }),
      searchQuery: prop('string', { default: '' }),
      filteredOptions: prop('array', { default: [] })
    };
  }

  init() {
    this._syncSelection();
    this._syncFilteredOptions();
  }

  didConnect() {
    let comp = this;
    this._outsideClickHandler = function(e) {
      let wrapper = comp.$node ? comp.$node.querySelector('.zcat-dropdown-wrapper') : null;
      if (wrapper && !wrapper.contains(e.target)) {
        comp.setData('isOpen', false);
        comp.setData('searchQuery', '');
        comp._syncFilteredOptions();
      }
    };
    document.addEventListener('click', this._outsideClickHandler, true);
  }

  didDestroy() {
    if (this._outsideClickHandler) {
      document.removeEventListener('click', this._outsideClickHandler, true);
    }
  }

  _syncSelection() {
    let zcatProp = this.getData('zcatProp');
    if (zcatProp && zcatProp.selected) {
      let options = zcatProp.options || [];
      let found = null;
      for (let i = 0; i < options.length; i++) {
        if (options[i].value === zcatProp.selected) { found = options[i]; break; }
      }
      if (found) {
        this.setData('selectedValue', found.value);
        this.setData('selectedLabel', found.name);
      } else {
        this.setData('selectedValue', '');
        this.setData('selectedLabel', '');
      }
    } else {
      this.setData('selectedValue', '');
      this.setData('selectedLabel', '');
    }
  }

  _syncFilteredOptions() {
    let zcatProp = this.getData('zcatProp');
    let options = (zcatProp && zcatProp.options) ? zcatProp.options : [];
    let query = this.getData('searchQuery') || '';
    if (query) {
      let q = query.toLowerCase();
      let filtered = [];
      for (let i = 0; i < options.length; i++) {
        if (options[i].name && options[i].name.toLowerCase().indexOf(q) !== -1) {
          filtered.push(options[i]);
        }
      }
      this.setData('filteredOptions', filtered);
    } else {
      this.setData('filteredOptions', options.slice ? options.slice() : []);
    }
  }

  static methods() {
    return {};
  }

  static actions() {
    return {
      toggleDropdown(event) {
        if (event) { event.stopPropagation(); }
        let zcatProp = this.getData('zcatProp');
        if (zcatProp && zcatProp.disabled) { return; }
        let wasOpen = this.getData('isOpen');
        this.setData('isOpen', !wasOpen);
        if (wasOpen) {
          this.setData('searchQuery', '');
          this._syncFilteredOptions();
        } else {
          this._syncFilteredOptions();
          let comp = this;
          setTimeout(function() {
            let searchInput = comp.$node ? comp.$node.querySelector('.zcat-dropdown-search-input') : null;
            if (searchInput) { searchInput.focus(); }
          }, 50);
        }
      },

      selectItem(item) {
        if (item && item.disabled) { return; }
        this.setData('selectedValue', item.value);
        this.setData('selectedLabel', item.name);
        this.setData('isOpen', false);
        this.setData('searchQuery', '');
        this._syncFilteredOptions();
        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.callback && zcatProp.callback.name) {
          self.executeMethod(zcatProp.callback.name, item);
        }
      },

      onSearchInput(event) {
        this.setData('searchQuery', event.target.value);
        this._syncFilteredOptions();
      },

      onTriggerKeydown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          this.exec('toggleDropdown', event);
        } else if (event.key === 'Escape') {
          this.setData('isOpen', false);
          this.setData('searchQuery', '');
          this._syncFilteredOptions();
        }
      },

      createNewClicked() {
        let self = this.getData('self');
        let zcatProp = this.getData('zcatProp');
        if (self && zcatProp && zcatProp.createNewBtn && zcatProp.createNewBtn.callback && zcatProp.createNewBtn.callback.name) {
          self.executeMethod(zcatProp.createNewBtn.callback.name);
        }
        this.setData('isOpen', false);
      }
    };
  }

  static observers() {
    return {
      zcatPropChanged: {
        watch: ['zcatProp'],
        handler() {
          this._syncSelection();
          this._syncFilteredOptions();
        }
      }
    };
  }
}

export { ZcatDropdown };
`,
    css: `zcat-dropdown * { box-sizing: border-box; }

.zcat-dropdown-wrapper {
  position: relative; display: inline-block; width: 200px;
  font-family: var(--zcat-font-family-primary);
}
.zcat-dropdown-wrapper.zcat-dropdown-fullwidth { width: 100%; }
.zcat-dropdown-wrapper.zcat-dropdown-fit-content { width: auto; min-width: 80px; }
.zcat-dropdown-wrapper.zcat-dropdown-w300 { width: 300px; }

/* Label Row */
.zcat-dropdown-label-row { display: flex; align-items: center; gap: 4px; margin-bottom: 4px; }
.zcat-dropdown-label { font-size: 13px; font-weight: 500; color: var(--zcat-inputField-text-label); line-height: 18px; }
.zcat-dropdown-label .zcat-dropdown-optional { font-weight: 400; color: var(--zcat-inputField-text-optional); font-size: 13px; }
.zcat-dropdown-label-disabled .zcat-dropdown-label { color: var(--zcat-inputField-text-disabled); }
.zcat-dropdown-info-icon { cursor: pointer; flex-shrink: 0; }

/* Trigger */
.zcat-dropdown-trigger-wrap { position: relative; display: flex; align-items: center; }
.zcat-dropdown-icon-left { position: absolute; left: 8px; top: 50%; transform: translateY(-50%); z-index: 1; pointer-events: none; }
.zcat-dropdown-icon-disabled { opacity: 0.4; }
.zcat-dropdown-trigger {
  display: flex; align-items: center; width: 100%; min-height: 36px; padding: 0 28px 0 8px;
  background: var(--zcat-inputField-bg-default); border: var(--zcat-inputField-border-default);
  border-radius: 6px; color: var(--zcat-inputField-text-active); font-size: 14px; font-weight: 400;
  font-family: var(--zcat-font-family-primary); line-height: 20px; cursor: pointer; position: relative;
  transition: border-color 0.15s, box-shadow 0.15s, background 0.15s; outline: none; text-align: left;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.zcat-dropdown-trigger.has-icon-left { padding-left: 30px; }
.zcat-dropdown-trigger:hover { border: var(--zcat-inputField-border-hover); }
.zcat-dropdown-trigger:focus, .zcat-dropdown-trigger.active { border: var(--zcat-inputField-border-active); }

/* Arrow */
.zcat-dropdown-arrow {
  position: absolute; right: 8px; top: 50%; transform: translateY(-50%);
  width: 16px; height: 16px; pointer-events: none; transition: transform 0.15s ease;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6L8 10L12 6' stroke='%237988A8' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-size: 16px; background-repeat: no-repeat; background-position: center;
}
.zcat-dropdown-trigger.active .zcat-dropdown-arrow { transform: translateY(-50%) rotate(180deg); }
.zcat-dropdown-trigger .zcat-dropdown-placeholder { color: var(--zcat-inputField-text-placeholder); }

/* Sizes */
.zcat-dropdown-wrapper.zcat-dropdown-sm .zcat-dropdown-trigger { min-height: 28px; padding: 2px 22px 2px 6px; font-size: 13px; }
.zcat-dropdown-wrapper.zcat-dropdown-exsm .zcat-dropdown-trigger { min-height: 24px; padding: 2px 22px 2px 4px; font-size: 12px; }

/* Menu */
.zcat-dropdown-menu {
  position: absolute; top: calc(100% + 2px); left: 0; right: 0; z-index: 1000;
  background: var(--zcat-body-bg); border: 1px solid var(--zcat-body-border); border-radius: 6px;
  box-shadow: 0px 4px 14px -4px rgba(0,0,0,0.12); overflow: hidden; display: none;
  animation: zcatDropFadeIn 0.12s ease-out;
}
.zcat-dropdown-menu.open { display: block; }
@keyframes zcatDropFadeIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }

/* Search */
.zcat-dropdown-search-wrap { position: relative; padding: 8px 8px 0; }
.zcat-dropdown-search-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-30%); color: var(--zcat-inputField-text-placeholder); pointer-events: none; }
.zcat-dropdown-search-input {
  width: 100%; height: 32px; padding: 0 8px 0 30px; border: var(--zcat-inputField-border-default);
  border-radius: 6px; background: var(--zcat-inputField-bg-default); color: var(--zcat-body-text-primary);
  font-size: 13px; font-family: var(--zcat-font-family-primary); outline: none;
}
.zcat-dropdown-search-input:focus { border: var(--zcat-inputField-border-active); }
.zcat-dropdown-search-input::placeholder { color: var(--zcat-inputField-text-placeholder); }

/* Menu header */
.zcat-dropdown-menu-header { padding: 0 0 6px; font-size: 14px; font-weight: 600; color: var(--zcat-inputField-text-label); }

/* Menu body */
.zcat-dropdown-menu-body { padding: 8px; max-height: 200px; overflow-y: auto; scrollbar-width: thin; }

/* Items */
.zcat-dropdown-item {
  display: flex; align-items: center; gap: 6px; padding: 8px 28px 8px 4px; font-size: 14px;
  color: var(--zcat-body-text-primary); border-radius: 6px; cursor: pointer; transition: background 0.12s;
  position: relative; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 2px;
}
.zcat-dropdown-item:hover { background: var(--zcat-btn-grey-bg-hover); }
.zcat-dropdown-item.selected { background: var(--zcat-btn-outline-bg-primaryHover); color: var(--zcat-btn-fill-bg-primary-default); font-weight: 500; }
.zcat-dropdown-item.selected::after {
  content: ''; position: absolute; right: 4px; top: 50%; transform: translateY(-50%);
  width: 16px; height: 16px;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none"><path d="M13.3334 4.29999L6.00002 11.6333L2.66669 8.29999" stroke="%232A65F0" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>') no-repeat center;
  background-size: contain;
}
.zcat-dropdown-item.disabled { color: var(--zcat-inputField-text-disabled); cursor: not-allowed; pointer-events: none; }
.zcat-dropdown-no-result { padding: 10px 15px; text-align: center; color: var(--zcat-body-text-grey); font-size: 14px; }

/* Footer / Create New */
.zcat-dropdown-footer { border-top: 1px solid var(--zcat-body-border); padding: 6px 8px; }
.zcat-dropdown-create-btn {
  display: flex; align-items: center; gap: 6px; padding: 6px 4px; font-size: 14px;
  color: var(--zcat-btn-fill-bg-primary-default); font-weight: 500; cursor: pointer; border-radius: 6px;
  transition: background 0.12s;
}
.zcat-dropdown-create-btn:hover { background: var(--zcat-btn-outline-bg-primaryHover); }

/* States */
.zcat-dropdown-wrapper.zcat-dropdown-error .zcat-dropdown-trigger { border-color: var(--zcat-inputField-border-error) !important; background: var(--zcat-inputField-bg-error); }
.zcat-dropdown-error-msg { position: absolute; top: 100%; left: 0; font-size: 12px; color: var(--zcat-inputField-text-error); padding-top: 2px; }
.zcat-dropdown-wrapper.zcat-dropdown-disabled .zcat-dropdown-trigger {
  background: var(--zcat-inputField-bg-disabled) !important; color: var(--zcat-inputField-text-disabled) !important;
  cursor: not-allowed; border-color: var(--zcat-inputField-border-disabled) !important;
}
.zcat-dropdown-wrapper.zcat-dropdown-disabled .zcat-dropdown-arrow { opacity: 0.4; }

/* Ghost Variant */
.zcat-dropdown-wrapper.zcat-dropdown-ghost .zcat-dropdown-trigger { background: transparent; border-color: transparent; color: var(--zcat-btn-ghost-text-primary-default); }
.zcat-dropdown-wrapper.zcat-dropdown-ghost .zcat-dropdown-trigger:hover { background: var(--zcat-btn-ghost-bg-primary-hover); border-color: transparent; }
`
  }
};

// ═══════════════════════════════════════════
// Download helpers
// ═══════════════════════════════════════════

function _triggerDownload(filename, content, mimeType) {
  var blob = new Blob([content], { type: mimeType || 'text/plain' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function _getMime(ext) {
  if (ext === 'css') return 'text/css';
  if (ext === 'js') return 'application/javascript';
  if (ext === 'html') return 'text/html';
  return 'text/plain';
}

function _downloadAllAsZip() {
  // Build file list
  var files = [
    { path: 'styles/zcat-tokens.css', content: ZCAT_FILES.tokens.css },
    { path: 'templates/zcat-button.html', content: ZCAT_FILES.button.html },
    { path: 'javascript/zcat-button.js', content: ZCAT_FILES.button.js },
    { path: 'styles/zcat-button.css', content: ZCAT_FILES.button.css },
    { path: 'templates/zcat-input.html', content: ZCAT_FILES.input.html },
    { path: 'javascript/zcat-input.js', content: ZCAT_FILES.input.js },
    { path: 'styles/zcat-input.css', content: ZCAT_FILES.input.css },
    { path: 'templates/zcat-dropdown.html', content: ZCAT_FILES.dropdown.html },
    { path: 'javascript/zcat-dropdown.js', content: ZCAT_FILES.dropdown.js },
    { path: 'styles/zcat-dropdown.css', content: ZCAT_FILES.dropdown.css }
  ];

  // Download each file individually (since we can't use JSZip without CDN)
  var delay = 0;
  for (var i = 0; i < files.length; i++) {
    (function(file, d) {
      setTimeout(function() {
        var name = file.path.split('/').pop();
        var ext = name.split('.').pop();
        _triggerDownload(name, file.content, _getMime(ext));
      }, d);
    })(files[i], delay);
    delay += 200;
  }
}

class InstallationComp extends Component {
  constructor() {
    super();
  }

  data(arg1) {
    return Object.assign(super.data({}), arg1);
  }

  static methods(arg1) { return Object.assign(super.methods({}), arg1); }

  static actions(arg1) {
    return Object.assign(super.actions({
      downloadTokens() {
        _triggerDownload('zcat-tokens.css', ZCAT_FILES.tokens.css, 'text/css');
      },
      downloadFile(component, ext) {
        if (ZCAT_FILES[component] && ZCAT_FILES[component][ext]) {
          var filename = 'zcat-' + component + '.' + ext;
          _triggerDownload(filename, ZCAT_FILES[component][ext], _getMime(ext));
        }
      },
      downloadAll() {
        _downloadAllAsZip();
      }
    }), arg1);
  }

  static observers(arg1) { return Object.assign(super.observers({}), arg1); }

  _() {
    _;
  }
}

InstallationComp._template = "<template tag-name=\"installation-comp\"> <div class=\"zcat-page-wrapper\"> <div class=\"zcat-page-header\"> <h1 class=\"zcat-page-title\">Installation</h1> <p class=\"zcat-page-desc\">Get ZCAT components set up in your sLyte project in minutes.</p> <div class=\"zcat-page-tabs\"> <span class=\"zcat-page-tab active\">Setup Guide</span> </div> </div> <div class=\"zcat-page-body\"> <div class=\"zcat-page-left\" style=\"max-width:820px;\"> <!-- Prerequisites --> <div class=\"zcat-content-section\"> <h2 class=\"zcat-content-heading\">Prerequisites</h2> <p class=\"zcat-content-text\">Before you begin, make sure you have the following installed:</p> <ul class=\"zcat-content-list\"> <li><strong>Node.js</strong> v18 or later</li> <li><strong>npm</strong> v9 or later (comes with Node.js)</li> <li><strong>sLyte CLI</strong> — the sLyte command-line tool</li> </ul> </div> <!-- Step 1 --> <div class=\"zcat-content-section\"> <h2 class=\"zcat-content-heading\">Step 1 — Install sLyte CLI</h2> <p class=\"zcat-content-text\">Install the sLyte CLI globally from the Zoho npm registry:</p> <div class=\"zcat-code-panel zcat-content-code\"> <pre>npm install -g @aspect/slyte-cli --registry http://cm-npmregistry</pre> </div> </div> <!-- Step 2 --> <div class=\"zcat-content-section\"> <h2 class=\"zcat-content-heading\">Step 2 — Create a new project</h2> <p class=\"zcat-content-text\">Scaffold a new sLyte application using the CLI:</p> <div class=\"zcat-code-panel zcat-content-code\"> <pre>slyte create my-app\ncd my-app</pre> </div> </div> <!-- Step 3 --> <div class=\"zcat-content-section\"> <h2 class=\"zcat-content-heading\">Step 3 — Install dependencies</h2> <p class=\"zcat-content-text\">Install all required packages from the Zoho npm registry:</p> <div class=\"zcat-code-panel zcat-content-code\"> <pre>npm install --registry http://cm-npmregistry</pre> </div> </div> <!-- Step 4 --> <div class=\"zcat-content-section\"> <h2 class=\"zcat-content-heading\">Step 4 — Add ZCAT component files</h2> <p class=\"zcat-content-text\"> Copy the ZCAT component files into your sLyte project's <strong>components</strong> folder. Each component consists of three files — a template (HTML), logic (JS), and styles (CSS): </p> <div class=\"zcat-code-panel zcat-content-code\"> <pre>my-app/\n├── components/\n│   ├── templates/\n│   │   ├── zcat-button.html\n│   │   ├── zcat-input.html\n│   │   └── zcat-dropdown.html\n│   ├── javascript/\n│   │   ├── zcat-button.js\n│   │   ├── zcat-input.js\n│   │   └── zcat-dropdown.js\n│   └── styles/\n│       ├── zcat-tokens.css        ← Design tokens (required)\n│       ├── zcat-button.css\n│       ├── zcat-input.css\n│       └── zcat-dropdown.css</pre> </div> <p class=\"zcat-content-text\" style=\"margin-top:12px;\"> You only need to copy the components you plan to use. However, <strong>zcat-tokens.css</strong> is always required — it defines all the color, spacing, and typography tokens used by every component. </p> <!-- Download Panel --> <div class=\"zcat-download-panel\" style=\"margin-top:20px; padding:24px; background:var(--zcat-prev-bg); border-radius:12px; border:1px solid var(--zcat-body-border);\"> <div style=\"display:flex; align-items:center; justify-content:space-between; margin-bottom:16px;\"> <div> <p style=\"font-size:15px; font-weight:600; color:var(--zcat-body-text-primary); margin:0;\">Download Component Files</p> <p style=\"font-size:13px; color:var(--zcat-body-text-grey); margin:4px 0 0;\">Download individual components or the full package.</p> </div> <div class=\"zcat-dl-all-btn\" onclick=\"{{action('downloadAll')}}\" style=\"display:inline-flex; align-items:center; gap:6px; padding:8px 16px; background:var(--zcat-btn-fill-bg-primary-default); color:#fff; border-radius:8px; font-size:13px; font-weight:500; cursor:pointer; transition:background 0.15s; font-family:var(--zcat-font-family-primary);\"> <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"7 10 12 15 17 10\"></polyline><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"></line></svg> Download All (10 files) </div> </div> <!-- Design Tokens --> <div style=\"display:flex; align-items:center; justify-content:space-between; padding:12px 14px; background:var(--zcat-body-bg); border:1px solid var(--zcat-body-border); border-radius:8px; margin-bottom:8px;\"> <div style=\"display:flex; align-items:center; gap:10px;\"> <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--zcat-btn-fill-bg-primary-default)\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 2L2 7l10 5 10-5-10-5z\"></path><path d=\"M2 17l10 5 10-5\"></path><path d=\"M2 12l10 5 10-5\"></path></svg> <div> <p style=\"font-size:13px; font-weight:500; color:var(--zcat-body-text-primary); margin:0;\">Design Tokens</p> <p style=\"font-size:12px; color:var(--zcat-body-text-grey); margin:2px 0 0;\">zcat-tokens.css — Required for all components</p> </div> </div> <div onclick=\"{{action('downloadTokens')}}\" style=\"display:inline-flex; align-items:center; gap:4px; padding:5px 12px; border:1px solid var(--zcat-body-border); border-radius:6px; font-size:12px; font-weight:500; color:var(--zcat-body-text-secondary); cursor:pointer; transition:background 0.12s; background:var(--zcat-body-bg); font-family:var(--zcat-font-family-primary);\"> <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"7 10 12 15 17 10\"></polyline><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"></line></svg> CSS </div> </div> <!-- Button --> <div style=\"display:flex; align-items:center; justify-content:space-between; padding:12px 14px; background:var(--zcat-body-bg); border:1px solid var(--zcat-body-border); border-radius:8px; margin-bottom:8px;\"> <div style=\"display:flex; align-items:center; gap:10px;\"> <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--zcat-btn-fill-bg-success-default)\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"8\" width=\"18\" height=\"8\" rx=\"2\"></rect><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line></svg> <div> <p style=\"font-size:13px; font-weight:500; color:var(--zcat-body-text-primary); margin:0;\">Button Component</p> <p style=\"font-size:12px; color:var(--zcat-body-text-grey); margin:2px 0 0;\">zcat-button.html + zcat-button.js + zcat-button.css</p> </div> </div> <div style=\"display:flex; gap:6px;\"> <div onclick=\"{{action('downloadFile','button','html')}}\" style=\"display:inline-flex; align-items:center; gap:4px; padding:5px 12px; border:1px solid var(--zcat-body-border); border-radius:6px; font-size:12px; font-weight:500; color:var(--zcat-body-text-secondary); cursor:pointer; background:var(--zcat-body-bg); font-family:var(--zcat-font-family-primary);\"> <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"7 10 12 15 17 10\"></polyline><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"></line></svg> HTML </div> <div onclick=\"{{action('downloadFile','button','js')}}\" style=\"display:inline-flex; align-items:center; gap:4px; padding:5px 12px; border:1px solid var(--zcat-body-border); border-radius:6px; font-size:12px; font-weight:500; color:var(--zcat-body-text-secondary); cursor:pointer; background:var(--zcat-body-bg); font-family:var(--zcat-font-family-primary);\"> <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"7 10 12 15 17 10\"></polyline><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"></line></svg> JS </div> <div onclick=\"{{action('downloadFile','button','css')}}\" style=\"display:inline-flex; align-items:center; gap:4px; padding:5px 12px; border:1px solid var(--zcat-body-border); border-radius:6px; font-size:12px; font-weight:500; color:var(--zcat-body-text-secondary); cursor:pointer; background:var(--zcat-body-bg); font-family:var(--zcat-font-family-primary);\"> <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"7 10 12 15 17 10\"></polyline><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"></line></svg> CSS </div> </div> </div> <!-- Input --> <div style=\"display:flex; align-items:center; justify-content:space-between; padding:12px 14px; background:var(--zcat-body-bg); border:1px solid var(--zcat-body-border); border-radius:8px; margin-bottom:8px;\"> <div style=\"display:flex; align-items:center; gap:10px;\"> <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--zcat-btn-fill-bg-danger-default)\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"2\" y=\"6\" width=\"20\" height=\"12\" rx=\"2\"></rect><line x1=\"6\" y1=\"10\" x2=\"6\" y2=\"14\"></line></svg> <div> <p style=\"font-size:13px; font-weight:500; color:var(--zcat-body-text-primary); margin:0;\">Input Component</p> <p style=\"font-size:12px; color:var(--zcat-body-text-grey); margin:2px 0 0;\">zcat-input.html + zcat-input.js + zcat-input.css</p> </div> </div> <div style=\"display:flex; gap:6px;\"> <div onclick=\"{{action('downloadFile','input','html')}}\" style=\"display:inline-flex; align-items:center; gap:4px; padding:5px 12px; border:1px solid var(--zcat-body-border); border-radius:6px; font-size:12px; font-weight:500; color:var(--zcat-body-text-secondary); cursor:pointer; background:var(--zcat-body-bg); font-family:var(--zcat-font-family-primary);\"> <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"7 10 12 15 17 10\"></polyline><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"></line></svg> HTML </div> <div onclick=\"{{action('downloadFile','input','js')}}\" style=\"display:inline-flex; align-items:center; gap:4px; padding:5px 12px; border:1px solid var(--zcat-body-border); border-radius:6px; font-size:12px; font-weight:500; color:var(--zcat-body-text-secondary); cursor:pointer; background:var(--zcat-body-bg); font-family:var(--zcat-font-family-primary);\"> <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"7 10 12 15 17 10\"></polyline><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"></line></svg> JS </div> <div onclick=\"{{action('downloadFile','input','css')}}\" style=\"display:inline-flex; align-items:center; gap:4px; padding:5px 12px; border:1px solid var(--zcat-body-border); border-radius:6px; font-size:12px; font-weight:500; color:var(--zcat-body-text-secondary); cursor:pointer; background:var(--zcat-body-bg); font-family:var(--zcat-font-family-primary);\"> <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"7 10 12 15 17 10\"></polyline><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"></line></svg> CSS </div> </div> </div> <!-- Dropdown --> <div style=\"display:flex; align-items:center; justify-content:space-between; padding:12px 14px; background:var(--zcat-body-bg); border:1px solid var(--zcat-body-border); border-radius:8px;\"> <div style=\"display:flex; align-items:center; gap:10px;\"> <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#8B5CF6\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"6\" rx=\"2\"></rect><polyline points=\"8 14 12 18 16 14\"></polyline></svg> <div> <p style=\"font-size:13px; font-weight:500; color:var(--zcat-body-text-primary); margin:0;\">Dropdown Component</p> <p style=\"font-size:12px; color:var(--zcat-body-text-grey); margin:2px 0 0;\">zcat-dropdown.html + zcat-dropdown.js + zcat-dropdown.css</p> </div> </div> <div style=\"display:flex; gap:6px;\"> <div onclick=\"{{action('downloadFile','dropdown','html')}}\" style=\"display:inline-flex; align-items:center; gap:4px; padding:5px 12px; border:1px solid var(--zcat-body-border); border-radius:6px; font-size:12px; font-weight:500; color:var(--zcat-body-text-secondary); cursor:pointer; background:var(--zcat-body-bg); font-family:var(--zcat-font-family-primary);\"> <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"7 10 12 15 17 10\"></polyline><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"></line></svg> HTML </div> <div onclick=\"{{action('downloadFile','dropdown','js')}}\" style=\"display:inline-flex; align-items:center; gap:4px; padding:5px 12px; border:1px solid var(--zcat-body-border); border-radius:6px; font-size:12px; font-weight:500; color:var(--zcat-body-text-secondary); cursor:pointer; background:var(--zcat-body-bg); font-family:var(--zcat-font-family-primary);\"> <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"7 10 12 15 17 10\"></polyline><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"></line></svg> JS </div> <div onclick=\"{{action('downloadFile','dropdown','css')}}\" style=\"display:inline-flex; align-items:center; gap:4px; padding:5px 12px; border:1px solid var(--zcat-body-border); border-radius:6px; font-size:12px; font-weight:500; color:var(--zcat-body-text-secondary); cursor:pointer; background:var(--zcat-body-bg); font-family:var(--zcat-font-family-primary);\"> <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"7 10 12 15 17 10\"></polyline><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"></line></svg> CSS </div> </div> </div> </div> </div> <!-- Step 5 --> <div class=\"zcat-content-section\"> <h2 class=\"zcat-content-heading\">Step 5 — Include design tokens</h2> <p class=\"zcat-content-text\"> The <strong>zcat-tokens.css</strong> file provides all CSS custom properties (variables) used by ZCAT components. It includes tokens for buttons, inputs, dropdowns, body text, and dark mode variants. </p> <p class=\"zcat-content-text\" style=\"margin-top:8px;\"> sLyte automatically loads CSS files placed in the <strong>components/styles/</strong> folder, so no manual import is needed. Just make sure <strong>zcat-tokens.css</strong> is in that directory. </p> <div class=\"zcat-code-panel zcat-content-code\"> <pre>/* zcat-tokens.css — key token categories */\n\n:root {\n  /* Font */\n  --zcat-font-family-primary: 'Inter', sans-serif;\n\n  /* Button tokens */\n  --zcat-btn-fill-bg-primary-default: #2B6AF3;\n  --zcat-btn-outline-text-primary-default: #2B6AF3;\n  --zcat-btn-grey-bg-default: #F0F1F3;\n  --zcat-btn-ghost-text-primary-default: #2B6AF3;\n\n  /* Input tokens */\n  --zcat-inputField-bg-default: #FFFFFF;\n  --zcat-inputField-border-default: 1px solid #D6DDEF;\n  --zcat-inputField-text-label: #4D618A;\n\n  /* Body / General */\n  --zcat-body-bg: #FFFFFF;\n  --zcat-body-text-primary: #101F3E;\n\n  /* ... 200+ tokens — see full file for all values */\n}</pre> </div> </div> <!-- Step 6 --> <div class=\"zcat-content-section\"> <h2 class=\"zcat-content-heading\">Step 6 — Add fonts</h2> <p class=\"zcat-content-text\"> ZCAT components use <strong>Zoho Puvi</strong> as the primary font. Add the font via CDN in your app's <strong>index.html</strong> or layout template: </p> <div class=\"zcat-code-panel zcat-content-code\"> <pre>&lt;!-- In your index.html &lt;head&gt; --&gt;\n&lt;style&gt;\n  @font-face {\n    font-family: 'Zoho Puvi';\n    src: url('https://static.zohocdn.com/zohofonts/zohopuvi/4.0/Zoho_Puvi_Regular.woff2') format('woff2');\n    font-weight: 400;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: 'Zoho Puvi';\n    src: url('https://static.zohocdn.com/zohofonts/zohopuvi/4.0/Zoho_Puvi_Medium.woff2') format('woff2');\n    font-weight: 500;\n    font-display: swap;\n  }\n  @font-face {\n    font-family: 'Zoho Puvi';\n    src: url('https://static.zohocdn.com/zohofonts/zohopuvi/4.0/Zoho_Puvi_Semibold.woff2') format('woff2');\n    font-weight: 600;\n    font-display: swap;\n  }\n&lt;/style&gt;</pre> </div> <p class=\"zcat-content-text\" style=\"margin-top:8px;\"> Then update the font token in <strong>zcat-tokens.css</strong>: </p> <div class=\"zcat-code-panel zcat-content-code\"> <pre>:root {\n  --zcat-font-family-primary: 'Zoho Puvi', 'Inter', sans-serif;\n}</pre> </div> <p class=\"zcat-content-text\" style=\"margin-top:8px; color: var(--zcat-body-text-grey); font-size:13px;\"> Alternatively, you can use <strong>Inter</strong> from Google Fonts — no @font-face is needed, just add the &lt;link&gt; tag. </p> </div> <!-- Step 7 --> <div class=\"zcat-content-section\"> <h2 class=\"zcat-content-heading\">Step 7 — Start the dev server</h2> <p class=\"zcat-content-text\">Run the development server to see your app:</p> <div class=\"zcat-code-panel zcat-content-code\"> <pre>npx slyte serve --port=3000</pre> </div> <p class=\"zcat-content-text\" style=\"margin-top:12px;\"> Open <strong>http://localhost:3000</strong> in your browser. sLyte will automatically detect and register all component files in the <strong>components/</strong> directory. You're ready to start using ZCAT components! </p> </div> <!-- File Reference --> <div class=\"zcat-content-section\" style=\"margin-top:16px; padding:20px; background:var(--zcat-prev-bg); border-radius:10px; border:1px solid var(--zcat-body-border);\"> <h2 class=\"zcat-content-heading\" style=\"margin-bottom:12px;\">File Reference</h2> <table style=\"width:100%; border-collapse:collapse; font-size:13px;\"> <thead> <tr style=\"border-bottom:1px solid var(--zcat-body-border); text-align:left;\"> <th style=\"padding:8px 12px; color:var(--zcat-body-text-grey); font-weight:500;\">File</th> <th style=\"padding:8px 12px; color:var(--zcat-body-text-grey); font-weight:500;\">Purpose</th> <th style=\"padding:8px 12px; color:var(--zcat-body-text-grey); font-weight:500;\">Required</th> </tr> </thead> <tbody> <tr style=\"border-bottom:1px solid var(--zcat-body-border);\"> <td style=\"padding:8px 12px;\"><code>zcat-tokens.css</code></td> <td style=\"padding:8px 12px; color:var(--zcat-body-text-secondary);\">Design tokens (colors, fonts, spacing)</td> <td style=\"padding:8px 12px; color:#19A35E; font-weight:500;\">Always</td> </tr> <tr style=\"border-bottom:1px solid var(--zcat-body-border);\"> <td style=\"padding:8px 12px;\"><code>zcat-button.*</code></td> <td style=\"padding:8px 12px; color:var(--zcat-body-text-secondary);\">Button component (HTML + JS + CSS)</td> <td style=\"padding:8px 12px; color:var(--zcat-body-text-grey);\">If using buttons</td> </tr> <tr style=\"border-bottom:1px solid var(--zcat-body-border);\"> <td style=\"padding:8px 12px;\"><code>zcat-input.*</code></td> <td style=\"padding:8px 12px; color:var(--zcat-body-text-secondary);\">Text input component (HTML + JS + CSS)</td> <td style=\"padding:8px 12px; color:var(--zcat-body-text-grey);\">If using inputs</td> </tr> <tr> <td style=\"padding:8px 12px;\"><code>zcat-dropdown.*</code></td> <td style=\"padding:8px 12px; color:var(--zcat-body-text-secondary);\">Dropdown component (HTML + JS + CSS)</td> <td style=\"padding:8px 12px; color:var(--zcat-body-text-grey);\">If using dropdowns</td> </tr> </tbody> </table> </div> </div> </div> </div> </template>";;
InstallationComp._dynamicNodes = [{"t":"a","p":[1,3,1,19,11,1,3]},{"t":"a","p":[1,3,1,19,11,5,3]},{"t":"a","p":[1,3,1,19,11,9,3,1]},{"t":"a","p":[1,3,1,19,11,9,3,3]},{"t":"a","p":[1,3,1,19,11,9,3,5]},{"t":"a","p":[1,3,1,19,11,13,3,1]},{"t":"a","p":[1,3,1,19,11,13,3,3]},{"t":"a","p":[1,3,1,19,11,13,3,5]},{"t":"a","p":[1,3,1,19,11,17,3,1]},{"t":"a","p":[1,3,1,19,11,17,3,3]},{"t":"a","p":[1,3,1,19,11,17,3,5]}];;
InstallationComp._observedAttributes = [];
export { InstallationComp };
InstallationComp.register("installation-comp", {
  hash: "InstallationComp_2",
  refHash: "C_zcat-app_app_0"
});
