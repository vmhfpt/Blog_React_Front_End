import {Link} from "react-router-dom" ;
function Contact(){
  return ( <main>
      
    <section className="container-fluid app-contact">
      <div className="container">
          <div className="row">
             <div className="col-md-6 col-sm-12">
                 <div className="app-contact__left">
                     <div>
                         <div className="app-contact__left-title-top">
                             <span>Tham gia ngay</span>
                        </div>
                        <div className="app-contact__left-title">
                            <span>Free các khóa học lập trình</span>
                        </div>
                        <div className="app-contact__left-detail">
                            <span>Luôn cập nhật những công nghệ mới,hình thức học tập mới trên nền tảng web và youtube</span>
                        </div>
                        <div className="app-contact__left-list">
                            <ul>
                                <li><i className="fa fa-check" aria-hidden="true"></i> Luôn cập nhật các bài viết mới.</li>
                                <li><i className="fa fa-check" aria-hidden="true"></i> Luôn cập nhật các bài viết mới.</li>
                                <li><i className="fa fa-check" aria-hidden="true"></i> Luôn cập nhật các bài viết mới.</li>
                            </ul>
                        </div>
                     </div>
                 </div>
             </div>
             <div className="col-md-6 col-sm-12">
                 <div className="app-contact__right">
                     <div className="app-contact__form-title">
                         <span>Để lại phản hồi của bạn</span>
                     </div>
                     <div className="app-contact__form-content">
                         <form>
                             <input type="text" placeholder="Tên của bạn" />
                             <input type="email" placeholder="Email của bạn" />
                             <input type="text" placeholder="Nội dung" />
                             <button>Gửi</button>
                         </form>
                     </div>
                 </div>
             </div>
          </div>
 
      </div>
    </section>
    </main>); 

}
export default Contact;




/* */