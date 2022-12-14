import React, { useEffect, useState } from 'react'
import HeaderComponent from '../Component/HeaderComponent/HeaderComponent'
import InputComponent from '../Component/InputComponent/InputComponent'
import ShowingListTask from '../Component/ShowingListTask/ShowingListTask'
import { TaskContext } from '../Context/TaskContext'
import { getTasks } from '../services/TaskServices/TaskService'

export const IndexPage = () => {
    const [Tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks(setTasks);
    }, []);

    return (
        <>
            <HeaderComponent />
            <main>
                <TaskContext.Provider value={{ Tasks, setTasks }}>
                    <InputComponent />
                    <ShowingListTask />
                </TaskContext.Provider>
            </main>
        </>
    )
}

export default IndexPage