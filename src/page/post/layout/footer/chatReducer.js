import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';

import ChatService from "../../../../service/chat.service";
const initialState = {
    messengers : [],
    totalAlert : 0,
    showTab : false
};
export const ChatSlice = createSlice({
    name : 'chatReducer',
    initialState,
    reducers : {
        setChat: (state, action) => {
           // state.messengers = action.payload;
           state.messengers.push(action.payload);
           
        },
        setAlert: (state, action) => {
            // state.messengers = action.payload;
            state.totalAlert = action.payload;
            
         },
         setShowTab: (state, action) => {
            state.showTab = action.payload;
            
         },
    },
    extraReducers: (builder) => {
        builder
        
          
          .addCase(getList.fulfilled, (state, action) => {
                    state.messengers = action.payload;  
          });
          
  
          
      },
});
export const getList = createAsyncThunk('chat/list', async () => {
    const response = await ChatService.index();
     return response;
});

export const {  setChat, setAlert, setShowTab} = ChatSlice.actions;
  
export default ChatSlice.reducer;
