# ZCAT Design System — Project Skill File

> **Purpose:** This file captures every convention, pattern, file structure, and build rule for the ZCAT Design System mono-repo so any AI assistant can create, modify, or debug components without re-discovering the codebase.

---

## 1. Project Overview

| Item | Detail |
|---|---|
| **Name** | ZCAT (Zoho Catalyst) Design System v1.0 |
| **Framework** | sLyte — Zoho's lightweight reactive web framework |
| **Architecture** | Two-package mono-repo: `zcat-ui` (addon library) + `zcat-app` (docs site) |
| **Root path** | `/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/` |
| **Deployment** | Static site on Zoho Catalyst Slate — auto-deploys on `git push origin main` |
| **Live URL** | `https://uicomponent.onslate.in` |
| **Routing** | Hash-based (`/#/overview`, `/#/button`, etc.) |
| **Theme** | Light (default) + Dark mode via `[data-user-color-scheme="dark"]` on `<html>` |
| **Font** | Inter (default) / Zoho Puvi (switchable) |

---

## 2. Directory Structure

```
Catalyst-UI-Components/
├── .git/
├── .gitignore
├── Referance docs/          # DO NOT DELETE — reference materials
│   ├── Skill/SKILL.md       # ← This file
│   └── slyte-framework/     # sLyte API docs
├── zcat-ui/                 # ✦ COMPONENT LIBRARY (sLyte addon)
│   ├── package.json         # lyte-addon config
│   ├── addon.js             # Addon entry
│   ├── build/
│   │   ├── build.js         # Build hook (version: "1.0.0-RC")
│   │   └── runscript.js     # Postinstall — injects addon into consumer
│   ├── components/
│   │   ├── component.js     # Base: ComponentRegistry + Component class
│   │   ├── javascript/      # 26 component JS files (zcat-*.js)
│   │   ├── templates/       # 26 component HTML files (zcat-*.html)
│   │   └── styles/          # 26+ component CSS files (zcat-*.css)
│   ├── css/                 # Global CSS (aggregated bundles)
│   │   ├── root.css
│   │   ├── global-colors.css
│   │   ├── main.css
│   │   └── zcat-*.css       # Per-component CSS (legacy copies)
│   └── mixins/              # Shared mixins
├── zcat-app/                # ✦ DOCUMENTATION SITE (sLyte app)
│   ├── package.json         # addons: ["zcat-ui"]
│   ├── app.js / app-init.js # Bootstrap
│   ├── index.html           # Entry (has #outlet)
│   ├── lyte.config.js
│   ├── build/build.js       # App build config
│   ├── router/
│   │   ├── router.js
│   │   ├── maps/map.js      # Route map (28 routes under index)
│   │   └── routes/
│   │       ├── index.js     # Parent route with divert → overview
│   │       └── index/       # 28 child route files
│   ├── components/
│   │   ├── component.js
│   │   ├── javascript/      # 31 demo comp JS files (*-comp.js)
│   │   ├── templates/       # 31 demo comp HTML files (*-comp.html)
│   │   └── styles/
│   │       └── layout-comp.css  # MEGA CSS (~9600 lines)
│   └── dist/                # Build output (gitignored)
└── *.js, *.html, mapping.json   # ← Dist files copied to root for Slate deploy
```

---

## 3. sLyte Addon System (zcat-ui)

### 3.1 package.json — Required Fields

```json
{
  "name": "zcat-ui",
  "lyte-addon": true,
  "isV4": true,
  "addons": ["zcat-ui"],
  "peerDependencies": {
    "@slyte/core": "*",
    "@slyte/component": "*",
    "@zoho/lyte-ui-component": "*"
  },
  "scripts": {
    "postinstall": "node build/runscript.js $INIT_CWD"
  }
}
```

> **CRITICAL:** All four flags (`lyte-addon`, `isV4`, `addons`, `postinstall`) and the `build/build.js` file with `version: "1.0.0-RC"` are required for slyte to discover and build the addon. Without them, zero components render.

### 3.2 build/build.js

```js
module.exports = {
  addon: "zcat-ui",
  version: "1.0.0-RC",  // ONLY "1.0.0-BETA" or "1.0.0-RC" accepted
  processAllComponents: true,
  builder: {
    copyAppDir() {},
    routes() {},
    components(modules) { modules.includeStyle = true; },
    helpers() {},
    schemas() {},
    mixins() {}
  },
  watcher: { /* same hooks */ }
};
```

