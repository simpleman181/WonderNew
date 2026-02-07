import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function DopamineClicker() {
  const [clicks, setClicks] = useState(0);
  const [clickPower, setClickPower] = useState(1);
  const [autoClickers, setAutoClickers] = useState(0);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [nextParticleId, setNextParticleId] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoClickers > 0) {
        setClicks((prev) => prev + autoClickers);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [autoClickers]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setClicks((prev) => prev + clickPower);

    const id = nextParticleId;
    setNextParticleId((prev) => prev + 1);
    setParticles((prev) => [...prev, { id, x, y }]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== id));
    }, 600);
  };

  const buyClickPower = () => {
    const cost = clickPower * 10;
    if (clicks >= cost) {
      setClicks((prev) => prev - cost);
      setClickPower((prev) => prev + 1);
    }
  };

  const buyAutoClicker = () => {
    const cost = 100;
    if (clicks >= cost) {
      setClicks((prev) => prev - cost);
      setAutoClickers((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 text-white p-8">
      <Link to="/" className="text-blue-300 hover:underline mb-8 inline-block">
        ← Back to Home
      </Link>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold mb-2 text-center">Dopamine Clicker</h1>
        <p className="text-center text-lg text-gray-300 mb-8">Click for instant satisfaction</p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-black/30 rounded-lg p-4 border border-pink-500">
            <div className="text-sm text-gray-400">Total Clicks</div>
            <div className="text-3xl font-bold text-pink-400">{clicks.toLocaleString()}</div>
          </div>
          <div className="bg-black/30 rounded-lg p-4 border border-purple-500">
            <div className="text-sm text-gray-400">Click Power</div>
            <div className="text-3xl font-bold text-purple-400">+{clickPower}</div>
          </div>
        </div>

        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-full h-48 bg-gradient-to-br from-pink-500 to-red-600 rounded-lg font-bold text-white text-2xl mb-12 shadow-lg hover:shadow-pink-500/50 transform transition"
        >
          CLICK ME!
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ opacity: 1, y: 0, x: 0 }}
              animate={{ opacity: 0, y: -50, x: (Math.random() - 0.5) * 40 }}
              transition={{ duration: 0.6 }}
              className="absolute text-2xl font-bold pointer-events-none text-yellow-300"
              style={{ left: particle.x, top: particle.y }}
            >
              +{clickPower}
            </motion.div>
          ))}
        </motion.button>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <motion.button
            onClick={buyClickPower}
            disabled={clicks < clickPower * 10}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-lg font-bold transition ${
              clicks >= clickPower * 10
                ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                : 'bg-gray-600 opacity-50 cursor-not-allowed'
            }`}
          >
            <div className="text-sm">Upgrade Click</div>
            <div className="text-lg">{(clickPower * 10).toLocaleString()}</div>
          </motion.button>

          <motion.button
            onClick={buyAutoClicker}
            disabled={clicks < 100}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-lg font-bold transition ${
              clicks >= 100
                ? 'bg-green-600 hover:bg-green-700 cursor-pointer'
                : 'bg-gray-600 opacity-50 cursor-not-allowed'
            }`}
          >
            <div className="text-sm">Auto Clicker</div>
            <div className="text-lg">100</div>
          </motion.button>
        </div>

        {autoClickers > 0 && (
          <div className="bg-black/30 rounded-lg p-4 border border-green-500">
            <div className="text-sm text-gray-400">Auto Clickers</div>
            <div className="text-2xl font-bold text-green-400">{autoClickers} (+{autoClickers}/sec)</div>
          </div>
        )}
      </div>
    </div>
  );
}
