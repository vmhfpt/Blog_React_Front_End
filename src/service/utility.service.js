import UtilityApi from "../api/utility/utilityApi";
class UtilityService {
   async getALl(){
      return await UtilityApi.getAll();
   }
}
export default new UtilityService();