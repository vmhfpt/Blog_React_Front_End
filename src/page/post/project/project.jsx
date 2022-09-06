import { Link } from "react-router-dom";
import ProjectService from "../../../service/project.service";
import { useEffect, useState } from "react";
import SearchComponent from "../tabSearch/search";
function Project() {
  const [page, setPage] = useState(1);
  const [dataItem, setDataItem] = useState(false);
  const [paginate, setPaginate] = useState({});
  const [suggest, setSuggest] = useState(false);
  useEffect(() => {
    const getProject = async () => {
      const response = await ProjectService.index({ page: page });
     if(response) {
      setDataItem(response.data);
      setPaginate(response.paginate);
      setSuggest(response.suggest);
     }
    };
    getProject();
  }, [page]);
  return (
    <div>
      <section id="aa-property-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-property-header-inner">
                <h2>Dự án</h2>
                <ol className="breadcrumb">
                  <li>
                    <Link to="">HOME</Link>
                  </li>
                  <li className="active">Dự án</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="aa-blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-blog-area">
                <div className="row">
                  <div className="col-md-8">
                    <div className="aa-blog-content">
                      <div className="row">
                        {dataItem &&
                          dataItem.map((item, key) => (
                            <div key={key} className="col-md-6 col-sm-6">
                              <article className="aa-blog-single">
                                <figure className="aa-blog-img">
                                  <Link to={"/project/" + item.slug}>
                                    <img alt="img" src={item.thumb} />
                                  </Link>
                                  <span className="aa-date-tag">
                                    {item.createdAt}
                                  </span>
                                </figure>
                                <div className="aa-blog-single-content">
                                  <h3>
                                    <Link to={"/project/" + item.slug}>
                                     {item.name}.
                                    </Link>
                                  </h3>
                                  <p>
                                    {item.title}
                                  </p>
                                  <div className="aa-blog-single-bottom">
                                    <Link className="aa-blog-author" to={"/project/" + item.slug}>
                                    <i className="fa fa-map-marker"></i> {item.address}
                                    </Link>
                                    <Link className="aa-blog-comments" to={"/project/" + item.slug}>
                                    <i className="fa fa-money"></i>{item.price_rent}
                                    </Link>
                                  </div>
                                </div>
                              </article>
                            </div>
                          ))}

           
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="aa-properties-content-bottom">
                            <nav>
                              <ul className="pagination">
                              {paginate.prev_page ? (
                        <li>
                          <Link onClick={() => setPage(paginate.currentPage - 1)} to="" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                          </Link>
                        </li>
                      ) : (
                        ""
                      )}
                      {new Array(paginate.sumPage).fill(0).map((_, index) => (
                        <li
                        onClick={() => setPage(index + 1)}
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
                          <Link onClick={() => setPage(paginate.currentPage + 1)} to="" aria-label="Next">
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
                    </div>
                  </div>

                  <div className="col-md-4">
                    <aside className="aa-blog-sidebar">
                     

                    <div id="aa-properties">
                        <div className="aa-properties-sidebar">
                          <div className="aa-properties-single-sidebar">
                          <SearchComponent />
                          </div>
                        </div>
                      </div>

                     

                      <div className="aa-blog-sidebar-single">
                        <h3>Bài đăng mới</h3>
                        <div className="aa-blog-recent-post">
                          {suggest && suggest.map((item, key) => (
                                    <div key={key} className="media">
                                    <div className="media-left">
                                      <Link to={"/property/" + item.slug}>
                                        <img
                                          alt="img"
                                          src={item.thumb}
                                          className="media-object"
                                        />
                                      </Link>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <Link to={"/property/" + item.slug}>{item.title}</Link>
                                      </h4>
                                      <p>
                                        {item.address}.
                                      </p>
                                      <span>{item.price}</span>
                                    </div>
                                  </div>
                          ))}
                        </div>
                      </div>

                      <div className="aa-blog-sidebar-single">
                        <div className="aa-banner-ads">
                          <Link to="">
                            <img src="https://res.cloudinary.com/dqouzpjiz/image/upload/v1661918904/images/16619189021948lambh.jpg" alt="banner img" />
                          </Link>
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Project;
