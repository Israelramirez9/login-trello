import { useAppDispatch, useAppSelector } from '@/store';
import { handleSidebar } from '@/store/reducers/moveSlider';


function useSidebar() {
    const isMoved = useAppSelector(state => state.sidebar.isMoved)
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