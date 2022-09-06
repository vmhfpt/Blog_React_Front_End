import CommentApi from "../api/comment/commentApi";
class CommentService {
    async create(data){
        return await CommentApi.post(data);
    }
}
export default new CommentService();