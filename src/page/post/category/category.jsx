import { Link, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { getPostByCategory } from "./categoryReducer";
import Nav from "../home/components/nav";
import { getListPost } from "./selectCategory";
function Category() {
 const dispatch = useDispatch();
  let params = useParams();

  const [query, setQuery] = useState(() => {
    return {
      page: 1,
    };
  });
  useEffect(() => {
    const data = {
      ...query,
      slug: params.slug,
    };
    dispatch(getPostByCategory(data));
  }, [query, params]);
  const response = useSelector(getListPost);
 
  return (
   <>
   {response.length !== 0 ?  <section className="app-block-center app-category container-fluid">
    <div className="container">
       <div className="app-block-center_content">
           <div className="app-block-center_content-post ">
             

              <div className="app-block-center__third-content">
               <div className="app-block-detail__breadcrumb breadcrumb-category">
                   <ul>
                      <Link to=""><li className="app-block-detail__breadcrumb-active">Home</li> <i className="fa fa-angle-right" aria-hidden="true"></i></Link>

                      <Link to=""><li> Danh mục</li> <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                      <Link to=""><li> { response.category.title}</li></Link>
                   </ul>
                </div>
               <div className="app-tab__title tab-orange">
                   <div className="app-tab__title-left">
                      <Link to=""><span>{ response.category.title}</span></Link>
                   </div>
                   <div className="app-tab__title-right">
                      <Link to=""><span>Xem thêm</span></Link>
                </div>
               </div>
                

                {response.result && response.result.map((item, key) => (
                   
                 <div key={key} className="app-block-center__third-content-item">
                 <div className="app-block-center__third-content-item-image">
                     <img src={"https://blogapi.x10.mx/" + item.Post.thumb} alt="" />
                 </div>
                 <div className="app-block-center__third-content-item-detail">
                     <div className="app-block-center__third-content-item-detail-title">
                         <Link to={"/post/" + item.Post.slug}><span>{item.Post.title}</span></Link>
                     </div>
                     <div className="app-block-center__third-content-item-detail-author">
                         <span><i className="fa fa-user-o" aria-hidden="true"></i> {item.Post.User.name}</span>
                         <span><i className="fa fa-clock-o" aria-hidden="true"></i> {item.Post.createdAt.slice(0, 10)}</span>
                     </div>
                     <div className="app-block-center__third-content-item-detail-thumbnail">
                         <Link to={"/post/" + item.Post.slug}><span>{item.Post.description}</span></Link>
                     </div>
                 </div>
               </div>
                ))}
         
                 <div className="app-block-center__third-content-show-more">
                   {response.paginate.next_page && <button onClick={() => {
                        setQuery(() => {
                          return {
                            page : response.paginate.next_page
                          }
                        })
                      }}>Xem thêm {response.paginate.more_item} bài viết</button>}
                      
                 </div>
              </div>

             

            
               
             
           </div>
            <Nav />
        </div>
    </div>
 </section> : ''}
   </>
  );
}
export default Category;
