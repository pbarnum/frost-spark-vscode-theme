import colors from './colors.js';
import { alpha, opaque } from './colorUtils.js';
import getTokenColors from './tokens.js';

function getTheme({ variant, name }) {
  const c = colors;

  return {
    name: name,
    colors: {
      // Base colors
      foreground: c.foreground.muted,
      focusBorder: c.frost.ice,
      'selection.background': c.frost.skyBlue,

      // Scrollbar
      'scrollbar.shadow': opaque(c.background.editor),

      // Activity Bar
      'activityBar.foreground': c.foreground.subtle,
      'activityBar.background': c.background.activityBar,
      'activityBar.inactiveForeground': alpha(c.activityBar.inactiveForeground, 0.61),
      'activityBarBadge.foreground': c.frost.ice,
      'activityBarBadge.background': c.frost.arctic,
      'activityBar.border': c.background.activityBar,
      'activityBar.activeBackground': c.background.activityBar,

      // Sidebar
      'sideBar.background': c.background.sidebar,
      'sideBar.foreground': c.frost.ice,
      'sideBarSectionHeader.background': alpha('#000000', 0),
      'sideBarSectionHeader.foreground': c.foreground.subtle,
      'sideBarSectionHeader.border': alpha(c.border.default, 0.2),
      'sideBarTitle.foreground': c.foreground.subtle,
      'sideBar.border': c.frost.arctic,

      // Lists
      'list.inactiveSelectionBackground': alpha(c.frost.navyBlue, 0.7),
      'list.inactiveSelectionForeground': c.foreground.white,
      'list.hoverBackground': c.frost.tealBlue,
      'list.hoverForeground': c.foreground.lightGray,
      'list.activeSelectionBackground': c.frost.oceanBlue,
      'list.activeSelectionForeground': c.foreground.white,
      'tree.indentGuidesStroke': c.foreground.darkGray,
      'list.dropBackground': c.ui.dropBackground,
      'list.highlightForeground': c.spark.coral,
      'list.focusBackground': c.frost.deepBlue,
      'list.focusForeground': c.foreground.lightGray,
      // Status Bar
      'statusBar.foreground': c.frost.ice,
      'statusBar.background': c.background.sidebar,
      'statusBarItem.hoverBackground': alpha(c.foreground.white, 0.12),
      'statusBar.border': 'default',
      'statusBar.debuggingBackground': c.extension.debuggingStatusBarBackground,
      'statusBar.debuggingForeground': c.foreground.white,
      'statusBar.debuggingBorder': 'default',
      'statusBar.noFolderBackground': c.extension.noFolderStatusBarBackground,
      'statusBar.noFolderForeground': c.foreground.white,
      'statusBar.noFolderBorder': 'default',
      'statusBarItem.remoteBackground': c.extension.remoteStatusBarBackground,
      'statusBarItem.remoteForeground': c.foreground.white,

      // Title Bar
      'titleBar.activeBackground': c.background.sidebar,
      'titleBar.activeForeground': c.frost.ice,
      'titleBar.inactiveBackground': alpha(c.ui.titleBarInactive, 0.6),
      'titleBar.inactiveForeground': alpha(c.foreground.lightGray, 0.6),
      'titleBar.border': alpha('#000000', 0),

      // Menu
      'menubar.selectionForeground': c.foreground.lightGray,
      'menubar.selectionBackground': alpha(c.foreground.white, 0.1),
      'menubar.selectionBorder': 'default',
      'menu.foreground': c.foreground.lightGray,
      'menu.background': c.ui.menuBackground,
      'menu.selectionForeground': c.foreground.white,
      'menu.selectionBackground': c.frost.oceanBlue,
      'menu.selectionBorder': alpha('#000000', 0),
      'menu.separatorBackground': c.border.separator,
      'menu.border': alpha('#000000', 0.52),

      // Buttons & Inputs
      'button.background': c.ui.button,
      'button.foreground': c.foreground.white,
      'button.hoverBackground': c.ui.buttonHover,
      'button.secondaryForeground': c.foreground.white,
      'button.secondaryBackground': c.ui.buttonSecondary,
      'button.secondaryHoverBackground': c.ui.buttonSecondaryHover,
      'input.background': c.ui.inputBackground,
      'input.border': alpha('#000000', 0),
      'input.foreground': c.frost.ice,
      'inputOption.activeBackground': alpha(c.frost.linkBlue, 0.4),
      'inputOption.activeBorder': alpha(c.frost.linkBlue, 0),
      'inputOption.activeForeground': c.foreground.white,
      'input.placeholderForeground': c.foreground.subtle,
      'textLink.foreground': c.frost.linkBlue,

      // Editor
      'editor.background': c.background.editor,
      'editor.foreground': c.foreground.default,
      'editorLineNumber.foreground': c.frost.ice,
      'editorCursor.foreground': c.frost.ice,
      'editorCursor.background': '#000000',
      'editor.selectionBackground': c.selection.background,
      'editor.inactiveSelectionBackground': alpha('#add6ff', 0.15),
      'editorWhitespace.foreground': alpha(c.guides.whitespace, 0.16),
      'editor.selectionHighlightBackground': alpha('#add6ff', 0.15),
      'editor.selectionHighlightBorder': c.selection.border,
      'editor.findMatchBackground': c.find.matchBackground,
      'editor.findMatchBorder': c.find.matchBorder,
      'editor.findMatchHighlightBackground': alpha(c.find.matchHighlight, 0.33),
      'editor.findMatchHighlightBorder': alpha(c.foreground.white, 0),
      'editor.findRangeHighlightBackground': alpha(c.find.rangeHighlight, 0.4),
      'editor.findRangeHighlightBorder': alpha(c.foreground.white, 0),
      'editor.rangeHighlightBackground': alpha(c.foreground.white, 0.04),
      'editor.rangeHighlightBorder': alpha(c.foreground.white, 0),
      'editor.hoverHighlightBackground': alpha(c.selection.background, 0.25),
      'editor.wordHighlightStrongBackground': alpha('#004972', 0.72),
      'editor.wordHighlightStrongBorder': 'default',
      'editor.wordHighlightBackground': alpha('#575757', 0.72),
      'editor.wordHighlightBorder': 'default',
      'editor.lineHighlightBackground': alpha('#8c6565', 0),
      'editor.lineHighlightBorder': '#282828',
      'editorLineNumber.activeForeground': '#ff8080',
      'editorLink.activeForeground': c.frost.infoBlue,
      'editorIndentGuide.background1': c.guides.indent,
      'editorIndentGuide.activeBackground1': c.guides.indentActive,
      'editorRuler.foreground': c.guides.ruler,
      'editorBracketMatch.background': alpha(c.bracket.matchBackground, 0.1),
      'editorBracketMatch.border': c.bracket.matchBorder,
      'editor.foldBackground': alpha(c.selection.background, 0.3),

      // Overview Ruler
      'editorOverviewRuler.background': opaque(c.background.editor),
      'editorOverviewRuler.border': opaque(c.background.editor),
      'editorOverviewRuler.commonContentForeground': alpha('#606060', 0.4),
      'editorOverviewRuler.currentContentForeground': alpha('#40c8ae', 0.5),
      'editorOverviewRuler.incomingContentForeground': alpha('#40a6ff', 0.5),
      'editorOverviewRuler.findMatchForeground': alpha('#d18616', 0.49),
      'editorOverviewRuler.rangeHighlightForeground': alpha('#007acc', 0.6),
      'editorOverviewRuler.selectionHighlightForeground': alpha('#a0a0a0', 0.8),
      'editorOverviewRuler.wordHighlightForeground': alpha('#a0a0a0', 0.8),
      'editorOverviewRuler.wordHighlightStrongForeground': alpha('#c0a0c0', 0.8),
      'editorOverviewRuler.modifiedForeground': c.modified,
      'editorOverviewRuler.addedForeground': c.added,
      'editorOverviewRuler.deletedForeground': c.deleted,
      'editorOverviewRuler.errorForeground': c.error,
      'editorOverviewRuler.warningForeground': c.warning,
      'editorOverviewRuler.infoForeground': c.info,
      'editorOverviewRuler.bracketMatchForeground': '#a0a0a0',

      // Editor errors/warnings
      'editorError.foreground': c.error,
      'editorError.background': alpha('#B73A34', 0),
      'editorError.border': alpha(c.foreground.white, 0),
      'editorWarning.foreground': c.warning,
      'editorWarning.background': alpha('#A99040', 0),
      'editorWarning.border': alpha(c.foreground.white, 0),
      'editorInfo.foreground': c.info,
      'editorInfo.background': alpha('#4490BF', 0),
      'editorInfo.border': alpha(c.frost.ice, 0),

      // Editor gutter
      'editorGutter.background': opaque(c.background.editor),
      'editorGutter.modifiedBackground': c.modified,
      'editorGutter.addedBackground': c.added,
      'editorGutter.deletedBackground': c.deleted,
      'editorGutter.foldingControlForeground': c.gutter.foldingControl,
      'editorGutter.commentRangeForeground': c.gutter.commentRange,

      // Minimap
      'minimap.background': opaque(c.background.editor),
      'minimapSlider.background': alpha(c.scrollbar.slider, 0.2),
      'minimapSlider.hoverBackground': alpha(c.scrollbar.sliderHover, 0.35),
      'minimapSlider.activeBackground': alpha(c.scrollbar.sliderActive, 0.4),

      'editorCodeLens.foreground': c.foreground.gray,
      'editorGroup.border': c.frost.ice,

      // Diff editor
      'diffEditor.insertedTextBackground': alpha(c.diff.insertedBackground, 0.2),
      'diffEditor.insertedTextBorder': 'default',
      'diffEditor.removedTextBackground': alpha(c.diff.removedBackground, 0.2),
      'diffEditor.removedTextBorder': 'default',
      'diffEditor.border': c.border.subtle,

      // Panel
      'panel.background': c.background.editor,
      'panel.border': c.border.panel,
      'panelTitle.activeBorder': '#e7e7e7',
      'panelTitle.activeForeground': '#e7e7e7',
      'panelTitle.inactiveForeground': alpha('#e7e7e7', 0.6),

      // Badge
      'badge.background': c.ui.badge,
      'badge.foreground': c.foreground.white,

      // Terminal
      'terminal.foreground': c.terminal.foreground,
      'terminal.selectionBackground': alpha(c.foreground.white, 0.25),
      'terminalCursor.background': c.terminal.cursor,
      'terminalCursor.foreground': c.foreground.white,
      'terminal.border': c.border.panel,
      'terminal.ansiBlack': c.terminal.black,
      'terminal.ansiBlue': c.terminal.blue,
      'terminal.ansiBrightBlack': c.terminal.brightBlack,
      'terminal.ansiBrightBlue': c.terminal.brightBlue,
      'terminal.ansiBrightCyan': c.terminal.brightCyan,
      'terminal.ansiBrightGreen': c.terminal.brightGreen,
      'terminal.ansiBrightMagenta': c.terminal.brightMagenta,
      'terminal.ansiBrightRed': c.terminal.brightRed,
      'terminal.ansiBrightWhite': c.terminal.brightWhite,
      'terminal.ansiBrightYellow': c.terminal.brightYellow,
      'terminal.ansiCyan': c.terminal.cyan,
      'terminal.ansiGreen': c.terminal.green,
      'terminal.ansiMagenta': c.terminal.magenta,
      'terminal.ansiRed': c.terminal.red,
      'terminal.ansiWhite': c.terminal.white,
      'terminal.ansiYellow': c.terminal.yellow,

      // Breadcrumbs
      'breadcrumb.background': c.ui.breadcrumb,
      'breadcrumb.foreground': alpha(c.foreground.lightGray, 0.8),
      'breadcrumb.focusForeground': '#e0e0e0',

      // Editor groups & tabs
      'editorGroupHeader.border': 'default',
      'editorGroupHeader.tabsBackground': c.background.editor,
      'editorGroupHeader.tabsBorder': 'default',
      'tab.activeForeground': c.foreground.white,
      'tab.border': c.ui.tabBorder,
      'tab.activeBackground': c.background.editor,
      'tab.activeBorder': alpha('#000000', 0),
      'tab.activeBorderTop': alpha('#000000', 0),
      'tab.inactiveBackground': c.ui.tabInactive,
      'tab.inactiveForeground': c.frost.ice,
      'tab.hoverBackground': 'default',
      'tab.hoverForeground': 'default',
      'tab.hoverBorder': 'default',

      // Scrollbar
      'scrollbarSlider.background': alpha(c.scrollbar.slider, 0.4),
      'scrollbarSlider.hoverBackground': alpha(c.scrollbar.sliderHover, 0.7),
      'scrollbarSlider.activeBackground': alpha(c.scrollbar.sliderActive, 0.4),

      // Progress bar & widgets
      'progressBar.background': c.frost.ice,
      'widget.shadow': alpha('#000000', 0.36),
      'editorWidget.foreground': c.foreground.lightGray,
      'editorWidget.background': c.background.widget,
      'editorWidget.resizeBorder': c.border.strong,
      'pickerGroup.border': c.border.section,
      'pickerGroup.foreground': c.frost.linkBlue,
      'debugToolBar.background': c.ui.debugToolbar,
      'debugToolBar.border': '#474747',

      // Notifications
      'notifications.foreground': c.foreground.lightGray,
      'notifications.background': c.background.panel,
      'notificationToast.border': '#474747',
      'notificationsErrorIcon.foreground': c.error,
      'notificationsWarningIcon.foreground': c.warning,
      'notificationsInfoIcon.foreground': c.info,
      'notificationCenter.border': '#474747',
      'notificationCenterHeader.background': c.ui.notificationHeader,
      'notificationCenterHeader.foreground': c.foreground.lightGray,
      'notifications.border': c.ui.notificationHeader,

      // Extensions
      'extensionButton.prominentForeground': c.foreground.white,
      'extensionButton.prominentBackground': c.extension.buttonBackground,
      'extensionButton.prominentHoverBackground': c.extension.buttonHover,
      'extensionBadge.remoteBackground': c.extension.remoteBadgeBackground,
      'extensionBadge.remoteForeground': c.foreground.white,

      // Quick picker
      'pickerGroup.foreground': c.frost.linkBlue,
      'quickInput.background': c.background.panel,
      'quickInput.foreground': c.foreground.lightGray,

      // Keybinding label
      'keybindingLabel.background': alpha('#808080', 0.17),
      'keybindingLabel.foreground': c.foreground.lightGray,
      'keybindingLabel.border': alpha('#333333', 0.6),
      'keybindingLabel.bottomBorder': alpha('#444444', 0.6),

      // Editor suggest widget
      'editorSuggestWidget.background': c.background.panel,
      'editorSuggestWidget.border': c.border.widget,
      'editorSuggestWidget.foreground': '#d4d4d4',
      'editorSuggestWidget.highlightForeground': c.frost.electricBlue,
      'editorSuggestWidget.selectedBackground': c.frost.deepBlue,

      // Editor hover widget
      'editorHoverWidget.foreground': c.foreground.lightGray,
      'editorHoverWidget.background': c.background.panel,
      'editorHoverWidget.border': c.border.widget,

      // Peek view
      'peekView.border': '#007acc',
      'peekViewEditor.background': c.ui.peekViewBackground,
      'peekViewEditorGutter.background': c.ui.peekViewBackground,
      'peekViewEditor.matchHighlightBackground': alpha('#ff8f00', 0.6),
      'peekViewEditor.matchHighlightBorder': '#ee931e',
      'peekViewResult.background': c.background.panel,
      'peekViewResult.fileForeground': c.foreground.white,
      'peekViewResult.lineForeground': '#bbbbbb',
      'peekViewResult.matchHighlightBackground': alpha(c.spark.orange, 0.3),
      'peekViewResult.selectionBackground': alpha('#3399ff', 0.2),
      'peekViewResult.selectionForeground': c.foreground.white,
      'peekViewTitle.background': c.ui.peekViewTitle,
      'peekViewTitleDescription.foreground': alpha(c.foreground.lightGray, 0.7),
      'peekViewTitleLabel.foreground': c.foreground.white,

      // Git decoration
      'gitDecoration.addedResourceForeground': c.git.added,
      'gitDecoration.modifiedResourceForeground': c.git.modified,
      'gitDecoration.deletedResourceForeground': c.git.deleted,
      'gitDecoration.untrackedResourceForeground': c.git.untracked,
      'gitDecoration.ignoredResourceForeground': c.git.ignored,
      'gitDecoration.conflictingResourceForeground': c.git.conflict,
    },

    tokenColors: getTokenColors(colors)
  };
}

export default getTheme;
