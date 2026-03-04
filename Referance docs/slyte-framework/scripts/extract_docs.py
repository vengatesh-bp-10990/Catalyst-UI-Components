#!/usr/bin/env python3
"""
Extracts slyte.json documentation into domain-specific reference markdown files.
Splits UI components into logical groups for manageable file sizes.
"""

import json
import re
import sys
from pathlib import Path
from collections import defaultdict

UI_GROUPS = {
    'form-inputs': {
        'title': 'Form & Input Components',
        'components': [
            'input', 'number', 'text', 'checkbox', 'checkboxgroup',
            'radiobutton', 'radiobutton-group', 'dropdown', 'Dropdown',
            'multidropdown', 'combobox', 'autocomplete', 'search',
            'tags', 'fileupload', 'colorpicker', 'colorbox', 'slider',
            'multislider', 'counter', 'calculator', 'mentionsinput',
            'listbox', 'selector', 'datetimeinput', 'dateselect',
            'datemultiselect', 'daterangepicker', 'calendar', 'Calendar',
            'calender', 'clock', 'rating', 'signature',
        ],
    },
    'overlays-navigation': {
        'title': 'Overlays, Navigation & Layout Components',
        'components': [
            'modal', 'popover', 'alert', 'messagebox', 'banner',
            'tooltip', 'hovercard', 'drawer', 'menu', 'nav',
            'tabs', 'breadcrumb', 'accordion', 'step', 'tree',
            'layout', 'splitter', 'gridstack', 'carousel', 'wormhole',
            'navigator', 'avatarnavigator', 'tour',
        ],
    },
    'data-display': {
        'title': 'Data Display & Media Components',
        'components': [
            'table', 'expresstable', 'listview', 'kanbanview',
            'audio', 'video', 'voicenote', 'cropper', 'emoji',
            'codesnippet', 'texteditor', 'editorpanel', 'lyte-editor',
            'notes', 'badge', 'loader', 'progressbar', 'qr',
            'slytechart', 'watermark', 'screengrab', 'svg',
            'connect', 'connection', 'connectshape',
        ],
    },
    'utilities-theming': {
        'title': 'Utilities, Plugins & Theming',
        'components': [
            'button', 'button-group', 'caret', 'animate', 'draggable',
            'droppable', 'sortable', 'scrollbar', 'scrollspy', 'scrollto',
            'sticky', 'infinitescroll', 'lazyload', 'lazyrender',
            'resize', 'fullscreen', 'focusstack', 'trapfocus',
            'shortcut', 'keynavigator', 'keyboardnavigator', 'ariakeydown',
            'tablenavigator', 'landmark', 'readingmask', 'listselection',
            'find', 'searchplugin', 'moment', 'jwalk', 'utilyte',
            'requestqueue',
            'themes', 'basictheme', 'compiletheme', 'multiplethemes',
            'themeinguicomponents', 'stylesandvariables',
            'internationalization', 'thingstoknow', 'workingwithuicomponents',
            'popularcallbacks', 'preferinglyteuicomponents', 'forslyteapp',
            'introduction', 'plugins',
        ],
    },
}


def extract_topic_name(url):
    match = re.search(r'zohocorpin\.com/(.*)', url)
    return match.group(1) if match else url


def classify_entry(url):
    path = extract_topic_name(url)
    if path.startswith('1.0.0/uiComponents'):
        return 'ui-components'
    elif path.startswith('1.0/dom'):
        return 'dom-api'
    elif path.startswith('1.0.4/doc'):
        return 'core-framework'
    elif path.startswith('1.1.0/lyte-cli'):
        return 'cli'
    return 'other'


def get_component_name(url, domain):
    path = extract_topic_name(url)
    prefix_map = {
        'ui-components': '1.0.0/uiComponents/',
        'dom-api': '1.0/dom/',
        'core-framework': '1.0.4/doc/',
        'cli': '1.1.0/lyte-cli/',
    }
    rest = path.replace(prefix_map.get(domain, ''), '')
    parts = rest.split('/')
    return parts[0] if parts else rest


