import axiosClient from '../handleApi';

const PostApt = {
   getDetail : (data) => {
        const url = '/post';
        return axiosClient.post(url, data);
    },
    getSearchAutoComplete : (data) => {
      const url = '/post-by-search-auto-complete';
        return axiosClient.post(url, data);
    },
    getPostSearch : (data) => {
      const url = '/post-by-search';
        return axiosClient.post(url, data);
    }
   
  }
  
  export default PostApt; 