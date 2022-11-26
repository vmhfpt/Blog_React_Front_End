import {Link} from "react-router-dom";
function Footer(){
    return (<footer className="app-header">
    <div className="app-header__about container-fluid">
         <div className="container">
             <div className="row">
                 <div className="col-lg-2 col-sm-12 col-md-3 ">
                     <div className="app-header__about-logo">
                         <Link to=""><span>MAGIFY</span></Link>
                     </div>
                 </div>
                 <div className="col-lg-7 col-sm-12 col-md-5 ">
                      <div className="app-header__about-content">
                          <span className="footer-title">ABOUT US</span>
                          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                      </div>
                 </div>
                 <div className="col-lg-3 col-sm-12 col-md-4 ">
                     <div className="app-header__about-socialite-flex">

                     
                      <div className="app-header__about-socialite">
                          <span className="footer-title">FOLLOW US</span>
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
</footer>)
}
export default Footer;