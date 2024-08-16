import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      onAddTask(taskName);
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="flex-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
        placeholder="Enter new task"
      />
      <button 
        type="submit" 
        className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
