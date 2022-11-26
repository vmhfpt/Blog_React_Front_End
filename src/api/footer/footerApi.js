import axiosClient from '../handleApi';

const FooterApi = {
   getFooter : (data) => {
    const url = '/footer';
       return axiosClient.post(url, data);
    }
  }
  
  export default FooterApi; 