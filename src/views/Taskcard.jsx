import React from 'react'
import "../views/Taskcard.css"
import { Trash2 } from 'lucide-react'

function TaskCard({task,deleteTask}) {

  return (
    <div className='task-card'>
      {task} 
    <Trash2 
    className='trash-img'
    onClick={()=>{
      deleteTask(task);
    }}
    />
    </div>
  )
}

export default TaskCard
