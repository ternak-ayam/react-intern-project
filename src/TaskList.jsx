import React from 'react';
import TaskItem from './TaskItem.jsx';

function TaskList({ tasks, onToggleComplete, onDelete }) {
  return (
    <ul className="bg-white rounded-md shadow-md overflow-hidden">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;
