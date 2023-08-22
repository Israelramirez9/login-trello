import React, { useContext } from 'react'
import '../styles/headerBoardTrello.css'
import { FaUserAlt } from 'react-icons/fa'
import { BsGrid3X3GapFill } from 'react-icons/bs'
import { FaPowerOff } from 'react-icons/fa'
import { UserContext } from '../../../auth/UserContext'
import swal from 'sweetalert'
import { cleanLocalStorage } from '../../../functions/cleanLocalStorage'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../../config/base'

function HeaderBoardTrello({ moveSlider }) {

    const { setGlobalState } = useContext(UserContext);

    const handleSend = (event) => {
        event.preventDefault();
        swal("Good Bye!", "good Bye 👐", "success");
        setGlobalState({ isAuthenticate: false });
        cleanLocalStorage();
    }
    return (
        <header className='header-container'>
            <div className='first-container'>
                <button className='menu-dropdown-container' onClick={moveSlider}>
                    <BsGrid3X3GapFill className='icon-menu-drop' />
                </button>
                <Link to={BASE_URL + "trello"}>
                    <div className='logo-trello-container'>
                        <img src="./images/trello-logo.png" alt="logo" />
                    </div>
                </Link>
            </div>
            <div className='second-container'>
                <Link to={BASE_URL + "updateUser"} className='icon-user-container'>
                    <FaUserAlt className='icon-user' />
                </Link>
                <button className='icon-power-off-container' onClick={handleSend}>
                    <FaPowerOff className='icon-power-off' />
                </button>
            </div>
        </header>
    )
}

export default HeaderBoardTrello