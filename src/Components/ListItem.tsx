import { format } from "date-and-time";
import DeleteItem from "./DeleteItem";
import TaskStatus from "./TaskStatus";
import Edititems from "./Edititems";
import { use } from "react";

const ListItem = ({ task, delTask, toggleComplete,  setEdit }) => {
    return (
        <div className="bg-white my-3 p-4 rounded-lg flex justify-between">
            <div className="flex">
               <TaskStatus TaskID = {task.id} TaskStatus={task.completed
                
               } toggleComplete={toggleComplete}  />
                <div className="flex flex-col ms-2">
                    <span className="font-bold">{task.task}</span>
                    <span>{format(task.createdOn, 'h:mm A, DD/MM/YYYY ')}</span>
                </div>
            </div>
            <div>

                <Edititems TaskID={task.id} taskDetails={task.task} setEdit = {setEdit}  />
             <DeleteItem TaskID={task.id} delTask={delTask}/>
            </div>
        </div>
    )
}

export default ListItem