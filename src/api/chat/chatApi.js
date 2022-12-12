import axiosClient from '../handleApi';

const ChatApi = {
    
   index : () => {
        const url = '/get-chat';
        return axiosClient.get(url);
    },
  }
  
  export default ChatApi; 