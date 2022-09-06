import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PropertyService from "../../../service/propertyService";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function PropertyDetail() {
  const [dataItem, setData] = useState({});
  const [suggest, setSuggest] = useState(false);
  const [news, setNew] = useState(false);
  let params = useParams();
  useEffect(() => {
    const getDetail = async () => {
      const dataItem = await PropertyService.show(params.slug);
      if (dataItem) setData(dataItem.data);
      if (dataItem) setNew(dataItem.new);
      setSuggest(dataItem.suggest);
    };
    getDetail();
  }, [params.slug]);

  return (
    <div>
      <section id="aa-property-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-property-header-inner">
                <h2>Chi tiết</h2>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/">HOME</Link>
                  </li>
                  <li className="active">
                    {dataItem.category_id ? dataItem.category_id.name : ""}
                  </li>
                  <li className="active">{dataItem.title}</li>
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
                <div className="aa-properties-details">
                  <Carousel>
                    {dataItem.library &&
                      dataItem.library.map((item, key) => (
                        <div key={key}>
                          <img src={item.thumb} alt="" />
                          <p className="legend">Ảnh {key + 1}</p>
                        </div>
                      ))}
                  </Carousel>

                  <div className="aa-properties-info">
                    <h2>{dataItem.title}</h2>
                    <span className="aa-price">{dataItem.price}</span>
                    <div
                    className="image_custom"
                      dangerouslySetInnerHTML={{ __html: dataItem.content }}
                    ></div>

                    {dataItem.utility && (
                      <div>
                        {" "}
                        <h4>Tiện ích</h4>
                        <ul>
                          {dataItem.utility.map((item, key) => (
                            <li key={key}>{item.name} </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {dataItem.information_id && (
                      <div>
                        {" "}
                        <h4>Thông tin thêm</h4>
                        <ul>
                          {dataItem.information_id.map((item, key) => (
                            <li key={key}>
                              {item.type_id.name} : {item.value_id.value}{" "}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <h4>Property Video</h4>
                  </div>

                  <div className="aa-properties-social">
                    <ul>
                      <li>Share</li>
                      <li>
                        <Link to="">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <i className="fa fa-google-plus"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <i className="fa fa-pinterest"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="aa-nearby-properties">
                    <div className="aa-title">
                      <h2>Bài viết tương tự</h2>
                      <span></span>
                    </div>
                    <div className="aa-nearby-properties-area">
                      <div className="row">
                        {suggest &&
                          suggest.map((item, key) => (
                            <div key={key} className="col-md-6">
                              <article className="aa-properties-item">
                                <Link
                                  className="aa-properties-item-img"
                                  to={"/property/" + item.slug}
                                >
                                  <img alt="img" src={item.thumb} />
                                </Link>
                                <div className="aa-tag for-sale">For Sale</div>
                                <div className="aa-properties-item-content">
                                  <div className="aa-properties-info">
                                    <span>Diện tích : {item.area}</span>
                                  </div>
                                  <div className="aa-properties-about">
                                    <h3>
                                      <Link to={"/property/" + item.slug}>
                                        {item.name}
                                      </Link>
                                    </h3>
                                    <p>{item.title}.</p>
                                  </div>
                                  <div className="aa-properties-detial">
                                    <span className="aa-price custom-price">
                                      {item.price}
                                    </span>
                                    <Link
                                      className="aa-secondary-btn"
                                      to={"/property/" + item.slug}
                                    >
                                      Chi tiết
                                    </Link>
                                  </div>
                                </div>
                              </article>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <aside className="aa-properties-sidebar">
                <div className="aa-properties-single-sidebar">
                  <h3>Thông tin bài đăng</h3>
                  {dataItem.user_id && <form action="">
                    <div className="aa-single-advance-search">
                      <h4>Tên : {dataItem.user_id.name}</h4>
                    </div>
                    <div className="aa-single-advance-search">
                    <a href={"mailto:" + dataItem.user_id.email}> <h4>Email : {dataItem.user_id.email}</h4></a>
                     
                    </div>
                    <div className="aa-single-advance-search">
                      <h4>Đỉa chỉ : {dataItem.user_id.address}</h4>
                    </div>
                    <div className="aa-single-advance-search">
                      <h4>Zalo : {dataItem.user_id.phone_number}</h4>
                    </div>
                   
                  
                    <div className="aa-single-advance-search">
                     <a href={" https://zalo.me/" + dataItem.user_id.phone_number} > <input
                        type="button"
                        value="Liên hệ "
                        className="aa-search-btn"
                      /></a>
                    </div>
                  </form>}
                </div>

                <div className="aa-properties-single-sidebar">
                  <h3>Bài đăng mới</h3>
                  {news &&
                    news.map((item, key) => (
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
export default PropertyDetail;
