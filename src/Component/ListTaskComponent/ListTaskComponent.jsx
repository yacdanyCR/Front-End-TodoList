import React, { useContext } from 'react'
import { TiDelete } from "react-icons/ti";
import { TaskContext } from '../../Context/TaskContext';
import { randColor } from '../../services/generateRandomColor';
import { addCompleted, deleteTask } from '../../services/TaskServices/TaskService';
import './style.css'

export const ListTaskComponent = (props) => {
    const { Tasks, setTasks } = useContext(TaskContext);

    const handleDelete = (id) => {
        const objDeleted = Tasks.filter((el) => el.id !== id);
        setTasks(objDeleted)
        deleteTask(id);
    }

    return (
        <div className='task_list' style={{ backgroundColor: `${randColor()}` }} key={props.index}>
            {props.completeded === 1
                ? <><input type="checkbox" id="scales" name="scales" defaultChecked={true} onClick={(e) => addCompleted(props.id, e.target.checked)}></input><label htmlFor="task" className='task_Completed' >{props.task}</label></>

                : <><input type="checkbox" id="scales" name="scales" defaultChecked={false} onClick={(e) => addCompleted(props.id, e.target.checked)}></input><label htmlFor="task">{props.task}</label></>
            }
            <TiDelete size={30} color={"red"} onClick={() => handleDelete(props.id)} />
        </div>
    )
}

export default ListTaskComponent