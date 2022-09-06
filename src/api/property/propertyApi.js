import axiosClient from '../handleApi';

const PropertyApi = {
    getListUser : (page) => {
        const url = '/user/property/list';
        let params = {page : page};
        return axiosClient.get(url, {
            params,
            headers: {authorization: `Bearer ${localStorage.getItem('refreshToken')}`} 
        });
    },
    

    createPropertyUser : (file, files, data) => {
        // console.log(data)
           var formData = new FormData();
         if(files){
           for (let i = 0; i < files.length; i++) {
             formData.append("images",files[i]);
           }
          
         }
         if(file){
           formData.append("file",file);
         }
         var exampleObject = data;
         function getFormData(object) {
           Object.keys(object).forEach(key => {
              if(key !== "utility" && key !== "type"){
               formData.append(key, object[key])
              }
           });
           return formData;
       }
       getFormData(exampleObject);
   
       var arrayUtility = data.utility;
       for (var i = 0; i < arrayUtility.length; i++) {
          formData.append('utility[]', arrayUtility[i]);
       }
   
       var arrayType = data.type;
       for (var i = 0; i < arrayType.length; i++) {
          formData.append(`type[${i}]`,  JSON.stringify(arrayType[i]));
      }
   
        
   
          const url = '/user/property/add';
           return axiosClient.post(url, 
              formData,
           { 
               headers: {
                          // Accept: 'application/json',
                          "content-type": "multipart/form-data",
                       //   "content-type": "application/json",
                          authorization: `Bearer ${localStorage.getItem('refreshToken')}`
                     },
                     
           },
          
          
   
           );
       },

       updatePropertyUser : (file, files, data) => {
        // console.log(data) dataDeleteFiles
           var formData = new FormData();
  
           var arrayDeleteFiles = data.dataDeleteFiles;
      for (var i = 0; i < arrayDeleteFiles.length; i++) {
         formData.append('dataDeleteFiles[]', arrayDeleteFiles[i]);
      }
         if(files){
           for (let i = 0; i < files.length; i++) {
             formData.append("images",files[i]);
           }
          
         }
         if(file){
           formData.append("file",file);
         }
         var exampleObject = data;
         function getFormData(object) {
           Object.keys(object).forEach(key => {
              if(key !== "utility" && key !== "type" && key !== "dataDeleteFiles"){
               formData.append(key, object[key])
              }
           });
           return formData;
       }
       getFormData(exampleObject);
   
       var arrayUtility = data.utility;
       for (var i = 0; i < arrayUtility.length; i++) {
          formData.append('utility[]', arrayUtility[i]);
       }
   
       var arrayType = data.type;
       for (var i = 0; i < arrayType.length; i++) {
          formData.append(`type[${i}]`,  JSON.stringify(arrayType[i]));
      }
          const url = '/user/property/update/' + data.slug;
           return axiosClient.put(url, 
              formData,
           { 
               headers: {
                          // Accept: 'application/json',
                          "content-type": "multipart/form-data",
                       //   "content-type": "application/json",
                          authorization: `Bearer ${localStorage.getItem('refreshToken')}`
                     },
                     
           },
          
          
   
           );
       },

       destroyPropertyUser : (params) => {
        const url = '/user/property/delete/' ;
        return axiosClient.delete(url,
            { 
            headers: { authorization: `Bearer ${localStorage.getItem('refreshToken')}`},
            data: {
                id: params
            }
        });
       },



   getList : (page) => {
        const url = '/property/list';
        return axiosClient.get(url,  { headers: { authorization: `Bearer ${localStorage.getItem('refreshToken')}` } });
    },
    getHome : () => {
        const url = '/property/get-home';
        return axiosClient.get(url,  { headers: { authorization: `Bearer ${localStorage.getItem('refreshToken')}` } });
    },
    show : (slug) => {
        const url = '/property/' + slug;
        return axiosClient.get(url,  { headers: { authorization: `Bearer ${localStorage.getItem('refreshToken')}` } });
    },
    getByCategory : (query) => {
        var params = query;
        

        const url = '/get-property' ;
        return axiosClient.get(url, {
            params,
            headers: {authorization: `Bearer ${localStorage.getItem('refreshToken')}`} 
        }
       );
    },
    search : (params) => {
        const url = '/property/search' ;
        return axiosClient.get(url, {
            params,
            headers: {authorization: `Bearer ${localStorage.getItem('refreshToken')}`} 
        }
       );
    }
  }
  
  export default PropertyApi; 