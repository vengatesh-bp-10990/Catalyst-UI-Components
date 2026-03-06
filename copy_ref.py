import os, shutil

ref = '/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/Referance docs/zcat-ui-component-d480568c719231fd92f001ab8efb8e4e92068914/components'
app = '/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components'

skip = {'zcat-toggle'}
copied = []

for folder, ext in [('templates', '.html'), ('javascript', '.js'), ('styles', '.css')]:
    ref_dir = os.path.join(ref, folder)
    app_dir = os.path.join(app, folder)
    app_files = {f for f in os.listdir(app_dir) if f.startswith('zcat-') and f.endswith(ext)}
    for fname in os.listdir(ref_dir):
        if not fname.startswith('zcat-') or not fname.endswith(ext):
            continue
        base = fname[:-len(ext)]
        if base in skip:
            continue
        if fname in app_files:
            shutil.copy2(os.path.join(ref_dir, fname), os.path.join(app_dir, fname))
            copied.append(fname)

print('Copied', len(copied), 'files:')
for f in sorted(copied):
    print(' ', f)
