import React, { useContext } from 'react'
import { TaskContext } from '../../Context/TaskContext'
import ListTaskComponent from '../ListTaskComponent/ListTaskComponent'
import LoaderComponent from '../LoaderComponent/LoaderComponent'
import './style.css'

export const ShowingListTask = () => {
    const { Tasks } = useContext(TaskContext);
    return (
        <section>
            <div className="showing__Task">
                {Tasks.length === 0
                    ? <LoaderComponent />
                    : Tasks.map((el, index) => {
                        return (
                            <ListTaskComponent task={el.task} id={el.id} key={index} completeded={el.completeded} />
                        )
                    })
                }
            </div>

        </section>
    )
}

export default ShowingListTask