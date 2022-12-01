import { Link,  useParams } from "react-router-dom";
import {useEffect, useState}  from "react";
import footerService from "../../../service/footer.service";
import Nav from "../home/components/nav";
function About(){
    let params = useParams();
    const [dataItem, setDataItem] = useState(false);
    const [postSuggest, setPostSuggest] = useState(false);
     useEffect(() => {
        const getData = async () => {
            const response = await footerService.getDetail({slug : params.slug});
            if(response){
                setDataItem(response.result);
                setPostSuggest(response.post_suggest);
            }
        }
        getData();
    }, [params]);
   // console.log(dataItem)
   return(<>
  
     {dataItem && <section className="app-block-center app-category container-fluid">
   <div className="container">
      <div className="app-block-center_content">
          <div className="app-block-center_content-post ">
            

             <div className="app-block-detail">
                <div className="app-block-detail__breadcrumb">
                   <ul>
                      <Link to=""><li className="app-block-detail__breadcrumb-active">Home</li> <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                      <Link to=""><li>{dataItem.title}</li></Link>
                   </ul>
                </div>
                <div className="app-block-detail__title">
                    <span>Nội dung {dataItem.title}</span>
                </div>
               

                <div className="app-block-detail__share-icon">
                    <div className="app-block-detail__share-icon-share">
                      <i className="fa fa-share-alt" aria-hidden="true"></i>
                  </div>

                  <div className="app-block-detail__share-icon-facebook">
                      <div className="app-block-center__content-category-follow-grid-item bg-fb">
                          <div className="background-socialite__icon">
                              <i className="fa fa-facebook" aria-hidden="true"></i>
                          </div>
                          <div className="total-socialite__icon">
                              Facebook
                          </div>
                      </div>
                  </div>

                  <div className="app-block-detail__share-icon-twitter">
                      <div className="app-block-center__content-category-follow-grid-item bg-tw">
                          <div className="background-socialite__icon">
                              <i className="fa fa-twitter" aria-hidden="true"></i>
                          </div>
                          <div className="total-socialite__icon">
                              twitter
                          </div>




                      </div>
                  </div>

                  <div className="app-block-detail__share-icon-pinterest">
                      <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                  </div>
                  <div className="app-block-detail__share-icon-message">
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  </div>
                  <div className="app-block-detail__share-icon-add">
                      <i className="fa fa-plus" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="app-block-detail__content">
                <div
                                    className="image_custom"
                                    dangerouslySetInnerHTML={{ __html: dataItem.content }}
                                ></div>
                </div>
              

                 <div className="app-block-detail__share-icon-bottom">
                  <div className="app-block-detail__share-icon-share">
                      <i className="fa fa-share-alt" aria-hidden="true"></i>
                  </div>

                  <div className="app-block-detail__share-icon-facebook">
                      <div className="app-block-center__content-category-follow-grid-item bg-fb">
                          <div className="background-socialite__icon">
                              <i className="fa fa-facebook" aria-hidden="true"></i>
                          </div>
                          <div className="total-socialite__icon">
                              Facebook
                          </div>
                      </div>
                  </div>

                  <div className="app-block-detail__share-icon-twitter">
                      <div className="app-block-center__content-category-follow-grid-item bg-tw">
                          <div className="background-socialite__icon">
                              <i className="fa fa-twitter" aria-hidden="true"></i>
                          </div>
                          <div className="total-socialite__icon">
                              twitter
                          </div>




                      </div>
                  </div>

                  <div className="app-block-detail__share-icon-pinterest">
                      <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                  </div>
                  <div className="app-block-detail__share-icon-message">
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  </div>
                  <div className="app-block-detail__share-icon-add">
                      <i className="fa fa-plus" aria-hidden="true"></i>
                  </div>
                 </div>
             </div>

             <div className="app-block-center__second-content">
              <div className="app-tab__title green-tab">
                  <div className="app-tab__title-left">
                     <Link to=""><span>Bài viết gợi ý</span></Link>
                  </div>
                  <div className="app-tab__title-right">
                     <Link to=""><span>Xem thêm</span></Link>
               </div>
              </div>
              <div className="app-block-center__second-content-tab">

            
              <div className="row">
                {postSuggest && postSuggest.map((item, key) => (
                     <div key={key} className="col-sm-4">
                     <div className="app-block-center__second-content-item">
                         <div className="app-block-center__second-content-item-image">
                            <img src={ item.thumb} alt="" />
                         </div>
                         <div className="app-block-center__second-content-item-content">
                            <Link to={"/post/"+ item.slug}> <span>{item.title}</span></Link>
                            <Link to={"/post/"+ item.slug}><i className="fa fa-clock-o" aria-hidden="true"></i> <span className="author">{item.createdAt.slice(0, 10)}</span></Link>
                         </div>
                     </div>
                 </div>
                ))}
                
                 
              </div>
          </div>
             </div>

           

           
              
            
          </div>
          <div className="app-block-center__content-category ">
             <Nav />
            
          </div>
       </div>
   </div>
</section>}
   
   </>);
}
export default About;