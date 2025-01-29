import React from "react";
import { motion } from "framer-motion";
import "./App.scss";

function MainContent() {
  return (
    <div className="main-content">
      <motion.div
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }} // Ensures it only animates once
      >
        <h2>Who am I?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </motion.div>

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2>What have I done?</h2>
        <p>Quisque vehicula, lorem nec auctor posuere, sapien eros vulputate purus.</p>
      </motion.div>

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h2>Check me out on</h2>
        <p>Praesent non turpis a tortor sodales aliquam.</p>
      </motion.div>
    </div>
  );
}

export default MainContent;
