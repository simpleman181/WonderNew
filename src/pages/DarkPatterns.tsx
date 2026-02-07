import { Link } from 'react-router-dom';
import { useState } from 'react';

const patterns = [
  { name: 'Trick Questions', desc: 'Questions phrased to trick users' },
  { name: 'Hard to Cancel', desc: 'Making it hard to unsubscribe', },
  { name: 'Visual Confusion', desc: 'Confusing layouts and icons', },
  { name: 'Roach Motel', desc: 'Easy to enter, hard to exit', },
  { name: 'Privacy Zuckering', desc: 'Tricking users about privacy', },
  { name: 'Forced Continuity', desc: 'Hidden subscriptions', },
];

export function DarkPatterns() {
  const [found, setFound] = useState<string[]>([]);

  const toggle = (name: string) => {
    setFound((f) =>
      f.includes(name) ? f.filter((x) => x !== name) : [...f, name]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <Link to="/" className="text-blue-300 hover:underline mb-4 inline-block">← Back to Home</Link>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Dark Patterns</h1>
        <p className="text-gray-300 mb-6">Identify deceptive design patterns used on the web.</p>
        <div className="space-y-3">
          {patterns.map((p) => (
            <div
              key={p.name}
              onClick={() => toggle(p.name)}
              className={`p-4 rounded-lg cursor-pointer transition ${
                found.includes(p.name)
                  ? 'bg-red-700 border-2 border-red-400'
                  : 'bg-gray-800 border-2 border-gray-700 hover:border-gray-500'
              }`}
            >
              <h3 className="font-bold">{p.name}</h3>
              <p className="text-sm text-gray-300">{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-gray-400">
          Found: {found.length} / {patterns.length}
        </p>
      </div>
    </div>
  );
}
