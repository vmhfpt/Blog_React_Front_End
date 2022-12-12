import { combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import CategorySlice from '../page/post/category/categoryReducer';

import chatSlice from "../page/post/layout/footer/chatReducer";
import homeSlice from '../page/post/home/homeReducer';
import  postSlice  from '../page/post/post/postReducer';
const homeConfig = {
  key: 'homeSlide',
  storage,
};
const reducers = combineReducers({
  chat : chatSlice,
  category : CategorySlice,
  home :  homeSlice,
  post : postSlice
});
const persistedReducer = persistReducer(homeConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})
