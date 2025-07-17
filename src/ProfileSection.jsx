import React, { useEffect, useState } from "react";
import "./App.scss";
import "./ProfileSection.scss";
import ProjectPortfolio from "./ProjectPortfolio"; 

function ProfileSection() { 
  const [offsetY, setOffsetY] = useState(0);
  const [showMainContent, setShowMainContent] = useState(false);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
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
      <div
        className="profile-image"
        style={{ backgroundPositionY: `${offsetY * -0.5}px` }}
      ></div>

      <div className="profile-section">
        <div className="profile-text">
          <h1>Hello, I'm Miguel Mascaró</h1>
          <p>I'm a software development student.</p>
          <button id="scrollButton" onClick={scrollToContent}>
            Don't Believe Me?
          </button>
        </div>
      </div>
      <ProjectPortfolio visible={showMainContent} />
    </>
  );
}

export default ProfileSection;