def get_sub_page(url, domain):
    path = extract_topic_name(url)
    prefix_map = {
        'ui-components': '1.0.0/uiComponents/',
        'dom-api': '1.0/dom/',
        'core-framework': '1.0.4/doc/',
        'cli': '1.1.0/lyte-cli/',
    }
    rest = path.replace(prefix_map.get(domain, ''), '')
    parts = rest.split('/')
    return parts[-1] if len(parts) > 1 else 'main'


def clean_content(content):
    footer = "sLyte is a light weight, fast and memory efficient client framework"
    idx = content.find(footer)
    if idx > 0:
        content = content[:idx].rstrip()
    return content


def write_ui_group(group_key, group_info, all_entries, output_dir):
    """Write a single UI component group file."""
    target_comps = set(group_info['components'])
    components = defaultdict(list)

    for url, entry in sorted(all_entries, key=lambda x: x[1].get('order', 999)):
        comp = get_component_name(url, 'ui-components')
        if comp in target_comps:
            sub = get_sub_page(url, 'ui-components')
            components[comp].append((sub, url, entry))

    lines = [f"# sLyte {group_info['title']}\n"]
    lines.append("## Table of Contents\n")

    comp_names = sorted(components.keys(), key=str.lower)
    for name in comp_names:
        lines.append(f"- [{name}](#{name})")
    lines.append("")

    for name in comp_names:
        entries_list = components[name]
        lines.append(f"## {name}\n")
        for sub, url, entry in entries_list:
            content = clean_content(entry['content'])
            if sub != 'main':
                lines.append(f"### {name} - {sub}\n")
            lines.append(f"{content}\n")
        lines.append("---\n")

    filename = f'ui-{group_key}.md'
    output = Path(output_dir) / filename
    output.write_text('\n'.join(lines))
    print(f"  Wrote {filename} ({len(comp_names)} components, {len(lines)} lines)")
    return comp_names


def write_dom_api(entries, output_dir):
    categories_order = [
        'intro', 'Selectors', 'Attributes', 'CSS', 'Dimensions',
        'Events', 'Forms', 'Manipulation', 'Traverse', 'Offset',
        'Data', 'Miscellaneous', 'Utilities', 'API'
    ]

    category_entries = defaultdict(list)
    individual_apis = []

    for url, entry in sorted(entries, key=lambda x: x[1].get('order', 999)):
        comp = get_component_name(url, 'dom-api')
        if comp in categories_order:
            category_entries[comp].append((url, entry))
        else:
            individual_apis.append((comp, url, entry))

    lines = ["# sLyte DOM API Reference ($L)\n"]
    lines.append("Complete reference for lyte-dom, a lightweight jQuery-like DOM manipulation library.\n")
    lines.append("Use `$L()` as the selector function (equivalent to jQuery's `$()`).\n")
    lines.append("## Table of Contents\n")
    lines.append("- [Category Overviews](#category-overviews)")
    lines.append("- [Individual API Methods](#individual-api-methods)\n")

    lines.append("## Category Overviews\n")
    for cat in categories_order:
        if cat in category_entries:
            for url, entry in category_entries[cat]:
                content = clean_content(entry['content'])
                sub = get_sub_page(url, 'dom-api')
                if sub != 'main' and sub != cat:
                    lines.append(f"### {cat} - {sub}\n")
                else:
                    lines.append(f"### {cat}\n")
                lines.append(f"{content}\n")
                lines.append("---\n")

    lines.append("## Individual API Methods\n")
    for comp, url, entry in individual_apis:
        content = clean_content(entry['content'])
        lines.append(f"### {comp}\n")
        lines.append(f"{content}\n")
        lines.append("---\n")

    output = Path(output_dir) / 'dom-api.md'
    output.write_text('\n'.join(lines))
    print(f"  Wrote dom-api.md ({len(individual_apis)} API methods, {len(lines)} lines)")


