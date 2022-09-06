import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import apiToken from '../../../api/token/token';
import AuthService from '../../../service/auth.service';
const initialState = {
    name : '',
    email : '',
    id : '',
    accessToken : false,
    refreshToken : false,
    isLogin : false
}

export const authSlice = createSlice({
    name: 'authSlide',
    initialState,
    reducers: {
      login: (state, action) => {
        state.name =  action.payload.name;
        state.email = action.payload.email;
        state.id = action.payload.id;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLogin = true;
      },
      logout: (state) => {
        state.name =  '';
        state.email = '';
        state.id = '';
        state.accessToken = false;
        state.refreshToken = false;
        state.isLogin = false;
      },
      register : (state, action) => {
        state.name =  action.payload.name;
        state.email = action.payload.email;
        state.id = action.payload.id;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLogin = true;
      }
    },
    extraReducers: (builder) => {
        builder
          .addCase(setupToken.fulfilled, (state, action) => {
            state.name =  action.payload.name;
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.isLogin = action.payload.isLogin
          })
          .addCase(loginUser.fulfilled, (state, action) => {
           if(action.payload.status === "success"){
            localStorage.setItem('accessToken',action.payload.token);
            localStorage.setItem('refreshToken',action.payload.refreshToken);
              state.name =  action.payload.name;
              state.email = action.payload.email;
              state.id = action.payload.id;
              state.accessToken = action.payload.accessToken;
              state.refreshToken = action.payload.refreshToken;
              state.isLogin = true;
           }else {
            localStorage.setItem('accessToken','');
            localStorage.setItem('refreshToken','');
             state.name =  '';
             state.email = '';
             state.id = '';
             state.accessToken = false;
             state.refreshToken = false;
             state.isLogin = false;
           }
          })
          .addCase(logoutUser.fulfilled, (state, action) => {
              state.name =  '';
              state.email = '';
              state.id = '';
              state.accessToken = false;
              state.refreshToken = false;
              state.isLogin = false;
           });
         
      },
  })

  export const setupToken = createAsyncThunk('admin/handle-token', async () => {
    
    const accessToken = localStorage.getItem('accessToken');

    return await apiToken.getAccessToken(null, accessToken)
     .then((data) => {
      return {...data,
       accessToken :accessToken,
       refreshToken :  localStorage.getItem('refreshToken'),
       isLogin : true
      };
      
     })
     .catch(async (error) => {
        if(error.response.status === 403){
          const refreshToken = localStorage.getItem('refreshToken');
        return await apiToken.getRefreshToken({refreshToken : refreshToken})
         .then((dataRefreshToken) => {
          
              localStorage.setItem('accessToken',dataRefreshToken.token);
              localStorage.setItem('refreshToken',dataRefreshToken.refreshToken);
             // dispatch login
             return ({...dataRefreshToken,
              accessToken : dataRefreshToken.token,
              refreshToken : dataRefreshToken.refreshToken,
              isLogin : true
            });
         })
         .catch((errorRefreshToken) => {
             return {
                name : '',
                email : '',
                id : '',
                accessToken : false,
                refreshToken : false,
                isLogin : false
             }
         })
        }
     })
  });
  export const loginUser = createAsyncThunk('admin/login', async (data) => {
      const response = await AuthService.login(data);
      return response;
  });

  export const logoutUser = createAsyncThunk('admin/logout', async (id) => {
    const response = await AuthService.logout(id);
    return response;
});

  export const { login, logout, register} = authSlice.actions
  
  export default authSlice.reducer