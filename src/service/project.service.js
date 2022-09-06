import ProjectApi from "../api/project/projectApi";
class ProjectService {

   async  index(query){
        return await ProjectApi.getList(query);
    }
    async show(slug){
        return await ProjectApi.show(slug);
    }
}
export default new ProjectService();