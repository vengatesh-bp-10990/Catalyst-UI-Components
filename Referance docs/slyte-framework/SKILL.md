---
name: slyte-framework
description: Complete reference for the sLyte web framework by Zoho. Covers the core framework (components, data layer, routing), lyte-dom ($L) jQuery-like DOM API, 120+ UI components (lyte-* custom elements), and the lyte-cli build tool. Use when working with sLyte, lyte-dom, $L selectors, lyte-ui-component, lyte-* HTML elements, or any Zoho sLyte application code.
---

# sLyte Framework Reference

sLyte is a lightweight, fast, and memory-efficient client framework by Zoho for building web applications. It focuses on three core layers: **router**, **component**, and **data**.

## Key Concepts

- **Selector**: `$L()` — jQuery-like DOM selector (lyte-dom)
- **Components**: ES class-based with `data()`, `static methods()`, `static actions()`, and template yields
- **Properties**: UI component props use `lt-prop-*` prefix in HTML, camelCase in JS via `.ltProp()`
- **Yields**: `<template is="registerYield" yield-name="...">` for composable component slots
- **Data layer**: Store-based state management with adapters and serializers

## Reference Files — Load On Demand

Read only the reference file relevant to the current task. Use `grep` or `rg` to search within large files for specific API names.

### Core Framework
- **[core-framework.md](references/core-framework.md)** — Components, data layer, routing, services, API reference
  - Read when: working with sLyte component lifecycle, data stores, routes, mixins, or the core API

### DOM API ($L)
- **[dom-api.md](references/dom-api.md)** — Complete lyte-dom reference (selectors, events, traversal, manipulation, AJAX, utilities)
  - Read when: using `$L()` selectors, DOM manipulation, event binding, AJAX calls, or any `$L.*` utility

### UI Components (split into 4 groups)
- **[ui-form-inputs.md](references/ui-form-inputs.md)** — Form & input components
  - Includes: input, checkbox, radiobutton, dropdown, combobox, autocomplete, slider, datepicker, calendar, colorpicker, fileupload, tags, rating, signature, etc.
  - Read when: working with form elements, user inputs, date/time pickers, or selection controls

- **[ui-overlays-navigation.md](references/ui-overlays-navigation.md)** — Overlays, navigation & layout components
  - Includes: modal, popover, alert, tooltip, drawer, menu, nav, tabs, breadcrumb, accordion, tree, layout, splitter, carousel, etc.
  - Read when: working with modals, popups, navigation menus, page layouts, or expandable panels

- **[ui-data-display.md](references/ui-data-display.md)** — Data display & media components
  - Includes: table, listview, kanbanview, audio, video, badge, loader, progressbar, chart, QR, editor, etc.
  - Read when: displaying data in tables/lists, working with media players, charts, or rich text editors

- **[ui-utilities-theming.md](references/ui-utilities-theming.md)** — Utilities, plugins & theming
  - Includes: button, draggable, sortable, animate, scrollbar, shortcut, focusstack, themes, i18n, etc.
  - Read when: working with drag-and-drop, keyboard shortcuts, theming, animations, or general UI utilities

### CLI
- **[cli.md](references/cli.md)** — lyte-cli build tool reference
  - Read when: working with build configuration, CLI commands, webpack config, i18n setup, or deployment

## Quick Search Patterns

To find specific API docs in the reference files, use grep:

```bash
# Find a specific UI component
rg -i "## modal" references/ui-overlays-navigation.md

# Find a DOM method
rg "### click" references/dom-api.md

# Find a component lifecycle hook
rg -i "didConnect\|willConnect\|didDestroy" references/core-framework.md

# Find any topic across all references
rg -i "dropdown" references/
```

## Common Patterns

### Creating a Component

```javascript
import { Component } from "@slyte/component";
class MyComp extends Component {
    constructor() { super(); }
    data() { return { myProp: "value" }; }
    static methods() {
        return {
            handleClick: function() { /* ... */ }
        };
    }
    static actions() {
        return {
            doSomething: function() { /* ... */ }
        };
    }
}
export { MyComp };
```

### Using UI Components

```html
<lyte-button lt-prop-appearance="primary">
    <template is="registerYield" yield-name="text">Click Me</template>
</lyte-button>
```

### Getting/Setting Component Properties via JS

```javascript
var comp = document.querySelector('lyte-button');
var val = comp.ltProp('appearance');     // getter
comp.ltProp('appearance', 'secondary'); // setter
```

### DOM Manipulation with $L

```javascript
$L('.my-class').css('color', 'red');
$L('#myId').on('click', function() { /* ... */ });
$L.ajax({ url: '/api/data', method: 'GET' });
```
