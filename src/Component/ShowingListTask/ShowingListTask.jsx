import React, { useEffect, useState } from 'react'
import { getTasks } from '../../services/TaskServices/TaskService'
import ListTaskComponent from '../ListTaskComponent/ListTaskComponent'
import './style.css'

export const ShowingListTask = () => {
    const [Tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks(setTasks);
    }, []);

    return (
        <section>
            <div className="showing__Task">
                {Tasks.map((el, index) => {
                    return (
                        <ListTaskComponent task={el.task} id={el.id} key={index} />
                    )
                })}
            </div>

        </section>
    )
}

export default ShowingListTask