#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import getTheme from './theme.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure themes directory exists
const themesDir = path.join(__dirname, '..', 'themes');
if (!fs.existsSync(themesDir)) {
  fs.mkdirSync(themesDir, { recursive: true });
}

// Define theme variants
const themes = [
  {
    variant: 'dark',
    name: 'frost-spark-dark',
    filename: 'frost-spark-dark-color-theme.json'
  },
  // Future variants can be added here:
  // {
  //   variant: 'light',
  //   name: 'frost-spark-light',
  //   filename: 'frost-spark-light-color-theme.json'
  // },
  // {
  //   variant: 'high-contrast',
  //   name: 'frost-spark-high-contrast',
  //   filename: 'frost-spark-high-contrast-color-theme.json'
  // }
];

function buildThemes() {
  // Build each theme
  themes.forEach(themeConfig => {
    const theme = getTheme(themeConfig);
    const themePath = path.join(themesDir, themeConfig.filename);

    // Write theme file with pretty formatting
    fs.writeFileSync(
      themePath,
      JSON.stringify(theme, null, '\t'),
      'utf8'
    );

    console.log(`✓ Built ${themeConfig.name} → ${themeConfig.filename}`);
  });

  console.log(`\n✨ Successfully built ${themes.length} theme variant(s)`);
}

// Check for watch mode
const watchMode = process.argv.includes('--watch');

if (watchMode) {
  console.log('👀 Watching for changes...\n');

  // Build initially
  buildThemes();

  // Watch source files
  const srcDir = __dirname;
  fs.watch(srcDir, { recursive: false }, (eventType, filename) => {
    if (filename && filename.endsWith('.js')) {
      console.log(`\n📝 ${filename} changed, rebuilding...`);

      // Clear require cache for changed modules
      Object.keys(require.cache).forEach(key => {
        if (key.startsWith(srcDir)) {
          delete require.cache[key];
        }
      });

      try {
        buildThemes();
      } catch (error) {
        console.error('❌ Build error:', error.message);
      }
    }
  });

  console.log('\nPress Ctrl+C to stop watching');
} else {
  buildThemes();
}
