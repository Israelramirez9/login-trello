import { createUser } from '@/services/users.services';
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';
import { useRouter } from 'next/router';
function useForm() {
    const { push } = useRouter();
    const [passwordConditions, setPasswordConditions] = useState([
        {
            string: "password must be between 8 and 16 characters",
            validated: false
        }, {
            string: "at least one digit",
            validated: false
        }, {
            string: "at least one lowercase and at least one uppercase",
            validated: false
        }
    ])

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        passwordrepeated: ''
    });


    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });


    }


    useEffect(() => {
        validatingPasswordWithRegex(input.password)
    }, [input])

    const validatingPasswordWithRegex = (password: string) => {
        const RegexCases = [/^\S{8,16}$/, /[0-9]/g, /[A-Z]/g];
        setPasswordConditions(passwordConditions.map((condition, index) => {
            if (!RegexCases[index].test(password)) {
                condition.validated = false;
            } else {
                condition.validated = true;
            }
            return condition
        }))

    }

    const handleSend: React.FormEventHandler<HTMLFormElement> = async (event) => {

        event.preventDefault();
        console.log(input)
        /**
         * valido que todos los campos estén llenos 
         */
        if (input.name.length === 0 && input.email.length === 0 && input.password.length === 0 && input.passwordrepeated.length === 0) {
            swal("you must fill in all the fields", "try again", "info")
            return
        }

        /**
         * verifico que las contraseñas coincidan
         */
        if (input.password !== input.passwordrepeated || input.password.length === 0) {
            swal("Passwords must match", "try again", "info")
            return
        }

        /**
         * verifico que las contraseñas sean seguras con regex
         */
        if (!passwordConditions.every((condition) => condition.validated)) {

            swal('the password does not follow the instructions', 'try again', 'info')
            return
        }

        /**
         * mando solicitud para crear el usuario
         */
        try {
            const resp = await createUser(input)
            swal("Good job!", "successfully registered user", "success");
            push('/login')

        } catch (error) {
            console.log(error)
            swal("email already registered", "use another email", "error");
        }



    }
    return {
        handleSend,
        handleChange,
        input,
        passwordConditions
    }
}

export default useForm