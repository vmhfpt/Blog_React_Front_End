import { useSelector } from "react-redux";
import { getLogin } from "../../user/selectLogin";
import {Link } from "react-router-dom";
import {logoutUser} from "../../user/authReducer";
import {useDispatch} from "react-redux";
function Header(){
  const dispatch = useDispatch();
   const checkUser = useSelector(getLogin);
  const logOut = () => {
    dispatch(logoutUser(checkUser.id));
    localStorage.setItem('accessToken',null);
    localStorage.setItem('refreshToken',null);
  }
    return (<div>



    <Link className="scrollToTop" to="#"><i className="fa fa-angle-double-up"></i></Link>
  
  <header id="aa-header">  
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-header-area">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-6">
                <div className="aa-header-left">
                  <div className="aa-telephone-no">
                    <span className="fa fa-phone"></span>
                    0359932904
                  </div>
                  <div className="aa-email hidden-xs">
                    <span className="fa fa-envelope-o"></span> bankhonghieutoi@gmail.com
                  </div>
                </div>              
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6">
                {checkUser.isLogin ? <div className="aa-header-right">
                  <Link to="#" className="aa-register">{checkUser.name}</Link>
                  <Link to="/property/add" className="aa-register">Quản lý bài đăng</Link>
                  <Link to="#" onClick={() => logOut()}className="aa-login">Đăng xuất</Link>
                </div> : <div className="aa-header-right">
                  <Link to="/register" className="aa-register">Đăng ký</Link>
                  <Link to="/login" className="aa-login">Đăng nhập</Link>
                </div>}
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>


    </div>)}
export default Header;