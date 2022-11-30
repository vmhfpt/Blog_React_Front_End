import {Link} from "react-router-dom";
import { useState } from "react";
import {  animateScroll as scroll } from 'react-scroll';
import url from "./icon/200w.gif";
import logo from "../header/Logo/logo.png";
function Footer(){
    const [visible,  setVisible] = useState(false);
    const toTop = () => {
        scroll.scrollToTop();
      };
     
      const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
          } 
          else if (scrolled <= 300){
            setVisible(false)
          }
      }
      window.addEventListener('scroll', toggleVisible);
    return (<footer className="app-header">
     {visible && <div onClick={() => toTop()}className="back-to-top">
    <i className="fa fa-arrow-up" aria-hidden="true"></i>

    </div>}

   <a href="https://m.me/hung.v.minh.7"> <div className="chat-now">
        <img src={url} alt="" />
    </div> </a>
    <div className="app-header__about container-fluid">
         <div className="container">
             <div className="row">
                 <div className="col-lg-2 col-sm-12 col-md-3 ">
                     <div className="app-header__about-logo">
                         
                        <div>
                            <img src={logo} alt="" />
                        </div>
                     </div>
                 </div>
                 <div className="col-lg-7 col-sm-12 col-md-5 ">
                      <div className="app-header__about-content">
                          <span className="footer-title">Giới thiệu</span>
                          <p>Trang blog tâm sự chia sẻ thử thuật liên quan đến lập trình, chịu trách nhiệm nội dung bài viết, bản quyền thuộc về tác giả console.log(), "website này kéo thả bằng <a href="https://wordpress.com/">wordpress</a> thôi !!!" </p>
                      </div>
                 </div>
                 <div className="col-lg-3 col-sm-12 col-md-4 ">
                     <div className="app-header__about-socialite-flex">

                     
                      <div className="app-header__about-socialite">
                          <span className="footer-title">Theo dõi tôi</span>
                          <ul className="app-header__about-socialite-icon">
                             <Link to=""><li className="fa-hover"><i className="fa fa-facebook" aria-hidden="true"></i></li></Link>
                             <Link to=""><li className="tw-hover"><i className="fa fa-twitter" aria-hidden="true"></i></li></Link>
                             <Link to=""><li className="yo-hover"><i className="fa fa-youtube-play" aria-hidden="true"></i></li></Link>
                             <Link to=""><li className="git-hover"><i className="fa fa-github" aria-hidden="true"></i></li></Link>

                            <Link to=""><li className="in-hover"><i className="fa fa-instagram" aria-hidden="true"></i></li></Link>
                          </ul>
                      </div>
                     </div>
                 </div>
             </div>
         </div>
    </div>
    <div className="app-header__nav container-fluid">
        <div className="container">
            <div className="row">
               <div className="col-md-6 col-sm-12">
                    
                     <div className="app-header__nav-left">
                         <Link to=""><span>Design by - Blogger Templates</span></Link>
                     </div>
               </div>
               <div className="col-md-6 col-sm-12">
                 <div className="app-header__nav-right">
                      <ul>
                         <Link to="/"><li>Trang chủ</li></Link>
                         <Link to="/about/ve-toi"><li>Về tôi</li></Link>
                         <Link to="/about/chinh-sach"><li>Chính sách</li></Link>
                         <Link to="/contact"><li>Liên hệ</li></Link>
                      </ul>
                 </div>
           </div>
            </div>
        </div>
    </div>
</footer>);
}
export default Footer;