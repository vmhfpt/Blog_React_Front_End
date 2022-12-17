import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import { useDispatch } from "react-redux";
import { setValueUser } from "../post/postReducer";
import { useNavigate } from "react-router-dom";
import PostService from "../../../service/post.service";
import jwt_decode from "jwt-decode";
import {
  LoginSocialFacebook,
} from 'reactjs-social-login';
function Login() {

  const history = useNavigate();

  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });

  const handleEmail = (value) => {
    setStatus(false);
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))) {
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
    setStatus(false);
    if (value.length < 5 || value.length >= 20) {
      setError((prev) => {
        return { ...prev, password: "* Mật khẩu phải từ  5 đến 20 kí tự" };
      });
    } else {
      setError((prev) => {
        return { ...prev, password: "" };
      });
    }
    setPassword(value);
  };

  const handleSubmit = async () => {

    if (email === "" || password === "") {
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


      const result = await PostService.login({ email, password });

      if (result.status === "success") {
        dispatch(setValueUser({ name: result.data.name, id: Number(result.data.id), email: result.data.email }));
        history(`/`);
      } else {
        setStatus(result.message);
      }



    }

  };
  const callBackGoogle = (response) => {

    var decoded = jwt_decode(response.credential);
    const randomId = Math.floor(100000 + Math.random() * 900000);
   // console.log(decoded);
    dispatch(setValueUser({ name: decoded.name, id: randomId, email: decoded.email, thumb : decoded.picture }));
    history(`/`);
  }
  const callBackFacebook = (response) => {
    const randomId = Math.floor(100000 + Math.random() * 900000);
   
    //console.log(response.data);
    if(!isEmpty(response.data)){
      const result = response.data;
        dispatch(setValueUser({ name: result.name, id: randomId, email:result.email, thumb : result.picture ? result.picture.data.url : false }));
        history(`/`);
    }
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "357706866429-f2vs8kjhfpgdtrtuibmj6nncbq75h14e.apps.googleusercontent.com",
      callback: callBackGoogle
    });
    google.accounts.id.renderButton(
      document.getElementById("btn"),
      { theme: "outline", size: "large" }
    );

  }, []);
  return (
    <section className="container-fluid app-contact">
      <div className="container">

        <div className="form-container__app">
          <div className="form-container__app-content">
            <div className="app-contact__right">
              <div className="app-contact__form-title">
                <span>Đăng nhập</span>
              </div>
              <div className="app-contact__form-content">
                <form>

                  <input value={email} onChange={(e) => handleEmail(e.target.value)} type="email" placeholder="Email của bạn" />
                  <span className="error-form"> {error.email}</span>
                  <input value={password} onChange={(e) => handlePassword(e.target.value)} type="password" placeholder="Mật khẩu" />
                  <span className="error-form"> {error.password}</span>
                  <button onClick={() => handleSubmit()} type="button">Đăng nhập</button>
                  {status && <div className="popup-login">
                    <span>{status}</span>
                  </div>}

                  <div className="app-login__socialite">
                    <div className="app-login__socialite-title"><span>Hoặc</span></div>
                    <div id="btn"></div>
                    <LoginSocialFacebook
                      appId="1181121432801275"
                      onResolve={callBackFacebook}

                    >
                      <div className="app-login__socialite-facebook">
                        Đăng nhập bằng Facebook
                        <i class="fa fa-facebook-official" aria-hidden="true"></i>
                      </div>
                    </LoginSocialFacebook>

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
