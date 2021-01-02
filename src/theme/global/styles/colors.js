const COLORS = {
  black: '#000000',
  greyLight: '#C2C5CC',
  greyMedium: '#696969',
  greyDark: '#545C71',
  white: '#FFFFFF',
  offWhite: '#fafafb',
  pinkDark: '#ff6bb3',
  pinkLight: '#ff78b9',
  purpleDark: '#796ef6',
  blueDark: '#19253f',
};

export const colors = {
  text: {
    instruction: COLORS.greyLight,
    primary: COLORS.blueDark,
    secondary: COLORS.pinkLight,
    tertiary: COLORS.greyMedium,
  },
  background: {
    primary: COLORS.white,
    menuHeader: COLORS.offWhite,
  },
  button: {
    primary: COLORS.pinkDark,
  },
  border: {
    black: COLORS.black,
    primary: COLORS.greyLight,
  },
};
