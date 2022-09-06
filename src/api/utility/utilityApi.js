import axiosClient from '../handleApi';
const UtilityApi = {
    getAll : (params) => {
        const url = '/admin/utility/get-all';
        return axiosClient.get(url,
            { headers: { authorization: `Bearer ${localStorage.getItem('refreshToken')}` } },
        );
    }
    
}
export default UtilityApi;