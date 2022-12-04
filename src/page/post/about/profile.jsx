import {Link} from "react-router-dom" ;
import img from "./image/vmh.jpg";
import project from "./image/1.png";
import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";
function Profile(){
   
    // ScrollReveal().reveal('.profile-introduce__block-left', {
    //     distance: '0px',
    //     opacity: 0.8
    // });
    // ScrollReveal().reveal('.profile-introduce__block-left', {
    //     delay: 375,
    //     duration: 500,
    //     reset: true
    // });
    // ScrollReveal().reveal('.profile-about__block', {
    //     delay: 375,
    //     duration: 500,
    //     reset: true
    // });
  //  ScrollReveal().reveal('.logo', { origin: 'top' });
   
   // ScrollReveal().reveal('.profile-project__block', { delay: 500, distance: '50px'});
   // ScrollReveal().reveal('.profile-project__block');
  //  ScrollReveal().reveal('.profile-project__block');//profile-about__study-flex-item 
 useEffect(() => {
    ScrollReveal({ reset: true });
    ScrollReveal().reveal('.profile-about__study-flex-item, .profile-skill__block-left , .profile-skill__block-right', { scale: 0.85, delay: 370 });
    ScrollReveal().reveal('.profile-about__block-right, .profile-about__block-left-content-item, .profile-title-job__item, .profile-testimonial__block-flex ', { delay: 370, rotate: {
        x: 20,
        y: 20,
        z: 20
    }});
    ScrollReveal().reveal('.profile-introduce__block-left, .profile-introduce__block-right, .profile-project__block-item', { delay: 370, rotate: {
        x: -20,
        y: -20,
        z: -20
    }});
    return () => {
        ScrollReveal().destroy();
    }
 }, [])
  return ( <main>
      
      <section className="container-fluid app-profile">
            <div className="container ">
                <div className="profile-introduce__block">
                    <div className="row flex-direction">
                        <div className="col-md-6 ">
                            <div className="profile-introduce__block-left">
                                <div className="profile-introduce__block-left-name">
                                    <h3>Xin chào !</h3>
                                    <h1>Tôi là <span className="profile-introduce__block-left-name-color">Vũ Minh
                                            Hùng</span> .</h1>
                                    <h1>Một Web Developer</h1>
                                    <h1>Front-end .</h1>
                                </div>

                                <div className="profile-introduce__block-left-vector">
                                    <img src="https://rey.extact.com/wp-content/uploads/2021/06/Line-Vector.png"
                                        alt="" />
                                </div>
                                <div className="profile-introduce__block-left-text">
                                    <p>Tôi là nhà phát triển website đến từ Việt Nam.
                                        Tôi đang học và thiết kế ra nhiều mẫu website đẹp và dễ dàng sử dụng.</p>
                                </div>
                                <div className="profile-introduce__block-left-download">
                                  <a href="mailto:vuminhhungltt904@gmail.com">  <div className="profile-introduce__block-left-download-item email-btn">
                                        <div className="profile-introduce__block-left-download-item-icon"><i
                                                className="fa fa-envelope-o" aria-hidden="true"></i></div>
                                        <div>Email</div>
                                    </div></a>
                                    <a href="https://www.topcv.vn/xem-cv/WlJUUA9SAAYKUABdD1NWCgBXV1VXUwtXXlReVw8374"> <div className="profile-introduce__block-left-download-item cv-btn">
                                        <div className="profile-introduce__block-left-download-item-icon"><i
                                                className="fa fa-arrow-down" aria-hidden="true"></i></div>
                                      <div>Tải xuống CV</div>
                                    </div> </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="profile-introduce__block-right">
                                <div className="profile-introduce__block-right-point-next">
                                    <img src="https://rey.extact.com/wp-content/uploads/2021/06/Bullet-Points.png"
                                        alt="" />
                                </div>
                                <div className="profile-introduce__block-right-point">
                                    <img src="https://rey.extact.com/wp-content/uploads/2021/06/Bullet-Points.png"
                                        alt="" />
                                </div>
                                <div className="profile-introduce__block-right-my-image">
                                    <div className="default-image-effect">
                                        <img src={img} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="profile-title-block">
                    <span>Về tôi</span>
                </div>
                <div className="profile-about__block">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="profile-about__block-left">
                                <div className="profile-about__block-left-content">
                                    <div className="profile-about__block-left-content-item">
                                        <div className="profile-about__block-left-content-item-title">họ và tên</div>
                                        <div className="profile-about__block-left-content-item-detail">
                                            Vũ Minh Hùng
                                        </div>
                                    </div>
                                    <div className="profile-about__block-left-content-item">
                                        <div className="profile-about__block-left-content-item-title">ngày sinh</div>
                                        <div className="profile-about__block-left-content-item-detail">
                                            20 / 11 / 2000
                                        </div>
                                    </div>
                                    <div className="profile-about__block-left-content-item">
                                        <div className="profile-about__block-left-content-item-title">Học vấn</div>
                                        <div className="profile-about__block-left-content-item-detail">
                                            Trường ĐH CNTT & TT Thái Nguyên (ICTU).<br /> Cao Đẳng FPT Polytechnic.
                                        </div>
                                    </div>
                                    <div className="profile-about__block-left-content-item">
                                        <div className="profile-about__block-left-content-item-title">Vai trò</div>
                                        <div className="profile-about__block-left-content-item-detail">
                                            Web Front-end
                                        </div>
                                    </div>
                                    <div className="profile-about__block-left-content-item">
                                        <div className="profile-about__block-left-content-item-title">Email</div>
                                        <div className="profile-about__block-left-content-item-detail">
                                            vuminhhungltt904@gmail.com
                                        </div>
                                    </div>
                                    <div className="profile-about__block-left-content-item">
                                        <div className="profile-about__block-left-content-item-title">SĐT</div>
                                        <div className="profile-about__block-left-content-item-detail">
                                            0359932904
                                        </div>
                                    </div>
                                    <div className="profile-about__block-left-content-item">
                                        <div className="profile-about__block-left-content-item-title">Địa chỉ</div>
                                        <div className="profile-about__block-left-content-item-detail">
                                            39 Phú Lộc 19, Thanh Khê Tây, Liên Chiểu, Đà Nẵng
                                        </div>
                                    </div>
                                    <div className="profile-about__block-left-content-item">
                                        <div className="profile-about__block-left-content-item-title">Sở thích</div>
                                        <div className="profile-about__block-left-content-item-detail">
                                            Chơi game, nghe nhạc, đá bóng, ...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="profile-about__block-right">
                                <div className="profile-about__block-right-content">
                                    <div className="profile-about__block-right-content-top">
                                        <div className="profile-about__block-right-content-top-item">
                                            <div className="profile-about__block-right-content-top-item-title"> Giải thưởng
                                            </div>
                                            <div className="profile-about__block-right-content-top-item-quantity">-1</div>
                                        </div>
                                        <div className="profile-about__block-right-content-top-item">
                                            <div className="profile-about__block-right-content-top-item-title"> Kinh Nghiệm
                                            </div>
                                            <div className="profile-about__block-right-content-top-item-quantity">-5</div>
                                        </div>
                                        <div className="profile-about__block-right-content-top-item">
                                            <div className="profile-about__block-right-content-top-item-title"> Dự án</div>
                                            <div className="profile-about__block-right-content-top-item-quantity">-10</div>
                                        </div>
                                        <div className="profile-about__block-right-content-top-item">
                                            <div className="profile-about__block-right-content-top-item-title"> Khách hàng
                                            </div>
                                            <div className="profile-about__block-right-content-top-item-quantity">0</div>
                                        </div>
                                    </div>
                                    <div className="profile-about__block-right-content-bottom">
                                        <h2>Sự phát triển của ngành công nghệ.</h2>
                                        <p>Một website tốt, chất lượng là một website phải đáp ứng được nhu cầu về nội dung của người dùng.  .</p>
                                        <p>Bởi vì, khi khách hàng có nhu cầu tìm kiếm thông tin dựa trên hành vi tìm kiếm trước đó hoặc gần với khu vực xung quanh bạn thì Google sẽ có xu hướng đề xuất những trang web có nội dung và thông tin liên quan đến hành vi của người dùng.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-title-block">
                    <span>Công việc</span>
                </div>

                <div className="profile-title-job">
                    <div className="profile-title-job__item">
                        <div className="profile-title-job__item-background">
                            <img src="https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283" alt="" />
                             <div className="profile-title-job__item-content">
                                       <div className="profile-title-job__item-content-flex">
                                        <div className="profile-title-job__item-content-flex-title">
                                            <h1> Lập trình</h1>
                                         </div>
                                         <div className="profile-title-job__item-content-flex-list">
                                            <ul>
                                                <li>Cắt ghép html css từ template có sẵn</li>
                                                <li>Xây dựng, phân tích chức năng cho website</li>
                                                <li>Tìm hiểu cập nhật công nghệ, CMS, Framework mới</li>
                                                <li>Tham gia dự án team work học tập thêm quy tắc lập trình</li>
                                                
                                            </ul>
                                         </div>
                                       </div>
                             </div>
                        </div>
                    </div>
                      <div className="profile-title-job__item">
                        <div className="profile-title-job__item-background">
                            <img src="https://www.freecodecamp.org/news/content/images/2021/06/figma-crash-course-freecodecamp.jpg" alt="" />
                            <div className="profile-title-job__item-content">
                                <div className="profile-title-job__item-content-flex">
                                     <div className="profile-title-job__item-content-flex-title">
                                        <h1> Youtube</h1>
                                     </div>
                                     <div className="profile-title-job__item-content-flex-list">
                                        <ul>
                                            <li>Chia sẻ thủ thuật hữu ích trên mobile</li>
                                            <li>Xây dựng nội dung khóa học lập trình free</li>
                                            <li>Review game kinh dị</li>
                                           
                                            
                                        </ul>
                                     </div>
                                 </div>
                            </div>
                        </div>
                    </div>

                    <div className="profile-title-job__item">
                        <div className="profile-title-job__item-background">
                            <img src="https://twistarticle.com/wp-content/uploads/2019/11/Know-The-Advantages-Of-Adobe-Photoshop-For-Your-Designing-Work.jpg" alt="" />
                            <div className="profile-title-job__item-content">
                                <div className="profile-title-job__item-content-flex">
                                     <div className="profile-title-job__item-content-flex-title">
                                        <h1> Biên tập </h1>
                                     </div>
                                     <div className="profile-title-job__item-content-flex-list">
                                        <ul>
                                            <li>Đăng tải nội dung video meme hài hước trên fapage facebook</li>
                                            <li>Chỉnh sửa ảnh</li>
                                            <li>Viết blog</li>
                                            
                                        </ul>
                                     </div>
                                 </div>
                            </div>
                        </div>
                    </div>

                    <div className="profile-title-job__item">
                        <div className="profile-title-job__item-background">
                            <img src="https://cdn.dribbble.com/users/452635/screenshots/14276201/media/9a9dfb97b7525e2539eee882bd949a14.png" alt="" />
                            <div className="profile-title-job__item-content">
                                <div className="profile-title-job__item-content-flex">
                                     <div className="profile-title-job__item-content-flex-title">
                                        <h1> ***</h1>
                                     </div>
                                     <div className="profile-title-job__item-content-flex-list">
                                        <ul>
                                            <li>*****</li>
                                            <li>*****</li>
                                            <li>*****</li>
                                            <li>*****</li>
                                        </ul>
                                     </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="profile-title-block">
                    <span>Học tập</span>
                </div>

                <div className="profile-about__study">
                     <div className="profile-about__study-flex">
                        <div className="profile-about__study-flex-item ">
                            <img src="https://res.cloudinary.com/highereducation/image/upload/v1533591754/TheBestColleges.org/study-notebooks.jpg" alt="" />
                        </div>
                        <div className="profile-about__study-flex-item ">
                             <h1>Lộ trình trở thành 1 developer PHP</h1>
                             <p>Nếu bạn xuất phát là một lập trình viên tay ngang như mình, thì PHP là một lựa chọn khá tốt để bắt đầu ...</p>

                             <Link to="/post/lo-trinh-de-tro-thanh-mot-lap-trinh-vien-php-cua-minh"> ĐỌC THÊM</Link>
                        </div>
                     </div>

                     <div className="profile-about__study-flex">
                        <div className="profile-about__study-flex-item ">
                            <img src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?cs=srgb&dl=pexels-pixabay-301920.jpg" alt="" />
                           
                        </div>
                        <div className="profile-about__study-flex-item ">
                             <h1>Học lập trình có khó không ?</h1>
                             <p>Việc học một ngôn ngữ lập trình mới khá dễ nhưng để trở thành một chuyên gia, người học cần nỗ lực, kiên trì và tập luyện không ngừng ...</p>

                             <Link to="/post/hoc-lap-trinh-co-kho-khong"> ĐỌC THÊM</Link>
                        </div>
                     </div>
                </div>
                <div className="profile-more-post">
                    <Link to="/post/search?key="> Xem tất cả bài viết</Link>
                </div>

                <div className="profile-title-block">
                    <span>Kỹ năng</span>
                </div>

                <div className="profile-skill__block">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                             <div className="profile-skill__block-left ">
                                 <h1>Xu hướng ngành thiết kế website 2022</h1>
                                 <p> Hiện nay, ngày càng có nhiều doanh nghiệp startup bước chân vào lĩnh vực kinh doanh dẫn đến nhu cầu thiết kế website cũng từ đó mà tăng lên rất nhiều. Đây cũng chính là lý do mà thị trường thiết kế website ngày càng mở rộng và phát triển.</p>
                                 <p>
                                    
                                    Kỹ năng mềm quan trọng cần có : Quản lý thời gian, sáng tạo và chủ động, Không ngừng học hỏi, Kinh doanh và quản lý khách hàng, giao tiếp, viết lách ...
                                 </p>
                             </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="profile-skill__block-right">
                                 <div className="profile-skill__block-right-content">
                                    <div className="profile-skill__block-right-content-flex">
                                          <div className="profile-skill__block-right-content-flex-item ">
                                              <div className="profile-skill__block-right-content-flex-item-total">
                                                  15%
                                              </div>
                                          </div>
                                          <div className="profile-skill__block-right-content-flex-item">
                                               <div className="profile-skill__block-right-content-flex-item-name">Lập trình</div>
                                               <div className="profile-skill__block-right-content-flex-item-process">
                                                   <div className="profile-skill__block-right-content-flex-item-process-tag">

                                                   </div>
                                                   <div style={{"width" : "15%" }}  className="profile-skill__block-right-content-flex-item-process-absolute">

                                                   </div>

                                               </div>
                                          </div>
                                    </div> 
                                    <div className="profile-skill__block-right-content-flex">
                                        <div className="profile-skill__block-right-content-flex-item ">
                                            <div className="profile-skill__block-right-content-flex-item-total">
                                                7%
                                            </div>
                                        </div>
                                        <div className="profile-skill__block-right-content-flex-item">
                                             <div className="profile-skill__block-right-content-flex-item-name">Làm việc nhóm</div>
                                             <div className="profile-skill__block-right-content-flex-item-process">
                                                 <div className="profile-skill__block-right-content-flex-item-process-tag">

                                                 </div>
                                                 <div style={{"width" : "7%" }}   className="profile-skill__block-right-content-flex-item-process-absolute">

                                                 </div>

                                             </div>
                                        </div>
                                  </div> 
                                  <div className="profile-skill__block-right-content-flex">
                                    <div className="profile-skill__block-right-content-flex-item ">
                                        <div className="profile-skill__block-right-content-flex-item-total">
                                            3%
                                        </div>
                                    </div>
                                    <div className="profile-skill__block-right-content-flex-item">
                                         <div className="profile-skill__block-right-content-flex-item-name">Tiếng Anh</div>
                                         <div className="profile-skill__block-right-content-flex-item-process">
                                             <div className="profile-skill__block-right-content-flex-item-process-tag">

                                             </div>
                                             <div style={{"width" : "3%" }}   className="profile-skill__block-right-content-flex-item-process-absolute">

                                             </div>

                                         </div>
                                    </div>
                              </div>
                              <div className="profile-skill__block-right-content-flex">
                                <div className="profile-skill__block-right-content-flex-item ">
                                    <div className="profile-skill__block-right-content-flex-item-total">
                                        11%
                                    </div>
                                </div>
                                <div className="profile-skill__block-right-content-flex-item">
                                     <div className="profile-skill__block-right-content-flex-item-name">Photoshop</div>
                                     <div className="profile-skill__block-right-content-flex-item-process">
                                         <div className="profile-skill__block-right-content-flex-item-process-tag">

                                         </div>
                                         <div style={{"width" : "11%" }} className="profile-skill__block-right-content-flex-item-process-absolute">

                                         </div>

                                     </div>
                                </div>
                          </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-title-block">
                    <span>Dự án</span>
                </div>

                <div className="profile-project__block">
                    <div className="profile-project__block-item">
                         <div className="row">
                             <div className="col-sm-6">
                                 <div className="profile-project__block-item-left">
                                     <div className="profile-project__block-item-left-title">
                                        <span>Tháng 5, 2022 – tháng 6, 2022</span>
                                     </div>
                                     <div className="profile-project__block-item-left-image" >
                                         <img src={project} alt="" />
                                     </div>
                                 </div>
                             </div>
                             <div className="col-sm-6">
                                <div className="profile-project__block-item-right">
                                     <div>
                                        <span>Eatin (bách hóa xanh)</span>
                                     </div>
                                     <div>
                                        <span>
                                            Xây dựng Giao diện trang web bách hóa xanh , tổng (11 trang bao gồm : trang chủ, danh mục, tin tức, chi tiết sản phẩm, chi tiết bài đăng, giỏ hàng, thanh toán, ...).</span>
                                     </div>
                                     <div>
                                        <span>Html / css</span>
                                     </div>
                                </div>
                             </div>
                         </div>
                    </div>
                    
                </div>
                <div className="profile-title-block">
                    <span>Lịch trình</span>
                </div>

                <div className="profile-testimonial__block">
                    <div className="profile-testimonial__block-flex ">
                         <div className="profile-testimonial__block-flex-item ">
                                <div className="profile-testimonial__block-flex-item-content">
                                   <span>- 07/2015 - 09-2018 : Tốt nghiệp THPT (trường THPT Lý Tự Trọng Đăk Lăk).<br/>- Chuyên Tổ hợp khoa học tự nhiên (A00).</span>
                                </div>
                                <div className="profile-testimonial__block-flex-item-tag">
                                     <div className="profile-testimonial-container">
                                         <div className="profile-testimonial__block-flex-item-tag-bgr"> </div>
                                         <div className="profile-testimonial__block-div-left">
                                            
                                         </div>
                                     </div>
                                </div>
                         </div>
                         <div className="profile-testimonial__block-flex-item none-flex flex-none-custom">
                                
                        </div>
                    </div>
                    <div className="profile-testimonial__block-flex ">
                        <div className="none-flexed flex-none-custom profile-testimonial__block-flex-item ">
                             
                        </div>
                        <div className="profile-testimonial__block-flex-item none-flexed-border ">
                            <div className="profile-testimonial__block-flex-item-tag">
                                <div className="profile-testimonial-container">
                                    <div className="profile-testimonial__block-flex-item-tag-bgr"> </div>
                                    <div className="profile-testimonial__block-div-right custom-div-left">
                                       
                                    </div>
                                </div>
                           </div>
                            <div className="profile-testimonial__block-flex-item-content">
                                <span>- 09-2018 - 02-2020 : Theo học tại trường ĐH CNTT & Truyền thông Thái Nguyên (bảo lưu) <br />- Chuyên ngành : Kỹ thuật phần mềm</span>
                          
                            </div>
                            
                       </div>
                   </div>
                   <div className="profile-testimonial__block-flex ">
                    <div className="profile-testimonial__block-flex-item ">
                           <div className="profile-testimonial__block-flex-item-content">
                               <span>Hiện tại : Là sinh viên đang học tại trường CĐ FPT polytechnic <br/>- Chuyên ngành : Thiết kế trang web</span>
                              
                           </div>
                           <div className="profile-testimonial__block-flex-item-tag">
                                <div className="profile-testimonial-container">
                                    <div className="profile-testimonial__block-flex-item-tag-bgr"> </div>
                                    <div className="profile-testimonial__block-div-left">
                                       
                                    </div>
                                </div>
                           </div>
                    </div>
                    <div className="profile-testimonial__block-flex-item none-flex flex-none-custom">
                           
                   </div>
               </div>
                </div>
            </div>
        </section>
    </main>);
}
export default Profile;