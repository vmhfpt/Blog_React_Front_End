import axiosClient from '../handleApi';

const HomeApi = {
   getHome : () => {
        const url = '/home';
        return axiosClient.get(url);
    },
    getNav : () => {
      const url = '/home-category';
      return axiosClient.get(url);
    },
  }
  
  export default HomeApi; 