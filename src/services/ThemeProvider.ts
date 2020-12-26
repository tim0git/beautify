/**
 *  Atoms Import
 *
 * */
import * as Button from '../theme/components/atoms/Button';

/**
 *  Screens Import
 *
 * */
import * as Landing from '../theme/components/screens/Landing';
import * as Search from '../theme/components/screens/Search';
import * as Inbox from '../theme/components/screens/Inbox';
import * as Bookings from '../theme/components/screens/Bookings';
import * as Profile from '../theme/components/screens/Profile';
import * as global from '../theme/global';

/**
 *  Test Import
 *
 * */
import * as TEST_COMPONENT from '../../__mocks__/Theme/mock_theme';

const themes = {
  TEST_COMPONENT,
  Button,
  Landing,
  Search,
  Inbox,
  Bookings,
  Profile,
  global,
};

export const ThemeProvider = (component) => {
  if (!component) {
    throw new Error('provide a component name in order to return the theme');
  }
  if (!themes[component]) {
    throw new Error(
      `no component with the name ${component} found in the theme provider, did you forget to import it?`,
    );
  }

  return themes[component];
};
