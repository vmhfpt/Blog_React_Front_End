import PostApi from "../api/post/postApt";
class PostService {

  
    async show(slug){
        return await PostApi.getDetail(slug);
    }
    async getSearchAutoComplete(slug){
        return await PostApi.getSearchAutoComplete(slug);
    }
    async getPostSearch(data) {
        return await PostApi.getPostSearch(data);
    }
}
export default new PostService();