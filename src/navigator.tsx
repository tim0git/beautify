import * as React from 'react';
import {colors} from './theme/global/styles';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {navigationRef} from './RootNavigation';
import Landing_Container from './containers/Landing_Container';
import Home_Container from './containers/Home_Container';
import Search_Container from './containers/Search_Container';
import Bookings_Container from './containers/Bookings_Container';
import Inbox_Container from './containers/Inbox_Container';
import Profile_Container from './containers/Profile_Container';
import IconRN from './components/atoms/Icon/Icon';
import Profile_Notifications_Screen from './components/screens/Profile_Notifications/Profile_Notifications_Screen';
import Profile_Marketing_Screen from './components/screens/Profile_Marketing/Profile_Marketing_Screen';
import Profile_About_Beautify_Screen from './components/screens/Profile_About_Beautify/Profile_About_Beautify_Screen';
import Profile_Help_Centre_Screen from './components/screens/Profile_Help_Centre/Profile_Help_Centre_Screen';
import Profile_Legal_Stuff_Screen from './components/screens/Profile_Legal_Stuff/Profile_Legal_Stuff_Screen';
import Profile_Terms_Conditions_Screen from './components/screens/Profile_Terms_Conditions/Profile_Terms_Conditions_Screen';
import Profile_Privacy_Policy_Screen from './components/screens/Profile_Privacy_Policy/Profile_Privacy_Policy_Screen';
import Profile_Insurance_Screen from './components/screens/Profile_Insurance/Profile_Insurance_Screen';
import Profile_Data_Policy_Screen from './components/screens/Profile_Data_Policy/Profile_Data_Policy_Screen';
import Onboarding_Screen from './components/screens/Onboarding/Onboarding_Screen';

const SearchStack = createStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator headerMode="none">
      <SearchStack.Screen name="Search_Screen" component={Search_Container} />
    </SearchStack.Navigator>
  );
}

const BookingsStack = createStackNavigator();

function BookingsStackScreen() {
  return (
    <BookingsStack.Navigator headerMode="none">
      <BookingsStack.Screen name="Bookings_Landing" component={Bookings_Container} />
    </BookingsStack.Navigator>
  );
}

const MessagesStack = createStackNavigator();

function MessagesStackScreen() {
  return (
    <MessagesStack.Navigator headerMode="none">
      <MessagesStack.Screen name="Inbox" component={Inbox_Container} />
    </MessagesStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator headerMode="none">
      <ProfileStack.Screen name="Profile" component={Profile_Container} />
      <ProfileStack.Screen name="Profile_Legal_Stuff" component={Profile_Legal_Stuff_Screen} />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      tabBarOptions={{activeTintColor: colors.tabBar.selected}}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          const icons = {
            Bookings: 'Bookings',
            Search: 'Search',
            Inbox: 'Inbox',
            Profile: 'Profile',
          };

          return <IconRN name={icons[route.name]} color={color} size={size} />;
        },
      })}>
      <Tab.Screen name="Search" component={Home_Container} />
      <Tab.Screen name="Bookings" component={BookingsStackScreen} />
      <Tab.Screen name="Inbox" component={MessagesStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function AppNavigationContainer(onboardingStatus: boolean) {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none" screenOptions={{gestureEnabled: false}}>
        {onboardingStatus ? (
          <>
            <Stack.Screen name="Home" component={TabStack} />
            <Stack.Screen name="Search_Screen" component={SearchStackScreen} />
            <Stack.Screen name="Login_Screen" component={Landing_Container} />
            {/* Profile Screens */}
            <Stack.Screen name="Profile_Notifications" component={Profile_Notifications_Screen} />
            <Stack.Screen name="Profile_Marketing" component={Profile_Marketing_Screen} />
            <Stack.Screen name="Profile_About_Beautify" component={Profile_About_Beautify_Screen} />
            <Stack.Screen name="Profile_Help_Centre" component={Profile_Help_Centre_Screen} />
            <Stack.Screen name="Profile_Terms_Conditions" component={Profile_Terms_Conditions_Screen} />
            <Stack.Screen name="Profile_Privacy_Policy" component={Profile_Privacy_Policy_Screen} />
            <Stack.Screen name="Profile_Insurance" component={Profile_Insurance_Screen} />
            <Stack.Screen name="Profile_Data_Policy" component={Profile_Data_Policy_Screen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Onboarding" component={Onboarding_Screen} />
            <Stack.Screen name="Home" component={TabStack} />
            <Stack.Screen name="Search_Screen" component={SearchStackScreen} />
            <Stack.Screen name="Login_Screen" component={Landing_Container} />
            {/* Profile Screens */}
            <Stack.Screen name="Profile_Notifications" component={Profile_Notifications_Screen} />
            <Stack.Screen name="Profile_Marketing" component={Profile_Marketing_Screen} />
            <Stack.Screen name="Profile_About_Beautify" component={Profile_About_Beautify_Screen} />
            <Stack.Screen name="Profile_Help_Centre" component={Profile_Help_Centre_Screen} />
            <Stack.Screen name="Profile_Terms_Conditions" component={Profile_Terms_Conditions_Screen} />
            <Stack.Screen name="Profile_Privacy_Policy" component={Profile_Privacy_Policy_Screen} />
            <Stack.Screen name="Profile_Insurance" component={Profile_Insurance_Screen} />
            <Stack.Screen name="Profile_Data_Policy" component={Profile_Data_Policy_Screen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
