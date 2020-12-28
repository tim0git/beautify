/**
 *  Test Import
 *
 * */
import * as TEST_COMPONENT from '../../__mocks__/Theme/mock_theme';

/**
 *  Global Import
 *
 * */
import * as global from '../theme/global';

/**
 *  Atoms Import
 *
 * */
import * as Button from '../theme/components/atoms/Button';
import * as Title from '../theme/components/atoms/Title';
import * as SubTitle from '../theme/components/atoms/SubTitle';
const atoms = {
  Button,
  Title,
  SubTitle,
};

/**
 *  Molecules Import
 *
 * */
import * as Search_Bar from '../theme/components/molecules/Search_Bar';
import * as SearchBarButton from '../theme/components/molecules/SearchBarButton';
import * as Screen_PlaceHolder from '../theme/components/molecules/Screen_PlaceHolder';
const molecules = {
  Search_Bar,
  SearchBarButton,
  Screen_PlaceHolder,
};

/**
 *  Screens Import
 *
 * */
import * as Landing from '../theme/components/screens/Landing';
import * as Home from '../theme/components/screens/Home';
import * as Inbox from '../theme/components/screens/Inbox';
import * as Bookings from '../theme/components/screens/Bookings';
import * as Profile from '../theme/components/screens/Profile';
import * as Search from '../theme/components/screens/Search';
const screens = {
  Landing,
  Home,
  Inbox,
  Bookings,
  Profile,
  Search,
};

const themes = {
  TEST_COMPONENT,
  global,
  ...atoms,
  ...molecules,
  ...screens,
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
