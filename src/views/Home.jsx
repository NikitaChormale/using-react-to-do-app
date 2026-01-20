import React, { useEffect, useState } from 'react'
import "./Home.css"
import Taskcard from './taskcard';

function Home() {
const [tasks,setTasks] = useState([
 
]);
const [newTask, setNewTask]=useState("");
useEffect(()=>{
  const savedTasks= JSON.parse(localStorage.getItem("task"));
  if(savedTasks){
    setTasks(savedTasks);
  }
}, 
[]);


const addTask = ()=>{
  const updateTasks=[newTask, ...tasks];
       setTasks(updateTasks);
        localStorage.setItem("tasks",JSON.stringify(updateTasks));
         setNewTask("");
};

const deleteTask =(taskname) =>{
  const filterTask=tasks.filter((task) => task !== taskname);
   setTasks(filterTask)
   localStorage.setItem("tasks",JSON.stringify(filterTask))

};
  return (
    <div>
        <h1 className='app-heading'>To Do App</h1>
        <p className='app-subheading'>Manage your Tasks Effiency with 
          this simple ToDo App.</p>

          <div 
          className='task-list'>
          {tasks.map((task,index)=>{
            return <Taskcard 
            key={index} 
            task={task}
            deleteTask={deleteTask}/>
          })}
  </div>
      <div className='todo-app-container'>
       <input type="text"
        className='input-task'
        value={newTask}
        onChange={(e)=>{
          setNewTask(e.target.value);
        }}
        />
       <button className='btn-task' 
       onClick={addTask}>
        Add Task
        </button>
      </div>
    </div>
  );
}

export default Home
