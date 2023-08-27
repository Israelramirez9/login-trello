import useSidebar from '@/components/layouts/AuthorizedLayout/useSidebar'


function useSidebarLayout() {
    const { isMoved, moveSidebar } = useSidebar();

    return {
        isMoved, moveSidebar
    }


}

export default useSidebarLayout