### 3.3 Component Base Class (components/component.js)

```js
import { ComponentRegistry } from "@slyte/component";

class ZcatUiComponentRegistry extends ComponentRegistry {
  constructor() { super(); }
  lookups() { return []; }
}

class Component extends ZcatUiComponentRegistry.Component {
  constructor() { super(); }
  lookups() { return [{ component: ZcatUiComponentRegistry }]; }
}

export { ZcatUiComponentRegistry, Component };
```

---

## 4. Component Authoring Patterns

### 4.1 File Triad — Every component needs 3 files

| File | Path | Purpose |
|---|---|---|
| JS | `zcat-ui/components/javascript/zcat-{name}.js` | Class with data, methods, actions, observers |
| HTML | `zcat-ui/components/templates/zcat-{name}.html` | `<template tag-name="zcat-{name}">` |
| CSS | `zcat-ui/components/styles/zcat-{name}.css` | Styles using `var(--zcat-*)` tokens |

### 4.2 Component JS Pattern

```js
import { Component } from '../component.js';
import { prop } from '@slyte/core';

class ZcatMyComponent extends Component {
  constructor() {
    super();
  }

  data() {
    return {
      self: prop('object'),           // Parent reference for callbacks
      zcatProp: prop('object'),       // ALL config goes here as one object
      // internal state props:
      internalState: prop('boolean', { default: false })
    };
  }

  // Optional lifecycle:
  // init() { }
  // didConnect() { }

  static methods() {
    return {
      myMethod() {
        let zcatProp = this.getData('zcatProp');
        this.setData('internalState', true);
      }
    };
  }

  static actions() {
    return {
      onSomeAction(event) {
        const self = this.getData('self');
        const prop = this.getData('zcatProp');
        if (prop.callback && prop.callback.name) {
          self.executeMethod(prop.callback.name, prop.callback.arguments);
        }
      }
    };
  }

  static observers() {
    return {
      propChanged: {
        type: 'method',
        method() { this._syncState(); },
        args: ['zcatProp']
      }
    };
  }
}

export { ZcatMyComponent };
```

**Key rules:**
- Import `Component` from `'../component.js'` (NOT `@slyte/component`)
- Import `prop` from `'@slyte/core'`
- ALL config via single `zcatProp` object prop — never multiple individual props
- `self` prop = parent component reference for callback execution
- Callback pattern: `self.executeMethod(zcatProp.callback.name, ...args)`
- Class name = PascalCase of tag name: `zcat-button` → `ZcatButton`
- Export as named export: `export { ZcatButton };`

### 4.3 Template HTML Pattern

```html
<template tag-name="zcat-{name}">
  <div class="zcat-{name}-wrap
    {{zcatProp.size === 'small' ? 'zcat-{name}-sm' : zcatProp.size === 'large' ? 'zcat-{name}-lg' : ''}}
    {{zcatProp.disabled ? 'zcat-{name}-disabled' : ''}}
    {{zcatProp.classCss || ''}}">

    <!-- Component content using Lyte UI primitives -->
    <lyte-{primitive}
      lt-prop-{attr}="{{zcatProp.someValue}}"
      onclick="{{action('onSomeAction')}}"
    >
      <!-- Conditional rendering -->
      <span lyte-if="{{zcatProp.showLabel}}">{{zcatProp.label}}</span>

      <!-- Icon integration -->
      <zcat-icon
        name="{{zcatProp.icon.name}}"
        width="16" height="16"
        stroke="currentColor"
        strokeWidth="1.3"
      ></zcat-icon>
    </lyte-{primitive}>
  </div>
</template>
```

**Template binding syntax:**
- Data binding: `{{zcatProp.value}}`
- Conditionals: `lyte-if="{{condition}}"`, `lyte-else`
- Switch: `lyte-switch="{{value}}"` with `lyte-case="x"`
- Loops: `lyte-for="{{items}} as item index"`
- Actions: `onclick="{{action('actionName', arg1, arg2)}}"`
- Methods: `{{method('methodName', arg1)}}`
- Lbind: `{{lbind('method', arg)}}`
- Preprocessor: `<%if(condition){%> ... <%}%>`
- Yield: `<lyte-yield yield-name="triggerName"></lyte-yield>`
- Register yield: `<template is="registerYield" yield-name="text">`

### 4.4 Component CSS Pattern

