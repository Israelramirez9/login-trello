import React, { useState } from 'react'
import swal from 'sweetalert';
import { useRouter } from 'next/router';
import { startSession } from '@/services/session.services';
import { useAppDispatch } from '@/store';
import { handleLogin } from '@/store/reducers/auth';
import { handleToast } from '@/utils/toast';
function useForm() {

    const dispatch = useAppDispatch();

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
                    dispatch(handleLogin({
                        accessToken: resp.tokenSession,
                        refreshToken: resp.refreshToken
                    }))
                    handleToast('user found')
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