import CategoryApi from "../api/category/categoryApi";
class CategoryService {
   async index(page){
       return await CategoryApi.getList(page);
    }
   async getCity(){
     return await CategoryApi.getCity();
   }
   async getAll(){
      return await CategoryApi.getListAll();
   }
    
}
export default new CategoryService();