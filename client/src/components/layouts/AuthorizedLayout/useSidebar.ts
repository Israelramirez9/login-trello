import { useAppDispatch, useAppSelector } from '@/store';
import { handleSidebar } from '@/store/reducers/layout';


function useSidebar() {
    const isMoved = useAppSelector(state => state.layout.isMoved)
    const dispatch = useAppDispatch();

    const moveSidebar = () => {
        dispatch(handleSidebar({ isMoved: !isMoved }))  
       
    }
    return {
        moveSidebar,
        isMoved
    }


}

export default useSidebar