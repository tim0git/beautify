export const config = {
  screenHeaderTextProps: {
    Screen: {
      type: 'Title',
      testID: 'SCREEN_TITLE_TEXT',
    },
    Menu: {
      type: 'MenuTitle',
      testID: 'MENU_TITLE_TEXT',
    },
  },
  backButtonProps: {
    title: undefined,
    type: 'HeaderBackButton',
    accessible: true,
    accessibilityLabel: 'TEST A11Y LABEL',
    accessibilityHint: 'TEST A11Y HINT',
    accessibilityRole: 'button',
    disabled: false,
  },
};
