import { createUser } from '@/services/users.services';
import React, { useState } from 'react'
import swal from 'sweetalert';

function useForm() {

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    }

    const handleSend: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        if (input.name.length !== 0 && input.email.length !== 0 && input.password.length !== 0) {
            try {
                const resp = await createUser(input)
                swal("Good job!", "successfully registered user", "success");
               
            } catch (error) {
                console.log(error)
                swal("email already registered", "use another email", "error");
            }
        } else {
            swal("you must fill in all the fields", "try again", "info");
        }


    }
    return {
        handleSend,
        handleChange,
        input
    }
}

export default useForm