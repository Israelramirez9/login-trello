import React, { useRef, useState, useContext } from 'react'
import { UserContext } from '../../../auth/UserContext'
import HeaderBoardTrello from './headerBoardTrello'
import '../styles/updateUser.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { updateUser, deleteUser } from '../../../services/users.services'
import swal from 'sweetalert'
function UpdateUser() {

    const { setGlobalState } = useContext(UserContext);


    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChanges = (event) => {

        setInput({ ...input, [event.target.name]: event.target.value })
    }

    const handleSend = async () => {
        if (input.name.length !== 0 || input.email.length !== 0 || input.password.length !== 0) {
            try {

             await updateUser(input);
             swal("Good job!", "successfully update user", "success");
            } catch (error) {
                console.log(error);
            }
        }else{
            swal("you must fill in someone field", "try again", "info");
        }
        setInput({
            name: "",
            email: "",
            password: ""
        })
    }
    const alertDeleteTask=()=>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this account!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your account has been deleted!", {
                icon: "success",
              });
              handleDeleteUser();
            } else {
              swal("Your account is safe!");
            }
          });
    }
    const handleDeleteUser = async () => {
        try {
            await deleteUser();
            setGlobalState({ isAuthenticate: false });
            removeAccessToken();
            removeRefreshToken();

        } catch (error) {
            console.log(error);
        }
    }
    const [showDropDown, setShowDropDown] = useState({
        showDropDownName: false,
        showDropDownEmail: false,
        showDropDownPassword: false
    })
    const dropDownContainerName = useRef();
    const dropDownContainerEmail = useRef();
    const dropDownContainerPassword = useRef();

    const handleOptionUpdateUser = (option) => {

        switch (option) {

            case 'name':
                setShowDropDown({ ...showDropDown, showDropDownName: !showDropDown.showDropDownName })
                dropDownContainerName.current.style.display = showDropDown.showDropDownName ? "none" : "flex";
                return
            case 'email':
                setShowDropDown({ ...showDropDown, showDropDownEmail: !showDropDown.showDropDownEmail })
                dropDownContainerEmail.current.style.display = showDropDown.showDropDownEmail ? "none" : "flex";
                return
            case 'password':
                setShowDropDown({ ...showDropDown, showDropDownPassword: !showDropDown.showDropDownPassword })
                dropDownContainerPassword.current.style.display = showDropDown.showDropDownPassword ? "none" : "flex";
                return
        }
        console.log(showDropDown)
    }
    return (
        <main>
            <HeaderBoardTrello />
            <div className='optiones-updateUser-container'>
                <section>
                    <button className='button-option-updateUser' onClick={() => handleOptionUpdateUser("name")}>
                        <AiOutlinePlusCircle className='plus-circle-icon' />
                        change name
                    </button>
                    <div ref={dropDownContainerName} className='drop-down-container' id="updateName-drop-down">
                        <input type="text" placeholder='write your name...' className='input-updateUser' value={input.name} name={"name"} onChange={handleChanges} />
                        <button className='send-button' onClick={handleSend}>send</button>
                    </div>
                </section>
                <section>
                    <button className='button-option-updateUser' onClick={() => handleOptionUpdateUser("email")}>
                        <AiOutlinePlusCircle className='plus-circle-icon' />
                        change email
                    </button>
                    <div ref={dropDownContainerEmail} className='drop-down-container' id="updateEmail-drop-down">
                        <input type="email" placeholder='write your new email...' className='input-updateUser' value={input.email} name={"email"} onChange={handleChanges} />
                        <button className='send-button' onClick={handleSend}>send</button>
                    </div>
                </section>
                <section>
                    <button className='button-option-updateUser' onClick={() => handleOptionUpdateUser("password")}>
                        <AiOutlinePlusCircle className='plus-circle-icon' />
                        change password
                    </button>
                    <div ref={dropDownContainerPassword} className='drop-down-container' id="updatePassword-drop-down">
                        <input type="password" placeholder='new Password' className='input-updateUser' value={input.password} name={"password"} onChange={handleChanges} />
                        <button className='send-button' onClick={handleSend}>send</button>
                    </div>
                </section>
                <section>
                    <button className='button-option-updateUser' onClick={alertDeleteTask}>
                        <BsFillTrashFill className='plus-circle-icon' />
                        delete account
                    </button>
                </section>
            </div>

        </main>
    )
}

export default UpdateUser