import PropertyApi from "../api/property/propertyApi";
class PropertyService {
    async getHome(){
        return await PropertyApi.getHome();
    }
    async show(slug){
        return await PropertyApi.show(slug);
    }
    async getByCategory(query){
        return await PropertyApi.getByCategory(query);
    }
    async search(data){
        return await PropertyApi.search(data);
    }
    async getList(page){
        return await PropertyApi.getListUser(page);
    }
    async create(file, files, data){
        return await PropertyApi.createPropertyUser (file, files, data);
    }
    async update(file, files, data) {
        return  await PropertyApi.updatePropertyUser (file, files, data);
    }
    async destroy(id){
        return await PropertyApi.destroyPropertyUser (id);
    }
}
export default new PropertyService();