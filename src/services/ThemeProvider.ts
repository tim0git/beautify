// Test Import
import * as TEST_COMPONENT from '../../__mocks__/Theme/mock_theme';

// Global Import
import * as global from '../theme/global';

// Atoms Import
import * as Carousel_View from '../theme/components/atoms/Carousel_View';
import * as Map_View from '../theme/components/atoms/Map_View';
import * as Switch from '../theme/components/atoms/Switch';
import * as Spinner from '../theme/components/atoms/Spinner';
import * as Text from '../theme/components/atoms/Text';
import * as Button from '../theme/components/atoms/Button';
import * as Icon from '../theme/components/atoms/Icon';
import * as Header from '../theme/components/atoms/Header';

const atoms = {
  Carousel_View,
  Map_View,
  Switch,
  Spinner,
  Text,
  Button,
  Icon,
  Header,
};

// Molecules Import
import * as Calendar from '../theme/components/molecules/Calendar';
import * as Linked_Text from '../theme/components/molecules/Linked_Text';
import * as Menu_Row from '../theme/components/molecules/Menu_Row';
import * as Loading from '../theme/components/molecules/Loading';
import * as Menu_List from '../theme/components/molecules/Menu_List';
import * as Login_Cluster from '../theme/components/molecules/Login_Cluster';
import * as Search_Bar from '../theme/components/molecules/Search_Bar';
import * as Screen_Instructions from '../theme/components/molecules/Screen_Instructions';
const molecules = {
  Calendar,
  Linked_Text,
  Menu_Row,
  Loading,
  Menu_List,
  Login_Cluster,
  Search_Bar,
  Screen_Instructions,
};

// Organisms Import
import * as Onboarding_Card from '../theme/components/organisms/Onboarding_Card';
import * as Menu_Mapper from '../theme/components/organisms/Menu_Mapper';
import * as Guest_Welcome from '../theme/components/organisms/Guest_Welcome';
const organisms = {
  Onboarding_Card,
  Menu_Mapper,
  Guest_Welcome,
};

// Screens Import
import * as Onboarding from '../theme/components/screens/Onboarding';
import * as Profile_Data_Policy from '../theme/components/screens/Profile_Data_Policy';
import * as Profile_Insurance from '../theme/components/screens/Profile_Insurance';
import * as Profile_Privacy_Policy from '../theme/components/screens/Profile_Privacy_Policy';
import * as Profile_Terms_Conditions from '../theme/components/screens/Profile_Terms_Conditions';
import * as Profile_Legal_Stuff from '../theme/components/screens/Profile_Legal_Stuff';
import * as Help_Centre from '../theme/components/screens/Profile_Help_Centre';
import * as About_Beautify from '../theme/components/screens/Profile_About_Beautify';
import * as Profile_Marketing from '../theme/components/screens/Profile_Marketing';
import * as Profile_Notifications from '../theme/components/screens/Profile_Notifications';
import * as Splash from '../theme/components/screens/Splash';
import * as WebView from '../theme/components/screens/WebView';
import * as Landing from '../theme/components/screens/Landing';
import * as Home from '../theme/components/screens/Home';
import * as Inbox from '../theme/components/screens/Inbox';
import * as Bookings from '../theme/components/screens/Bookings';
import * as Profile from '../theme/components/screens/Profile';
import * as Search from '../theme/components/screens/Search';
const screens = {
  Onboarding,
  Profile_Data_Policy,
  Profile_Insurance,
  Profile_Privacy_Policy,
  Profile_Terms_Conditions,
  Profile_Legal_Stuff,
  Help_Centre,
  About_Beautify,
  Profile_Marketing,
  Profile_Notifications,
  Splash,
  WebView,
  Landing,
  Home,
  Inbox,
  Bookings,
  Profile,
  Search,
};

// Templates Import
import * as Default_Screen from '../theme/components/templates/Default_Screen';

const templates = {
  Default_Screen,
};

const themes = {
  TEST_COMPONENT,
  global,
  ...atoms,
  ...molecules,
  ...organisms,
  ...screens,
  ...templates,
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
