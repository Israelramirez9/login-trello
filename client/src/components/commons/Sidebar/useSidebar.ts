import { useAppDispatch, useAppSelector } from '@/store';
import { handleSidebar } from '@/store/reducers/moveSlider';


function useSidebar() {
    const isMoved = useAppSelector(state => state.sidebar.isMoved)
    const dispatch = useAppDispatch();

    const moveSidebar = () => {
        dispatch(handleSidebar({ isMoved: !isMoved }))
        console.log("aqui")
        console.log(isMoved)


        // isMoved ? slider.style.left = '0' : slider.style.left = '-20rem';
    }
    return {
        moveSidebar,
        isMoved
    }


}

export default useSidebar