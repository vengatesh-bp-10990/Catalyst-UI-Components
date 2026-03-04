const fs = require('fs');
const path = require('path');

const cssFiles = [
  'css/catalyst-dark-mode.css',
  'css/catalyst-light-mode.css',
  'css/code-snippet.css',
  'css/global-colors.css',
  'css/helper.css',
  'css/highlight.css',
  'css/main.css',
  'css/root.css',
  'css/zcat-accordion.css',
  'css/zcat-alert.css',
  'css/zcat-body.css',
  'css/zcat-button.css',
  'css/zcat-checkbox.css',
  'css/zcat-combobox.css',
  'css/zcat-datepicker.css',
  'css/zcat-dateselect.css',
  'css/zcat-dropdown.css',
  'css/zcat-empty-template.css',
  'css/zcat-fileupload.css',
  'css/zcat-key-value-pairs.css',
  'css/zcat-layout-header.css',
  'css/zcat-loader.css',
  'css/zcat-menubox.css',
  'css/zcat-modal.css',
  'css/zcat-popover.css',
  'css/zcat-radio.css',
  'css/zcat-stepper.css',
  'css/zcat-subheader.css',
  'css/zcat-tab.css',
  'css/zcat-table.css',
  'css/zcat-textbox.css',
  'css/zcat-toaster.css',
  'css/zcat-tooltip.css',
  'css/zcat-tree.css',
  'css/zcat-pagination.css'

]; // Update this array with actual file paths

const outputFile = 'css/zcat-ui-components.css';

const bundleCss = async () => {
  let cssContent = '';

  for (const file of cssFiles) {
    try {
      const filePath = path.resolve(__dirname, '..', file);
      if (fs.existsSync(filePath)) {
        cssContent += fs.readFileSync(filePath, 'utf-8') + '\n';
      } else {
        console.warn(`Warning: ${file} not found!`);
      }
    } catch (err) {
      console.error(`Error reading ${file}:`, err);
    }
  }

  fs.writeFileSync(outputFile, cssContent, 'utf-8');
  console.log('✅ CSS bundling completed successfully!');
};

bundleCss();
