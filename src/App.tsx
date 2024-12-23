import React from 'react';
// import { MapPin } from 'lucide-react';
import Map from './components/Map';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-semibold">
                React Leaflet Map
              </span>
            </div>
          </div>
        </div>
      </nav> */}

      <main className="max-w-screen-2xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold mb-4">Interactive Map</h1>
          <div className="h-800 w-full">
            {/* <div className="h-full max-h-screen w-full"> */}
            <Map />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
