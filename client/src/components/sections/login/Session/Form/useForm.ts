import React, { useState } from 'react'
import swal from 'sweetalert';
import { useRouter } from 'next/router';
import { startSession } from '@/services/session.services';
import { setAccessToken, setRefreshToken } from '@/helpers/token';

function useForm() {

    const { push } = useRouter();

    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    }

    const handleSend: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        if (input.email.length !== 0 && input.password.length !== 0) {
            try {
                const resp = await startSession(input);
                if (resp.isAuthenticate) {
                    swal("Good job!", "user found", "success");
                    setRefreshToken(resp.refreshToken);
                    setAccessToken(resp.tokenSession);
                    push('/')
                }
                
            } catch (error) {
                console.log(error)
                swal("Error", "user or password Incorrect!", "error");
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