import React, { useState } from 'react';
import './App.css'; // Import CSS for styling

const App = () => {
  const [teacherData, setTeacherData] = useState([
    { id: 1, name: 'Mr. Smith', subject: 'Math', experience: 10 },
    { id: 2, name: 'Ms. Johnson', subject: 'English', experience: 8 },
    { id: 3, name: 'Mr. Lee', subject: 'Science', experience: 12 },
  ]);

  const addDummyRecord = () => {
    const newRecord = {
      id: teacherData.length + 1,
      name: 'Mr. Dummy',
      subject: 'Art',
      experience: 5,
    };
    setTeacherData([...teacherData, newRecord]);
  };

  const deleteRecord = (id) => {
    setTeacherData(teacherData.filter((teacher) => teacher.id !== id));
  };

  return (
    <div className="app-container">
      <h2 className="app-heading">Teacher Table</h2>
      <button onClick={addDummyRecord} className="add-record-btn">
        Add Record
      </button>
      <TeacherTable data={teacherData} onDeleteRecord={deleteRecord} />
    </div>
  );
};

const TeacherTable = ({ data, onDeleteRecord }) => {
  return (
    <div className="table-container">
      <table className="teacher-table">
        <thead>
          <tr>
            <th>Action</th>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Experience (Years)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((teacher) => (
            <tr key={teacher.id}>
              <td>
                <button
                  onClick={() => onDeleteRecord(teacher.id)}
                  className="delete-btn"
                >
                  🗑️
                </button>
              </td>
              <td>{teacher.id}</td>
              <td>{teacher.name}</td>
              <td>{teacher.subject}</td>
              <td>{teacher.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
