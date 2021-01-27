export type LatLng = {
  latitude: Number;
  longitude: Number;
};

export type Marker = {
  id: String;
  coordinate: LatLng;
  title: String;
  description: String;
};

export type Region = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

export type MapConfig = {
  mapProps: {
    provider: 'google' | 'null' | 'undefined';
    //"google" for GoogleMaps, otherwise null or undefined to use the native map framework (MapKit in iOS and GoogleMaps in android).
    mapType: 'standard' | 'hybrid' | 'satellite';
  };
  regionProps: {
    latitudeDelta: number;
    longitudeDelta: number;
  };
};
