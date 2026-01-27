// Frost Spark Color Palette
// Organized by function and semantic meaning

const colors = {
  // Base colors
  background: {
    editor: '#07161b',
    sidebar: '#050d11',
    activityBar: '#030a0d',
    subtle: '#0a1a21',
    panel: '#252526',
    widget: '#252526',
  },

  // Foreground colors
  foreground: {
    default: '#cfcfcf',
    muted: '#9bcbec',
    subtle: '#7db8d9',
    bright: '#f0f0f0',
    white: '#ffffff',
    lightGray: '#cccccc',
    gray: '#999999',
    darkGray: '#585858',
  },

  // Frost (cool) colors - primary theme colors
  frost: {
    ice: '#9bcbec',        // Main frost color
    glacier: '#a8d8f0',    // Variables
    crystal: '#7db8d9',    // UI accents
    arctic: '#1a3f58',     // Borders/badges
    deepBlue: '#062f4a',   // Focus backgrounds
    oceanBlue: '#094771',  // Active selections
    tealBlue: '#16414f',   // Hover states
    skyBlue: '#056fcd',    // Selection background
    navyBlue: '#2063d7',   // Inactive selections
    electricBlue: '#0097fb', // Highlights
    linkBlue: '#3794ff',   // Links
    infoBlue: '#4e94ce',   // Info links
  },

  // Spark (warm accent) colors
  spark: {
    ember: '#ff8547',      // Entities/functions
    flame: '#ffb347',      // Strings/constants
    glow: '#edb0ff',       // Keywords (magenta)
    coral: '#c26262',      // Highlights
    orange: '#ea5c00',     // Find matches
    gold: '#e5e510',       // Diffs
    amber: '#cca700',      // Warnings (also in semantic)
  },

  // Syntax colors
  syntax: {
    comment: '#b8e6be',    // Mint green
    string: '#ffb347',     // Warm orange
    number: '#d4f090',     // Yellow-green
    keyword: '#edb0ff',    // Light magenta
    function: '#d4f090',   // Yellow-green
    variable: '#a8d8f0',   // Light blue
    constant: '#ffb347',   // Warm orange
    entity: '#ff8547',     // Coral orange
    type: '#b49eff',       // Purple
  },

  // Semantic colors
  error: '#f48771',
  warning: '#cca700',
  info: '#75beff',
  success: '#b8e6be',
  modified: '#0c7d9d',
  added: '#587c0c',
  deleted: '#94151b',

  // Git decoration colors
  git: {
    modified: '#ffb347',
    added: '#b8e6be',
    deleted: '#d97584',
    untracked: '#90d959',
    ignored: '#7db8d9',
    conflict: '#f48771',
  },

  // Selection and highlighting
  selection: {
    background: '#264f78',
    border: '#495F77',
  },

  // Border colors
  border: {
    default: '#1a3f58',
    subtle: '#444444',
    panel: '#80808059',
    separator: '#bbbbbb',
    widget: '#454545',
    section: '#3f3f46',
    strong: '#5F5F5F',
  },

  // UI specific colors
  ui: {
    badge: '#4d4d4d',
    button: '#0e639c',
    buttonHover: '#1177bb',
    buttonSecondary: '#3a3d41',
    buttonSecondaryHover: '#45494e',
    inputBackground: '#050d11',
    menuBackground: '#252526',
    tabInactive: '#2d2d2d',
    tabBorder: '#252526',
    titleBarInactive: '#3c3c3c',
    dropBackground: '#383b3d',
    debugToolbar: '#333333',
    peekViewBackground: '#001f33',
    peekViewTitle: '#1e1e1e',
    notificationHeader: '#303031',
    breadcrumb: '#1e1e1e',
    mergeCurrentHeader: '#367366',
    mergeCurrentContent: '#27403B',
    mergeIncomingHeader: '#395F8F',
    mergeIncomingContent: '#28384B',
    mergeCommonHeader: '#383838',
    mergeCommonContent: '#282828',
  },

  // Diff colors
  diff: {
    insertedBackground: '#9bb955',
    removedBackground: '#ff0000',
    headerForeground: '#75715E',
    changedForeground: '#E6DB74',
  },

  // Find colors
  find: {
    matchBackground: '#515c6a',
    matchBorder: '#74879f',
    matchHighlight: '#ea5c00',
    rangeHighlight: '#3a3d41',
    lineNumber: '#8FBE00',
    filename: '#E6DB74',
  },

  // Terminal ANSI colors
  terminal: {
    foreground: '#cccccc',
    black: '#000000',
    red: '#cd3131',
    green: '#0dbc79',
    yellow: '#e5e510',
    blue: '#2472c8',
    magenta: '#bc3fbc',
    cyan: '#11a8cd',
    white: '#e5e5e5',
    brightBlack: '#666666',
    brightRed: '#f14c4c',
    brightGreen: '#23d18b',
    brightYellow: '#f5f543',
    brightBlue: '#3b8eea',
    brightMagenta: '#d670d6',
    brightCyan: '#29b8db',
    brightWhite: '#e5e5e5',
    cursor: '#0087FF',
  },

  // Extension colors
  extension: {
    buttonBackground: '#327e36',
    buttonHover: '#28632b',
    remoteBadgeBackground: '#007acc',
    remoteStatusBarBackground: '#16825d',
    noFolderStatusBarBackground: '#68217a',
    debuggingStatusBarBackground: '#5a8fb4',
  },

  // Scrollbar & slider colors
  scrollbar: {
    slider: '#797979',
    sliderHover: '#646464',
    sliderActive: '#bfbfbf',
  },

  // Whitespace & guides
  guides: {
    whitespace: '#e3e4e2',
    indent: '#404040',
    indentActive: '#707070',
    ruler: '#5a5a5a',
  },

  // Bracket & matching
  bracket: {
    matchBackground: '#006400',
    matchBorder: '#888888',
  },

  // Editor gutter comment range
  gutter: {
    commentRange: '#c5c5c5',
    foldingControl: '#c5c5c5',
  },

  // Activity bar inactive foreground
  activityBar: {
    inactiveForeground: '#1d64b6',
  },
};

export default colors;
