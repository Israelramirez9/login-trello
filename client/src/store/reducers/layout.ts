import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Sidebar = {
    isMoved: boolean
}
export const layoutSlice = createSlice({
    name: 'layout',
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

export const { handleSidebar } = layoutSlice.actions
export default layoutSlice.reducer;
