// Color manipulation utilities

/**
 * Add alpha transparency to a hex color
 * @param {string} color - Hex color (e.g., '#ff0000')
 * @param {number} alpha - Alpha value 0-1 (e.g., 0.5 for 50%)
 * @returns {string} Color with alpha (e.g., '#ff000080')
 */
function alpha(color, alphaValue) {
  // Remove # if present
  const hex = color.replace('#', '');

  // Convert alpha (0-1) to hex (00-ff)
  const alphaHex = Math.round(alphaValue * 255).toString(16).padStart(2, '0');

  return `#${hex}${alphaHex}`;
}

/**
 * Convert hex color to RGB values
 * @param {string} hex - Hex color
 * @returns {{ r: number, g: number, b: number }}
 */
function hexToRgb(hex) {
  const cleanHex = hex.replace('#', '');
  return {
    r: parseInt(cleanHex.substring(0, 2), 16),
    g: parseInt(cleanHex.substring(2, 4), 16),
    b: parseInt(cleanHex.substring(4, 6), 16)
  };
}

/**
 * Convert RGB to hex
 * @param {number} r - Red (0-255)
 * @param {number} g - Green (0-255)
 * @param {number} b - Blue (0-255)
 * @returns {string} Hex color
 */
function rgbToHex(r, g, b) {
  return '#' + [r, g, b]
    .map(x => Math.round(x).toString(16).padStart(2, '0'))
    .join('');
}

/**
 * Lighten a color by a percentage
 * @param {string} color - Hex color
 * @param {number} amount - Amount to lighten (0-1)
 * @returns {string} Lightened color
 */
function lighten(color, amount) {
  const rgb = hexToRgb(color);
  return rgbToHex(
    rgb.r + (255 - rgb.r) * amount,
    rgb.g + (255 - rgb.g) * amount,
    rgb.b + (255 - rgb.b) * amount
  );
}

/**
 * Darken a color by a percentage
 * @param {string} color - Hex color
 * @param {number} amount - Amount to darken (0-1)
 * @returns {string} Darkened color
 */
function darken(color, amount) {
  const rgb = hexToRgb(color);
  return rgbToHex(
    rgb.r * (1 - amount),
    rgb.g * (1 - amount),
    rgb.b * (1 - amount)
  );
}

/**
 * Invert a color
 * @param {string} color - Hex color
 * @returns {string} Inverted color
 */
function invert(color) {
  const rgb = hexToRgb(color);
  return rgbToHex(255 - rgb.r, 255 - rgb.g, 255 - rgb.b);
}

/**
 * Mix two colors
 * @param {string} color1 - First hex color
 * @param {string} color2 - Second hex color
 * @param {number} weight - Weight of first color (0-1, default 0.5)
 * @returns {string} Mixed color
 */
function mix(color1, color2, weight = 0.5) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  return rgbToHex(
    rgb1.r * weight + rgb2.r * (1 - weight),
    rgb1.g * weight + rgb2.g * (1 - weight),
    rgb1.b * weight + rgb2.b * (1 - weight)
  );
}

/**
 * Get relative luminance (for contrast calculations)
 * @param {string} color - Hex color
 * @returns {number} Relative luminance (0-1)
 */
function getLuminance(color) {
  const rgb = hexToRgb(color);
  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(val => {
    val = val / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Calculate contrast ratio between two colors
 * @param {string} color1 - First hex color
 * @param {string} color2 - Second hex color
 * @returns {number} Contrast ratio (1-21)
 */
function contrastRatio(color1, color2) {
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * Get a color with good contrast against the background
 * @param {string} background - Background hex color
 * @param {string} lightOption - Light color option
 * @param {string} darkOption - Dark color option
 * @returns {string} Color with better contrast
 */
function getContrastColor(background, lightOption = '#ffffff', darkOption = '#000000') {
  const lightContrast = contrastRatio(background, lightOption);
  const darkContrast = contrastRatio(background, darkOption);
  return lightContrast > darkContrast ? lightOption : darkOption;
}

/**
 * Fully opaque version of a color
 * @param {string} color - Hex color (with or without alpha)
 * @returns {string} Fully opaque color
 */
function opaque(color) {
  return alpha(color, 1);
}

/**
 * Fully transparent version of a color
 * @param {string} color - Hex color
 * @returns {string} Fully transparent color
 */
function transparent(color) {
  return alpha(color, 0);
}

export {
  alpha,
  lighten,
  darken,
  invert,
  mix,
  getLuminance,
  contrastRatio,
  getContrastColor,
  opaque,
  transparent,
  hexToRgb,
  rgbToHex
};
