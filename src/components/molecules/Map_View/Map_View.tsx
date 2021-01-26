/**
 * @name Map_View
 * @description {description}
 *
 */
import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import MapView from 'react-native-maps';

export interface Props {}

const Map_View: React.FC<Props> = ({}) => {
  const {config, dict, style} = ThemeProvider('Map_View');
  return (
    <View style={style.container} testID="Map_View">
      <MapView
        provider="google"
        style={style.map}
        region={{
          latitude: 51.50853,
          longitude: -0.12574,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0121,
        }}
      />
    </View>
  );
};

export default Map_View;
