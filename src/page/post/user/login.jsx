import { Link } from "react-router-dom";
import { useState } from "react";
import { login } from "./authReducer";
import { logout } from "./authReducer";
import {useDispatch} from "react-redux";

import { useNavigate } from "react-router-dom";
import AuthService from "../../../service/auth.service";
function Login() {
  const history = useNavigate();
  
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  const handleEmail = (value) => {
    if (value.length < 5) {
      setError((prev) => {
        return { ...prev, email: "* Email không hợp lệ" };
      });
    } else {
      setError((prev) => {
        return { ...prev, email: "" };
      });
    }
    setEmail(value);
  };
  const handlePassword = (value) => {
    if (value.length < 5) {
      setError((prev) => {
        return { ...prev, password: "* Mật khẩu phải ít nhất 5 kí tự" };
      });
    } else {
      setError((prev) => {
        return { ...prev, password: "" };
      });
    }
    setPassword(value);
  };
  
  const handleSubmit = async () => {
    if(email === "" || password === ""){
      if (email === "") {
        setError((prev) => {
          return { ...prev, email: "* Email không được để trống" };
        });
      }
      if (password === "") {
        setError((prev) => {
          return { ...prev, password: "* Mật khẩu không được để trống" };
        });
      }
      return (false);
    }


    if (error.email === "" && error.password === "") {
         const response = await AuthService.login({email : email, password : password});
         if (response.status === "error") {
          dispatch(logout());
          setStatus(response.message);
          setPassword("");
          localStorage.setItem('accessToken',null);
          localStorage.setItem('refreshToken',null);
        } else {
          localStorage.setItem('accessToken',response.token);
          localStorage.setItem('refreshToken',response.refreshToken);
          dispatch(
            login({
              accessToken: response.token,
              refreshToken: response.refreshToken,
              isLogin: true,
              name : response.name,
              email : response.email,
              id : response.id
            })
          );
           history(`/`);
       
        } 
        
    }
    
  };
 
  return (
    <section id="aa-signin">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="aa-signin-area">
              <div className="aa-signin-form">
                <div className="aa-signin-form-title">
                  <Link className="aa-property-home" to="/">
                    Địa ốc Console.log
                  </Link>
                  <h4>Đăng nhập bằng tài khoản của bạn</h4>
                </div>
                <form className="contactform">
                  <div className="aa-single-field">
                    <label>
                      Email <span className="required">*</span>
                    </label>
                    <input
                      onChange={(e) => handleEmail(e.target.value)}
                      value={email}
                      type="email"
                      required="required"
                      aria-required="true"
                    />
                    <span className="custom-error">{error.email} </span>
                  </div>
                  <div className="aa-single-field">
                    <label>
                      Password <span className="required">*</span>
                    </label>
                    <input
                      value={password}
                      onChange={(e) => handlePassword(e.target.value)}
                      type="password"
                    />
                    <span className="custom-error">{error.password} </span>
                  </div>
                  <div className="aa-single-field">
                    <label>
                      <input type="checkbox" /> Remember me
                    </label>
                  </div>
                    <div style={{"clear" : "both"}}></div>
                  {status  && <div className="error_login_custom">{ status}</div>}
                  <div className="aa-single-submit">
                    <input
                      onClick={() => handleSubmit()}
                      type="button"
                      value="Đăng nhập"
                      className="aa-browse-btn"
                    />
                    <p>
                      Bạn chưa có tài khoản?{" "}
                      <Link to="/register">Tạo ngay!</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login;
