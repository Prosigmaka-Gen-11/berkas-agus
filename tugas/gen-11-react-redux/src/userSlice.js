import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName:'',
    token:null,
    isLogin:false
}



export const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {
        handleAfterLogin (state, action) {
            state.firstName = action.payload.firstName
            state.token = action.payload.token
            state.isLogin = action.payload.isLogin;
            localStorage.setItem('firstName', action.payload.firstName)
            localStorage.setItem('token',action.payload.token)
        },
        logout (state) {
            localStorage.removeItem('firstName')
            localStorage.removeItem('token')
            state.isLogin = false;
            state.firstName = ''
            state.token = ''
        }
    }
})

export const { handleAfterLogin, logout } = userSlice.actions

export default userSlice.reducer