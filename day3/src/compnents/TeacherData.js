import React, { useState } from 'react';

export default function TeacherData({ data }) {
    const [teacherData, setTeacherData] = useState(data);

    const addTeacher = () => {
        const newRec = { id: teacherData.length + 1, name: "abc", sub: "hindi" };
        setTeacherData([...teacherData, newRec]);
    };

    return (
        <div>
            <table border="23" cellSpacing="5" cellPadding="5">
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>NAME</th>
                        <th>SUBJECT</th>
                    </tr>
                </thead>
                <tbody>
                    {teacherData.map((teacher) => (
                        <tr key={teacher.id}>
                            <td>{teacher.id}</td>
                            <td>{teacher.name}</td>
                            <td>{teacher.sub}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={addTeacher}>ADD</button>
        </div>
    );
}
