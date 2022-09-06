import {Link} from "react-router-dom";
function Footer(){
    return (<footer id="aa-footer">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
        <div className="aa-footer-area">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="aa-footer-left">
               <p>Thiết kế bởi <Link rel="nofollow" to="">console.log</Link></p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="aa-footer-middle">
                <Link to="#"><i className="fa fa-facebook"></i></Link>
                <Link to="#"><i className="fa fa-twitter"></i></Link>
                <Link to="#"><i className="fa fa-google-plus"></i></Link>
                <Link to="#"><i className="fa fa-youtube"></i></Link>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="aa-footer-right">
                <Link to="#">Home</Link>
                <Link to="#">Support</Link>
                <Link to="#">License</Link>
                <Link to="#">FAQ</Link>
                <Link to="#">Privacy & Term</Link>
              </div>
            </div>            
          </div>
        </div>
      </div>
      </div>
    </div>
  </footer>)
}
export default Footer;