export const config = {
  nextFetchPolicy: 'cache-and-network',
  displayName: 'fetch category and practitioner data',
  SearchBarProps: {
    placeHolder: 'enter your search here...',
    accessible: true,
    accessibilityLabel: 'TEST A11Y LABEL',
    accessibilityHint: 'TEST A11Y HINT',
    accessibilityRole: 'search',
  },
  Screen_InstructionsProps: {
    instructionProps: {
      content: 'Start searching',
      type: 'Title',
      testID: 'TEST',
    },
    subTitleProps: {
      content: 'Browse by catergory or by practitioner',
      type: 'SubTitle',
      testID: 'TEST',
    },
  },
};
