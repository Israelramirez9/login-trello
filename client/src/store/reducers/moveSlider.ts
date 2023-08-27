import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Sidebar = {
    isMoved: boolean
}
export const moveSidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        isMoved: false
    },
    reducers: {
        handleSidebar(state, action: PayloadAction<Sidebar>) {
            const { isMoved } = action.payload;
            state.isMoved = isMoved;
        }
    }
})

export const { handleSidebar } = moveSidebarSlice.actions
export default moveSidebarSlice.reducer;
