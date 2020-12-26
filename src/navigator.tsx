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
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search_Landing" component={Search_Container} />
    </SearchStack.Navigator>
  );
}

const BookingsStack = createStackNavigator();

function BookingsStackScreen() {
  return (
    <BookingsStack.Navigator>
      <BookingsStack.Screen name="Bookings_Landing" component={Bookings_Container} />
    </BookingsStack.Navigator>
  );
}

const MessagesStack = createStackNavigator();

function MessagesStackScreen() {
  return (
    <MessagesStack.Navigator>
      <MessagesStack.Screen name="Inbox" component={Inbox_Container} />
    </MessagesStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile_Landing" component={Profile_Container} />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function AppNavigationContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Search" component={Search_Container} />
        <Tab.Screen name="Bookings" component={BookingsStackScreen} />
        <Tab.Screen name="Inbox" component={MessagesStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
