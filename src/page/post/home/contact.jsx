/*import {Link} from "react-router-dom" ;
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
export default Contact;*/



import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import {
    LoginSocialFacebook,
    
  } from 'reactjs-social-login';
function Contact() {
 const callBackGoogle = (response) => {
  
  var decoded = jwt_decode(response.credential);
 
console.log(decoded);
 }
 const callBackFacebook = (response) => {
   console.log(response.data);
 }
 useEffect(() => {
   /* global google */
   google.accounts.id.initialize({
    client_id : "357706866429-f2vs8kjhfpgdtrtuibmj6nncbq75h14e.apps.googleusercontent.com",
    callback : callBackGoogle
   });
   google.accounts.id.renderButton(
     document.getElementById("btn"),
     {theme : "outline", size : "large"}
   );
   
 }, []);
 if(3 === 4){
  google.accounts.id.prompt();
 }
  return ( <div>
    <h1>cc</h1>
    <h1>cc</h1>
    <h1>cc</h1>
     <div id="btn"></div>
     <LoginSocialFacebook
       appId="1181121432801275"
       onResolve={callBackFacebook}
       
     >
      <h1> Đăng nhập với facebook</h1>
     </LoginSocialFacebook>
  </div>
  )
}
export default Contact;

/* */