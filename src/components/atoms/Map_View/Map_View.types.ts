export type LatLng = {
  latitude: Number;
  longitude: Number;
};
export type Location = {
  latitude: Number;
  longitude: Number;
  altitude: Number;
  timestamp: Number; //Milliseconds since Unix epoch
  accuracy: Number;
  altitudeAccuracy: Number;
  speed: Number;
};
export type Point = {
  x: Number;
  y: Number;
};
export type Frame = {
  x: Number;
  y: Number;
  width: Number;
  height: Number;
};
//   export enum MapType {
//     "standard"
//     "satellite"
//     "hybrid"
//     "terrain" //Android only
//   }
export type EdgePadding = {
  top: Number;
  right: Number;
  bottom: Number;
  left: Number;
};
export type EdgeInsets = {
  top: Number;
  left: Number;
  bottom: Number;
  right: Number;
};
export type Marker = {
  id: String;
  coordinate: LatLng;
  title: String;
  description: String;
};

export type GeoDecimalLocation = {
  latitude: Number;
  longitude: Number;
};

export type Region = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};
