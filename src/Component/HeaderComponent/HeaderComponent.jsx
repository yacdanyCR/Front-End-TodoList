import React from 'react'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import './style.css'

export const HeaderComponent = () => {
    return (
        <header>
            <div className='social__Links'>
                <a href='https://github.com/yacdanyCR' target={"_blank"} rel="noreferrer"><FaGithubSquare color='black' size={60} /></a>
                <a href='https://www.linkedin.com/in/yacdany-arguedas-mora-22592b211/' target={"_blank"} rel="noreferrer"><FaLinkedin color='blue' size={60} /></a>
                <a href='https://github.com/yacdanyCR/yacdanyCR/blob/main/jack20-21@hotmail.com'><AiOutlineMail color='black' size={60} /></a>
            </div>
        </header>
    )
}

export default HeaderComponent