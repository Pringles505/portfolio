import React from 'react';
import './App.css';

function MainContent() {
  return (
    <div className="main-content">
      <div className="section">
        <h2>Who am I?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="section">
        <h2>What have I done?</h2>
        <p>Quisque vehicula, lorem nec auctor posuere, sapien eros vulputate purus.</p>
      </div>
      <div className="section">
        <h2>Check me out on</h2>
        <p>Praesent non turpis a tortor sodales aliquam.</p>
      </div>
    </div>
  );
}

export default MainContent;
