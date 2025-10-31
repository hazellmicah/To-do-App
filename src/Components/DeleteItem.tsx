import React from 'react'

const DeleteItem = ({TaskID, delTask}) => {
  const handleDelete = () => {
    delTask(TaskID);
  }
  return (
    <>
    <i className="fa-solid fa-trash text-xl relative top-3 mx-2" onClick={handleDelete}></i> 
    
    
    </>
  )
}

export default DeleteItem