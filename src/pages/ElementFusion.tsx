import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Element {
  id: number;
  symbol: string;
  name: string;
  emoji: string;
}

const basicElements: Element[] = [
  { id: 1, symbol: 'H', name: 'Hydrogen', emoji: '💧' },
  { id: 2, symbol: 'O', name: 'Oxygen', emoji: '🌞' },
  { id: 6, symbol: 'C', name: 'Carbon', emoji: '⬢' },
  { id: 7, symbol: 'N', name: 'Nitrogen', emoji: '🐓' },
  { id: 8, symbol: 'Fe', name: 'Iron', emoji: '🛢' },
  { id: 11, symbol: 'Na', name: 'Sodium', emoji: '🔭' },
  { id: 17, symbol: 'Cl', name: 'Chlorine', emoji: '🧪' },
  { id: 26, symbol: 'Au', name: 'Gold', emoji: '📦' },
];

const fusions: { [key: string]: { name: string; emoji: string; description: string } } = {
  'H+O': { name: 'Water', emoji: '💧', description: 'Essential for life' },
  'O+H': { name: 'Water', emoji: '💧', description: 'Essential for life' },
  'H+H': { name: 'Hydrogen Gas', emoji: '💨', description: 'Lightness itself' },
  'C+O': { name: 'Carbon Dioxide', emoji: '🌳', description: 'Plants breathe this' },
  'O+C': { name: 'Carbon Dioxide', emoji: '🌳', description: 'Plants breathe this' },
  'N+O': { name: 'Nitrogen Oxide', emoji: '💨', description: 'Air pollutant' },
  'O+N': { name: 'Nitrogen Oxide', emoji: '💨', description: 'Air pollutant' },
  'Na+Cl': { name: 'Table Salt', emoji: '🍚', description: 'Seasoning' },
  'Cl+Na': { name: 'Table Salt', emoji: '🍚', description: 'Seasoning' },
  'Fe+O': { name: 'Iron Oxide', emoji: '🟤', description: 'Also called rust' },
  'O+Fe': { name: 'Iron Oxide', emoji: '🟤', description: 'Also called rust' },
};

export function ElementFusion() {
  const [selected, setSelected] = useState<Element[]>([]);
  const [createdCompounds, setCreatedCompounds] = useState<{ name: string; emoji: string }[]>([]);

  const fusion = useMemo(() => {
    if (selected.length !== 2) return null;
    const key = `${selected[0].symbol}+${selected[1].symbol}`;
    return fusions[key] || null;
  }, [selected]);

  const toggleElement = (element: Element) => {
    setSelected((prev) => {
      if (prev.find((e) => e.id === element.id)) {
        return prev.filter((e) => e.id !== element.id);
      }
      if (prev.length >= 2) {
        return [prev[1], element];
      }
      return [...prev, element];
    });
  };

  const performFusion = () => {
    if (!fusion) return;
    setCreatedCompounds([...createdCompounds, { name: fusion.name, emoji: fusion.emoji }]);
    setSelected([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 text-white p-8">
      <Link to="/" className="text-blue-300 hover:underline mb-8 inline-block">
        ← Back to Home
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-2 text-center">Element Fusion</h1>
        <p className="text-center text-lg text-gray-300 mb-8">Select two elements to fuse them together</p>

        <div className="grid grid-cols-4 gap-2 mb-8">
          {basicElements.map((element) => (
            <motion.button
              key={element.id}
              onClick={() => toggleElement(element)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-4 rounded-lg transition font-bold text-center ${
                selected.find((e) => e.id === element.id)
                  ? 'bg-yellow-500 ring-2 ring-yellow-300'
                  : 'bg-orange-700 hover:bg-orange-600'
              }`}
            >
              <div className="text-3xl">{element.emoji}</div>
              <div className="text-sm font-bold">{element.symbol}</div>
              <div className="text-xs text-gray-200">{element.name}</div>
            </motion.button>
          ))}
        </div>

        <div className="bg-black/30 rounded-lg p-8 mb-8 border border-orange-500">
          <div className="grid grid-cols-3 gap-4 items-center">
            <div className="text-center">
              {selected[0] ? (
                <div>
                  <div className="text-5xl">{selected[0].emoji}</div>
                  <div className="text-xl font-bold mt-2">{selected[0].symbol}</div>
                </div>
              ) : (
                <div className="text-gray-500 text-lg">Select 1st</div>
              )}
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">+</div>
            </div>

            <div className="text-center">
              {selected[1] ? (
                <div>
                  <div className="text-5xl">{selected[1].emoji}</div>
                  <div className="text-xl font-bold mt-2">{selected[1].symbol}</div>
                </div>
              ) : (
                <div className="text-gray-500 text-lg">Select 2nd</div>
              )}
            </div>
          </div>

          {fusion && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 pt-6 border-t border-orange-500 text-center"
            >
              <div className="text-5xl mb-3">{fusion.emoji}</div>
              <h2 className="text-2xl font-bold text-yellow-300 mb-2">{fusion.name}</h2>
              <p className="text-gray-300 mb-4">{fusion.description}</p>
              <motion.button
                onClick={performFusion}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 hover:bg-orange-700 px-8 py-2 rounded-lg font-bold transition"
              >
                ⚡ Create Compound
              </motion.button>
            </motion.div>
          )}

          {!fusion && selected.length === 2 && (
            <div className="mt-6 pt-6 border-t border-orange-500 text-center text-gray-300">
              ❓ This combination doesn't create anything known. Try different elements!
            </div>
          )}
        </div>

        {createdCompounds.length > 0 && (
          <div className="bg-gradient-to-br from-green-900 to-emerald-900 rounded-lg p-6 border border-green-500">
            <h3 className="text-2xl font-bold mb-4">Created Compounds ({createdCompounds.length})</h3>
            <div className="grid grid-cols-4 gap-3">
              {createdCompounds.map((compound, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-black/40 rounded-lg p-3 text-center"
                >
                  <div className="text-3xl mb-2">{compound.emoji}</div>
                  <div className="text-sm font-bold">{compound.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
