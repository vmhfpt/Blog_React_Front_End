import axiosClient from '../handleApi';

const authApi = {
    login: (params) => {
      const url = '/admin/login';
      return axiosClient.post(url, { params });
    },
    logout : (id) => {
        const url = '/admin/logout';
        return axiosClient.post(url, {id});
    },
    register : (data) => {
        const url = '/admin/register';
        return axiosClient.post(url,  data );
    }
  
  }
  
  export default authApi; 