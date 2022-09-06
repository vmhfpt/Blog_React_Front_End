import axiosClient from '../handleApi';

const ProjectApi = {
    
   getList : (params) => {
        const url = '/get-project';
        return axiosClient.get(url,  {
            params,
            headers: {authorization: `Bearer ${localStorage.getItem('refreshToken')}`} 
        });
    },
    show : (slug) => {
        const url = '/get-project/' + slug;
        return axiosClient.get(url,  {
            headers: {authorization: `Bearer ${localStorage.getItem('refreshToken')}`} 
        });
    },
  }
  
  export default ProjectApi; 