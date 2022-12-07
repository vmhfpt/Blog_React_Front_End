import { Link, useParams, useLocation } from "react-router-dom";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostByCategory } from "./categoryReducer";
import Nav from "../home/components/nav";
import { getListPost } from "./selectCategory";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import NotFound from "../404/notFound";
import { getLoading } from "./selectCategory";
function Category() {

  const navigate = useNavigate();


  const loading = useSelector(getLoading);


  const useQuery = () => {
    const { search } = useLocation();
    return new URLSearchParams((search), [search]);
  }
  let paramUrl = useQuery();


  const count = useRef({ page: 1 });
  count.current = { page: paramUrl.get("page") ? Number(paramUrl.get("page")) : 1 };


  const dispatch = useDispatch();
  let params = useParams();

  const response = useSelector(getListPost);
  
  const [query, setQuery] = useState(() => {

    return {
      page: paramUrl.get("page") ? paramUrl.get("page") : 1,
    };
  });



  useEffect(() => {

    const data = {
      ...count.current,
      slug: params.slug,
    };
   
    dispatch(getPostByCategory(data));
  }, [query, params]);

  if(!response) {
    
    return (<NotFound />);
 }

  const handlePaginate = () => {
    navigate({
      search: '?page=' + response.paginate.next_page,
    })

    count.current = {
      page: response.paginate.next_page
    };
    setQuery(() => {

      return {
        page: response.paginate.next_page
      }
    });
  }

  return (
    <>
      {!isEmpty(response) ? <section className="app-block-center app-category container-fluid">
        <div className="container">
          <div className="app-block-center_content">
              <div className="app-block-center_content-post ">


<div className="app-block-center__third-content">
  <div className="app-block-detail__breadcrumb breadcrumb-category">
    <ul>
      <Link to=""><li className="app-block-detail__breadcrumb-active">Home</li> <i className="fa fa-angle-right" aria-hidden="true"></i></Link>

      <Link to=""><li> Danh mục</li> <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
      <Link to=""><li> {response.category.title}</li></Link>
    </ul>
  </div>
  <div className="app-tab__title tab-orange">
    <div className="app-tab__title-left">
      <Link to=""><span>{response.category.title}</span></Link>
    </div>
    <div className="app-tab__title-right">
      <Link to=""><span>Xem thêm</span></Link>
    </div>
  </div>


  {response.result && response.result.map((item, key) => (

    <div key={key} className="app-block-center__third-content-item">
      <div className="app-block-center__third-content-item-image">
        <img src={item.Post.thumb} alt="" />
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
    {response.paginate.next_page && <button onClick={() => handlePaginate()}>Xem thêm {response.paginate.more_item} bài viết</button>}
  </div>
</div>
</div>{loading ? 
                                   <div className="delay-icon">
                                         <div className="center-delay-icon">
                                             <i className=" fa fa-spinner fa-spin"></i>
                                         </div>
                                   </div>
                                : ''}
            <Nav />
            
          </div>
        </div>
      </section> : ''}
    </>
  );
}
export default Category;
