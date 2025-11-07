
import React from 'react'

const Edititems = ({TaskID, taskDetails, setEdit,}) => {
    const handleEdit = () => {
        setEdit({
            id: TaskID,
            task: taskDetails,
        })

}
  return (
  
  <i onClick={handleEdit} className="fa-solid fa-pen text-xl relative top-3 mx-2"></i>
  
  )
}

export default Edititems

