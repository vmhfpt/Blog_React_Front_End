import axiosClient from '../handleApi';
const TypeApi = {
    getList : () => {
        const url = '/admin/type/list';
        return axiosClient.get(url, 
            { headers: { authorization: `Bearer ${localStorage.getItem('refreshToken')}` } },
            
            );
    }
    
}
export default TypeApi;