import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';
import CategoryService from "../../../service/category.service";

const initialState = {
    categories : [],
    category : [],
};
export const CategorySlice = createSlice({
    name : 'categoryReducer',
    initialState,
    reducers : {
        
    },
    extraReducers: (builder) => {
        builder
          .addCase(getList.fulfilled, (state, action) => {
                state.categories = action.payload.category;
                state.category = action.payload.categories;
          });
          
      },
});
export const getList = createAsyncThunk('category/list', async (page) => {
    const response = await CategoryService.index(page);
     return response;
});

//export const {  updateUtility } = CategorySlice.actions;
  
export default CategorySlice.reducer;
