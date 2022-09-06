import { combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import CategorySlice from '../page/post/category/categoryReducer';
import  authSlice  from '../page/post/user/authReducer';
import  propertySlice  from '../page/post/property/propertyReducer';
const homeConfig = {
  key: 'homeSlide',
  storage,
};
const reducers = combineReducers({
  authLogin : authSlice,
  category : CategorySlice,
  property :  propertySlice
});
const persistedReducer = persistReducer(homeConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})
