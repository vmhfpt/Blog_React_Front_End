import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import HomeService from "../../../service/home.service";

const initialState = {
  home: [],
  nav : []
};
export const homeSlice = createSlice({
  name: "homeReducer",
  initialState,
  reducers: {
    setValue: (state, action) => {
     
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHome.fulfilled, (state, action) => {
         state.home = action.payload;
     
      })
      .addCase(getNav.fulfilled, (state, action) => {
        state.nav = action.payload;
       
     })
  },
});
export const getHome = createAsyncThunk("home/get-data", async () => {
    const response = await HomeService.getHome();
    return response;
  });
  export const getNav = createAsyncThunk("home/get-nav", async () => {
    const response = await HomeService.getNav();
    return response;
  });
export const { setValue } = homeSlice.actions;

export default homeSlice.reducer;
