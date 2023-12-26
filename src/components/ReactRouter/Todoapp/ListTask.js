import React, { useState } from 'react';

const ListTask = ({ task, index, removeTask }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`list-task ${isChecked ? 'checked' : ''}`}>
      <input type='checkbox' onChange={handleCheckboxChange} checked={isChecked} />
      <span>{task.title}</span>
      <button className='delete-button' onClick={() => removeTask(index)}>
        Delete
      </button>
    </div>
  );
};

export default ListTask;
