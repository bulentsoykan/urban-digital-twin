import React from 'react';
import { CameraFlyTo, Entity } from 'resium';
import { Color } from 'cesium';
import { ORLANDO_COORDINATES, createCartesianPosition } from '../../utils/coordinates';

export default function ViewerControls() {
  const orlandoPosition = createCartesianPosition(
    ORLANDO_COORDINATES.latitude,
    ORLANDO_COORDINATES.longitude,
    ORLANDO_COORDINATES.height
  );

  return (
    <>
      <CameraFlyTo
        destination={orlandoPosition}
        duration={3}
      />
      <Entity
        position={createCartesianPosition(
          ORLANDO_COORDINATES.latitude,
          ORLANDO_COORDINATES.longitude,
          100
        )}
        point={{ pixelSize: 10, color: Color.BLUE }}
        description="Orlando, Florida"
      />
    </>
  );
}