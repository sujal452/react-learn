import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTh, faMoon } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './components/Sidebar';
import MainTaskSection from './components/MainTaskSection';
import RightSidebar from './components/RightSidebar';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [rightSidebarSection, setRightSidebarSection] = useState(null);
  const [taskData, setTaskData] = useState([
    { name: 'Pending', value: 8 },
    { name: 'Done', value: 3 },
  ]);
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Buy groceries', completed: false, important: false },
    { id: 2, text: 'Finish project report', completed: false, important: false },
    { id: 3, text: 'Call the bank', completed: false, important: false },
    { id: 4, text: 'Schedule dentist appointment', completed: true, important: false },
    { id: 5, text: 'Plan weekend trip', completed: true, important: false },
    { id: 6, text: 'Read a book', completed: false, important: false },
    { id: 7, text: 'Clean the house', completed: false, important: false },
    { id: 8, text: 'Prepare presentation', completed: false, important: false },
    { id: 9, text: 'Update blog', completed: false, important: false },
  ]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleRightSidebar = (section) => {
    setRightSidebarSection(section);
    setIsRightSidebarOpen(true);
  };

  const closeRightSidebar = () => {
    setIsRightSidebarOpen(false);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="header">
        <div className="logo-section">
        <img src="logomark.jpg" alt="Profile" className="profile-pic" />


          <h1 className="logo-text">DoIt</h1>
        </div>
        <div className="header-icons">
          <button className="header-icon-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <button className="header-icon-button">
            <FontAwesomeIcon icon={faTh} />
          </button>
          <button className="header-icon-button" onClick={toggleDarkMode}>
            <FontAwesomeIcon icon={faMoon} />
          </button>
        </div>
      </div>
      <div className="main-content">
        <Sidebar
          taskData={taskData}
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          toggleRightSidebar={toggleRightSidebar} // Pass function to Sidebar
        />
        <MainTaskSection
          tasks={tasks}
          setTasks={setTasks}
          setTaskData={setTaskData}
          isSidebarOpen={isSidebarOpen}
        />
        <RightSidebar
          isOpen={isRightSidebarOpen}
          section={rightSidebarSection}
          tasks={tasks} // Pass tasks prop
          closeRightSidebar={closeRightSidebar} // Pass closeRightSidebar function
        />
      </div>
    </div>
  );
};

export default App;
