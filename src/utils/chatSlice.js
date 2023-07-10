import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constant";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        message: []
    },
    reducers: {
        addMessages: (state, action) => {
            state.message.splice(LIVE_CHAT_COUNT, 1)
            state.message.unshift(action.payload)
        }
    }
})

export const { addMessages } = chatSlice.actions

export default chatSlice.reducer