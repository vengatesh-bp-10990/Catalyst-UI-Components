# Catalyst UI Components — ZCAT Design System

A production-ready UI component library built on the **sLyte.dev v1.0.4** framework, implementing the **ZCAT design system** with full light/dark mode support.

## Reference Sources

| Resource | URL |
|----------|-----|
| ZCAT Typography | https://zcat-component-docs.netlify.app/#base/typography |
| ZCAT Colors | https://zcat-component-docs.netlify.app/#base/colors |
| ZCAT Buttons | https://zcat-component-docs.netlify.app/#zcat/button |
| sLyte Framework v1.0.4 | https://www.slyte.dev/1.0.4/doc/introduction |
| sLyte CLI v1.1.0 | https://www.slyte.dev/1.1.0/lyte-cli/introduction |
| sLyte UI Components | https://www.slyte.dev/1.0.0/uiComponents/thingstoknow |

## CLI Commands (Scaffold)

```bash
# 1. Install sLyte CLI (internal Zoho registry)
npm install -g @slyte/cli@1.0.5 --registry http://cm-npmregistry

# 2. Verify CLI installation
lyte --v

# 3. Create a new sLyte application
lyte new catalyst-ui-components

# 4. Navigate into the project
cd catalyst-ui-components

# 5. Generate components
lyte generate component zcat-typography-comp
lyte generate component zcat-colors-comp
lyte generate component zcat-button-comp

# 6. Build the application
lyte build

# 7. Serve the application
lyte serve --port=3000
```

## Project Structure

```
Catalyst-UI-Components/
├── README.md
├── package.json
├── lyte.config.js                      # sLyte serve & build config
├── build.js                            # Production build / library output
├── app-init.js                         # sLyte entry — registers all components
├── app.js                              # Application class
├── index.html                          # Demo page (served by lyte serve)
│
├── lib/
│   └── index.js                        # ★ Library entry — other teams import this
│
├── components/
│   ├── javascript/
│   │   ├── zcat-typography-comp.js     # Typography component class
│   │   ├── zcat-colors-comp.js         # Colors component class
│   │   └── zcat-button-comp.js         # Button component class
│   ├── templates/
│   │   ├── zcat-typography-comp.html   # Typography template
│   │   ├── zcat-colors-comp.html       # Colors template
│   │   └── zcat-button-comp.html       # Button template
│   └── styles/
│       ├── zcat-typography-comp.css    # Typography styles
│       ├── zcat-colors-comp.css        # Colors styles
│       └── zcat-button-comp.css        # Button styles
│
├── theme/
│   ├── zcat-tokens.css                 # ★ All ZCAT color tokens (light + dark)
│   ├── zcat-typography.css             # ★ Typography scale definitions
│   ├── config.less                     # Less theme config
│   ├── themes/
│   │   ├── default/global/             # Light theme Less variables
│   │   └── night/global/               # Dark theme Less variables
│   └── overrides/global/               # Team-specific overrides
│
├── router/
│   └── map/map.js                      # Demo routes
│
└── styles/
    ├── app.css                         # Global reset + font imports
    └── demo.css                        # Demo page styles (not in library)
```

## Running the Demo (lyte serve)

```bash
# Install dependencies (internal Zoho registry)
npm install --registry http://cm-npmregistry

# Start the dev server
lyte serve --port=3000
# or
npm run serve

# Open in browser
# → http://localhost:3000
```

The demo page at `index.html` loads all three components as sLyte custom elements: `<zcat-typography-comp>`, `<zcat-colors-comp>`, and `<zcat-button-comp>`. It includes a theme toggle (light/dark) and tabbed navigation.

---

## Using This Library in Your Project (For Other Teams)

This is the shared ZCAT component library. All teams consume it as an npm dependency.

### Step 1 — Install

```bash
npm install catalyst-ui-components --registry http://cm-npmregistry
```

### Step 2 — Import Components (in your app-init.js)

```js
// Import ALL components at once (registers them with sLyte)
import "catalyst-ui-components";

// Or import individually
import "catalyst-ui-components/components/button";
import "catalyst-ui-components/components/typography";
import "catalyst-ui-components/components/colors";
```

### Step 3 — Load CSS Tokens (in your index.html `<head>`)

