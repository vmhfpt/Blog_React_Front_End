import { Link, useParams ,  useLocation} from "react-router-dom";
import PropertyService from "../../../service/propertyService";
import { useEffect, useState } from "react";
import SearchComponent from "../tabSearch/search";
function PropertySearch() {
  const [dataItem, setDataItem] = useState(false);
  const [paginate, setPaginate] = useState(false);
  const [category, setCategory] = useState("");
  
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
   const getProperty = async () => {
     const response = await PropertyService.search({ca : paramUrl.get("ca"), key : paramUrl.get("key"), city : paramUrl.get("city"), ...query});
     if(response) {
        setDataItem(response.data);
        setPaginate(response.paginate);
     }
   }
   getProperty(); 
  }, [query, paramUrl.get("ca"), paramUrl.get("key"), paramUrl.get("city")]);
  

  return (
    <div>
      {" "}
      <section id="aa-property-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-property-header-inner">
                <h2>Tìm kiếm</h2>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/">HOME</Link>
                  </li>
                  <li className="active">Tìm kiếm</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="aa-properties">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="aa-properties-content">
                <div className="aa-properties-content-head">
                  <div className="aa-properties-content-head-left">
                    <form action="" className="aa-sort-form">
                      <label >Sắp xếp</label>
                      <select value={query.sort ? query.sort : ""}    onChange={(e) => setQuery((prev) => {
                         return {...prev, sort : e.target.value}
                      })}>
                         <option value="">--- Lựa chọn ---</option>
                        <option value="desc">Mới nhất</option>
                        <option value="asc">Trước đây</option>
                      
                      </select>
                    </form>
                    
                  </div>
                  <div className="aa-properties-content-head-right">
                    <Link id="aa-grid-properties" to="">
                      <span className="fa fa-th"></span>
                    </Link>
                    <Link id="aa-list-properties" to="">
                      <span className="fa fa-list"></span>
                    </Link>
                  </div>
                </div>

                <div className="aa-properties-content-body">
                  <ul className="aa-properties-nav">
                    {dataItem &&
                      dataItem.map((item, key) => (
                        <li key={key}>
                          <article className="aa-properties-item">
                            <Link
                              className="aa-properties-item-img"
                              to={"/property/" + item.slug}
                            >
                              <img alt="img" src={item.thumb} />
                            </Link>
                            <div
                              className={
                                item.active === 1
                                  ? "aa-tag for-rent"
                                  : "aa-tag sold-out"
                              }
                            >
                              {item.active === 1 ? "Đăng bán" : "Đã bán"}
                            </div>
                            <div className="aa-properties-item-content">
                              <div className="aa-properties-info">
                                <span>{item.area}</span>
                              </div>
                              <div className="aa-properties-about">
                                <h3>
                                  <Link to={"/property/" + item.slug}>
                                    {item.title}
                                  </Link>
                                </h3>
                                <p>{item.address}</p>
                              </div>
                              <div className="aa-properties-detial">
                                <span className="aa-price">{item.price}</span>
                                <Link
                                  className="aa-secondary-btn"
                                  to={"/property/" + item.slug}
                                >
                                  Chi tiết
                                </Link>
                              </div>
                            </div>
                          </article>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="aa-properties-content-bottom">
                  <nav>
                    <ul className="pagination">
                      {paginate.prev_page ? (
                        <li>
                          <Link onClick={() => setQuery((prev) => {
                              return {...prev, page: paginate.currentPage - 1}
                          })} to={`/property/search?ca=${paramUrl.get("ca")}&key=${paramUrl.get("key")}&city=${paramUrl.get("city")}`} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                          </Link>
                        </li>
                      ) : (
                        ""
                      )}
                      {new Array(paginate.sumPage).fill(0).map((_, index) => (
                        <li
                        onClick={() => setQuery((prev) => {
                          return {...prev, page: index + 1}
                        })}
                          key={index}
                          className={
                            index + 1 === paginate.currentPage ? "active" : ""
                          }
                        >
                          <Link to={`/property/search?ca=${paramUrl.get("ca")}&key=${paramUrl.get("key")}&city=${paramUrl.get("city")}`}>{index + 1}</Link>
                        </li>
                      ))}
                      {paginate.next_page ? (
                        <li>
                          <Link onClick={() => setQuery((prev) => {
                              return {...prev, page: paginate.currentPage + 1}
                          })} to={`/property/search?ca=${paramUrl.get("ca")}&key=${paramUrl.get("key")}&city=${paramUrl.get("city")}`} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                          </Link>
                        </li>
                      ) : (
                        ""
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <aside className="aa-properties-sidebar">
           <SearchComponent />

           
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default PropertySearch;