```css
/* zcat-{name} component */
.zcat-{name}-wrap {
  display: flex;
  align-items: center;
  /* Use design tokens — NEVER hardcode colors */
}

/* States via token pattern: --zcat-{component}-{property}-{variant}-{state} */
.zcat-{name}-active {
  background: var(--zcat-{name}-bg-active);
  color: var(--zcat-{name}-text-active);
}

/* Sizes */
.zcat-{name}-sm .some-child { font-size: 12px; }
.zcat-{name}-lg .some-child { font-size: 16px; }

/* Disabled */
.zcat-{name}-disabled {
  opacity: 0.5;
  pointer-events: none;
}
```

**CSS rules:**
- NEVER hardcode colors — always use `var(--zcat-*)` tokens
- Token naming: `--zcat-{component}-{property}-{variant}-{state}`
- States: `default`, `hover`, `active/click`, `focus`, `disabled`
- Sizes: `default` (no suffix), `sm`, `exsm`, `lg`
- Dark mode handled at token level — component CSS should NOT have `[data-user-color-scheme="dark"]` selectors (put those in tokens file instead)
- Use existing utility classes: `zcat-dF`, `zcat-dN`, `zcat-pR`, `zcat-pA`, `zcat-align-center`, `zcat-flex-center`, `zcat-gap-{n}`, `zcat-opacity-0`, `zcat-w100p`, etc.

---

## 5. Design Tokens (3-tier system)

Located in `zcat-ui/components/styles/zcat-tokens.css` (~1700 lines).

### Tier 1 — Primitives (raw colors)

```css
:root {
  --zcat-primary-1: #1A73E8;     /* Primary blue */
  --zcat-grey-10: #F5F5F5;
  --zcat-green-1: #0E8A16;
  --zcat-red-1: #D93026;
  --zcat-white-1: #FFFFFF;
  --zcat-dark-1: #101F3E;
  /* ...etc */
}
```

### Tier 2 — Semantic tokens (reference primitives)

```css
:root {
  /* Button tokens */
  --zcat-btn-fill-bg-primary-default: var(--zcat-primary-1);
  --zcat-btn-fill-bg-primary-hover: var(--zcat-primary-2);
  --zcat-btn-fill-text-default: var(--zcat-white-1);

  /* Input tokens */
  --zcat-inputField-border-default: var(--zcat-grey-30);
  --zcat-inputField-border-active: var(--zcat-primary-1);
  --zcat-inputField-text-label: var(--zcat-dark-10);
}

/* Dark mode overrides */
[data-user-color-scheme="dark"] {
  --zcat-btn-fill-bg-primary-default: var(--zcat-primary-10);
  --zcat-inputField-border-default: var(--zcat-grey-40);
}
```

### Tier 3 — Component CSS (consumes semantic tokens)

This is in each component's CSS file (see Section 4.4).

---

## 6. Icon System (zcat-icon)

- `<zcat-icon>` renders inline SVGs via `lyte-switch` on `name`
- Props: `name`, `width`, `height`, `stroke`, `fill`, `strokeWidth`
- Available icons: `plus`, `minus`, `arrow-right`, `arrow-left`, `arrow-up`, `arrow-down`, `arrow-forward`, `arrow-backward`, `arrow-upward`, `arrow-downward`, `search`, `edit`, `close`, `tick`, `copy`, `delete`, `eye-open`, `eye-close`, `upload-cloud`, `download-cloud`, `folder`, `user`, `star`, `refresh`, `settings`, `notification`, `link`, `filter`, `calendar`, `clock`, `phone`, `info`, `alert-circle`, `globe`, `edit-pencil`, `sort`, `drag`, `more-vertical`, `more-horizontal`, `external-link`

Usage:
```html
<zcat-icon name="edit" width="16" height="16" stroke="currentColor" strokeWidth="1.3"></zcat-icon>
```

---

## 7. Component Inventory (26 components)

