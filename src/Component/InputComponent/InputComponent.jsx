import React, { useContext, useState } from 'react'
import './style.css'
import { FcPlus } from "react-icons/fc";
import { addTask, getTasks } from '../../services/TaskServices/TaskService';
import { TaskContext } from '../../Context/TaskContext';
import { successAlert } from '../../Alerts/alerts';

export const InputComponent = () => {
    const [task, setNewTask] = useState("");
    const { setTasks } = useContext(TaskContext);

    const handleSubmit = async () => {
        const $input = document.querySelector('#input');
        await addTask(task);
        successAlert($input.value);
        await getTasks(setTasks);
        $input.value = "";
    }

    return (
        <section>
            <div className="task__Section">
                <div className="container">
                    <div className="task__Title">
                        <h3>What is in your mind?</h3>
                        <div className="task__input">
                            <input id='input' type="text" onChange={(e) => setNewTask(e.target.value)} />
                            <FcPlus size={45} onClick={() => handleSubmit()} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InputComponent