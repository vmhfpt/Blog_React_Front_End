import axiosClient from '../handleApi';

const CategoryApi = {
  getListAll : (params) => {
    const url = '/admin/category/list';
    return axiosClient.get(url,  { headers: { authorization: `Bearer ${localStorage.getItem('refreshToken')}` } });
  },
   getList : () => {
        const url = '/category';
        return axiosClient.get(url);
    },
    getPostByCategory : (data) => {
      const url = '/post-by-category';
      return axiosClient.post(url, data);
    },
    getPostByTag : (data) => {
      const url = '/post-by-tag';
      return axiosClient.post(url, data);
    },
    getCity :  () => {
      const url = '/category/get-city';
      return axiosClient.get(url,  { headers: { authorization: `Bearer ${localStorage.getItem('refreshToken')}` } });
  },
  }
  
  export default CategoryApi; 