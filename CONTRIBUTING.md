# Contributing to Frost Spark Theme

Thank you for your interest in contributing! This document provides guidelines for contributing to the Frost Spark VSCode theme.

## Ways to Contribute

- 🐛 Report bugs and issues
- 💡 Suggest new features or improvements
- 🎨 Improve color choices or accessibility
- 📝 Improve documentation
- 🔧 Submit bug fixes or enhancements
- ✨ Add new theme variants (light mode, high contrast, etc.)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- VSCode or Cursor IDE
- Git

### Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/frost-spark-vscode-theme.git
   cd frost-spark-vscode-theme
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the theme**
   ```bash
   npm run build
   ```

4. **Test in VSCode**
   - Press `F5` to open Extension Development Host
   - The theme will be loaded automatically
   - Make changes, rebuild, and reload window to see updates

## Development Workflow

### Project Structure

```
src/
├── colors.js       # Color palette (edit colors here)
├── colorUtils.js   # Color manipulation utilities
├── theme.js        # UI theme structure
├── tokens.js       # Syntax highlighting
└── index.js        # Build script

themes/             # Generated files (don't edit!)
```

### Making Changes

1. **Edit source files in `src/`** (never edit generated files in `themes/`)
2. **Build**: `npm run build`
3. **Test**: Press `F5` or reload window in Extension Development Host
4. **Watch mode** (auto-rebuild): `npm run watch`

### Color System

All colors are defined in `src/colors.js` and organized semantically:
- `background.*` - Backgrounds
- `foreground.*` - Text colors
- `frost.*` - Cool blue theme colors
- `spark.*` - Warm accent colors
- `syntax.*` - Code syntax colors
- `ui.*`, `terminal.*`, etc. - Component-specific colors

Use color utilities in `src/colorUtils.js` for transparency and adjustments:
```javascript
import { alpha, lighten, darken } from './colorUtils.js';

alpha('#ff0000', 0.5)      // 50% transparent
lighten('#ff0000', 0.2)    // 20% lighter
darken('#ff0000', 0.3)     // 30% darker
```

## Contribution Guidelines

### Code Style

- Use ES modules (`import`/`export`)
- Use semantic color names from `colors.js`
- Use `alpha()` helper instead of manual hex alpha values
- Add comments for non-obvious color choices
- Keep consistent indentation (2 spaces)

### Color Changes

When modifying colors:
- **Update `src/colors.js`** (not theme files directly)
- **Maintain theme identity** (frost/ice blues with warm accents)
- **Check accessibility** (minimum 4.5:1 contrast for text)
- **Test thoroughly** in light and dark environments
- **Document the reason** for the change in your PR

### Adding Theme Variants

To add a new variant (e.g., light mode):
1. Add variant config in `src/index.js`
2. Update `src/theme.js` to handle the variant
3. Add variant-specific colors in `src/colors.js`
4. Update `package.json` contributions
5. Build and test

### Testing

Before submitting:
- ✅ Run `npm run build` successfully
- ✅ Test in Extension Development Host (F5)
- ✅ Verify no visual regressions
- ✅ Check console for errors
- ✅ Test with real code in multiple languages

## Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Edit source files in `src/`
   - Build and test thoroughly
   - Commit with clear messages

3. **Submit a pull request**
   - Provide a clear title and description
   - Explain the motivation for the change
   - Include screenshots for visual changes
   - Reference any related issues

4. **Code review**
   - Respond to feedback
   - Make requested changes
   - Keep the PR updated with main branch

### Commit Message Format

Use clear, descriptive commit messages:
```
feat: add light theme variant
fix: improve comment contrast ratio
docs: update contributing guidelines
refactor: reorganize color definitions
```

## Reporting Issues

When reporting bugs:
- Use the GitHub issue tracker
- Provide a clear title and description
- Include VSCode/Cursor version
- Include theme version
- Add screenshots if relevant
- Describe steps to reproduce
- Mention expected vs actual behavior

## Questions?

- 📖 Read the [README](README.md) for general information
- 🔍 Check existing issues and discussions
- 💬 Open a new issue for questions

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what's best for the community
- Show empathy towards other contributors

## License

By contributing, you agree that your contributions will be licensed under the GPL-3.0-only License.

---

Thank you for contributing to Frost Spark! 🎨✨
