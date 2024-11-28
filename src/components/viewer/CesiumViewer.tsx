import { useEffect, useRef } from 'react';
import { Viewer } from 'resium';
import ViewerControls from './ViewerControls';
import { getDefaultViewerConfig } from '../../utils/coordinates';

export default function CesiumViewer() {
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
      {...getDefaultViewerConfig()}
      className="h-full w-full"
    >
      <ViewerControls />
    </Viewer>
  );
}