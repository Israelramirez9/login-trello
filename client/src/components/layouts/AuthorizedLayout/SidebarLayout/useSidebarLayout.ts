import useSidebar from '@/components/commons/Sidebar/useSidebar'
import React from 'react'

function useSidebarLayout() {
    const { isMoved, moveSidebar } = useSidebar();
    return {
        isMoved, moveSidebar
    }


}

export default useSidebarLayout