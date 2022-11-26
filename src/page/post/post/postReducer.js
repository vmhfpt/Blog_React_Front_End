import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import postService from "../../../service/post.service";

const initialState = {
  post : {},
  post_search : []
  
};
export const postSlice = createSlice({
  name: "postReducer",
  initialState,
  reducers: {
    setValue: (state, action) => {
        
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDetail.fulfilled, (state, action) => {
        state.post = action.payload;
        
      })
      .addCase(getSearch.fulfilled, (state, action) => {
        state.post_search = action.payload;
        
      });
     
  },
});
export const getDetail = createAsyncThunk("post/detail", async (page) => {
    const response = await postService.show(page);
    return response;
  });
  export const getSearch = createAsyncThunk("post/get-search", async (page) => {
    const response = await postService.getPostSearch(page);
    return response;
  });



export const { setValue } = postSlice.actions;

export default postSlice.reducer;
