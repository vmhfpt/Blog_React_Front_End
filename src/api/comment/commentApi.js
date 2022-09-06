import axiosClient from '../handleApi';

const CommentApi = {
    
   post : (params) => {
        const url = '/comment/post';
        return axiosClient.post(url, params, { headers: { authorization: `Bearer ${localStorage.getItem('refreshToken')}` } });
    },
  }
  
  export default CommentApi; 