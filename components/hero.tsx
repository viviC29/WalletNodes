'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="text-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-8"
      >
        <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
          <span className="text-white text-3xl font-bold">◆</span>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold mb-4"
      >
        Wallet Nodes
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto"
      >
        Premium blockchain wallet explorer for the TON network
      </motion.p>
    </section>
  );
}
