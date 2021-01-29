import * as React from 'react';
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
import Marketing_Preferences_Screen from './components/screens/Profile_Marketing/Profile_Marketing_Screen';
import About_Beautify_Screen from './components/screens/About_Beautify/About_Beautify_Screen';
import Help_Centre_Screen from './components/screens/Help_Centre/Help_Centre_Screen';

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
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      tabBarOptions={{activeTintColor: '#796ef6'}}
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

export default function AppNavigationContainer() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={TabStack} />
        <Stack.Screen name="Search_Screen" component={SearchStackScreen} />
        <Stack.Screen name="Login_Screen" component={Landing_Container} />
        {/* Profile Screens */}
        <Stack.Screen name="Profile_Notifications" component={Profile_Notifications_Screen} />
        <Stack.Screen name="Profile_Marketing" component={Marketing_Preferences_Screen} />
        <Stack.Screen name="About_Beautify" component={About_Beautify_Screen} />
        <Stack.Screen name="Help_Centre" component={Help_Centre_Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
