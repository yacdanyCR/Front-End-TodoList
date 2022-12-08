import React, { useState } from 'react'
import './style.css'
import { FcPlus } from "react-icons/fc";
import { addTask } from '../../services/TaskServices/TaskService';

export const InputComponent = () => {
    const [task, setTask] = useState("");

    return (
        <section>
            <div className="task__Section">
                <div className="container">
                    <div className="task__Title">
                        <h3>What is in your mind?</h3>
                        <div className="task__input">
                            <input type="text" onChange={(e) => setTask(e.target.value)} />
                            <FcPlus size={45} onClick={() => addTask(task)} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InputComponent