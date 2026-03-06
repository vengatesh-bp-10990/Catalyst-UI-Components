import os

styles = '/Users/vengatesh-10990/Desktop/Catalyst-UI-Components/zcat-app/components/styles'

tokens = open(os.path.join(styles, 'zcat-tokens.css')).read()
utilities = open(os.path.join(styles, 'zcat-utilities.css')).read()
layout = open(os.path.join(styles, 'layout-comp.css')).read()

# Remove the @import lines
layout = layout.replace("@import './zcat-tokens.css';\n", '')
layout = layout.replace("@import './zcat-utilities.css';\n", '')

# Prepend tokens + utilities directly
new_content = tokens + '\n\n' + utilities + '\n\n' + layout

with open(os.path.join(styles, 'layout-comp.css'), 'w') as f:
    f.write(new_content)

print('Done. layout-comp.css now', len(new_content.splitlines()), 'lines')
