import { User } from "@/services/users.services";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user',
    initialState: <Partial<User>>{
        name: undefined,
        email: undefined
    },
    reducers: {
        handleChangeDataUser(state, action: PayloadAction<Partial<User>>) {
            const { name, email } = action.payload
            if (name === undefined || email === undefined) {
                return
            }
            state.name = name;
            state.email = email;
        }

    }
})

export const { handleChangeDataUser } = userSlice.actions
export default userSlice.reducer