| Category | Component | Tag | Status |
|---|---|---|---|
| **General** | Icon | `<zcat-icon>` | Stable |
| **General** | Avatar | `<zcat-avatar>` | New |
| **Inputs** | Button | `<zcat-button>` | Stable |
| **Inputs** | Input (Text-box) | `<zcat-input>` | Stable |
| **Inputs** | Dropdown | `<zcat-dropdown>` | Stable |
| **Inputs** | Radio | `<zcat-radio>` | Stable |
| **Inputs** | Checkbox | `<zcat-checkbox>` | Stable |
| **Inputs** | Toggle | `<zcat-toggle>` | Stable |
| **Form Ext** | Autocomplete | `<zcat-autocomplete>` | New |
| **Form Ext** | File Upload | `<zcat-fileupload>` | New |
| **Form Ext** | Datepicker | `<zcat-datepicker>` | New |
| **Form Ext** | Cards | `<zcat-cards>` | New |
| **Form Ext** | Double Field | `<zcat-double-field>` | New |
| **Form Ext** | Key-Value Pair | `<zcat-keyvalue-pair>` | New |
| **Form Ext** | Link Box | `<zcat-linkbox>` | New |
| **Form Ext** | Inline Edit | `<zcat-inlineedit>` | New |
| **Data** | Table | `<zcat-table>` | Stable |
| **Data** | Label | `<zcat-label>` | New |
| **Nav** | Tab | `<zcat-tab>` | Stable |
| **Nav** | Pagination | `<zcat-pagination>` | Stable |
| **Overlays** | Modal | `<zcat-modal>` | Stable |
| **Overlays** | Popover | `<zcat-popover>` | Stable |
| **Overlays** | Tooltip | `<zcat-tooltip>` | New |
| **Overlays** | Hovercard | `<zcat-hovercard>` | New |
| **Feedback** | Alert | `<zcat-alert>` | Stable |
| **Feedback** | Attention | `<zcat-attention>` | Stable |
| **Feedback** | Loader | `<zcat-loader>` | Stable |

---

## 8. Adding a New zcat-ui Component — Checklist

### Step 1: Create the 3 files

```
zcat-ui/components/javascript/zcat-{name}.js
zcat-ui/components/templates/zcat-{name}.html
zcat-ui/components/styles/zcat-{name}.css
```

Follow the patterns in Section 4.

### Step 2: (Optional) Add design tokens

If the component needs new semantic tokens, add them to `zcat-ui/components/styles/zcat-tokens.css` following the naming convention `--zcat-{component}-{property}-{variant}-{state}`.

### Step 3: Build and verify

```bash
cd zcat-app
rm -rf node_modules/zcat-ui
cp -R ../zcat-ui node_modules/zcat-ui
slyte build
```

> **IMPORTANT:** Symlinks do NOT work for sLyte addons. You MUST use `cp -R` to copy the real files.

The component will be included in the build only if another component or a page template references it via `<zcat-{name}>`.

---

## 9. Adding a Documentation Page — Checklist

### Step 1: Create demo component (3 files)

```
zcat-app/components/javascript/{name}-comp.js
zcat-app/components/templates/{name}-comp.html
(CSS goes in layout-comp.css or a new file in styles/)
```

### Step 2: Demo component JS pattern

```js
import { Component } from "@slyte/component";
import { prop } from "@slyte/core";

class MyComp extends Component {
  constructor() { super(); }

  data() {
    return {
      activeTab: prop('string', { default: 'slyte' }),
      pageTab: prop('string', { default: 'customize' }),
      self: prop('object', { default: this }),
      // Component-specific demo props:
      myStyles: prop('object', { default: {
        variant: 'fill',
        color: 'primary',
        size: 'default',
        label: 'Click Me',
        // ...
      }}),
      // Code snippets for display:
      slyteCodeSnippet: prop('string'),
      jsCodeSnippet: prop('string'),
      htmlCodeSnippet: prop('string'),
      cssCodeSnippet: prop('string'),
      newSlyteCodeSnippet: prop('string')
    };
  }

  init() { this.constructCodeSnippet(); }

  constructCodeSnippet() {
    let s = this.getData('myStyles');
    // Build code strings for each tab
    this.setData('slyteCodeSnippet', `<zcat-my-comp ...>`);
    // ...
  }

  static methods() { return {}; }
  static actions() { return {}; }
  static observers() {
    return {
      stylesChanged: {
        type: 'method',
        method() { this.constructCodeSnippet(); },
        args: ['myStyles', 'myStyles.variant', 'myStyles.size']
      }
    };
  }
}
export { MyComp };
```

### Step 3: Demo HTML template pattern

