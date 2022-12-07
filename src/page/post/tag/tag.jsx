import { Link, useParams,  useLocation, useNavigate} from "react-router-dom";
import { isEmpty } from "lodash";
import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { getPostByTag } from "../category/categoryReducer";
import Nav from "../home/components/nav";
import { getListPostTag } from "../category/selectCategory";
import NotFound from "../404/notFound";
import { getLoading } from "../category/selectCategory";
function Tag(){
  const useQuery = () => {
    const { search } = useLocation();
    return new URLSearchParams((search), [search]);
  }
  let paramUrl = useQuery();
  const navigate = useNavigate();
    const dispatch = useDispatch();
  let params = useParams();
  const loading = useSelector(getLoading);
 
  useEffect(() => {
    const data = {
      page: paramUrl.get("page") ? Number(paramUrl.get("page")) : 1,
      slug: params.slug,
    };
    dispatch(getPostByTag(data));
  }, [ params]);
  
  const response = useSelector(getListPostTag);
  if(!response) {
   return (<NotFound />);
  }
  const handlePaginate = () => {
    navigate({
      search: '?page=' + response.paginate.next_page,
    })
  }
   
    return (<>
      {!isEmpty(response) ? <section className="app-block-center app-category container-fluid">
    <div className="container">
       <div className="app-block-center_content">
         <div className="app-block-center_content-post ">
             

             <div className="app-block-center__third-content">
              <div className="app-block-detail__breadcrumb breadcrumb-category">
                  <ul>
                     <Link to=""><li className="app-block-detail__breadcrumb-active">Home</li> <i className="fa fa-angle-right" aria-hidden="true"></i></Link>

                     <Link to=""><li >Tag</li> <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                     <Link to=""><li>{ response.tag.title}</li></Link>
                  </ul>
               </div>
              <div className="app-tab__title tab-orange">
                  <div className="app-tab__title-left">
                     <Link to=""><span>{ response.tag.title}</span></Link>
                  </div>
                  <div className="app-tab__title-right">
                     <Link to=""><span>Xêm thêm</span></Link>
               </div>
              </div>
               <div className="app-post-tag__grid">

               {response.result && response.result.map((item, key) => (
                   <div key={key} className="app-post-tag__grid_item">
                   <div className="app-post-tag__grid_item-image">
                       <img src={ item.Post.thumb} alt="" />
                   </div>
                   <div className="app-post-tag__grid_item-content">
                        <div className="app-post-tag__grid_item-content-title">
                           <Link to={"/post/" + item.Post.slug}> <span>{item.Post.title}</span></Link>
                        </div>
                        <div className="app-post-tag__grid_item-content-author">
                           <div className="app-block-center__third-content-item-detail-author">
                               <span><i className="fa fa-user-o" aria-hidden="true"></i> {item.Post.User.name}</span>
                               <span><i className="fa fa-clock-o" aria-hidden="true"></i>  {item.Post.createdAt.slice(0, 10)}</span>
                           </div>
                        </div>
                        <div className="app-post-tag__grid_item-content-description">
                            <Link to={"/post/" + item.Post.slug}><p>{item.Post.description}</p></Link>
                        </div>
                   </div>
               </div>
               ))}
                  


               </div>


                <div className="app-block-center__third-content-show-more">
                {response.paginate.next_page && <button onClick={() => handlePaginate()}>Xem thêm {response.paginate.more_item} bài viết</button>}
                </div>
             </div>

            

           
              
            
          </div> {loading ? 
                                   <div className="delay-icon">
                                         <div className="center-delay-icon">
                                             <i className=" fa fa-spinner fa-spin"></i>
                                         </div>
                                   </div>
                                 : ""}
           
           <Nav />
        </div>
    </div>
 </section> : ''}
    </>);
}
export default Tag;