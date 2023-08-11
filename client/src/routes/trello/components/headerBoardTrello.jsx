import React, { useContext } from 'react'
import '../styles/headerBoardTrello.css'
import { FaUserAlt } from 'react-icons/fa'
import { BsGrid3X3GapFill } from 'react-icons/bs'
import { FaPowerOff } from 'react-icons/fa'
import { UserContext } from '../../../auth/UserContext'
import swal from 'sweetalert'
function HeaderBoardTrello() {

    const { setGlobalState } = useContext(UserContext);

    const handleSend = (event) => {
        event.preventDefault();
        swal("Good Bye!", "arrivederci 😉", "success");
        setGlobalState({ isAuthenticate: false, userId: null });
    }
    return (
        <header className='header-container'>
            <div className='first-container'>
                <button className='menu-dropdown-container'>
                    <BsGrid3X3GapFill className='icon-menu-drop' />
                </button>
                <div className='logo-trello-container'>
                    <img src="./images/trello-logo.png" alt="logo" />
                </div>
            </div>
            <div className='second-container'>
                <button className='icon-user-container'>
                    <FaUserAlt className='icon-user' />
                </button>
                <button className='icon-power-off-container' onClick={handleSend}>
                    <FaPowerOff className='icon-power-off' />
                </button>
            </div>
        </header>
    )
}

export default HeaderBoardTrello