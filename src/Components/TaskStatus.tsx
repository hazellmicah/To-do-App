import React from 'react'

const TaskStatus = ({TaskID, TaskStatus, toggleComplete}) => {
    const handletoggle = () => {

    toggleComplete(TaskID);
}
  return (
    <button onClick={handletoggle}>
        {TaskStatus ? <i className="fa-regular fa-square-check text-xl relative top-1"></i> :
    <i className="fa-regular fa-square text-xl relative top-1"></i>}
    </button>
  )
}

export default TaskStatus