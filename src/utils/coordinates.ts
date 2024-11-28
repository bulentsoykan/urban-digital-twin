import { Cartesian3 } from 'cesium';

export const ORLANDO_COORDINATES = {
  latitude: 28.5383,
  longitude: -81.3792,
  height: 1500,
};

export const createCartesianPosition = (
  latitude: number,
  longitude: number,
  height: number
): Cartesian3 => {
  return Cartesian3.fromDegrees(longitude, latitude, height);
};

export const getDefaultViewerConfig = () => ({
  timeline: false,
  animation: false,
  baseLayerPicker: true,
  fullscreenButton: true,
  vrButton: false,
  geocoder: true,
  homeButton: true,
  infoBox: true,
  sceneModePicker: true,
  navigationHelpButton: false,
  navigationInstructionsInitiallyVisible: false,
});