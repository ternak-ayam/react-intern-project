import React, { useState } from 'react';
import TaskList from './TaskList.jsx';
import TaskForm from './TaskForm.jsx';
import Title from './Title.jsx';
import TombolMobil from './Mobil.jsx';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Learn React', completed: false },
    { id: 2, name: 'Build a Todo App', completed: false },
  ]);

  const addTask = (taskName) => {
    setTasks([
      ...tasks,
      { id: Date.now(), name: taskName, completed: false },
    ]);
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>Todo List</h1>
      
      <div className="mb-8">
        <Title salam="Pagi Nanda" />
      </div>

      <div className="mb-8">
        <TombolMobil />
      </div>

        <Title salam="Pagi rah" />
    

      <div className="mb-8">
        <TaskForm onAddTask={addTask} />
      </div>
      
      <div className="mb-8">
        <TaskList tasks={tasks} onToggleComplete={toggleComplete} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App;
