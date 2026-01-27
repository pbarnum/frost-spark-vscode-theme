# Frost Spark - VSCode Theme

Turns your VSCode into a icy blue with sparks of color.

## Features

- 🧊 **Frost-inspired** cool blue color palette
- ✨ **Strategic warm accents** for important syntax elements
- 🎨 **Accessible** - WCAG AA compliant contrast ratios

## Installation

### From Marketplace
1. Open VSCode/Cursor
2. Go to Extensions (Cmd/Ctrl + Shift + X)
3. Search for "Frost Spark"
4. Click Install

### Manual Installation
```bash
git clone https://github.com/pbarnum/frost-spark-vscode-theme.git
cd frost-spark-vscode-theme
npm install
npm run build
code --install-extension .
```

## Development

Quick start for contributors:

```bash
# Clone and setup
git clone https://github.com/pbarnum/frost-spark-vscode-theme.git
cd frost-spark-vscode-theme
npm install

# Build the theme
npm run build

# Test in VSCode
# Press F5 to open Extension Development Host
```

**Key concepts:**
- Edit source files in `src/` (never edit generated files in `themes/`)
- Colors are defined in `src/colors.js`
- Run `npm run build` after changes
- Use `npm run watch` for auto-rebuild during development

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## Color Palette

The theme uses a carefully designed color system:

- **Frost (Cool)**: Ice blues for UI and general syntax
- **Spark (Warm)**: Orange and magenta accents for keywords and entities
- **Semantic**: Green for success/comments, red for errors, yellow for warnings

All colors meet WCAG AA accessibility standards.

## Contributing

Contributions are welcome! Please:
1. Read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines
2. Fork the repository and create a feature branch
3. Make your changes in `src/` files
4. Test in Extension Development Host (F5)
5. Submit a pull request with a clear description

## Sponsoring

I build software because it is my passion. If you wish to show appreciation you can buy me a coffee!

<a href="https://www.buymeacoffee.com/pbarnum" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## License

GPL-3.0-only
