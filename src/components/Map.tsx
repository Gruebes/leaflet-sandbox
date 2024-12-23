import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../hooks/useMap';

const Map = () => {
  const mapId = 'map';
  const { mapRef } = useMap(mapId);

  useEffect(() => {
    if (mapRef.current) {
      // Force a resize event after map is loaded
      window.dispatchEvent(new Event('resize'));
      mapRef.current.invalidateSize();
    }
  }, [mapRef]);

  return <div id={mapId} className="h-full w-full rounded-lg shadow-lg" />;
};

export default Map;
