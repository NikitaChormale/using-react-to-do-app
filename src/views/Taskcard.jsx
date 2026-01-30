import React from 'react'
import { Trash2 } from 'lucide-react'

function Taskcard({ task, deleteTask }) {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 overflow-y-auto rounded-r-lg rounded-l-sm shadow-md border-l-4 border-sky-950" > 
      
      <span className="text-gray-800 text-base">
        {task}
      </span>

      <Trash2
        className="text-red-500 cursor-pointer hover:text-red-700 transition"
        onClick={() => deleteTask(task)}
      />
    </div>
  )
}

export default Taskcard
