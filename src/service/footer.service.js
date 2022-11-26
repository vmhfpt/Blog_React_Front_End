import FooterApi from "../api/footer/footerApi";
class FooterService {
    async getDetail(slug){
        return await FooterApi.getFooter(slug);
    }
  

}
export default new FooterService();