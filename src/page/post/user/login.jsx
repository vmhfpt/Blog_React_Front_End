import { Link } from "react-router-dom";
import { useState } from "react";

import {useDispatch} from "react-redux";
import { setValueUser } from "../post/postReducer";
import { useNavigate } from "react-router-dom";
import PostService from "../../../service/post.service";
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
       
         
         const result = await PostService.login({email, password});
        
         if(result.status === "success") {
          dispatch(setValueUser({name : result.data.name, id : Number(result.data.id), email : result.data.email}));
          history(`/`);
         }else {
          setStatus(result.message);
         }
        
   
        
    }
    
  }; 
 
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
                           
                           <input value={email} onChange={(e) =>  handleEmail(e.target.value)}type="email" placeholder="Email của bạn" />
                           <span className="error-form"> {error.email}</span>
                           <input value={password} onChange={(e) => handlePassword(e.target.value)} type="password" placeholder="Mật khẩu" />
                           <span className="error-form"> {error.password}</span>
                           <button onClick={() => handleSubmit()} type="button">Đăng nhập</button>
                           {status && <div className="popup-login">
                              <span>{status}</span>
                           </div>}
                           
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
