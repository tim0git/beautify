/**
 * @name Map_View
 * @description {description}
 *
 */
import React from 'react';
import {View, Text} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import MapView from 'react-native-maps';

export interface Props {}

const Map_View: React.FC<Props> = ({}) => {
  const {config, dict, style} = ThemeProvider('Map_View');
  return (
    <View style={style.container} testID="Map_View">
      <Text>Map_View</Text>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default Map_View;
