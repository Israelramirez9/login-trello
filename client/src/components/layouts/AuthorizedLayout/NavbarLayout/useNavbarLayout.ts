import useSidebar from "@/components/layouts/AuthorizedLayout/useSidebar";
import { useAppDispatch } from "@/store";
import { handleLogout } from "@/store/reducers/auth";

function useNavbarLayout() {
    const { moveSidebar } = useSidebar();
    const dispatch = useAppDispatch();

    const logout = () => {
        dispatch(handleLogout())
        console.log("aqui")
    }
    return {
        moveSidebar,
        logout
    }


}

export default useNavbarLayout