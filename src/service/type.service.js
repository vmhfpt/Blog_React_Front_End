import TypeApi from "../api/type/typeApi";
class TypeService {
   async index(page){
      return await TypeApi.getList(page);
   }
}
export default new TypeService();