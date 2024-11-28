import { useEffect, useRef } from 'react';
import { Viewer, Entity, CameraFlyTo } from 'resium';
import { Cartesian3, Color } from 'cesium';

interface CesiumViewerProps {
  initialPosition?: Cartesian3;
}

export default function CesiumViewer({ initialPosition }: CesiumViewerProps) {
  const viewerRef = useRef<Cesium.Viewer | null>(null);

  useEffect(() => {
    if (viewerRef.current) {
      viewerRef.current.scene.globe.enableLighting = true;
    }
  }, []);

  return (
    <Viewer
      ref={(e) => {
        viewerRef.current = e?.cesiumElement ?? null;
      }}
      full
      timeline={false}
      animation={false}
      className="h-full w-full"
    >
      <CameraFlyTo
        destination={initialPosition || Cartesian3.fromDegrees(-74.006, 40.7128, 1500)}
        duration={3}
      />
      <Entity
        position={Cartesian3.fromDegrees(-74.006, 40.7128, 100)}
        point={{ pixelSize: 10, color: Color.BLUE }}
        description="New York City"
      />
    </Viewer>
  );
}