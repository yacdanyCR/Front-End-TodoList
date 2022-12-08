import React from 'react'
import ListTaskComponent from '../ListTaskComponent/ListTaskComponent'
import './style.css'

export const ShowingListTask = () => {
    return (
        <section>
            <div className="showing__Task">
                <ListTaskComponent />
                <ListTaskComponent />
                <ListTaskComponent />
                <ListTaskComponent />
            </div>

        </section>
    )
}

export default ShowingListTask