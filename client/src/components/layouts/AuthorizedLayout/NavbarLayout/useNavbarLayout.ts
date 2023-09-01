import useSidebar from "@/components/layouts/AuthorizedLayout/useSidebar";
import { getUser } from "@/services/users.services";
import { useAppDispatch } from "@/store";
import { handleLogout } from "@/store/reducers/auth";
import { handleChangeDataUser } from "@/store/reducers/user";
import { useRouter } from 'next/router';
import { useEffect } from "react";
import swal from 'sweetalert'

function useNavbarLayout() {
    const { push } = useRouter();
    const { moveSidebar } = useSidebar();
    const dispatch = useAppDispatch();

    const logout = () => {
        dispatch(handleLogout())
        push('/login')
        swal("Good Bye!", "👐", "success");
    }

    useEffect(() => {
        getUser()
            .then(data => {
                dispatch(handleChangeDataUser(data))
              
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return {
        moveSidebar,
        logout,
    }


}

export default useNavbarLayout