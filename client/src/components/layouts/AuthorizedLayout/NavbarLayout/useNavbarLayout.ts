import useSidebar from "@/components/layouts/AuthorizedLayout/useSidebar";
import { useAppDispatch } from "@/store";
import { handleLogout } from "@/store/reducers/auth";
import { useRouter } from 'next/router';
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


    return {
        moveSidebar,
        logout,

    }


}

export default useNavbarLayout