def write_core_framework(entries, output_dir):
    sections = defaultdict(list)
    for url, entry in sorted(entries, key=lambda x: x[1].get('order', 999)):
        comp = get_component_name(url, 'core-framework')
        sections[comp].append((url, entry))

    section_order = ['introduction', 'getting-started', 'components', 'data', 'route', 'api', 'services', 'globals']

    lines = ["# sLyte Core Framework Reference\n"]
    lines.append("Complete reference for sLyte's core framework: components, data layer, routing, and APIs.\n")
    lines.append("## Table of Contents\n")
    for s in section_order:
        if s in sections:
            lines.append(f"- [{s}](#{s})")
    lines.append("")

    for s in section_order:
        if s not in sections:
            continue
        lines.append(f"## {s}\n")
        for url, entry in sections[s]:
            content = clean_content(entry['content'])
            sub = get_sub_page(url, 'core-framework')
            if sub != 'main' and sub != s:
                lines.append(f"### {s} - {sub}\n")
            lines.append(f"{content}\n")
            lines.append("---\n")

    output = Path(output_dir) / 'core-framework.md'
    output.write_text('\n'.join(lines))
    print(f"  Wrote core-framework.md ({len(sections)} sections, {len(lines)} lines)")


def write_cli(entries, output_dir):
    lines = ["# sLyte CLI (lyte-cli) Reference\n"]
    lines.append("Complete reference for the sLyte build tool and CLI commands.\n")
    lines.append("## Table of Contents\n")

    sorted_entries = sorted(entries, key=lambda x: x[1].get('order', 999))
    for url, entry in sorted_entries:
        comp = get_component_name(url, 'cli')
        lines.append(f"- [{comp}](#{comp})")
    lines.append("")

    for url, entry in sorted_entries:
        comp = get_component_name(url, 'cli')
        content = clean_content(entry['content'])
        lines.append(f"## {comp}\n")
        lines.append(f"{content}\n")
        lines.append("---\n")

    output = Path(output_dir) / 'cli.md'
    output.write_text('\n'.join(lines))
    print(f"  Wrote cli.md ({len(sorted_entries)} topics, {len(lines)} lines)")


def main():
    if len(sys.argv) < 3:
        print("Usage: extract_docs.py <slyte.json> <output-references-dir>")
        sys.exit(1)

    json_path = sys.argv[1]
    output_dir = sys.argv[2]
    Path(output_dir).mkdir(parents=True, exist_ok=True)

    with open(json_path) as f:
        data = json.load(f)

    print(f"Loaded {len(data)} entries from {json_path}\n")

    domains = defaultdict(list)
    for url, entry in data.items():
        domain = classify_entry(url)
        domains[domain].append((url, entry))

    for domain, entries in sorted(domains.items()):
        print(f"  {domain}: {len(entries)} entries")
    print()

    # UI Components - split into groups
    print("UI Components:")
    all_written = set()
    for group_key, group_info in UI_GROUPS.items():
        comps = write_ui_group(group_key, group_info, domains['ui-components'], output_dir)
        all_written.update(comps)

    # Check for any unclassified UI components
    all_comps = set()
    for url, _ in domains['ui-components']:
        all_comps.add(get_component_name(url, 'ui-components'))
    missed = all_comps - all_written
    if missed:
        print(f"  WARNING: Unclassified components: {missed}")

    print("\nOther domains:")
    write_dom_api(domains['dom-api'], output_dir)
    write_core_framework(domains['core-framework'], output_dir)
    write_cli(domains['cli'], output_dir)

    # Remove old combined file if it exists
    old_file = Path(output_dir) / 'ui-components.md'
    if old_file.exists():
        old_file.unlink()
        print("\n  Removed old ui-components.md (replaced by split files)")

    print("\nDone!")


if __name__ == "__main__":
    main()
