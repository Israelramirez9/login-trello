import { FaUserAlt } from 'react-icons/fa'
import { BsGrid3X3GapFill } from 'react-icons/bs'
import { FaPowerOff } from 'react-icons/fa'
import swal from 'sweetalert'
import Link from 'next/link'
import { useAppDispatch } from '@/store'
import { handleLogout } from '@/store/reducers/auth'


function HeaderBoardTrello() {

    const dispatch = useAppDispatch();


    const handleSend = () => {        
        swal("Good Bye!", "good Bye 👐", "success");
        dispatch(handleLogout);        
    }

    return (
        <header className='header-container'>
            <div className='first-container'>
                <button className='menu-dropdown-container' onClick={moveSlider}>
                    <BsGrid3X3GapFill className='icon-menu-drop' />
                </button>
                <Link to="/trello">
                    <div className='logo-trello-container'>
                        <img src="./images/trello-logo.png" alt="logo" />
                    </div>
                </Link>
            </div>
            <div className='second-container'>
                <Link to="/updateUser" className='icon-user-container'>
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