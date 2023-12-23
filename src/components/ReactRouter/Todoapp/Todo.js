import React, { useEffect, useState } from 'react'
import Addtask from './AddTask'
import ListTask from './ListTask'
import './Todo.css'
const Todo = () => {
    const [tasks,setTasks] = useState([
        
    ]);
    const [itemCount, setItemCount] = useState(0)
     useEffect(()=>{
       setItemCount(tasks.length)
    })

    
    const addTask = (title)=>{
       const newTask = [...tasks,{title}]
       setTasks(newTask)

    }
    const removeTask = (index) =>{
        const newTask = [...tasks]
        newTask.splice(index,1)
        setTasks(newTask)
    }
  return (
    <>
    <div className='tudo-container'>
    <div className='tudo-list'>TUDO APP</div>
    <div>
       <Addtask addTask={addTask}/>
    
    </div>
    <div >
        {tasks.map((tasks,index)=>{
            return(
         <ListTask task={tasks} key={tasks.title} removeTask={removeTask} index={index}/>
        )})}
        
    </div>
    <h2>items Added:{itemCount}</h2>
    </div>
    </>
  )
}

export default Todo