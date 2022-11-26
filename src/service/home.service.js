import HomeApi from "../api/home/homeApi";
class HomeService {
    async getHome(){
        return await HomeApi.getHome();
    }
    async getNav(){
        return await HomeApi.getNav();
    }

}
export default new HomeService();