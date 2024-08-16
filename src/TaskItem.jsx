import React from 'react';

function TaskItem({ task, onToggleComplete, onDelete }) {
  return (
    <li className={`flex items-center justify-between p-2 border-b ${task.completed ? 'line-through text-gray-500' : ''}`}>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className="cursor-pointer"
        />
        <span>{task.name}</span>
      </div>
      <button 
        onClick={() => onDelete(task.id)} 
        className="text-red-500 hover:text-red-700 focus:outline-none"
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
