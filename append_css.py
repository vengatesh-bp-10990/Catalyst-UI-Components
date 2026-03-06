import os

css_dir = '/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/Referance docs/zcat-ui-component-d480568c719231fd92f001ab8efb8e4e92068914/css'
app_styles = '/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/styles'

name_map = {
    'zcat-textbox.css': 'zcat-input.css',
    'zcat-key-value-pairs.css': 'zcat-keyvalue-pair.css',
}
skip = {'zcat-input.css', 'zcat-ui-components.css'}

appended = []
skipped = []

for ref_file in os.listdir(css_dir):
    if not ref_file.startswith('zcat-') or not ref_file.endswith('.css'):
        continue
    if ref_file == 'zcat-ui-components.css':
        continue
    app_file = name_map.get(ref_file, ref_file)
    if app_file in skip:
        continue
    app_path = os.path.join(app_styles, app_file)
    if not os.path.exists(app_path):
        skipped.append(f"{ref_file} -> {app_file} (no app file)")
        continue
    ref_content = open(os.path.join(css_dir, ref_file), 'r').read()
    with open(app_path, 'a') as f:
        f.write('\n\n/* === Global base styles from reference css/' + ref_file + ' === */\n')
        f.write(ref_content)
    appended.append(f"{ref_file} -> {app_file}")

print('Appended', len(appended), 'files:')
for x in sorted(appended):
    print(' ', x)
if skipped:
    print('Skipped:')
    for x in skipped:
        print(' ', x)
