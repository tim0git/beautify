import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Search_Container from './containers/Search_Container';
import Bookings_Container from './containers/Bookings_Container';
import Inbox_Container from './containers/Inbox_Container';
import Profile_Container from './containers/Profile_Container';

const SearchStack = createStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator headerMode="none">
      <SearchStack.Screen name="Search_Landing" component={Bookings_Container} />
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
      <ProfileStack.Screen name="Profile_Landing" component={Profile_Container} />
    </ProfileStack.Navigator>
  );
}
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Search" component={Search_Container} />
      <Tab.Screen name="Bookings" component={BookingsStackScreen} />
      <Tab.Screen name="Inbox" component={MessagesStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigationContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={TabStack} />
        <Stack.Screen name="Test Path" component={SearchStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