```html
<template tag-name="{name}-comp">
  <div class="zcat-page-wrapper">
    <!-- Page header -->
    <div class="zcat-page-header">
      <h1 class="zcat-page-title">{Component Name}</h1>
      <p class="zcat-page-desc">Description text.</p>
      <div class="zcat-page-tabs">
        <span class="zcat-page-tab {{pageTab === 'customize' ? 'active' : ''}}"
              onclick="{{action('setPageTab','customize')}}">Customize</span>
        <span class="zcat-page-tab {{pageTab === 'variants' ? 'active' : ''}}"
              onclick="{{action('setPageTab','variants')}}">All Variants</span>
      </div>
    </div>

    <!-- Customize tab -->
    <div lyte-if="{{pageTab === 'customize'}}" class="zcat-page-body">
      <div class="zcat-page-left">
        <!-- Preview -->
        <div class="zcat-preview-box">
          <div class="zcat-preview-area">
            <zcat-my-comp self="{{self}}" zcat-prop="{{myStyles}}"></zcat-my-comp>
          </div>
        </div>
        <!-- Code panel with 5 tabs -->
        <div class="zcat-code-tabs">
          <span class="zcat-code-tab {{activeTab === 'slyte' ? 'active' : ''}}"
                onclick="{{action('setTab','slyte')}}">sLyte</span>
          <!-- JS, New sLyte, HTML, CSS tabs -->
        </div>
        <div class="zcat-code-panel">
          <pre class="zcat-code-lines"><code>{{slyteCodeSnippet}}</code></pre>
        </div>
      </div>

      <!-- Customization panel (right side) -->
      <div class="zcat-page-right">
        <div class="zcat-custom-header">Customize</div>
        <div class="zcat-custom-body">
          <div class="zcat-custom-row">
            <label>Variant</label>
            <!-- Dropdown/toggle controls that modify myStyles -->
          </div>
        </div>
      </div>
    </div>

    <!-- Variants tab -->
    <div lyte-if="{{pageTab === 'variants'}}" class="zcat-page-left">
      <div class="zcat-variants-grid">
        <div class="zcat-variant-card">
          <div class="zcat-variant-card-head"><span class="zcat-variant-card-title">Variant Name</span></div>
          <div class="zcat-variant-card-preview">
            <!-- Static variant examples -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
```

### Step 4: Create route file

```
zcat-app/router/routes/index/{name}.js
```

```js
import { Route } from "@slyte/router";
import { MyComp } from "../../../components/javascript/{name}-comp";

class MyRoute extends Route {
  render() {
    return { outlet: "#page-outlet", component: MyComp }
  }
  static actions() { return {}; }
}
export { MyRoute };
```

### Step 5: Register route in map

Add to `zcat-app/router/maps/map.js` inside the `index` route:

```js
this.route("{name}", { path: '/{name}' });
```

### Step 6: Add sidebar entry in layout-comp.html

Find the appropriate category section and add:

```html
<a class="zcat-sidebar-item" href="#/{name}" data-route="{name}">
  <svg ...icon...></svg>
  <span>{Display Name}</span>
  <span class="zcat-badge-new">NEW</span>
</a>
```

Badge options: `zcat-badge-new` (green "NEW"), `zcat-badge-stable` (blue "STABLE")

---

## 10. Build & Deploy Workflow

### Local development

```bash
# 1. Build
cd zcat-app
rm -rf node_modules/zcat-ui && cp -R ../zcat-ui node_modules/zcat-ui
slyte build

# 2. Serve locally
cd dist && python3 -m http.server 3000
# Visit: http://localhost:3000
```

### Deploy to Slate (production)

```bash
# 1. Build (same as above)

# 2. Copy dist to repo root (Slate serves from root)
cd /Users/vengatesh-10990/Desktop/Catalyst-UI-Components
cp -r zcat-app/dist/. .

# 3. Commit and push (auto-deploys)
git add -A
git commit -m "description"
git push origin main
```

> Slate auto-deploys on push to main. The `index.html` and all JS/CSS/map files at the repo root are what Slate serves.

### Build version requirement

The `build.js` must use `version: "1.0.0-RC"`. Only `["1.0.0-BETA", "1.0.0-RC"]` are accepted by the slyte CLI. Any other version string causes the addon to be silently skipped.

---

## 11. Routing System

### Route map (zcat-app/router/maps/map.js)

```js
class ZcatAppMap extends RouterMap {
  static path='../routes'
  map() {
    this.route("index", { path: '/' }, () => {
      this.route("overview", { path: '/overview' });
      this.route("button", { path: '/button' });
      // ...all routes here
    });
  }
}
```

### Default route redirect (index.js)

```js
class Index extends Route {
  divert() {
    if (this.navigation.info.route === "index") {
      this.replaceWith("index.overview");
    }
  }
  render() {
    return { outlet: "#outlet", component: LayoutComp }
  }
}
```

