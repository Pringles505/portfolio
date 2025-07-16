import React, { useEffect, useState } from "react";
import "./App.scss";
import "./ProfileSection.scss";

function ProfileSection() {
  const [offsetY, setOffsetY] = useState(0);
  const [showMainContent, setShowMainContent] = useState(false);

  const handleScroll = () => {
    setOffsetY(window.scrollY);

    // If user scrolls past 150px, reveal content
    if (window.scrollY > 100 && !showMainContent) {
      setShowMainContent(true);
    }
  };

  const scrollToContent = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: "smooth", block: "start" });
      setShowMainContent(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showMainContent]);

  return (
    <>
      {/* Background Image */}
      <div
        className="profile-image"
        style={{
          backgroundPositionY: `${offsetY * -0.5}px`,
        }}
      ></div>

      {/* Foreground Section */}
      <div className="profile-section">
        <div className="profile-text">
          <h1>Hello, I'm Miguel Mascaró</h1>
          <p>I'm a software development student.</p>
          <button id="scrollButton" onClick={scrollToContent}>
            Don't Believe Me?
          </button>
        </div>
      </div>

      {/* Content Below (Initially Hidden) */}
      <div
        id="main-content"
        className={`main-content ${showMainContent ? "visible" : ""}`}
      >
        <div className="text-wrapper">
          <h2>This is where it gets real.</h2>
          <p>You scrolled. Or maybe you clicked. Either way... welcome.</p>
        </div>
      </div>
    </>
  );
}

export default ProfileSection;
