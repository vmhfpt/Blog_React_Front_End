import CategoryApi from "../api/category/categoryApi";
class CategoryService {
   async index(){
       return await CategoryApi.getList();
    }
    async getPostByCategory(data){
      return await CategoryApi.getPostByCategory(data);
   }
   async getPostByTag(data){
      return await CategoryApi.getPostByTag(data);
   }
   async getCity(){
     return await CategoryApi.getCity();
   }
   async getAll(){
      return await CategoryApi.getListAll();
   }
    
}
export default new CategoryService();