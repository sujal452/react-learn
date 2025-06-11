import React, { useState } from 'react';

const RightSidebar = ({ isOpen, section, tasks, closeRightSidebar }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setShowDatePicker(false); // Hide the date picker after selecting a date
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const importantTasks = tasks.filter(task => task.important);

  return (
    <div className={`right-sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={closeRightSidebar}>Close</button>
      {section === 'important' ? (
        <div>
          <h2>Important Tasks</h2>
          <ul className="task-list">
            {importantTasks.map(task => (
              <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                <input type="checkbox" checked={task.completed} readOnly />
                {task.text}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2>Task Details</h2>
          <div className="task-details">
            <p>Task: Buy groceries</p>
            <div className="task-options">
              <button>Add Step</button>
              <button>Set Reminder</button>
              <button onClick={toggleDatePicker}>Add Due Date</button>
              {showDatePicker && (
                <input
                  type="date"
                  value={selectedDate || ''}
                  onChange={handleDateChange}
                  style={{ display: 'block' }} // Display the date picker when visible
                />
              )}
              <button>Repeat</button>
              <button>Add Notes</button>
            </div>
            <p>Created Today</p>
            <button className="delete-button">Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightSidebar;