sLyte route hooks in order: `beforeFetch` → `fetch` → `afterFetch` → `divert` → `render` → `afterRender`

- `this.replaceWith('index.routeName')` — redirect without adding to history
- `this.navigateTo('index.routeName')` — redirect with history entry
- `this.navigation.abort()` — cancel navigation

---

## 12. Layout & Sidebar Structure

The layout is defined in `zcat-app/components/templates/layout-comp.html` and `layout-comp.js`.

### Sidebar hierarchy

```
Getting Started (accordion)
  ├── Overview      → #/overview
  ├── Installation  → #/installation
  └── Usage         → #/usage

Components (accordion, count badge)
  GENERAL
    ├── Icon        → #/icon
    └── Avatar      → #/avatar
  INPUTS
    ├── Button      → #/button
    ├── Text-box    → #/input
    ├── Dropdown    → #/dropdown
    ├── Radio       → #/radio
    ├── Checkbox    → #/checkbox
    └── Toggle      → #/toggle
  FORM EXTENSIONS
    ├── Autocomplete → #/autocomplete
    ├── File Upload  → #/fileupload
    ├── Datepicker   → #/datepicker
    ├── Cards        → #/cards
    ├── Double Field → #/doublefield
    ├── Key-Value Pair → #/keyvalue
    ├── Link Box     → #/linkbox
    └── Inline Edit  → #/inlineedit
  DATA DISPLAY
    └── Table        → #/table
  NAVIGATION
    ├── Tab          → #/tab
    └── Pagination   → #/pagination
  OVERLAYS
    ├── Modal        → #/modal
    ├── Popover      → #/popover
    └── Tooltip      → #/tooltip
  FEEDBACK
    ├── Alert        → #/alert
    ├── Loader       → #/loader
    └── Attention    → #/attention
```

### Adding to sidebar

Find the category group `<div class="zcat-sidebar-group-body">` and add an `<a>` element:

```html
<a class="zcat-sidebar-item" href="#/{route}" data-route="{route}">
  <svg width="16" height="16" ...><!-- icon SVG --></svg>
  <span>{Display Name}</span>
  <span class="zcat-badge-new">NEW</span>
</a>
```

---

## 13. Lyte UI Primitives Used

ZCAT components wrap these Lyte UI primitives:

| Lyte Primitive | Used by ZCAT |
|---|---|
| `<lyte-button>` | zcat-button |
| `<lyte-input>` | zcat-input |
| `<lyte-checkbox>` | zcat-checkbox, zcat-toggle (switch type) |
| `<lyte-radiobutton>` | zcat-radio |
| `<lyte-multi-dropdown>` | zcat-dropdown |
| `<lyte-autocomplete>` | zcat-autocomplete |
| `<lyte-popover>` | zcat-popover |
| `<lyte-hovercard>` | zcat-hovercard |
| `<lyte-navigator>` | zcat-pagination |
| `<lyte-tab>` | zcat-tab |
| `<lyte-search>` | (sidebar search) |
| `<lyte-menu>` | zcat-button (dropdown menu) |
| `<lyte-text>` | zcat-input (textarea mode) |
| `lt-prop-title` / `lt-prop-tooltip-config` | Tooltip (attribute-based, on any element) |

### Lyte attribute conventions

- Props: `lt-prop-{name}="{{value}}"`
- Events: `on-{event}="{{method('handler')}}"`
- Class override: `lt-prop-class="className"`
- Yield: `<template is="registerYield" yield-name="text">`

---

## 14. zcatProp Configuration Patterns

### Button zcatProp

```js
{
  variant: 'fill',           // fill | outline | ghost | grey
  color: 'primary',          // primary | success | danger | grey
  size: 'default',           // default | small | extra-small | large
  label: 'Click Me',
  type: '',                  // '' | navigation | split
  disabled: false,
  loading: false,
  icon: { position: 'left', name: 'plus', strokeWidth: 1.3 },
  menu: { id: 'menu1', list: [{ label: 'Option', icon: {...}, callback: {...} }] },
  callback: { name: 'onButtonClick', arguments: [] },
  classCss: '',
  ltPropClassCss: '',
  width: ''
}
```

### Input zcatProp

