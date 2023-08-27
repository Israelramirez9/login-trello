import useSidebar from "@/components/commons/Sidebar/useSidebar";


function useNavbarLayout() {
    const { moveSidebar } = useSidebar();
    return {
        moveSidebar
    }


}

export default useNavbarLayout