```html
<!-- REQUIRED: ZCAT design tokens (colors, surfaces, borders) -->
<link rel="stylesheet" href="node_modules/catalyst-ui-components/theme/zcat-tokens.css">

<!-- REQUIRED: Typography scale (h1–h6, body, subtitle, code, etc.) -->
<link rel="stylesheet" href="node_modules/catalyst-ui-components/theme/zcat-typography.css">

<!-- OPTIONAL: Global reset + font imports -->
<link rel="stylesheet" href="node_modules/catalyst-ui-components/styles/app.css">

<!-- Component-specific styles (loaded automatically by sLyte build, -->
<!-- but include explicitly if needed) -->
<link rel="stylesheet" href="node_modules/catalyst-ui-components/components/styles/zcat-button-comp.css">
```

### Step 4 — Use in Your sLyte Templates

**Option A: sLyte Custom Elements** (recommended)

```html
<!-- Button component with props -->
<zcat-button-comp
  lt-prop-variant="fill"
  lt-prop-color="primary"
  lt-prop-size="md"
  lt-prop-label="Submit">
</zcat-button-comp>

<!-- Typography & Colors reference components -->
<zcat-typography-comp></zcat-typography-comp>
<zcat-colors-comp></zcat-colors-comp>
```

**Option B: CSS Classes Directly** (no JS needed)

```html
<!-- Buttons -->
<button class="zcat-btn zcat-btn--fill zcat-btn--primary zcat-btn--md zcat-font-buttonMd">
  Submit
</button>
<button class="zcat-btn zcat-btn--outline zcat-btn--danger zcat-btn--sm zcat-font-buttonSm">
  Delete
</button>

<!-- Typography -->
<h1 class="zcat-h1">Page Title</h1>
<p class="zcat-body14">Body text here</p>
<span class="zcat-subtitle1">Section label</span>
<code class="zcat-code-body">const x = 42;</code>

<!-- Colors via CSS custom properties -->
<div style="color: var(--zcat-color-primary); background: var(--zcat-bg-primary-light);">
  Styled with ZCAT tokens
</div>
```

### Step 5 — Theming (Light / Dark Mode)

All ZCAT tokens respond to the `data-theme` attribute on `<html>`:

```js
// Switch to dark mode
document.documentElement.setAttribute('data-theme', 'dark');

// Switch to light mode
document.documentElement.setAttribute('data-theme', 'light');
```

No additional CSS or JS is needed — all components and token classes update automatically.

### Step 6 — Add to Your lyte.config.js

```js
// In your project's lyte.config.js
module.exports = function () {
  return {
    initialFileToLoad: "app-init.js",
    entry: {
      "app-init.js": [
        // ... your own component files ...
        // Catalyst components are imported via app-init.js, not here
      ]
    }
  };
};
```

---

## Available Exports

| Import Path | Description |
|---|---|
| `catalyst-ui-components` | All components (barrel import) |
| `catalyst-ui-components/components/button` | Button component only |
| `catalyst-ui-components/components/typography` | Typography component only |
| `catalyst-ui-components/components/colors` | Colors component only |
| `catalyst-ui-components/tokens` | `zcat-tokens.css` |
| `catalyst-ui-components/typography` | `zcat-typography.css` |
| `catalyst-ui-components/styles/button` | Button CSS only |
| `catalyst-ui-components/styles/typography` | Typography CSS only |
| `catalyst-ui-components/styles/colors` | Colors CSS only |

---

## Components

### Typography (`zcat-typography-comp`)
Renders all ZCAT type styles: Headlines (h1–h6), Subtitles, Body, Button text, Code, and Input styles. Supports Inter and Zoho Puvi font families.

### Colors (`zcat-colors-comp`)
Displays all ZCAT color tokens with swatches showing both light and dark mode values. Tokens include darks, greys, primary, danger, success, warning, and info.

### Button (`zcat-button-comp`)

| Prop | Values | Default |
|------|--------|---------|
| `lt-prop-variant` | `"fill"` \| `"outline"` \| `"text"` | `"fill"` |
| `lt-prop-size` | `"lg"` \| `"md"` \| `"sm"` \| `"xs"` | `"md"` |
| `lt-prop-color` | `"primary"` \| `"danger"` \| `"success"` | `"primary"` |
| `lt-prop-state` | `"default"` \| `"hover"` \| `"disabled"` | `"default"` |
| `lt-prop-label` | `String` | `"Button Text"` |

---

## Accessibility

- All color combinations meet WCAG AA contrast requirements
- Button components include proper `role`, `tabindex`, and `aria-disabled` attributes
- Typography scale uses semantic HTML elements (h1–h6, p, span, code)
- Focus states are visible and use ZCAT-defined colors

## Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@400;600&display=swap" rel="stylesheet">
```

Zoho Puvi is loaded from the Zoho CDN (proprietary).
