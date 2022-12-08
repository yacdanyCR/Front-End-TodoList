import React from 'react'
import { TiDelete } from "react-icons/ti";
import './style.css'

export const ListTaskComponent = () => {
    return (
        <div className='task_list'>
            <input type="checkbox" id="scales" name="scales" ></input>
            <label htmlFor="task">Learn a new language</label>
            <TiDelete size={30} color={"red"} onClick={() => alert("Eliminaste")} />
        </div>
    )
}

export default ListTaskComponent