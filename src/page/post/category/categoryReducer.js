import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';
import CategoryService from "../../../service/category.service";

const initialState = {
    categories : [],
    posts : [],
    post_tags : []
};
export const CategorySlice = createSlice({
    name : 'categoryReducer',
    initialState,
    reducers : {
        
    },
    extraReducers: (builder) => {
        builder
          .addCase(getList.fulfilled, (state, action) => {
                state.categories = action.payload;
                
          })
          .addCase(getPostByCategory.fulfilled, (state, action) => {
            state.posts = action.payload;
            
      })
      .addCase(getPostByTag.fulfilled, (state, action) => {
        state.post_tags = action.payload;
     });
          
      },
});
export const getList = createAsyncThunk('category/list', async () => {
    const response = await CategoryService.index();
     return response;
});
export const getPostByCategory = createAsyncThunk('post-category/list', async (page) => {
    const response = await CategoryService.getPostByCategory(page);
     return response;
});
export const getPostByTag = createAsyncThunk('post-tag/list', async (page) => {
    const response = await CategoryService.getPostByTag(page);
     return response;
});
//export const {  updateUtility } = CategorySlice.actions;
  
export default CategorySlice.reducer;
