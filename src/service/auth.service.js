import authApi from "../api/auth/authApi";
class AuthService {
    async login(data){
        return await authApi.login(data);
    }
    async logout(id){
        return await authApi.logout(id);
    }
    async register(data){
        return await authApi.register(data);
    }
}
export default new AuthService();