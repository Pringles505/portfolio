import React, { useEffect, useState } from "react";
import "./App.scss";
import "./ProfileSection.scss";

function ProfileSection() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Background Image (Behind Everything) */}
      <div
        className="profile-image"
        style={{
          backgroundPositionY: `${offsetY * -0.5}px`, // Parallax Effect
        }}
      ></div>

      {/* Foreground Section (On Top of Background) */}
      <div className="profile-section">
        <div className="profile-text">
          <h1>Hello, I'm Miguel Mascaró</h1>
          <p>I'm a software development student.</p>
          <button id="scrollButton" onClick={scrollToContent}>
            Don't Believe Me?
          </button>

          {/* Scroll Down Indicator */}
          <div className="scroll-down">
            <p>Scroll Down</p>
            <span className="arrow">↓</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSection;
