import { Link } from 'react-router-dom';
import { useState } from 'react';

export function BirthMap() {
  const [birth, setBirth] = useState('');
  const [map, setMap] = useState<{lat:number,lng:number,name:string}|null>(null);

  const locations = [
    { lat: 40.7128, lng: -74.006, name: 'New York' },
    { lat: 51.5074, lng: -0.1278, name: 'London' },
    { lat: 48.8566, lng: 2.3522, name: 'Paris' },
    { lat: 35.6762, lng: 139.6503, name: 'Tokyo' },
    { lat: -33.8688, lng: 151.2093, name: 'Sydney' },
  ];

  const getLocation = () => {
    if (!birth) return;
    const idx = Math.abs(birth.split('').reduce((s,c) => s + c.charCodeAt(0), 0)) % locations.length;
    setMap(locations[idx]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-8">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Home</Link>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Birth Map</h1>
        <p className="text-gray-600 mb-6">Enter your birth date to get mapped to a world location.</p>
        <div className="bg-white p-6 rounded-lg shadow">
          <input type="date" value={birth} onChange={(e) => setBirth(e.target.value)} className="w-full border p-2 rounded mb-4" />
          <button onClick={getLocation} className="w-full bg-blue-600 text-white p-2 rounded font-bold hover:bg-blue-700">Map My Birth</button>
          {map && (
            <div className="mt-4 text-center">
              <p className="text-2xl font-bold text-blue-700">{map.name}</p>
              <p className="text-sm text-gray-600">Coordinates: {map.lat.toFixed(2)}°, {map.lng.toFixed(2)}°</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
