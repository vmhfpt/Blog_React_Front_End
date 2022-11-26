import { Link,  useLocation} from "react-router-dom";
import { getSearch } from "./postReducer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import Nav from "../home/components/nav";
import { getDataSearch } from "./selectPost";
function PostSearch() {
  const dispatch = useDispatch();
  
  const [query, setQuery] = useState(() => {
    return {
      page: 1,
    };
  });
  
  const useQuery = () => {
    const { search } = useLocation();
    return new URLSearchParams((search), [search]) ;
  }
  let paramUrl = useQuery();
  useEffect(() => {
    const data = {
        ...query,
         key : paramUrl.get("key")
      };
     dispatch(getSearch(data));
  }, [query, paramUrl.get("key")]);
  
 const response =  useSelector(getDataSearch);

  return (<>
    {response.length !== 0 ? <section className="app-block-center app-category container-fluid">
  <div className="container">
     <div className="app-block-center_content">
         <div className="app-block-center_content-post ">
           

            <div className="app-block-center__third-content">
             <div className="app-block-detail__breadcrumb breadcrumb-category">
                 <ul>
                    <Link to=""><li className="app-block-detail__breadcrumb-active">Home</li> <i className="fa fa-angle-right" aria-hidden="true"></i></Link>

                    <Link to=""><li >Tìm kiếm</li> <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                    <Link to=""><li>{paramUrl.get("key")}</li></Link>
                 </ul>
              </div>
             <div className="app-tab__title tab-orange">
                 <div className="app-tab__title-left">
                    <Link to=""><span>Kết quả tìm kiếm tổng ({response.paginate.total_item}) bài</span></Link>
                 </div>
                 <div className="app-tab__title-right">
                    <Link to=""><span>Xêm thêm</span></Link>
              </div>
             </div>
              <div className="app-post-tag__grid">

              {response.result && response.result.map((item, key) => (
                  <div key={key} className="app-post-tag__grid_item">
                  <div className="app-post-tag__grid_item-image">
                      <img src={"https://blogapi.x10.mx/" + item.thumb} alt="" />
                  </div>
                  <div className="app-post-tag__grid_item-content">
                       <div className="app-post-tag__grid_item-content-title">
                          <Link to={"/post/" + item.slug}> <span>{item.title}</span></Link>
                       </div>
                       <div className="app-post-tag__grid_item-content-author">
                          <div className="app-block-center__third-content-item-detail-author">
                              <span><i className="fa fa-user-o" aria-hidden="true"></i> {item.User.name}</span>
                              <span><i className="fa fa-clock-o" aria-hidden="true"></i>  {item.createdAt.slice(0, 10)}</span>
                          </div>
                       </div>
                       <div className="app-post-tag__grid_item-content-description">
                           <Link to={"/post/" + item.slug}><p>{item.description}</p></Link>
                       </div>
                  </div>
              </div>
              ))}
                 


              </div>


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
  </>);
}
export default PostSearch;
