import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Location {
  id: number;
  name: string;
  era: string;
  description: string;
  emoji: string;
  fact: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: 'The First Website',
    era: '1991',
    description: 'The very first website ever created at CERN',
    emoji: '📚',
    fact: 'It was a simple page about the World Wide Web project with minimal styling.',
  },
  {
    id: 2,
    name: 'Geocities Era',
    era: '1994-2009',
    description: 'When everyone had a colorful personal website',
    emoji: '🎨',
    fact: 'Geocities allowed anyone to have their own website. Pages often had animated GIFs and under construction signs.',
  },
  {
    id: 3,
    name: 'Flash Era',
    era: '2000s',
    description: 'Interactive websites with flashy animations',
    emoji: '⚡',
    fact: 'Flash made websites interactive but also caused security issues. Modern browsers no longer support it.',
  },
  {
    id: 4,
    name: 'Web 2.0',
    era: '2000s-2010s',
    description: 'Social media and user-generated content explosion',
    emoji: '🤝',
    fact: 'MySpace, Facebook, YouTube - the era when users became content creators.',
  },
  {
    id: 5,
    name: 'Mobile Web',
    era: '2010s',
    description: 'Websites optimized for smartphones',
    emoji: '📱',
    fact: 'The iPhone changed everything. Responsive design became essential.',
  },
  {
    id: 6,
    name: 'Modern Web',
    era: '2020s',
    description: 'Lightning-fast, interactive single-page applications',
    emoji: '⚡🌟',
    fact: 'React, Vue, Angular - modern frameworks make creating complex web apps easier than ever.',
  },
];

export function DigitalRoadtrip() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = locations[currentIndex];
  const canPrev = currentIndex > 0;
  const canNext = currentIndex < locations.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white p-8">
      <Link to="/" className="text-blue-300 hover:underline mb-8 inline-block">
        ← Back to Home
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-2 text-center">Digital Roadtrip</h1>
        <p className="text-center text-lg text-gray-300 mb-12">Journey through internet history</p>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-purple-800 to-pink-800 rounded-lg p-12 mb-8 border border-pink-500"
        >
          <div className="text-7xl text-center mb-6">{current.emoji}</div>
          <div className="text-center mb-4">
            <h2 className="text-4xl font-bold mb-2">{current.name}</h2>
            <div className="text-2xl text-pink-300">{current.era}</div>
          </div>
          <p className="text-xl text-center text-gray-200 mb-6">{current.description}</p>
          <div className="bg-black/40 rounded-lg p-4 border border-pink-400">
            <p className="text-gray-300">💻 {current.fact}</p>
          </div>
        </motion.div>

        <div className="flex gap-2 mb-8 justify-center">
          {locations.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-3 rounded-full transition ${
                idx === currentIndex ? 'bg-pink-500 w-8' : 'bg-gray-600 w-3 hover:bg-gray-500'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {locations.map((loc, idx) => (
            <motion.button
              key={loc.id}
              onClick={() => setCurrentIndex(idx)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-lg transition font-bold ${
                idx === currentIndex
                  ? 'bg-pink-600 ring-2 ring-pink-400'
                  : 'bg-purple-700 hover:bg-purple-600'
              }`}
            >
              <div className="text-2xl mb-2">{loc.emoji}</div>
              <div className="text-xs">{loc.era}</div>
            </motion.button>
          ))}
        </div>

        <div className="flex gap-4 justify-center">
          <motion.button
            onClick={() => setCurrentIndex((prev) => prev - 1)}
            disabled={!canPrev}
            whileHover={canPrev ? { scale: 1.05 } : {}}
            whileTap={canPrev ? { scale: 0.95 } : {}}
            className={`px-8 py-3 rounded-lg font-bold transition ${
              canPrev
                ? 'bg-indigo-600 hover:bg-indigo-700'
                : 'bg-gray-600 opacity-50 cursor-not-allowed'
            }`}
          >
            ← Previous Era
          </motion.button>
          <motion.button
            onClick={() => setCurrentIndex((prev) => prev + 1)}
            disabled={!canNext}
            whileHover={canNext ? { scale: 1.05 } : {}}
            whileTap={canNext ? { scale: 0.95 } : {}}
            className={`px-8 py-3 rounded-lg font-bold transition ${
              canNext
                ? 'bg-indigo-600 hover:bg-indigo-700'
                : 'bg-gray-600 opacity-50 cursor-not-allowed'
            }`}
          >
            Next Era →
          </motion.button>
        </div>
      </div>
    </div>
  );
}
