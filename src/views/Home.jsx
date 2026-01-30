import React, { useEffect, useState } from 'react';
import Taskcard from './Taskcard';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  const addTask = () => {
    if (newTask.trim() === "") return;

    const updateTasks = [newTask, ...tasks];
    setTasks(updateTasks);
    localStorage.setItem("tasks", JSON.stringify(updateTasks));
    setNewTask("");
  };

  const deleteTask = (taskname) => {
    const filterTask = tasks.filter((task) => task !== taskname);
    setTasks(filterTask);
    localStorage.setItem("tasks", JSON.stringify(filterTask));
  };

  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col items-center py-10">
      
      <h1 className="text-6xl font-bold text-red-300 mb-2">
        To Do App
      </h1>

      <p className="text-red-300  text-2xl  mb-6">
        Stay productive by managing your tasks, one step at a time.
      </p>
      <div className='w-full max-w-md p-4 h-[600px] overflow-y-auto'>
      <div className="w-full max-w-md space-y-3 mb-6 bg-red-200">
        {tasks.map((task, index) => (
          <Taskcard
            key={index}
            task={task}
            deleteTask={deleteTask}
            className = "overflow-y-auto"
          />
        ))}
      </div>
      </div>
      

      <div className="w-full max-w-md flex gap-2 fixed bottom-9 flex justify-center">
        <input
          type="text"
          className="flex-2 px-4 py-4 border rounded-lg focus:outline-none 
          focus:ring-2 focus:ring-blue-500"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task "
        />

        <button
          className="bg-red-800 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>

    </div>
  );
}

export default Home;
