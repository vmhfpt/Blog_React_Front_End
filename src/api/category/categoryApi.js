import axiosClient from '../handleApi';

const CategoryApi = {
  getListAll : (params) => {
    const url = '/admin/category/list';
    return axiosClient.get(url,  { headers: { authorization: `Bearer ${localStorage.getItem('refreshToken')}` } });
  },
   getList : (page) => {
        const url = '/category/get';
        return axiosClient.get(url,  { headers: { authorization: `Bearer ${localStorage.getItem('refreshToken')}` } });
    },
    getCity :  () => {
      const url = '/category/get-city';
      return axiosClient.get(url,  { headers: { authorization: `Bearer ${localStorage.getItem('refreshToken')}` } });
  },
  }
  
  export default CategoryApi; 