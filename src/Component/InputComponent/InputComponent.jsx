import React from 'react'
import './style.css'
import { FcPlus } from "react-icons/fc";

export const InputComponent = () => {
    return (
        <section>
            <div className="task__Section">
                <div className="container">
                    <div className="task__Title">
                        <h3>What is in your mind?</h3>
                        <div className="task__input">
                            <input type="text" />
                            <FcPlus size={45} onClick={() => alert("diste click")} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InputComponent