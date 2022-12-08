import React from 'react'
import { TiDelete } from "react-icons/ti";
import { randColor } from '../../services/generateRandomColor';
import { deleteTask } from '../../services/TaskServices/TaskService';
import './style.css'

export const ListTaskComponent = (props) => {
    return (
        <div className='task_list' style={{ backgroundColor: `${randColor()}` }} key={props.index}>
            <input type="checkbox" id="scales" name="scales" ></input>
            <label htmlFor="task">{props.task}</label>
            <TiDelete size={30} color={"red"} onClick={() => deleteTask(props.id)} />
        </div>
    )
}

export default ListTaskComponent