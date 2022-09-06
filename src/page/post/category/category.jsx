import { Link, useParams } from "react-router-dom";
import PropertyService from "../../../service/propertyService";
import { useEffect, useState } from "react";
import {useSelector} from "react-redux";
import { getListCategory } from "./selectCategory";
import CategoryService from "../../../service/category.service";
import SearchComponent from "../tabSearch/search";
function Category() {
  const [city, setCity] = useState(false);
  const [citySearch, setCitySearch] = useState('');
  const dataCategory = useSelector(getListCategory);
  let params = useParams();
  const [nameFilter, setNameFilter] = useState('');
  const [key, setKey] = useState('');
  const [suggest, setSuggest] = useState(false);
  const [dataItem, setDataItem] = useState(false);
  const [paginate, setPaginate] = useState(false);
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState(() => {
    return {
      page: 1,
    };
  });
  useEffect(() => {
    const getProperty = async () => {
      const data = await PropertyService.getByCategory({
        ...query,
        ca: params.slug,
      });
      if (data) {
        setSuggest(data.suggest);
        setDataItem(data.dataDetail);
        setPaginate(data.paginate);
        setCategory(data.category);
      }
    };
    getProperty();
  }, [query, params]);
  useEffect(() => {
    const getCity = async () => {
      const response = await CategoryService.getCity();
      if(response) setCity(response);
    }
    getCity();
    
}, [])
  return (
    <div>
      {" "}
      <section id="aa-property-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-property-header-inner">
                <h2>Danh mục</h2>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/">HOME</Link>
                  </li>
                  <li className="active">{category}</li>
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
                          })} to="" aria-label="Previous">
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
                          <Link to="#">{index + 1}</Link>
                        </li>
                      ))}
                      {paginate.next_page ? (
                        <li>
                          <Link onClick={() => setQuery((prev) => {
                              return {...prev, page: paginate.currentPage + 1}
                          })} to="" aria-label="Next">
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

                <div className="aa-properties-single-sidebar">
                  <h3>Bài viết mới</h3>
                  {suggest && suggest.map((item, key) => (
                    <div key={key} className="media">
                    <div className="media-left">
                      <Link to={"/property/" + item.slug}>
                        <img
                          className="media-object"
                          src={item.thumb}
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">
                        <Link to={"/property/" + item.slug}>{item.title}</Link>
                      </h4>
                      <p>
                        {item.address}
                      </p>
                      <span>{item.price}</span>
                    </div>
                  </div>
                  ))}
                  
                 
                 
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Category;
