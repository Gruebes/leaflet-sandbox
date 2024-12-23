import L from 'leaflet';
import { useEffect, useRef, useState } from 'react';
import data from '../../data.json';
import {
  DEFAULT_CENTER,
  DEFAULT_ZOOM,
  createDefaultIcon,
} from '../utils/mapConfig';

export const useMap = (containerId: string) => {
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const featureGroupRef = useRef<L.FeatureGroup>(L.featureGroup());
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    if (!ready) return;
    console.log(featureGroupRef.current);
    for (const property of data as {
      latitude: number;
      longitude: number;
    }[]) {
      // Add markers
      const { latitude, longitude } = property;
      const marker = L.marker([latitude, longitude], {
        icon: createDefaultIcon(),
      });
      // .bindPopup('A sample marker<br>Easily customizable.');
      featureGroupRef.current.addLayer(marker);
    }

    const featureGroupRefCopy = featureGroupRef.current;
    return () => {
      featureGroupRefCopy.clearAllEventListeners();
      featureGroupRefCopy.clearLayers();
      // featureGroupRefCopy.remove();
    };
  }, [ready]);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map(containerId, { preferCanvas: true }).setView(
        DEFAULT_CENTER,
        DEFAULT_ZOOM
      );

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      })
        .addTo(mapRef.current)
        .on('load', () => {
          featureGroupRef.current.on('add', () => {
            console.log('added');
            setReady(true);
            // setTimeout(() => {
            // }, 1000);
          });

          featureGroupRef.current.addTo(mapRef.current!);
        });
    }

    const featureGroupRefCopy = featureGroupRef.current;
    return () => {
      if (mapRef.current) {
        featureGroupRefCopy.remove();
        mapRef.current.remove();
        mapRef.current = null;
        markersRef.current = [];
      }
    };
  }, [containerId]);

  return { mapRef, markersRef };
};
