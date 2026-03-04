# ZCAT UI Component Library — Comprehensive Research Report

> **Library path:** `Referance docs/zcat-ui-component-d480568c719231fd92f001ab8efb8e4e92068914/`
> **Framework:** Slyte (Lyte-based) — `@slyte/component`, `@slyte/core`
> **Total components:** 52 templates + 9 CSS-only components = **61 total UI elements**

---

## Table of Contents

1. [CSS Architecture & Token System](#1-css-architecture--token-system)
2. [Component Inventory — Categorized](#2-component-inventory--categorized)
3. [Detailed Component Reference](#3-detailed-component-reference)
4. [CSS Directory Comparison: `css/` vs `components/styles/`](#4-css-directory-comparison)
5. [CSS-Only Components (No Templates)](#5-css-only-components-no-templates)
6. [Sub-Component Dependency Graph](#6-sub-component-dependency-graph)
7. [Build Priority & Recommendations](#7-build-priority--recommendations)

---

## 1. CSS Architecture & Token System

### 3-Tier Token Hierarchy

```
Layer 1: global-colors.css          → Primitive color palette (163 lines)
Layer 2: catalyst-light/dark-mode   → Semantic tokens (~1030/1054 lines)
Layer 3: component CSS files        → Component-specific styles
```

### Layer 1 — Primitive Colors (`global-colors.css`)

Defines raw color values under `:root` (light) and `html[data-user-color-scheme="dark"]` (dark):

| Token Group  | Light Example              | Dark Example              |
|-------------|---------------------------|--------------------------|
| Primary     | `--zcat-primary-1: #2A65F0` | `--zcat-primary-10: #458BFF` |
| Green       | `--zcat-green-1: #23A047`   | `--zcat-green-10: #2BBF55`  |
| Red         | `--zcat-red-1: #E8384F`     | `--zcat-red-10: #FF5C71`    |
| Dark        | `--zcat-dark-1: #101F3E`    | `--zcat-dark-10: #F4F7FF`   |
| Grey        | `--zcat-grey-1: #4D618A`    | `--zcat-grey-10: #B8C3DC`   |
| Orange      | `--zcat-orange-1: #F48A35`  | `--zcat-orange-10: #FFA14D` |
| White       | `--zcat-white: #FFFFFF`     | —                          |
| Gradient    | `--zcat-gradient: linear-gradient(...)` | —             |

### Layer 2 — Semantic Tokens (`catalyst-light-mode.css` / `catalyst-dark-mode.css`)

Maps primitives to component-specific semantic tokens. Pattern: `--zcat-{component}-{property}-{state}`

Examples:
```css
--zcat-btn-fill-bg-primary-default: var(--zcat-primary-1);
--zcat-btn-fill-bg-primary-hover: var(--zcat-primary-2);
--zcat-btn-fill-text-default: var(--zcat-white);
--zcat-inputField-bg-default: var(--zcat-white);
--zcat-dropdown-bg-default: var(--zcat-white);
```

### Layer 3 — Typography & Layout (`root.css`)

| Token | Value |
|-------|-------|
| `--zcat-font-family-primary` | `'Inter', sans-serif` |
| `--zcat-font-family-secondary` | `'Roboto Mono', monospace` |
| Font size tokens | `--zcat-font-10-14` through `--zcat-font-24-32` |
| Font weights | 400, 500, 600, 700 |
| Box shadows | `--zcat-shadow-light-all`, `--zcat-shadow-dark-all`, etc. |
| Button font tokens | `--zcat-btn-font-lg`, `--zcat-btn-font-default`, etc. |

### Dark Mode

- Selector: `html[data-user-color-scheme="dark"]`
- Light mode: `:root`
- Automatic/auto mode handled via profile-menu component (system preference detection)

---

## 2. Component Inventory — Categorized

### A. Form Inputs (14 components)

| # | Tag Name | Status | Description |
|---|----------|--------|-------------|
| 1 | `<zcat-input>` | **Already built** | Text/textarea/date/time/password input |
| 2 | `<zcat-dropdown>` | **Already built** | Single/multi-select dropdown |
| 3 | `<zcat-checkbox>` | **Already built** | Checkbox/switch toggle |
| 4 | `<zcat-radio>` | To build | Radio button groups |
| 5 | `<zcat-autocomplete>` | To build | Searchable autocomplete input |
| 6 | `<zcat-date-picker>` | To build | Single date picker (lyte-input date) |
| 7 | `<zcat-datepicker>` | To build | Date+time picker with popover calendar |
| 8 | `<zcat-daterangepicker>` | To build | Date range picker with timezone |
| 9 | `<zcat-dateselect>` | To build | Preset time filter dropdown + custom range |
| 10 | `<zcat-time-picker>` | To build | Simple time picker input |
| 11 | `<zcat-timepicker>` | To build | Inline time picker (basic) |
| 12 | `<zcat-timerangepicker>` | To build | Start/end time range picker |
| 13 | `<zcat-timezone>` | To build | Timezone selector dropdown |
| 14 | `<zcat-fileupload>` | To build | File upload (single/multiple, drag-drop) |

### B. Buttons & Actions (2 components)

| # | Tag Name | Status | Description |
|---|----------|--------|-------------|
| 15 | `<zcat-button>` | **Already built** | Button (fill/outline/ghost/grey, split) |
| 16 | `<zcat-link-button>` | To build | Hyperlink-styled button with routing |

### C. Data Display (9 components)

| # | Tag Name | Status | Description |
|---|----------|--------|-------------|
| 17 | `<zcat-table>` | To build | Data table with sort/select/infinite-scroll |
| 18 | `<zcat-label>` | To build | Status label (icon/dot/badge types) |
| 19 | `<zcat-label-value-pairs>` | To build | Key-value display table |
| 20 | `<zcat-chips>` | To build | Filter chip display |
| 21 | `<zcat-avatar>` | To build | User avatar (image/icon/letter) |
| 22 | `<zcat-time-line>` | To build | Vertical timeline with icons |
| 23 | `<zcat-code-snippet>` | To build | Code block with line numbers + copy |
| 24 | `<zcat-link-box>` | To build | Copyable URL display |
| 25 | `<zcat-link-field>` | To build | Copyable URL with truncation |

### D. Navigation (6 components)

| # | Tag Name | Status | Description |
|---|----------|--------|-------------|
| 26 | `<zcat-tab>` | To build | Tab bar (primary/secondary/code variants) |
| 27 | `<zcat-breadcrumb>` | To build | Breadcrumb navigation |
| 28 | `<zcat-pagination>` | To build | Page navigation (primary/secondary) |
| 29 | `<zcat-sidemenu>` | To build | Collapsible sidebar navigation |
| 30 | `<zcat-tour>` | To build | Product tour/walkthrough |
| 31 | `<zcat-profile-menu>` | To build | User profile drawer with theme selector |

### E. Feedback (4 components)

| # | Tag Name | Status | Description |
|---|----------|--------|-------------|
| 32 | `<zcat-alert>` | To build | Message box notification |
| 33 | `<zcat-attention>` | To build | Inline attention/notice banner |
| 34 | `<zcat-loader>` | To build | Skeleton/spinner/progress loader |
| 35 | `<zcat-empty-template>` | To build | Empty state placeholder |

### F. Overlays (4 components)

| # | Tag Name | Status | Description |
|---|----------|--------|-------------|
| 36 | `<zcat-modal>` | To build | Standard modal dialog |
| 37 | `<zcat-fullpage-modal>` | To build | Full-width modal overlay |
| 38 | `<zcat-popover>` | To build | Cascading popover menu |
| 39 | `<zcat-hovercard>` | To build | Hover tooltip/info card |

### G. Layout (5 components)

| # | Tag Name | Status | Description |
|---|----------|--------|-------------|
| 40 | `<zcat-body>` | To build | Page body with header/tabs layout |
| 41 | `<zcat-body-layout>` | WIP (placeholder) | Body layout wrapper (stub) |
| 42 | `<zcat-layout-header>` | To build | Top-level layout header |
| 43 | `<zcat-sub-header>` | To build | Secondary header with tabs/actions |
| 44 | `<zcat-form>` | To build | Modal-based form builder with pagination |

### H. Composite / Compound Fields (4 components)

| # | Tag Name | Status | Description |
|---|----------|--------|-------------|
| 45 | `<zcat-double-field>` | To build | Side-by-side input/dropdown combiner |
| 46 | `<zcat-keyvalue-pair>` | To build | Dynamic key-value pair editor (advanced) |
| 47 | `<zcat-keyvaluepair>` | To build | Simple key-value pair editor |
| 48 | `<zcat-cards>` | To build | Selection cards (single/multi/display) |

### I. Icons & SVG (3 components)

| # | Tag Name | Status | Description |
|---|----------|--------|-------------|
| 49 | `<zcat-icon>` | To build | Inline SVG icon library (~60+ icons) |
| 50 | `<zcat-svg>` | To build | Global SVG sprite sheet |
| 51 | `<zcat-accordion>` | To build | Expandable accordion panels |

### J. CSS-Only Components (in `css/` root, no template)

| # | CSS File | Description |
|---|----------|-------------|
| 52 | `zcat-combobox.css` | Combobox/searchable select |
| 53 | `zcat-crux-column-list.css` | CRM column list widget |
| 54 | `zcat-crux-criteria-editor.css` | CRM criteria editor |
| 55 | `zcat-menubox.css` | Context menu (lyte-menu-box) |
| 56 | `zcat-stepper.css` | Step wizard (numbered bullets) |
| 57 | `zcat-textbox.css` | Input field (alternate name for zcat-input) |
| 58 | `zcat-toaster.css` | Toast notifications |
| 59 | `zcat-tooltip.css` | Tooltip styling |
| 60 | `zcat-tree.css` | Tree view navigation |
| 61 | `zcat-ui-components.css` | **Bundled aggregator** (~15,019 lines) |

---

## 3. Detailed Component Reference

### 3.1 `<zcat-button>`

**Tag:** `zcat-button` | **Lyte primitive:** `lyte-button`

| Prop | Values |
|------|--------|
| `variant` | `fill` (default), `outline`, `ghost`, `grey` |
| `color` | `primary`, `success`, `danger` |
| `size` | `default`, `large`, `small`, `extra-small` |
| `type` | `default`, `split`, `navigation` |
| `label` | String |
| `icon` | `{position: 'left'|'right', name, class, strokeWidth}` |
| `loading` | Boolean — shows spinner |
| `disabled` | Boolean |
| `splitdisabled` | Boolean (split button) |
| `arrowdisabled` | Boolean (split button arrow) |
| `menu` | `{id, list: [{label, icon, callback}]}` — dropdown for split |
| `callback` | `{name, arguments[]}` |
| `width` | CSS width |
| `classCss` | Additional CSS class |
| `zcqa` | QA automation attribute |

**Sub-components used:** `zcat-icon`, `lyte-button`, `lyte-menu`

**States:**  default, hover, click, disabled, loading

**Semantic tokens:**
- Fill: `--zcat-btn-fill-bg-{color}-{state}`, `--zcat-btn-fill-text-{state}`, `--zcat-btn-fill-icon-{state}`
- Outline: `--zcat-btn-outline-bg-{color}-{state}`, `--zcat-btn-outline-border-{color}-{state}`
- Ghost: `--zcat-btn-ghost-bg-{state}`, `--zcat-btn-ghost-text-{color}-{state}`
- Grey: `--zcat-btn-grey-bg-{state}`, `--zcat-btn-grey-text-{state}`
- Split: `--zcat-btn-fill-split-line`
- Navigation: `--zcat-btn-nav-{bg|text|icon|border}-{state}`

---

### 3.2 `<zcat-input>`

**Tag:** `zcat-input` | **Lyte primitive:** `lyte-input`

| Prop | Values |
|------|--------|
| `type` | `text`, `textarea`, `date`, `time`, `password` |
| `size` | `default`, `small` |
| `key` | Form data binding key |
| `placeholder` | String |
| `disabled` | Boolean |
| `readonly` | Boolean |
| `maxLength` | Number |
| `closeIcon` | Boolean — clear button |
| `iconLeft` / `iconRight` | `{name, class, callback}` |
| `infoIcon` | `{id, value, yield, placement, width}` |
| `loading` | Boolean |
| `errorMessage` | String |
| `label` | String |
| `isOptional` | Boolean — shows "(Optional)" |
| `label_opt` | Boolean |

**Sub-components:** `lyte-input`, `zcat-icon`, `zcat-hovercard`

**Semantic tokens:**
- `--zcat-inputField-bg-{default|hover|focus|disabled}`
- `--zcat-inputField-border-{default|hover|focus|error|disabled}`
- `--zcat-inputField-text-{default|placeholder|disabled|error}`
- `--zcat-inputField-icon-{default|label}`

---

### 3.3 `<zcat-dropdown>`

**Tag:** `zcat-dropdown` | **Lyte primitives:** `lyte-dropdown`, `lyte-multi-dropdown`

| Prop | Values |
|------|--------|
| `variant` | `default`, `ghost`, `secondary` |
| `dropdown_type` | `default`, `checkbox` (multi-select) |
| `size` | default, small |
| `options` | `[{value, name, icon_name, icon_class, disabled}]` |
| `key` | Form data binding key |
| `placeholder` | String |
| `disabled` | Boolean |
| `isSearchable` | Boolean |
| `createNewBtn` | Boolean — shows "Create New" footer |
| `position` | `up` / `down` |
| `freeze` | Boolean |
| `maxCount` | Number — max multi-select items |
| `checkboxChips` | Boolean — show chips for multi-select |
| `hover` | Boolean — open on hover |
| `label` | String |
| `isOptional` | Boolean |
| `infoIcon` | Object |
| `errorMessage` | String |

**Sub-components:** `lyte-dropdown`, `lyte-multi-dropdown`, `lyte-search`, `zcat-icon`, `zcat-hovercard`

**Semantic tokens:**
- `--zcat-dropdown-bg-{default|hover|selected|disabled}`
- `--zcat-dropdown-border-{default|hover|focus|error}`
- `--zcat-dropdown-text-{default|placeholder|disabled|selected}`
- `--zcat-dropdown-icon-{default|active}`
- `--zcat-menuList-{bg|text|icon|border}-{default|hover|active|disabled}`

---

### 3.4 `<zcat-checkbox>`

**Tag:** `zcat-checkbox` | **Lyte primitive:** `lyte-checkbox`

| Prop | Values |
|------|--------|
| `variant` | `primary` (inline), `secondary` (card-style with desc) |
| `type` | `default`, `switch` |
| `options` | `[{id, label, value, disabled, desc, zcqa}]` |
| `readOnly` | Boolean |
| `key` | Form data binding key |

**Callbacks:** `onChange`, `onBeforeChecked`, `onBeforeUnchecked`, `onChecked`, `onUnchecked`

**Semantic tokens:**
- `--zcat-checkbox-bg-{default|checked|disabled}`
- `--zcat-checkbox-border-{default|hover|checked|disabled}`
- `--zcat-checkbox-tick-{default}`
- `--zcat-toggle-{bg|circle|border}-{default|active|disabled}`

---

### 3.5 `<zcat-radio>`

**Tag:** `zcat-radio` | **Lyte primitive:** `lyte-radiobutton`

| Prop | Values |
|------|--------|
| `variant` | `primary` (inline), `secondary` (card-style with desc) |
| `options` | `[{label, value, disabled, desc}]` |
| `key` | Form data binding key |

**Callbacks:** `onBeforeChecked`, `onUnchecked`, `onChanged`

**Semantic tokens:**
- `--zcat-radio-bg-{default|checked|disabled}`
- `--zcat-radio-border-{default|hover|checked|disabled}`
- `--zcat-radio-dot-{default|checked}`

---

### 3.6 `<zcat-tab>`

**Tag:** `zcat-tab` | **Lyte primitive:** `lyte-tabs`

| Prop | Values |
|------|--------|
| `variant` | `primary`, `secondary`, `code` |
| `list` | `[{id, title: {name, badge}, icon, body: {yield}}]` |
| `position` | String |
| `align` | String |
| `height` | CSS height |
| `activeTab` | Active tab index |
| `closeIcon` | Boolean — closeable tabs |

**Features:** Badge count on titles, close icon per tab, yield-based tab bodies

**Semantic tokens:**
- `--zcat-tab-{bg|text|border|icon}-{default|hover|active|disabled}`
- `--zcat-tab-badge-{bg|text}`

---

### 3.7 `<zcat-modal>`

**Tag:** `zcat-modal` | **Lyte primitive:** `lyte-modal`

| Prop | Values |
|------|--------|
| `id` | Unique modal ID |
| `width` | CSS width |
| `header` | `{title, desc, avatar, badge, backArrow, tabs: {list, level}}` |
| `body` | Yield-based content |
| `footer` | `{left: [{button props}], right: [{button props}]}` |

**Sub-components:** `lyte-modal`, `zcat-button`, `zcat-avatar`, `zcat-label`, `lyte-tabs`

**Features:** Escape-to-close, form submission, header tabs, back arrow, avatar + badge display

**Semantic tokens:**
- `--zcat-modal-bg`, `--zcat-modal-border`, `--zcat-modal-overlay`
- Inherits header/footer from body tokens

---

### 3.8 `<zcat-table>`

**Tag:** `zcat-table` | **Lyte primitive:** `lyte-table` (infinite scroll)

| Prop | Values |
|------|--------|
| `header` | `[{label, value, avatar, table_sorting}]` |
| `body` | Data array |
| `checkbox` | Boolean — row selection |
| `moreOptions` | 3-dot menu per row |
| `field_type` | `status`, `link`, `button`, `badge`, `toggle`, `radio`, `icon_text`, `svg` |

**Features:** Column sorting, select-all checkbox, infinite scroll, row click handler, multiple cell field types

**Semantic tokens:**
- `--zcat-table-{bg|border|text}-{header|row|hover|selected|stripe}`
- `--zcat-table-checkbox-{bg|border}`

---

### 3.9 `<zcat-alert>`

**Tag:** `zcat-alert` | **Lyte primitive:** `lyte-messagebox`

| Prop | Values |
|------|--------|
| `showAlert` | Boolean binding |
| `status` | `success`, `info`, `warning`, `error` |
| `header` | String |
| `desc` | String |
| `button` | Button props |

**Config:** 3000ms duration, fadeIn animation

**Semantic tokens:**
- `--zcat-alert-bg-{success|info|warning|error}`
- `--zcat-alert-border-{success|info|warning|error}`
- `--zcat-alert-icon-{success|info|warning|error}`

---

### 3.10 `<zcat-loader>`

**Tag:** `zcat-loader`

| Prop | Values |
|------|--------|
| `loader_type` | `content` (skeleton), `spin` (spinner), `progress` (bar) |

**Semantic tokens:**
- `--zcat-loader-bg-skeleton`, `--zcat-loader-bg-shimmer`
- `--zcat-loader-spin-color`
- `--zcat-loader-progress-{bg|fill}`

---

### 3.11 `<zcat-pagination>`

**Tag:** `zcat-pagination` | **Lyte primitive:** `lyte-navigator`

| Prop | Values |
|------|--------|
| `variant` | `primary` (full with rows-per-page), `secondary` (simple total) |

**Sub-components:** `lyte-navigator`, `zcat-dropdown`

**Callbacks:** `onNext`, `onPrevious`, `onHome`, `onEnd`

---

### 3.12 `<zcat-popover>`

**Tag:** `zcat-popover` | **Lyte primitive:** `lyte-beta-popover`

| Prop | Values |
|------|--------|
| `options` | `[{value, name, icon, selected, nestedPopover, options[], disabled}]` |
| `isSearchable` | Boolean |
| `createNewBtn` | Boolean |

**Features:** Nested/cascading popovers, search filtering, icon support, disabled items

---

### 3.13 `<zcat-accordion>`

**Tag:** `zcat-accordion` | **Lyte primitive:** `lyte-accordion`

| Prop | Values |
|------|--------|
| `variant` | `primary` (expandable list), `secondary` (show/hide toggle) |
| `list` | `[{icon, title, desc, body}]` |
| `dynamic` | Boolean |
| `exclusive` | Boolean — only one open at a time |
| `nested` | Boolean |
| `initialOpen` | Index |

**Callbacks:** `onChanged`, `onOpen`, `onClose`, `onBeforeClose`, `onBeforeOpen`, `afterRender`

---

### 3.14 `<zcat-avatar>`

**Tag:** `zcat-avatar`

| Prop | Values |
|------|--------|
| `avatar_size` | `small`, `medium`, `large` |
| `avatar_img` | `no_img` (icon), `img` (illustration), `letter` (initial) |
| `disabled` | Boolean |

**Built-in SVGs:** user, men, women silhouettes

---

### 3.15 `<zcat-breadcrumb>`

**Tag:** `zcat-breadcrumb` | **Lyte primitive:** `lyte-breadcrumb`

| Prop | Values |
|------|--------|
| `options` | `[{name, order, zcqa}]` |

**Divider:** Slash (`/`). Click action: `breadcrumbClick`

---

### 3.16 `<zcat-datepicker>`

**Tag:** `zcat-datepicker` | **Lyte primitives:** `lyte-popover`, `lyte-calendar`, `lyte-time-picker`

Combined date + time picker. Format: DD/MM/YYYY, hh:mm:ss A. Footer: Reset/Close/Apply buttons.

---

### 3.17 `<zcat-date-picker>`

**Tag:** `zcat-date-picker` | **Lyte primitive:** `lyte-input` (type=date)

Simple date-only picker with format, min-date, calendar properties, scope.

---

### 3.18 `<zcat-daterangepicker>`

**Tag:** `zcat-daterangepicker` | **Lyte primitives:** `lyte-popover`, `lyte-daterangepicker`, `lyte-time-picker`

Date range + time range + timezone selector. Features: "Select Date" header, timezone dropdown with search, start/end time pickers, reset/close/apply footer.

---

### 3.19 `<zcat-dateselect>`

**Tag:** `zcat-dateselect` | **Multiple Lyte primitives**

Preset time filter dropdown (e.g., "Last 24 hours", "Last 7 days") + "Custom Range" that opens a nested daterangepicker. Supports: timezone footer, error validation, min/max date bounds.

---

### 3.20 `<zcat-fileupload>`

**Tag:** `zcat-fileupload` | **Lyte primitive:** `lyte-fileupload`

| Prop | Values |
|------|--------|
| `variant` | `primary` |
| `type` | `single`, `multiple` |
| `accept` | MIME types |
| `autoUpload` | Boolean |
| `chunkSize` | Number |
| `fileLimit` | Number |
| `multiple` | Boolean |
| `disabled` | Boolean |
| `loading` | Boolean |

**Callbacks:** `onReject`, `onAdd`, `onRemove`, `onSuccess`, `onFailure`, `onProgress`, `onDrop`, `onPaste`, `onUpload`

**Features:** Drag-and-drop, paste upload, chunk upload, file limit, error validation, loading skeleton

---

### 3.21 `<zcat-cards>`

**Tag:** `zcat-cards` | **Lyte primitives:** `lyte-radiobutton`, `lyte-checkbox`

| Prop | Values |
|------|--------|
| `type` | `default` (display), `single_sel` (radio group), `multi_sel` (checkbox group) |
| `variant` | String |
| `options` | `[{icon, yield, value, disabled, class}]` |
| `label` | String |
| `isOptional` | Boolean |
| `infoIcon` | Object |

---

### 3.22 `<zcat-label>`

**Tag:** `zcat-label`

| Prop | Values |
|------|--------|
| `type` | `icon`, `dot`, `badge` |
| `color` | `green`, `red`, `blue`, `yellow`, `pink`, `disabled` |
| `label` | String |
| `icon` | `{name, class}` |

---

### 3.23 `<zcat-hovercard>`

**Tag:** `zcat-hovercard` | **Lyte primitive:** `lyte-hovercard`

| Prop | Values |
|------|--------|
| `width` | CSS width |
| `id` | Unique ID |
| `placement` | Position string |
| `yield` | Named yield for custom content |
| `value` | Plain text content |

---

### 3.24 `<zcat-icon>`

**Tag:** `zcat-icon` | 627 lines of SVG definitions

| Prop | Values |
|------|--------|
| `name` | Icon name string (see list below) |
| `width` | Number |
| `height` | Number |
| `stroke` | CSS color |
| `strokeWidth` | Number |

**Known icons (60+):** `plus`, `minus`, `arrow-right`, `arrow-left`, `arrow-up`, `arrow-down`, `arrow-forward`, `arrow-backward`, `arrow-upward`, `arrow-downward`, `alert-triangle`, `alert-circle`, `loading-sun`, `three-dots`, `tick`, `external-link`, `rocket`, `info`, `dollar-round`, `percentage`, `close`, `search`, `question-round`, `home`, `file`, `eye-open`, `eye-close`, `upload-cloud`, `folder`, `help`, `six-dot-drag`, `refresh`, `edit`, `loading`, `notify`, and many more in remaining 427 lines.

---

### 3.25 `<zcat-svg>`

**Tag:** `zcat-svg` | 297 lines

Global SVG sprite sheet with hidden `display:none` container. Icons referenced by `#zcat-icon-{name}` via `lyte-svg` path. Contains the full set of icon paths used across all components.

---

### 3.26 `<zcat-layout-header>`

**Tag:** `zcat-layout-header`

| Prop Section | Fields |
|-------------|--------|
| `left` | `search`, `title`, `desc`, yield |
| `center.tabs` | `list[{label, value, route, dynamicParams, queryParams, zcqa}]`, `selectedTab`, `level` |
| `right.list[]` | `field_type`: `button`, `dropdown`, `three-dots-button`, `link`, yield |

**Sub-components:** `lyte-search`, `zcat-button`, `zcat-dropdown`, `zcat-link-box`, `lyte-menu`, `go-to`

---

### 3.27 `<zcat-sub-header>`

**Tag:** `zcat-sub-header`

| Prop Section | Fields |
|-------------|--------|
| `left` | `backArrow`, `title: {name, svg}`, yield |
| `right.list[]` | `field_type`: `button`, `dropdown`, `three-dots-button`, yield |
| `right.help` | Help button |
| `tabs` | `list[{route, label, value, zcqa}]`, `level`, `callback` |

---

### 3.28 `<zcat-body>`

**Tag:** `zcat-body` | 332 lines

Page body wrapper. Header section with: logo, title, back arrow, avatar, badge, info tooltip, refresh button, description, yield slots. Secondary tabs with `go-to` routing. Primary tabs with `go-to` routing. Outter/inner layout wrappers with overflow handling.

**Sub-components:** `zcat-button`, `zcat-avatar`, `zcat-label`, `zcat-icon`, `zcat-hovercard`, `zcat-popover`, `go-to`

---

### 3.29 `<zcat-form>`

**Tag:** `zcat-form` | **Lyte primitive:** `lyte-modal`

Modal-based form builder. Automatically renders field types from config:

| Field Type | Renders As |
|-----------|-----------|
| `input` / `textbox` | `zcat-input` |
| `textarea` | `zcat-input` (type=textarea) |
| `date` | `zcat-input` (type=date) |
| `password` | `zcat-input` (type=password) |
| `radio` | `zcat-radio` |
| `checkbox` | `zcat-checkbox` |
| `dropdown` | `zcat-dropdown` |
| `fileupload` | `zcat-fileupload` |
| `linkfield` | `zcat-link-field` |
| `text` | Plain text |
| `yield` | Custom yield |

**Features:** Multi-page pagination, per-page button visibility, header tabs, loading state, error state

---

### 3.30 `<zcat-fullpage-modal>`

**Tag:** `zcat-fullpage-modal` | **Lyte primitive:** `lyte-modal`

Full-screen modal. Props: `id`, `title: {name, leadingLogo}`, `close: {callback}`, `body: {yield, yield_style}`, `error`. Width: 100%.

---

### 3.31 `<zcat-sidemenu>`

**Tag:** `zcat-sidemenu` | 216 lines

Collapsible sidebar. Props: `sidebarComp.title: {icon, label}`, `sidebarComp.group[{label, value, children[{leadingIcon, label, value}]}]`, `isSidebarShrinked`, `isLoading`.

**Features:** Shrink/expand button, grouped nav items with leading icons, skeleton loader, embedded service SVGs (datastore, nosql, filestore, stratus, authentication, apiGateway, connections, cron, eventListener).

---

### 3.32 `<zcat-profile-menu>`

**Tag:** `zcat-profile-menu` | **Lyte primitive:** `lyte-drawer`

User profile drawer. Sections:
1. **Profile:** Avatar, name, email, userId, org dropdown, "Manage Account" link
2. **Appearance:** Light/Dark/Auto theme cards (`zcat-cards`)
3. **Help:** Documentation + Contact Support link-buttons
4. **Sign Out:** Button

Embedded SVGs: user, men, lightMode, darkMode, autoMode, logout, docs, contact, profile-icon.

---

### 3.33 `<zcat-attention>`

**Tag:** `zcat-attention`

| Prop | Values |
|------|--------|
| `type` | String (maps to CSS class `zcat-atten-{type}`) |
| `icon_name` | SVG icon ID |
| `icon_class` | CSS class |
| `name` | Header text |
| `desc` | Description text |

Inline notice/alert banner with icon + text. Description is optional; header becomes semibold when desc present.

---

### 3.34 `<zcat-autocomplete>`

**Tag:** `zcat-autocomplete` | **Lyte primitive:** `lyte-autocomplete`

| Prop | Values |
|------|--------|
| `label` | String |
| `label_opt` | Boolean — "(Optional)" |
| `label_icon` | Boolean — info icon |
| `tooltip_details` | `{id, value, width, placement, yield}` |
| `size` | Size class |
| `placeholder` | String |
| `key` | Form data binding |
| `list` | `[{index, name, keywords, short, icon_name, icon_class}]` |
| `menuList_icon` | Boolean — show icons in list |
| `createNewBtn` | Boolean — "Create New" footer |
| `errorMessage` | String |

---

### 3.35 `<zcat-chips>`

**Tag:** `zcat-chips`

Simple chip display. Props: `zcatProp.filtered: {key, value}`. Shows a filter chip with "key:value" format.

---

### 3.36 `<zcat-link-button>`

**Tag:** `zcat-link-button`

| Prop | Values |
|------|--------|
| `label` | String |
| `route` | Route path (internal) or URL (external) |
| `size` | `large`, `default`, `small`, `extra-small` |
| `icon` | `{position, name}` |
| `disabled` | Boolean |

Uses `go-to` for internal routing. Auto-detects external URLs → opens `<a target="_blank">`.

---

### 3.37 `<zcat-link-box>`

**Tag:** `zcat-link-box`

| Prop | Values |
|------|--------|
| `label_type` | `top`, `left`, `label_inside` |
| `size` | `small`, `default` |
| `value` | Copyable text/URL |
| `label` | Label text |

Copy-to-clipboard with tooltip feedback.

---

### 3.38 `<zcat-link-field>`

**Tag:** `zcat-link-field`

| Prop | Values |
|------|--------|
| `label` | String |
| `url` | URL to display + copy |
| `class` | CSS class |

Uses `lyte-text` with tooltip for text truncation. Copy icon.

---

### 3.39 `<zcat-double-field>`

**Tag:** `zcat-double-field`

| Prop | Values |
|------|--------|
| `label` | String |
| `isOptional` | Boolean |
| `infoIcon` | Object |
| `errorMessage` | String |
| `fieldList` | `[{type: 'textbox'\|'dropdown', fieldObj}]` |

Combines multiple inputs/dropdowns side-by-side with shared label/error. Auto-assigns border radius classes for first/mid/last fields.

---

### 3.40 `<zcat-keyvalue-pair>`

**Tag:** `zcat-keyvalue-pair` (advanced version)

| Prop | Values |
|------|--------|
| `label` | String |
| `isOptional` | Boolean |
| `infoIcon` | Object |
| `variant` | `manual` (add/remove rows), `auto` (drag-reorder) |
| `fieldList per row` | `[{type: 'textbox'\|'dropdown'\|'autocomplete', fieldObj}]` |

Features: Add/remove rows with plus/minus buttons, drag-reorder (six-dot-drag icon), per-field error messages. Uses `zcat-input`, `zcat-dropdown`, `zcat-autocomplete`.

---

### 3.41 `<zcat-keyvaluepair>`

**Tag:** `zcat-keyvaluepair` (simple version)

Simple key-value pair editor with fixed textbox-textbox layout. Auto-adds new empty row at end. Duplicate key detection. Enter key adds new row. Remove button hidden on last row.

---

### 3.42 `<zcat-label-value-pairs>`

**Tag:** `zcat-label-value-pairs`

Display-only key:value table. Data: `record` (2D array of rows containing `{key, value, yield, class}`). Uses `lyte-text` with tooltip. Supports yield for custom value rendering.

---

### 3.43 `<zcat-empty-template>`

**Tag:** `zcat-empty-template`

| Prop | Values |
|------|--------|
| `style` | Inline CSS |
| `svg` | `{id, class}` — illustration |
| `title` | Heading |
| `desc` | Description (supports HTML via unescape) |
| `button` | Single button props |
| `list` | Array of button props |

Empty state display with SVG illustration, text, and action button(s).

---

### 3.44 `<zcat-code-snippet>`

**Tag:** `zcat-code-snippet` | **Lyte primitive:** `lyte-code-snippet`

| Prop | Values |
|------|--------|
| `code` | Code string |
| `type` | Language type |

Features: Line numbers, copy button with tooltip. `copyToSnippet` callback.

---

### 3.45 `<zcat-time-line>`

**Tag:** `zcat-time-line`

| Prop | Values |
|------|--------|
| `list` | `[{icon_name, head, desc}]` |

Vertical timeline. Items have either dot or icon marker. Embedded SVGs: edit, loading, refresh, notify. CSS: `timeline`, `timeline-item`, `timeline-dot`, `timeline-icon`, `timeline-content`.

---

### 3.46 `<zcat-tour>`

**Tag:** `zcat-tour` | **Lyte primitive:** `lyte-tour`, `lyte-tour-hint`, `lyte-tour-step`

| Prop | Values |
|------|--------|
| `list` | `[{head, desc}]` per step |
| `activeStepIndex` | Current step |
| `endTourBtnDetails` | End button config |
| `nextTourBtnDetails` | Next button config |

Features: Carousel indicators (click-to-navigate), per-step position/arrow-position/selector, End Tour + Next buttons.

---

### 3.47–3.49 Time Components

| Component | Description |
|-----------|------------|
| `<zcat-time-picker>` | Wrapped `lyte-time-picker` with label, format, interval, button |
| `<zcat-timepicker>` | Bare `lyte-time-picker` with default hh:mm:ss AM/PM config |
| `<zcat-timerangepicker>` | Start + end `lyte-time-picker` with splitter divider |

---

### 3.50 `<zcat-timezone>`

**Tag:** `zcat-timezone`

Timezone selector. Uses `zcat-dropdown` internally. Has extensive commented-out popover-based implementation with "View all time zones" expandable search. Supports timezone search, preferred/all timezone lists.

---

### 3.51 `<zcat-body-layout>`

**Tag:** `zcat-body-layout`

**Status:** WIP/placeholder — contains only `<h1>hiiiiiiii</h1>`

---

## 4. CSS Directory Comparison

### `css/` root (38 files) — PURPOSE: Production build output / standalone CSS

Contains:
- **8 core framework files:** global-colors, catalyst-light/dark-mode, root, main, helper, highlight, code-snippet
- **22 component CSS files** (subset of all components — the "original" set)
- **1 bundled file:** `zcat-ui-components.css` (15,019 lines — contains all dark/light tokens + all component styles)

### `components/styles/` (51 files) — PURPOSE: Source component CSS (per-component)

Contains all 51 per-component CSS files matching the templates exactly.

### Files in `css/` but NOT in `components/styles/`:

| File | Purpose |
|------|---------|
| `zcat-combobox.css` | Combobox styling (no template) |
| `zcat-crux-column-list.css` | CRM-specific column list (no template) |
| `zcat-crux-criteria-editor.css` | CRM-specific criteria editor (no template) |
| `zcat-menubox.css` | Context menu / menu-box (no template) |
| `zcat-stepper.css` | Step wizard with numbered bullets (no template) |
| `zcat-textbox.css` | Same as zcat-input (legacy naming, no template) |
| `zcat-toaster.css` | Toast notification styling (no template) |
| `zcat-tooltip.css` | Tooltip styling (no template) |
| `zcat-tree.css` | Tree view (no template) |
| `zcat-ui-components.css` | Aggregated bundle — all CSS in one file |

### Files in `components/styles/` but NOT in `css/`:

These are newer/additional components added after the original CSS root was established:
- `zcat-attention`, `zcat-autocomplete`, `zcat-avatar`, `zcat-body-layout`, `zcat-breadcrumb`
- `zcat-cards`, `zcat-chips`, `zcat-code-snippet`, `zcat-date-picker`, `zcat-daterangepicker`
- `zcat-double-field`, `zcat-form`, `zcat-fullpage-modal`, `zcat-hovercard`, `zcat-icon`
- `zcat-input`, `zcat-keyvalue-pair`, `zcat-keyvaluepair`, `zcat-label`, `zcat-label-value-pairs`
- `zcat-link-box`, `zcat-link-button`, `zcat-link-field`, `zcat-profile-menu`, `zcat-sidemenu`
- `zcat-sub-header`, `zcat-svg`, `zcat-time-line`, `zcat-time-picker`, `zcat-timepicker`
- `zcat-timerangepicker`, `zcat-timezone`, `zcat-tour`

---

## 5. CSS-Only Components (No Templates)

These exist only as CSS in `css/` root and style Lyte primitives directly:

### `zcat-stepper.css` (177 lines)
Step wizard. Bullet-style numbered steps with active/completed/disabled states. Uses `lyte-step`, `lyte-step-item`, `lyte-step-head`. Tokens: `--zcat-stepper-{bg|border|text}-{default|active|completed|disabled}`.

### `zcat-toaster.css` (185 lines)
Toast notifications. Styles `lyte-messagebox` with status indicator bar (left side color bar). Status types: success (green), error (red), warning (orange), info (blue). Tokens: `--zcat-toast-{bg|border|icon-line}-{default|success|error|warning|info}`.

### `zcat-tooltip.css`
Tooltip callout. Styles `.lyteTooltip` with arrow positioning (top/bottom/left/right). Tokens: `--zcat-tooltip-{bg|text-primary|border}`.

### `zcat-tree.css` (64 lines)
Tree navigation. Styles `lyte-tree` with expandable nodes, active state highlighting. Open nodes get bold font. Hover: grey background. Active: primary color text.

### `zcat-menubox.css` (53 lines)
Context/right-click menu. Styles `lyte-menu-box`, `lyte-menu-body`, `lyte-menu-item`. Tokens: `--zcat-menuList-{bg|border|icon|text}-{default|hover|active|disabled}`.

### `zcat-combobox.css` (97 lines)
Searchable combobox. Styles `lyte-combobox` with dropdown integration. Error message display. Search input within dropdown.

### `zcat-crux-column-list.css` / `zcat-crux-criteria-editor.css`
CRM/Crux-specific widgets. Not general-purpose components.

---

## 6. Sub-Component Dependency Graph

```
zcat-form
  ├── lyte-modal
  ├── zcat-button
  ├── zcat-input
  ├── zcat-dropdown
  ├── zcat-radio
  ├── zcat-checkbox
  ├── zcat-fileupload
  ├── zcat-link-field
  └── zcat-tab

zcat-body
  ├── zcat-button
  ├── zcat-avatar
  ├── zcat-label
  ├── zcat-icon
  ├── zcat-hovercard
  ├── zcat-popover
  └── go-to

zcat-profile-menu
  ├── lyte-drawer
  ├── zcat-avatar
  ├── zcat-cards
  ├── zcat-link-button
  ├── zcat-dropdown
  └── zcat-button

zcat-layout-header
  ├── lyte-search
  ├── zcat-button
  ├── zcat-dropdown
  ├── zcat-link-box
  ├── lyte-menu
  └── go-to

zcat-sub-header
  ├── zcat-button
  ├── zcat-dropdown
  ├── lyte-menu
  └── go-to

zcat-modal
  ├── lyte-modal
  ├── zcat-button
  ├── zcat-avatar
  └── zcat-label

zcat-dropdown
  ├── lyte-dropdown / lyte-multi-dropdown
  ├── lyte-search
  ├── zcat-icon
  └── zcat-hovercard

zcat-button
  ├── lyte-button
  ├── zcat-icon
  └── lyte-menu

zcat-dateselect
  ├── zcat-daterangepicker (nested)
  ├── zcat-timezone
  ├── zcat-icon
  └── lyte-popover

zcat-keyvalue-pair
  ├── zcat-input
  ├── zcat-dropdown
  ├── zcat-autocomplete
  ├── zcat-button
  └── zcat-icon
```

---

## 7. Build Priority & Recommendations

### Already Built (5 components)
1. `<zcat-button>` ✅
2. `<zcat-input>` ✅
3. `<zcat-dropdown>` ✅
4. `<zcat-checkbox>` ✅
5. Toggle (part of checkbox) ✅

### Tier 1 — Foundation (build next, heavily depended on)
1. **`zcat-icon`** — Used by nearly every component
2. **`zcat-hovercard`** — tooltip/info used across all form fields
3. **`zcat-label`** — Status display used in tables, modals, body
4. **`zcat-radio`** — Form input, used in table rows and forms
5. **`zcat-loader`** — Loading states used everywhere

### Tier 2 — Core UI Patterns
6. **`zcat-modal`** — Dialog foundation
7. **`zcat-tab`** — Navigation foundation
8. **`zcat-table`** — Data display foundation
9. **`zcat-alert`** — User feedback
10. **`zcat-popover`** — Menu/action lists
11. **`zcat-pagination`** — Table companion
12. **`zcat-avatar`** — Profile/user display

### Tier 3 — Form Extensions
13. **`zcat-autocomplete`** — Searchable input
14. **`zcat-fileupload`** — File handling
15. **`zcat-cards`** — Selection cards
16. **`zcat-double-field`** — Composite fields
17. **`zcat-keyvalue-pair`** — Key-value editor
18. **`zcat-datepicker`** / **`zcat-date-picker`** — Date selection

### Tier 4 — Layout & Navigation
19. **`zcat-layout-header`** — App header
20. **`zcat-sub-header`** — Page sub-header
21. **`zcat-body`** — Page body wrapper
22. **`zcat-sidemenu`** — Sidebar navigation
23. **`zcat-breadcrumb`** — Breadcrumb trail

### Tier 5 — Specialized Components
24. **`zcat-form`** — Auto-form builder (depends on most Tier 1-3)
25. **`zcat-profile-menu`** — User drawer
26. **`zcat-dateselect`** / **`zcat-daterangepicker`** — Complex date selection
27. **`zcat-timezone`** — Timezone selector
28. **`zcat-tour`** — Product walkthrough
29. **`zcat-fullpage-modal`** — Full-screen modal
30. All remaining components

---

*Report generated from thorough analysis of all 52 template files, 4 JS files, 38 css/ root files, and 51 component style files.*
