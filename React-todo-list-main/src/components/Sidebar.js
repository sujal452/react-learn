import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faCalendarDay, faStar, faListAlt, faUserPlus, faPlus, faBars } from '@fortawesome/free-solid-svg-icons';
import TaskChart from './TaskChart';

const Sidebar = ({ taskData, isOpen, toggleSidebar, toggleRightSidebar }) => {
  return (
    <div className={`sidebar-container ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-content">
          <div className="profile-section">
          <img src="/profile.jpg" alt="Profile" className="profile-pic" />
          <p>Hey, ABCD.</p>
          </div>
          <nav>
            <a href="#all-tasks" onClick={() => toggleRightSidebar('all-tasks')}><FontAwesomeIcon icon={faTasks} /> All Tasks</a>
            <a href="#today" onClick={() => toggleRightSidebar('today')}><FontAwesomeIcon icon={faCalendarDay} /> Today</a>
            <a href="#important" onClick={() => toggleRightSidebar('important')}><FontAwesomeIcon icon={faStar} /> Important</a>
            <a href="#planned" onClick={() => toggleRightSidebar('planned')}><FontAwesomeIcon icon={faListAlt} /> Planned</a>
            <a href="#assigned" onClick={() => toggleRightSidebar('assigned')}><FontAwesomeIcon icon={faUserPlus} /> Assigned to me</a>
            <a href="#add-list" onClick={() => toggleRightSidebar('add-list')}><FontAwesomeIcon icon={faPlus} /> Add list</a>
          </nav>
          <TaskChart taskData={taskData} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