```js
{
  type: 'text',              // text | password | number | email | textarea
  label: { text: 'Label', tooltip: '' },
  placeholder: 'Enter...',
  value: '',
  required: false,
  disabled: false,
  readonly: false,
  maxLength: null,
  size: 'default',           // default | small
  error: { show: false, message: '' },
  success: { show: false },
  icon: { position: 'left', name: 'search' },
  callback: { name: 'onInputChange', arguments: [] },
  classCss: ''
}
```

### Toggle zcatProp

```js
{
  checked: false,
  disabled: false,
  label: '',
  size: '',                  // '' | small | extra-small
  callback: { name: 'onToggle', arguments: [] },
  classCss: ''
}
```

### Label zcatProp

```js
{
  text: 'Field Label',
  required: false,
  isOptional: false,
  disabled: false,
  size: '',                  // '' | small | large
  infoIcon: { value: 'Tooltip text', placement: 'top' },
  classCss: ''
}
```

### Tooltip zcatProp

```js
{
  text: 'Tooltip content',
  position: 'top',           // top | bottom | left | right
  showDelay: null,
  hideDelay: null,
  callout: true,
  classCss: ''
}
```

---

## 15. CSS Architecture Details

### Global utility classes (from zcat-utilities.css)

| Class | Effect |
|---|---|
| `zcat-dF` | `display: flex` |
| `zcat-dIF` | `display: inline-flex` |
| `zcat-dN` | `display: none` |
| `zcat-pR` | `position: relative` |
| `zcat-pA` | `position: absolute` |
| `zcat-pF` | `position: fixed` |
| `zcat-align-center` | `align-items: center` |
| `zcat-flex-center` | `display: flex; align-items: center; justify-content: center` |
| `zcat-gap-{n}` | `gap: {n}px` (2, 4, 6, 8, 10, 12, 16, 20) |
| `zcat-opacity-0` | `opacity: 0` |
| `zcat-w100p` | `width: 100%` |
| `zcat-h100p` | `height: 100%` |
| `zcat-w{n}` | `width: {n}px` (8, 10, 12, 14, 16, 20, 24, 32, 40) |
| `zcat-h{n}` | `height: {n}px` |
| `zcat-mb-{n}` | `margin-bottom: {n}px` |
| `zcat-text-{n}` | `font-size: {n}px` |
| `zcat-cP` | `cursor: pointer` |
| `zcat-color-dark1` | `color: var(--zcat-dark-1)` |

### Font tokens

```css
--zcat-font-family-primary: 'Inter', sans-serif;
--zcat-font-12-16: 12px/16px;
--zcat-font-13-18: 13px/18px;
--zcat-font-14-20: 14px/20px;
--zcat-button-font-default: 13px/18px;
--zcat-button-font-sm: 12px/16px;
--zcat-button-font-exsm: 11px/14px;
--zcat-button-font-lg: 15px/22px;
--zcat-button-font-weight: 500;
--zcat-input-label-font: 12px/16px;
--zcat-input-label-font-weight: 600;
```

---

## 16. Troubleshooting & Known Issues

| Problem | Cause | Solution |
|---|---|---|
| No components render | Missing addon infrastructure | Check: `lyte-addon`, `isV4`, `addons` in package.json + `build/build.js` with version `"1.0.0-RC"` |
| Component not in build | Not referenced by any page | Add `<zcat-{name}>` usage in a template that IS referenced |
| Symlink doesn't work | Slyte copies, not follows links | Use `cp -R ../zcat-ui node_modules/zcat-ui` |
| Styles not loading | `includeStyle` not set | In `build/build.js`, ensure `components(m) { m.includeStyle = true; }` |
| Blank overview page | No default route redirect | Add `divert()` hook to index.js with `this.replaceWith("index.overview")` |
| Tooltip not showing | Requires lyte-tooltip styles | Ensure `.lyteTooltip` CSS is in the global stylesheet |
| `self.executeMethod` fails | `self` prop not passed | Consumer must pass `self="{{self}}"` when using the component |

---

## 17. Git & .gitignore

```gitignore
# Dependencies
node_modules/

# Build output (inside app folders — root dist is deployment)
zcat-app/dist/
build/.temp_cache/
build/__cliCompiledFile/
build/log.txt

# OS files
.DS_Store
Thumbs.db

# Editor
.idea/
*.swp
*.swo
```

> Root-level `*.js`, `*.html`, `mapping.json` etc. are the deployed dist — they ARE committed.

---

## 18. Quick Reference — Component Sizes

