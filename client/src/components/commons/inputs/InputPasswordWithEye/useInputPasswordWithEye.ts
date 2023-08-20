import { useState } from 'react'

function useInputPasswordWithEye() {
    const [showPassword, setShowPassword] = useState(false);
    const handleVisibilityPassword = () => {
        setShowPassword(!showPassword)

    }
    return {
        showPassword,
        handleVisibilityPassword
    }


}

export default useInputPasswordWithEye