import React from 'react'
import { useState } from 'react'
const Addtask = ({addTask}) => {
  const [value,setValue]=useState("")
  const addItem = ()=>{
  addTask(value)
  setValue("");
  }

  return (
    <div className='input-container'>
        <input type="text" value={value} className='input' onChange={(e)=>{setValue(e.target.value)}} placeholder='Please Add'/>
        <button className='add-btn' onClick={addItem}>ADD</button>
    </div>
  )
}

export default Addtask