| Size value | Button height | Input height | Icon size | Border radius |
|---|---|---|---|---|
| `large` | 50px | — | 20px | 6px |
| `default` | 36px | 36px | 16px | 6px |
| `small` | 28px | 28px | 14px | 6px |
| `extra-small` | 24px | — | 12px | 4px |

---

## 19. Quick Reference — Button Variants × Colors

| Variant | Colors | Appearance |
|---|---|---|
| `fill` | `primary`, `success`, `danger` | Solid background, white text |
| `outline` | `primary`, `success`, `danger` | Transparent bg, colored border + text |
| `ghost` | `primary`, `success`, `danger`, `grey` | Transparent bg, colored text, no border |
| `grey` | `grey` | Grey bg (secondary appearance) |

---

## 20. End-to-End: Creating Component "zcat-stepper" Example

### 1. Create zcat-ui files

**zcat-ui/components/javascript/zcat-stepper.js:**
```js
import { Component } from '../component.js';
import { prop } from '@slyte/core';

class ZcatStepper extends Component {
  constructor() { super(); }
  data() {
    return {
      self: prop('object'),
      zcatProp: prop('object'),
      currentStep: prop('number', { default: 0 })
    };
  }
  init() {
    let zcatProp = this.getData('zcatProp');
    if (zcatProp && zcatProp.activeStep != null) {
      this.setData('currentStep', zcatProp.activeStep);
    }
  }
  static methods() { return {}; }
  static actions() {
    return {
      onStepClick(index) {
        let zcatProp = this.getData('zcatProp');
        if (zcatProp && zcatProp.disabled) return;
        this.setData('currentStep', index);
        let self = this.getData('self');
        if (self && zcatProp.callback && zcatProp.callback.name) {
          self.executeMethod(zcatProp.callback.name, index, zcatProp);
        }
      }
    };
  }
  static observers() { return {}; }
}
export { ZcatStepper };
```

**zcat-ui/components/templates/zcat-stepper.html:**
```html
<template tag-name="zcat-stepper">
  <div class="zcat-stepper-wrap {{zcatProp.classCss || ''}} {{zcatProp.disabled ? 'zcat-stepper-disabled' : ''}}">
    <div lyte-for="{{zcatProp.steps}} as step index" class="zcat-stepper-item {{index <= currentStep ? 'zcat-stepper-active' : ''}}"
         onclick="{{action('onStepClick', index)}}">
      <div class="zcat-stepper-circle">{{index + 1}}</div>
      <span class="zcat-stepper-label">{{step.label}}</span>
    </div>
  </div>
</template>
```

**zcat-ui/components/styles/zcat-stepper.css:**
```css
.zcat-stepper-wrap {
  display: flex;
  align-items: center;
  gap: 16px;
}
.zcat-stepper-item {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
.zcat-stepper-circle {
  width: 28px; height: 28px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: var(--zcat-stepper-bg-default, var(--zcat-grey-10));
  color: var(--zcat-stepper-text-default, var(--zcat-dark-1));
  font: 500 12px/16px var(--zcat-font-family-primary);
}
.zcat-stepper-active .zcat-stepper-circle {
  background: var(--zcat-stepper-bg-active, var(--zcat-primary-1));
  color: var(--zcat-stepper-text-active, var(--zcat-white-1));
}
.zcat-stepper-label {
  font: 400 13px/18px var(--zcat-font-family-primary);
  color: var(--zcat-stepper-label-default, var(--zcat-dark-10));
}
.zcat-stepper-disabled {
  opacity: 0.5;
  pointer-events: none;
}
```

### 2. Create demo page

**zcat-app/components/javascript/stepper-comp.js** — Follow Section 9.2 pattern
**zcat-app/components/templates/stepper-comp.html** — Follow Section 9.3 pattern

### 3. Create route

**zcat-app/router/routes/index/stepper.js:**
```js
import { Route } from "@slyte/router";
import { StepperComp } from "../../../components/javascript/stepper-comp";
class Stepper extends Route {
  render() { return { outlet: "#page-outlet", component: StepperComp } }
  static actions() { return {}; }
}
export { Stepper };
```

### 4. Register route in map.js

```js
this.route("stepper", { path: '/stepper' });
```

### 5. Add sidebar entry in layout-comp.html

### 6. Build & deploy

```bash
cd zcat-app && rm -rf node_modules/zcat-ui && cp -R ../zcat-ui node_modules/zcat-ui && slyte build
```

---

*This skill file was generated from the Catalyst-UI-Components codebase as of March 2026.*
