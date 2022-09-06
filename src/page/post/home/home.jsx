import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import PropertyService from "../../../service/propertyService";
import { getListAllCategory } from "../category/selectCategory";
import CategoryService from "../../../service/category.service";
function Home(){
  const dispatch = useDispatch();
  const dataCategory = useSelector(getListAllCategory);
  const [firstProperty, setData] = useState(false);
  const [project , setProject] = useState(false);
  const [property, setProperty] = useState(false);
  const [citySearch, setCitySearch] = useState('');
  const [city, setCity] = useState(false);
  const [nameFilter, setNameFilter] = useState('');
  const [key, setKey] = useState('');
  useEffect(() => {
      const getHome = async () => {
           const dataItem = await PropertyService.getHome();
           setData(dataItem.firstProperty);
           setProject(dataItem.project);
           setProperty(dataItem.data);
      }
      const getCity = async () => {
        const response = await CategoryService.getCity();
        if(response) setCity(response);
      }
      getHome();
      getCity();
      
  }, [])
  // Tctk19tdptcxlddx.
    return (<div>
  
  
  <section id="aa-slider">
    <div className="aa-slider-area"> 
    
      <div className="aa-top-slider">
    
        <div className="aa-top-slider-single">
          <img src="https://bdsweb.com.vn/upload_images/images/bbds/banner-bat-dong-san-04.jpg" alt="img" />
        
          <div className="aa-top-slider-content">
            <span className="aa-top-slider-catg">Bất động sản online</span>
            <h2 className="aa-top-slider-title">Sàn giao dịch uy tín Việt Nam</h2>
            <p className="aa-top-slider-location"><i className="fa fa-map-marker"></i>Khu 2 Hoàng Thương - Thanh Ba, Phú Thọ (VN)</p>
            <span className="aa-top-slider-off">Hỗ trợ vay vốn 25/24</span>
            <p className="aa-top-slider-price">Hàng ngàn dự án mới</p>
            <Link to="#" className="aa-top-slider-btn">Đọc thêm <span className="fa fa-angle-double-right"></span></Link>
          </div>
       
        </div>
      
      </div>
    </div>
  </section>
  
  <section id="aa-advance-search">
    <div className="container">
      <div className="aa-advance-search-area">
        <div className="form">
         <div className="aa-advance-search-top">
            <div className="row">
              <div className="col-md-4">
                <div className="aa-single-advance-search">
                  <input type="text" value={key} onChange={(e) => setKey(e.target.value)} placeholder="Nhập từ khóa tìm kiếm" />
                </div>
              </div>
              <div className="col-md-2">
                <div className="aa-single-advance-search">
                  <select onChange={(e) => setNameFilter(e.target.value)}>
                  
                    <option value="">--- Lựa chọn ---</option>
                    {dataCategory &&  dataCategory.map((item, key) => (
                              <option key={key} value={item.name}  >{item.name}</option>     
                    ))}
                     
                  </select>
                </div>
              </div>
              <div className="col-md-2">
                 <div className="aa-single-advance-search">
                  <select onChange={(e) => setCitySearch(e.target.value)}>
                  <option value=""  >--- Lựa Chọn ---</option>
                     {city && nameFilter!== '' && city.map((item, key) => (
                       <option value={item.name} key={key} >{nameFilter} {item.name}</option>
                     ))}
                  </select>
              </div>
              </div>
              <div className="col-md-2">
                <div className="aa-single-advance-search">
                 <Link to={`/property/search?ca=${nameFilter}&key=${key}&city=${citySearch}`}> <input className="aa-search-btn" type="submit" value="Tìm Kiếm" /> </Link> 
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </section>
  
  <section id="aa-about-us">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-about-us-area">
            <div className="row">
              <div className="col-md-5">
                <div className="aa-about-us-left">
                  <img src="https://diaoc5sao.vn/wp-content/uploads/2018/06/banner-home.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="aa-about-us-right">
                  <div className="aa-title">
                    <h2>Về chúng tôi</h2>
                    <span></span>
                  </div>
                  <p>batdongsanr 1 trong các trang đăng tin miễn phí nhà đất trên mạng internet hiệu quả, uy tín. Với tính năng cho phép người dùng có thể tự đăng tin mua bán nhà đất bất động sản lên mạng miễn phí nhằm tiết kiệm thời gian, kết nối dễ dàng người mua và bán, tăng hiệu quả giao dịch bất động sản thành công.  Có giao diện thân thiện với người dùng, dễ dàng tìm kiếm các thông tin trong mục đăng tin bất động sản hoặc đăng tin cho thuê nhà, đồng thời dễ lọc được tin đăng theo yêu cầu của người có nhu cầu đi mua hoặc đi thuê .</p>                  
                  <ul>
                    <li>Đăng tin miễn phí.</li>
                    <li>Kiểm duyệt nhanh.</li>
                    <li>Không giới hạn số lượng bài đăng mỗi ngày..</li>                    
                    <li>Bảo mật thông tin tuyệt đối.</li>
                    <li>Dễ dàng sử dụng dịch vụ.</li>
                    <li>Cập nhật nhiều thị trường mới nhất.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  

  <section id="aa-latest-property">
    <div className="container">
      <div className="aa-latest-property-area">
        <div className="aa-title">
          <h2>Bất động sản nổi bật</h2>
          <span></span>
          <p>Điểm đến cho bất động sản.</p>         
        </div>
        <div className="aa-latest-properties-content">
          <div className="row">

          {firstProperty &&
              firstProperty.map((item, key) => (
                <div key={key} className="col-md-4">
                <article className="aa-properties-item">
                  <Link to={"/property/" + item.slug } className="aa-properties-item-img">
                    <img src={item.thumb} alt="img" />
                  </Link>
                  
                  <div className={item.active === 1 ? "aa-tag for-rent" : "aa-tag sold-out"}  >
                    {item.active === 1 ? "Đăng bán" : "Đã bán"}
                  </div>
                  <div className="aa-properties-item-content">
                    <div className="aa-properties-info">
                      <span>Diện tích : {item.area}</span>
                     
                    </div>
                    <div className="aa-properties-about">
                      <h3><Link to={"/property/" + item.slug }>{item.title}</Link></h3>
                      <p>{item.address}.</p>                      
                    </div>
                    <div className="aa-properties-detial">
                      <span className="aa-price custom-price">
                        {item.price}
                      </span>
                      
                      <Link to={"/property/" + item.slug } className="aa-secondary-btn">Chi tiết</Link>
                    </div>
                  </div>
                </article>
              </div>
              ))
            }
           
          </div>
        </div>
      </div>
    </div>
  </section>
 
  <section id="aa-service">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-service-area">
            <div className="aa-title">
              <h2>Dịch vụ của chúng tôi</h2>
              <span></span>
              <p>Cập nhật thường xuyên giá bật động sản trên thị trường.</p>
            </div>
            
            <div className="aa-service-content">
              <div className="row">
                <div className="col-md-3">
                  <div className="aa-single-service">
                    <div className="aa-service-icon">
                      <span className="fa fa-home"></span>
                    </div>
                    <div className="aa-single-service-content">
                      <h4><Link to="#">Bán đất</Link></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus quasi asperiores itaque dolorem at.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="aa-single-service">
                    <div className="aa-service-icon">
                      <span className="fa fa-check"></span>
                    </div>
                    <div className="aa-single-service-content">
                      <h4><Link to="#">Cho thuê</Link></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus quasi asperiores itaque dolorem at.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="aa-single-service">
                    <div className="aa-service-icon">
                      <span className="fa fa-crosshairs"></span>
                    </div>
                    <div className="aa-single-service-content">
                      <h4><Link to="#">Tìm kiếm dự án</Link></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus quasi asperiores itaque dolorem at.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="aa-single-service">
                    <div className="aa-service-icon">
                      <span className="fa fa-bar-chart-o"></span>
                    </div>
                    <div className="aa-single-service-content">
                      <h4><Link to="#">Năm bắt thị trường</Link></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus quasi asperiores itaque dolorem at.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="aa-promo-banner">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-promo-banner-area">
            <h3>Tìm địa điểm tốt nhất cho bạn</h3>
            <p>Tích hợp bản đồ vào website giúp người dùng thuận tiện cho việc tra đường đến dự án của bạn, cũng như hình dung ra hình thế địa lý của cả khu vực quanh dự án bất động sản.</p>
            <Link to="#" className="aa-view-btn">Xen thêm</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  

  


{property &&
    property.map((item, key) => (
      <section key={key} id="aa-latest-property">
    <div className="container">
      <div className="aa-latest-property-area">
        <div className="aa-title">
          <h2>{item.category}</h2>
                  
        </div>
        <div className="aa-latest-properties-content">
          <div className="row">
                  {item.arrayProperty.map((data, key1) => {
                      return (  <div key={key + key1} className="col-md-4">
                      <article className="aa-properties-item">
                        <Link to={"/property/" + data.slug } className="aa-properties-item-img">
                          <img src={data.thumb} alt="img" />
                        </Link>
                        
                        <div className={data.active === 1 ? "aa-tag for-rent" : "aa-tag sold-out"}  >
                          {data.active === 1 ? "Đăng bán" : "Đã bán"}
                        </div>
                        <div className="aa-properties-item-content">
                          <div className="aa-properties-info">
                            <span>Diện tích : {data.area}</span>
                           
                          </div>
                          <div className="aa-properties-about">
                            <h3><Link to={"/property/" + data.slug }>{data.title}</Link></h3>
                            <p>{data.address}.</p>                      
                          </div>
                          <div className="aa-properties-detial">
                            <span className="aa-price custom-price">
                              {data.price}
                            </span>
                            
                            <Link to={"/property/" + data.slug } className="aa-secondary-btn">Chi tiết</Link>
                          </div>
                        </div>
                      </article>
                    </div>)
                  }) }
                 
                 
                 </div>
        </div>
      </div>
    </div>
  </section>
    ))
}

  <section id="aa-client-testimonial">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-client-testimonial-area">
            <div className="aa-title">
              <h2>Khách hàng nói gì</h2>
              <span></span>
              <p>Điều rất quan trọng đối với khách hàng là phải chú ý đến quá trình adipiscing. Đối với những nhu cầu thiết yếu và những thứ bạn mắc nợ chính linh hồn, sự thật!</p>
            </div>
            
            <div className="aa-testimonial-content">
          
              <ul className="aa-testimonial-slider">
                <li>
                  <div className="aa-testimonial-single">
                    <div className="aa-testimonial-img">
                      <img src="https://allimages.sgp1.digitaloceanspaces.com/gameviethoavn/2021/01/1610729777_160_Dung-CT-Truc-Tiep-Game-la-ai-tim-hieu-Streamer.jpg" alt="testimonial img" />
                    </div>
                    <div className="aa-testimonial-info">
                      <p>Lựa chọn những website cung cấp thông tin chính xác, đăng tin nhà đất miễn phí, uy tín và hiệu quả là giải pháp nhanh nhất để bạn có “càng nhiều khách hàng tiềm năng”. Tuy nhiên với sự bùng nổ của công nghệ thông tin, các diễn đàn đăng tin miễn phí có đến hàng trăm, hàng nghìn kênh khác nhau. Với các tính năng hấp dẫn website Batdongsanonline.vn đã trở thành lựa chọn uy tín của đông đảo khách hàng hiện nay!</p>
                    </div>
                    <div className="aa-testimonial-bio">
                      <p>TTG Shop</p>
                      <span>Trực Tiếp Game</span>
                    </div>
                  </div>
                </li>
                
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
 
  <section id="aa-latest-blog">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-latest-blog-area">
            <div className="aa-title">
              <h2>Danh sách dự án</h2>
              <span></span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe magni, est harum repellendus. Accusantium, nostrum!</p>
            </div>
            <div className="aa-latest-blog-content">
              <div className="row">
              

              {project &&
                project.map((item, key) => (
                  <div key={key} className="col-md-4">
                  <article className="aa-blog-single">
                    <figure className="aa-blog-img">
                      <Link to={"/project/" + item.slug }><img src={item.thumb} alt="img" /></Link>
                      <span className="aa-date-tag">{item.createdAt}</span>
                    </figure>
                    <div className="aa-blog-single-content">
                      <h3><Link to={"/project/" + item.slug }>{item.name}</Link></h3>
                      <p>{item.title}.</p>
                      <div className="aa-blog-single-bottom">
                        <Link to={"/project/" + item.slug } className="aa-blog-author"><i className="fa fa-map-marker"></i>{item.address}</Link>
                        <Link to={"/project/" + item.slug } className="aa-blog-comments"><i className="fa fa-money"></i>{item.price_rent}</Link>
                      </div>
                    </div>
                   
                  </article>
                </div>
                ))
              
              }
               
               
               
                
    
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



    </div>)
}
export default Home;