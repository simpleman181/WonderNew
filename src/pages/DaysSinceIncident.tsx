import { Link } from 'react-router-dom';
import { useState } from 'react';

export function DaysSinceIncident() {
  const [days, setDays] = useState(0);

  const reset = () => setDays(0);
  const increment = () => setDays((d) => d + 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 to-yellow-900 text-white p-8">
      <Link to="/" className="text-blue-200 hover:underline mb-4 inline-block">← Back to Home</Link>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Days Since Incident</h1>
        <p className="text-gray-200 mb-8">A humorous workplace safety counter.</p>
        <div className="bg-black/50 p-12 rounded-lg text-center mb-6 border-4 border-yellow-500">
          <div className="text-7xl font-bold text-yellow-300 mb-2">{days}</div>
          <p className="text-gray-300 text-xl">days since last incident</p>
        </div>
        <div className="flex gap-3">
          <button onClick={increment} className="flex-1 bg-red-600 text-white p-3 rounded font-bold text-lg hover:bg-red-700">
            Incident Occurred
          </button>
          <button onClick={reset} className="flex-1 bg-yellow-600 text-white p-3 rounded font-bold text-lg hover:bg-yellow-700">
            Reset Counter
          </button>
        </div>
      </div>
    </div>
  );
}
