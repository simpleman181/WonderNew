import { motion } from 'framer-motion';
import { Mail, Twitter, Coffee } from 'lucide-react';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="mt-16 pb-8 text-center"
    >
      <p className="text-gray-600 text-sm mb-4">
        Hi! Welcome to WonderHub. This is where we create fun interactive web experiences.
      </p>

      <div className="flex items-center justify-center gap-2 flex-wrap">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span>Newsletter</span>
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Twitter className="w-4 h-4" />
          <span>Twitter</span>
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Coffee className="w-4 h-4" />
          <span>Support Us</span>
        </a>
      </div>

      <div className="mt-6 text-sm text-gray-500">
        <span>Contact - </span>
        <a
          href="mailto:hello@wonderhub.fun"
          className="hover:underline"
        >
          hello@wonderhub.fun
        </a>
      </div>

      <div className="mt-2 text-sm text-gray-400">
        <a
          href="#"
          className="hover:underline"
        >
          Privacy Policy
        </a>
      </div>

      <div className="mt-6 text-xs text-gray-400">
        © 2025 WonderHub. All rights reserved.
      </div>
    </motion.footer>
  );
}
