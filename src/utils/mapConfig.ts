import L from 'leaflet';
import markerIcon from '../assets/marker-icon.png';
import markerIcon2x from '../assets/marker-icon-2x.png';
// import markerShadow from '../assets/marker-shadow.png';

export const createDefaultIcon = () =>
  L.divIcon({
    className: 'marker-icon bg-transparent',
    html: `<img src="${markerIcon}" srcset="${markerIcon2x} 2x" alt="Marker Icon"/>`,
    iconUrl: markerIcon,
    // iconRetinaUrl: markerIcon2x,
    // shadowUrl: markerShadow,
    iconSize: [25, 41],
    // iconAnchor: [12, 41],
    // popupAnchor: [1, -34],
    // shadowSize: [41, 41],
  });

export const DEFAULT_CENTER: [number, number] = [
  40.02025300564684, -82.81150817871094,
];
export const DEFAULT_ZOOM = 11;
