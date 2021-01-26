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
  testID: string;
}

const Map_View: React.FC<Props> = ({location, testID}) => {
  const {config, style} = ThemeProvider('Map_View');

  const {regionProps, mapProps} = config;

  const region: Region = {
    ...regionProps,
    ...location,
  };

  return (
    <View style={style.container}>
      <MapView {...mapProps} style={style.map} region={region} testID={testID ? testID : 'Map_View'} />
    </View>
  );
};

export default Map_View;
