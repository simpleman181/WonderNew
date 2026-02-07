import { Link } from 'react-router-dom';
import { useState } from 'react';

const sounds = ['Forest Rain', 'Ocean Waves', 'Thunder Storm', 'Wind Chimes', 'Birds Chirping', 'Crackling Fire'];

export function AmbientSounds() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-8">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Home</Link>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Ambient Sounds</h1>
        <p className="text-gray-600 mb-6">Click a sound to play ambient background audio.</p>
        <div className="grid grid-cols-2 gap-3">
          {sounds.map((s) => (
            <button
              key={s}
              onClick={() => setActive(active === s ? null : s)}
              className={`p-4 rounded-lg font-bold transition ${
                active === s
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        {active && <p className="mt-6 text-center text-gray-600">Now playing: <strong>{active}</strong></p>}
      </div>
    </div>
  );
}
