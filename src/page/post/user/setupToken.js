import {setupToken} from "./authReducer";
export const HandleToken = async (store) => {
 
   const {dispatch} = store;
   return dispatch(setupToken());
  }
