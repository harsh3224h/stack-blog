import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: {
            reducer: (state, action) => {
                state.status = true;
                state.userData = action.payload.userData;
            },
            prepare: (payload) => {
                // Handle both structures: login(userData) and login({ userData })
                const userData = payload && typeof payload === 'object' && 'userData' in payload
                    ? payload.userData
                    : payload;
                
                // Strip out functions (such as toString override from Appwrite) to make it serializable
                const serializedUserData = userData ? JSON.parse(JSON.stringify(userData)) : null;

                return {
                    payload: {
                        userData: serializedUserData,
                    },
                };
            }
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
