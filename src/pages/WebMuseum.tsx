import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Website {
  id: number;
  name: string;
  year: string;
  description: string;
  emoji: string;
  legacy: string;
}

const websites: Website[] = [
  {
    id: 1,
    name: 'MySpace',
    year: '2003-2008',
    description: 'The original social network where everyone had a customized profile',
    emoji: '👥',
    legacy: 'Pioneered social networking and user-generated profiles with custom CSS',
  },
  {
    id: 2,
    name: 'Newgrounds',
    year: '2000s-Present',
    description: 'Platform for flash animations and web creativity',
    emoji: '🏯',
    legacy: 'Launched the careers of animators and game developers',
  },
  {
    id: 3,
    name: 'DeviantArt',
    year: '2000-Present',
    description: 'Largest online art community',
    emoji: '🎨',
    legacy: 'Gave digital artists a global platform',
  },
  {
    id: 4,
    name: 'Ebaumsworld',
    year: '2001-Present',
    description: 'Ultimate viral content aggregator',
    emoji: '😂',
    legacy: 'Pioneered viral content before YouTube',
  },
  {
    id: 5,
    name: 'YTMND',
    year: '2005-Present',
    description: 'You\'re The Man Now Dog - absurdist humor site creator',
    emoji: '🤪',
    legacy: 'Created the "YTMND" meme format',
  },
  {
    id: 6,
    name: '4chan',
    year: '2003-Present',
    description: 'Imageboard and meme factory',
    emoji: '👾',
    legacy: 'Origin of countless internet memes and culture',
  },
  {
    id: 7,
    name: 'Homestar Runner',
    year: '2000-Present',
    description: 'Independent webcomic / flash site',
    emoji: '⭐',
    legacy: 'Proved indie creators could build massive audiences',
  },
  {
    id: 8,
    name: 'Reddit',
    year: '2005-Present',
    description: 'The front page of the internet',
    emoji: '🗳️',
    legacy: 'Created the aggregated community discussion model',
  },
];

export function WebMuseum() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = websites[currentIndex];
  const canPrev = currentIndex > 0;
  const canNext = currentIndex < websites.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
      <Link to="/" className="text-blue-300 hover:underline mb-8 inline-block">
        ← Back to Home
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-2 text-center">Web Museum</h1>
        <p className="text-center text-lg text-gray-400 mb-12">Exploring iconic websites of the internet</p>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg p-12 mb-8 border border-slate-600"
        >
          <div className="text-7xl text-center mb-6">{current.emoji}</div>
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold mb-2">{current.name}</h2>
            <div className="text-xl text-gray-300">{current.year}</div>
          </div>
          <p className="text-xl text-center text-gray-200 mb-6">{current.description}</p>
          <div className="bg-black/40 rounded-lg p-4 border border-slate-500">
            <h3 className="font-bold text-slate-300 mb-2">Legacy:</h3>
            <p className="text-gray-300">{current.legacy}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-4 gap-2 mb-8">
          {websites.map((site, idx) => (
            <motion.button
              key={site.id}
              onClick={() => setCurrentIndex(idx)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-lg transition ${
                idx === currentIndex
                  ? 'bg-slate-600 ring-2 ring-slate-400'
                  : 'bg-slate-700 hover:bg-slate-600'
              }`}
            >
              <div className="text-2xl">{site.emoji}</div>
              <div className="text-xs mt-1 text-gray-300 truncate">{site.name}</div>
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
                ? 'bg-slate-600 hover:bg-slate-500'
                : 'bg-gray-700 opacity-50 cursor-not-allowed'
            }`}
          >
            ← Previous
          </motion.button>
          <motion.button
            onClick={() => setCurrentIndex((prev) => prev + 1)}
            disabled={!canNext}
            whileHover={canNext ? { scale: 1.05 } : {}}
            whileTap={canNext ? { scale: 0.95 } : {}}
            className={`px-8 py-3 rounded-lg font-bold transition ${
              canNext
                ? 'bg-slate-600 hover:bg-slate-500'
                : 'bg-gray-700 opacity-50 cursor-not-allowed'
            }`}
          >
            Next →
          </motion.button>
        </div>
      </div>
    </div>
  );
}
