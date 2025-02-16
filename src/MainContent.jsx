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
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>Who am I?</h2>
        <div className="text-wrapper">
          <p>
            Born in England’s big city, London, and raised in the quiet coastal
            area of Málaga, Spain. My name is Miguel Mascaró, I'm a passionate
            software engineer, pursuing a degree at Immune Institute of Technology. 
          </p>
          <p> 
            When I'm not tinkering away in m  y latest Full-Stack project, I enjoy cooking,
            playing guitar and finding holes in memory leaks in whatever deployer I'm using. 
          </p>
        </div>
      </motion.div>

      <div className="divider"></div> 

      <motion.div
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
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
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
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
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Let's Connect</h2>
        <p>Want to collaborate? Check out my work or reach out!</p>
      </motion.div>
    </div>
  );
}

export default MainContent;
