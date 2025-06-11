import React, { useState } from 'react';
import './App.css';

function App() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="App">
      <button className="hamburger" onClick={toggleSidebar}>
        &#9776; Menu
      </button>

      <div className={sidebar ? 'sidebar active' : 'sidebar'}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <ul className="sidebar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#info">Info</a></li>
          <li><a href="#help">Help</a></li>
        </ul>
      </div>

      {sidebar && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
}

export default App;
