import React, { useEffect, useState } from "react";
import "./App.css";

function ProfileSection() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 // Timeout, so the scrollIntoview is completed before calling scrollBy
  const scrollToContent = () => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: "smooth" });

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
          <button id="scrollButton" onClick={scrollToContent}>Scroll to Content</button>
          <h1>Hello, I'm Miguel Mascaró</h1>
          <p>I'm a software development student.</p>
        </div>
      </div>
    </>
  );
}

export default ProfileSection;