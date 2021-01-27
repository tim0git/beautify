import {MapConfig} from '../../../../components/atoms/Map_View/Map_View.types';

export const config: MapConfig = {
  mapProps: {
    provider: 'google',
    mapType: 'standard',
  },
  regionProps: {
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0021,
  },
};
