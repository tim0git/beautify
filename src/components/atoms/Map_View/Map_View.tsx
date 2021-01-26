/**
 * @name Map_View
 * @description {description}
 *
 */
import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from '../../../services/ThemeProvider';
import MapView from 'react-native-maps';
import {LatLng, Region} from './Map_View.types';

export interface Props {
  location: LatLng;
}

const Map_View: React.FC<Props> = ({location}) => {
  const {config, style} = ThemeProvider('Map_View');

  const region: Region = {
    ...config.regionProps,
    ...location,
  };

  return (
    <View style={style.container} testID="Map_View">
      <MapView provider="google" style={style.map} region={region} />
    </View>
  );
};

export default Map_View;
