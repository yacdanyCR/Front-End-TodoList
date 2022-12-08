import React from 'react'
import HeaderComponent from '../Component/HeaderComponent/HeaderComponent'
import InputComponent from '../Component/InputComponent/InputComponent'
import ShowingListTask from '../Component/ShowingListTask/ShowingListTask'

export const IndexPage = () => {
    return (
        <>
            <HeaderComponent />
            <main>
                <InputComponent />
                <ShowingListTask />
            </main>
        </>
    )
}

export default IndexPage