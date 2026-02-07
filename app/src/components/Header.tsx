import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="relative flex flex-col items-center justify-center pt-12 pb-8"
    >
      {/* Floating Plant Decoration */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute right-4 md:right-20 top-8 w-16 md:w-24 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="text-6xl"
        >
          🌿
        </motion.div>
      </motion.div>

      {/* Logo */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold tracking-wide"
        style={{ fontFamily: '"Comic Sans MS", cursive' }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <span>WONDER</span>
        <span className="inline-block mx-1">🚀</span>
        <span>HUB</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-2 text-gray-600 text-sm md:text-base"
      >
        interactive experiences by PlayVerse
      </motion.p>
    </motion.header>
  );
}
