const COLORS = {
  black: '#000000',
  greyLight: '#C2C5CC',
  greyMedium: '#696969',
  greyDark: '#545C71',
  greyToggle: '#989da9',
  greyTrack: '#edeef1',
  white: '#FFFFFF',
  offWhite: '#fafafb',
  pinkDark: '#ff6bb3',
  pinkLight: '#ff78b9',
  pinkLightest: '#ffebf5',
  purpleDark: '#796ef6',
  blueDark: '#19253f',
};

export const colors: any = {
  text: {
    instruction: COLORS.greyLight,
    primary: COLORS.blueDark,
    secondary: COLORS.pinkLight,
    tertiary: COLORS.greyMedium,
    splash: COLORS.white,
    link: COLORS.purpleDark,
    disabled: COLORS.greyLight,
  },
  background: {
    primary: COLORS.white,
    menuHeader: COLORS.offWhite,
    splash: COLORS.pinkDark,
  },
  button: {
    primary: COLORS.pinkDark,
    secondary: COLORS.pinkLightest,
  },
  switch: {
    primaryEnabled: COLORS.pinkDark,
    secondaryEnabled: COLORS.pinkLightest,
    primaryDisabled: COLORS.greyToggle,
    secondaryDisabled: COLORS.greyTrack,
  },
  border: {
    black: COLORS.black,
    primary: COLORS.greyLight,
  },
  loading: {
    primary: COLORS.pinkDark,
  },
  tabBar: {
    selected: COLORS.purpleDark,
  },
  carouselPagination: {
    active: COLORS.black,
    inactive: COLORS.greyMedium,
  },
};
