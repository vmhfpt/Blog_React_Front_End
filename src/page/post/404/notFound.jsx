import {Link} from "react-router-dom";
function NotFound(){
    return ( <section className="container-fluid app-not-found">
    <div className="app-not-found__content">
         <h1>404</h1>
         <h3>Không có gì ở đây!</h3>
         <p>Xin lỗi ! không tìm thấy trang nào như vậy. Có vẻ bạn đang tìm thứ gì đó như (SQL injection, Brute force, DDoS, XSS ...).</p>
         <Link to="/"> <button>Trang chủ</button></Link>
    </div>
</section>)
}
export default NotFound;