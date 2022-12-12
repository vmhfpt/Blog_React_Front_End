
import ChatApi from "../api/chat/chatApi";
class ChatService {
   async index(){
       return await ChatApi.index();
    }
   
    
}
export default new ChatService();