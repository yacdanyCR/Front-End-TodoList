import React from 'react'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import './style.css'

export const HeaderComponent = () => {
    return (
        <header>
            <div className='social__Links'>
                <a href='#' target={"_blank"}><FaGithubSquare color='black' size={60} /></a>
                <a href='#' target={"_blank"}><FaLinkedin color='blue' size={60} /></a>
                <a><AiOutlineMail color='black' size={60} /></a>
            </div>
        </header>
    )
}

export default HeaderComponent