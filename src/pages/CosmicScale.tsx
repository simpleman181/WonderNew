import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CosmicObject {
  id: number;
  name: string;
  size: number;
  description: string;
  emoji: string;
  siValue: string;
}

const cosmicObjects: CosmicObject[] = [
  { id: 1, name: 'Electron', size: 1e-15, description: 'Fundamental particle of matter', emoji: '⚛️', siValue: '10⁻¹⁵ m' },
  { id: 2, name: 'Atom', size: 1e-10, description: 'Smallest unit of an element', emoji: '🔬', siValue: '10⁻¹⁰ m' },
  { id: 3, name: 'DNA Molecule', size: 2e-9, description: 'Blueprint of life', emoji: '🧬', siValue: '2×10⁻⁹ m' },
  { id: 4, name: 'Cell', size: 1e-5, description: 'Basic unit of living organisms', emoji: '🦠', siValue: '10⁻⁵ m' },
  { id: 5, name: 'Grain of Sand', size: 1e-4, description: 'Tiny particle on a beach', emoji: '🏖️', siValue: '10⁻⁴ m' },
  { id: 6, name: 'Human', size: 1.7, description: 'Average human height', emoji: '👤', siValue: '1.7 m' },
  { id: 7, name: 'Mountain', size: 8848, description: 'Mount Everest', emoji: '⛰️', siValue: '8.8 km' },
  { id: 8, name: 'Earth', size: 6.371e6, description: 'Our home planet', emoji: '🌍', siValue: '6.4 million m' },
  { id: 9, name: 'Sun', size: 6.96e8, description: 'Star at the center of our solar system', emoji: '☀️', siValue: '696 million m' },
  { id: 10, name: 'Observable Universe', size: 8.8e26, description: 'Entire known universe', emoji: '🌌', siValue: '9×10²⁶ m' },
];

export function CosmicScale() {
  const [selectedIndex, setSelectedIndex] = useState(5);

  const current = cosmicObjects[selectedIndex];
  const canPrev = selectedIndex > 0;
  const canNext = selectedIndex < cosmicObjects.length - 1;

  const getSizeRelation = () => {
    if (selectedIndex === 0) return 'The smallest known object';
    return `${(current.size / cosmicObjects[selectedIndex - 1].size).toFixed(1)}x larger than previous`;
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Link to="/" className="text-blue-400 hover:underline mb-8 inline-block">
        ← Back to Home
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-2 text-center">Cosmic Scale</h1>
        <p className="text-center text-lg text-gray-400 mb-12">
          Explore the scale of the universe - from the tiniest particles to the vastness of space
        </p>

        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg p-12 mb-8 border border-blue-500"
        >
          <div className="text-7xl text-center mb-6">{current.emoji}</div>
          <h2 className="text-4xl font-bold text-center mb-2">{current.name}</h2>
          <p className="text-xl text-center text-gray-300 mb-6">{current.description}</p>
          <div className="text-center text-3xl font-bold text-blue-300 mb-6">{current.siValue}</div>
          <p className="text-center text-gray-400">{getSizeRelation()}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-4 gap-2 mb-8 auto-rows-min"
        >
          {cosmicObjects.map((obj, idx) => (
            <motion.button
              key={obj.id}
              onClick={() => setSelectedIndex(idx)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-lg transition ${
                idx === selectedIndex
                  ? 'bg-blue-600 ring-2 ring-blue-400'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              <div className="text-2xl">{obj.emoji}</div>
              <div className="text-xs mt-1 truncate">{obj.name}</div>
            </motion.button>
          ))}
        </motion.div>

        <div className="flex gap-4 justify-center">
          <motion.button
            onClick={() => setSelectedIndex((prev) => prev - 1)}
            disabled={!canPrev}
            whileHover={canPrev ? { scale: 1.05 } : {}}
            whileTap={canPrev ? { scale: 0.95 } : {}}
            className={`px-8 py-3 rounded-lg font-bold transition ${
              canPrev
                ? 'bg-purple-600 hover:bg-purple-700'
                : 'bg-gray-600 opacity-50 cursor-not-allowed'
            }`}
          >
            ← Smaller
          </motion.button>
          <motion.button
            onClick={() => setSelectedIndex((prev) => prev + 1)}
            disabled={!canNext}
            whileHover={canNext ? { scale: 1.05 } : {}}
            whileTap={canNext ? { scale: 0.95 } : {}}
            className={`px-8 py-3 rounded-lg font-bold transition ${
              canNext
                ? 'bg-purple-600 hover:bg-purple-700'
                : 'bg-gray-600 opacity-50 cursor-not-allowed'
            }`}
          >
            Larger →
          </motion.button>
        </div>
      </div>
    </div>
  );
}
