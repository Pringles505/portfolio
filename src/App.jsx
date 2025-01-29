import React from 'react';
import ProfileSection from './ProfileSection';
import MainContent from './MainContent';

function App() {
  return (
    <>
      <ProfileSection />
      <div id="main-content">
        <MainContent />
      </div>
    </>
  );
}

export default App;