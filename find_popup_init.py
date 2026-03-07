import os

dist = '/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/dist'
for f in os.listdir(dist):
    if f.endswith('.js') and not f.endswith('.map') and not f.endswith('.map.js'):
        path = os.path.join(dist, f)
        with open(path, 'r', errors='ignore') as fp:
            c = fp.read()
        if 'bodywrapperCount' in c:
            print(f, '-> contains bodywrapperCount (LytePopup initializer)')
        if 'LyteUiComponentAddon' in c:
            print(f, '-> contains LyteUiComponentAddon')
