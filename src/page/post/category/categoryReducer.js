import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';
import CategoryService from "../../../service/category.service";

const initialState = {
    categories : [],
    posts : [],
    post_tags : [],
    isLoading : false
};
export const CategorySlice = createSlice({
    name : 'categoryReducer',
    initialState,
    reducers : {
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPostByCategory.pending, (state, action) => {
            
            state.isLoading = true;
          })
          
          .addCase(getList.fulfilled, (state, action) => {
                    state.categories = action.payload;  
          })
          .addCase(getPostByCategory.fulfilled, (state, action) => {
           
            if(!action.payload.error){
                state.isLoading = false;
                state.posts = action.payload;
            }
            else {
                state.posts = null;
            }
            
      })
      .addCase(getPostByTag.pending, (state, action) => {
           
        state.isLoading = true;
      })
      .addCase(getPostByTag.fulfilled, (state, action) => {
        if(!action.payload.error){
            state.isLoading = false;
            state.post_tags = action.payload;
        }
        else {
            state.post_tags = null;
        }
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
