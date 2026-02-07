import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export function NewsletterButton() {
  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ scale: 1.02, backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      whileTap={{ scale: 0.98 }}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm transition-colors"
    >
      <Mail className="w-4 h-4" />
      <span className="hidden sm:inline">Get new posts</span>
    </motion.button>
  );
}
