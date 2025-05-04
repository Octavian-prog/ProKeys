// src/animation/ScrollingSection.tsx
import React from 'react';
import { motion } from 'framer-motion';


const ScrollingSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="scrolling-section"
    >
      <h2>Scroll-triggered Animation Section</h2>
      <p>This section will animate as you scroll.</p>
    </motion.div>
  );
};

export default ScrollingSection;
