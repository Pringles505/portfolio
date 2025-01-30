// src/components/MainContent.js
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
        viewport={{ once: true }}
      >
        <h2>Who am I?</h2>
        <div className="text-wrapper">
          <p>
            Born in England’s big city, London, and raised in the quiet coastal
            area of Málaga, Spain. My name is Miguel Mascaró, and I'm a software
            development student. I'm currently studying at Immune Institute of
            Technology in Madrid, Spain.
          </p>
        </div>
      </motion.div>

      <div className="divider"></div>

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2>What have I done?</h2>
        <div className="text-wrapper">
        <p>Developed and contributed to several projects involving web development, backend systems, and UI/UX design.</p>
        </div>
      </motion.div>

      <div className="divider"></div>

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h2>Check me out on</h2>
        <div className="text-wrapper">
          <p>Connect with me on LinkedIn, GitHub, and other platforms to see my latest work.</p>
        </div>
      </motion.div>

      <div className="divider"></div>

      <motion.div
        className="cta-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Let's Connect</h2>
        <p>Want to collaborate? Check out my work or reach out!</p>
      </motion.div>
    </div>
  );
}

export default MainContent;
