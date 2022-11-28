import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import postService from "../../../service/post.service";

const initialState = {
  post : {},
  post_search : [],
  comments : [],
  user : {}
};
export const postSlice = createSlice({
  name: "postReducer",
  initialState,
  reducers: {
    setValueUser: (state, action) => {
          state.user = action.payload;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDetail.fulfilled, (state, action) => {
        state.post = action.payload;
        state.comments = action.payload.result.Post_comments;

      })
      .addCase(getSearch.fulfilled, (state, action) => {
      
        state.post_search = action.payload;
        
      })
      .addCase(postComment.fulfilled, (state, action) => {
        // console.log(action.payload);
         state.comments = action.payload;
       // state.post_search = action.payload;
        
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
  export const postComment = createAsyncThunk("post/add-comment", async (data) => {
    const response = await postService.postComment(data);
    return response;
  });


export const { setValueUser } = postSlice.actions;

export default postSlice.reducer;
