// src/animation/Animate.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Animate = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2>Animation Component</h2>
    </motion.div>
  );
};

export default Animate;
