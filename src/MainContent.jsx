import React from "react";
import { motion } from "framer-motion";
import "./App.scss";

function MainContent() {
  return (
    <section className="featured-section main-content-section">
      <motion.div
        className="featured-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="featured-title">Who am I?</h2>
        <p className="featured-description">
          Born in England’s big city, London, and raised in the quiet coastal area of Málaga, Spain.<br />
          My name is Miguel Mascaró, a passionate software engineer pursuing a degree at Immune Institute of Technology.
        </p>
        <p className="featured-description">
          When I'm not tinkering away in my latest Full-Stack project, I enjoy cooking, playing guitar, and finding holes in memory leaks in whatever deployer I'm using.
        </p>
      </motion.div>
    </section>
  );
}

export default MainContent;