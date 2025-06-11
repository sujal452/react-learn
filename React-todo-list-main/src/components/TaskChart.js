import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#66BB6A', '#FF7043'];

const TaskChart = ({ taskData }) => {
  if (!taskData || taskData.length === 0) {
    taskData = [
      { name: 'Pending', value: 0 },
      { name: 'Done', value: 0 },
    ];
  }

  return (
    <div className="task-chart">
      <h2>Today's Tasks</h2>
      <PieChart width={160} height={160}>
        <Pie
          data={taskData}
          cx={80}
          cy={80}
          innerRadius={46}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {taskData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <div className="task-legend">
        <span style={{ color: COLORS[0] }}>● Pending</span> &nbsp;
        <span style={{ color: COLORS[1] }}>● Done</span>
      </div>
    </div>
  );
};

export default TaskChart;
