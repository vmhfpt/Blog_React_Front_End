import {Link} from "react-router-dom";
function NotFound(){
    return (<div>
 <section id="aa-property-header">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-property-header-inner">
            <h2>404 Error</h2>
            <ol className="breadcrumb">
            <li><Link to="#">HOME</Link></li>            
            <li className="active">404</li>
          </ol>
          </div>
        </div>
      </div>
    </div>
  </section> 
  
  <section id="aa-error">
    <div className="container">
      <row>
        <div className="col-md-12">
          <div className="aa-error-area">
            <h2>404</h2>
            <p><span className="fa fa-warning"></span>Ôi! Vui lòng refresh trang web của bạn hoặc trang không tồn tại</p>
            <Link to="/">Quay lại trang chủ</Link>
          </div>
        </div>
      </row>
    </div>
  </section>
        
    </div>)
}
export default NotFound;