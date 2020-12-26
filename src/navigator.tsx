import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Search_Container from './containers/Search_Container';
import Bookings_Container from './containers/Bookings_Container';
import Inbox_Container from './containers/Inbox_Container';
import Profile_Container from './containers/Profile_Container';

const Tab = createBottomTabNavigator();

export default function AppNavigationContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Search" component={Search_Container} />
        <Tab.Screen name="Bookings" component={Bookings_Container} />
        <Tab.Screen name="Inbox" component={Inbox_Container} />
        <Tab.Screen name="Profile" component={Profile_Container} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
