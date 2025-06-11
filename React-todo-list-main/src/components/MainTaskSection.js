import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSync, faCalendarPlus, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';

const MainTaskSection = ({ setTaskData, isSidebarOpen, closeRightSidebar }) => {
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

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: tasks.length + 1, text: newTask, completed: false, important: false }]);
      setNewTask('');
    }
    updateTaskData();
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    updateTaskData();
  };

  const markAsImportant = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, important: !task.important } : task));
    updateTaskData();
  };

  const updateTaskData = () => {
    setTaskData([
      { name: 'Pending', value: tasks.filter(task => !task.completed).length },
      { name: 'Done', value: tasks.filter(task => task.completed).length },
      { name: 'Important', value: tasks.filter(task => task.important).length },
    ]);
  };

  const sortedTasks = [...tasks].sort((a, b) => a.completed - b.completed);

  return (
    <div className={`main-task-section ${!isSidebarOpen ? 'full-width' : ''}`}>
      <div className="add-task">
        <input
          type="text"
          placeholder="Add A Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faSync} />
        <FontAwesomeIcon icon={faCalendarPlus} />
        <button onClick={addTask}><FontAwesomeIcon icon={faPlus} /> ADD TASK</button>
      </div>
      <ul className="task-list">
        {sortedTasks.map(task => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTaskCompletion(task.id)} />
            {task.text}
            {!task.completed && <FontAwesomeIcon icon={faStar} onClick={() => markAsImportant(task.id)} style={{ color: task.important ? 'yellow' : 'grey' }} />}
          </li>
        ))}
      </ul>
      <button onClick={closeRightSidebar}>Close Right Sidebar</button>
    </div>
  );
};

export default MainTaskSection;
