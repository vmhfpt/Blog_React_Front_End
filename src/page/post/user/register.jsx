import {Link} from "react-router-dom";
import {useState} from "react";
import validator from "validator";
import AuthService from "../../../service/auth.service";
import { register } from "./authReducer";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

function Register(){
  const history = useNavigate();
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPhoneNumber, setErrorPhoneNumber] = useState("");
  const [errorAddress, setErrorAddress] = useState('');
  const [errorName, setErrorName] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
   const [name, setName] = useState('');
   const [address, setAddress] = useState('');
   const [password, setPassword] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');
   const [email, setEmail] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const validateEmail = (e) => {
    setStatus("");
    setErrorEmail(null);
    if (validator.isEmail(e.target.value) === false) {
      setErrorEmail("* Email không hợp lệ");
    }
    if (!e.target.value) {
      setErrorEmail("* Email không được để trống");
    }
    setEmail(e.target.value);
  };
  const validatePassword = (e) => {
    setStatus("");
    setErrorPassword(null);
    if (e.target.value.length < 9 || e.target.value.length > 15) {
      setErrorPassword("* Mật khẩu trong khoảng từ 9 đến 15 ký tự");
    }
    if (e.target.value.length === 0) {
      setErrorPassword("* Mật khẩu không được để trống");
    }
    if(e.target.value !== confirmPassword && confirmPassword !== ''){
      setErrorPassword("* Mật khẩu không khớp với mật khẩu xác thực");
    }
    setPassword(e.target.value);
  };

  const validatePhoneNumber = (e) => {
    setStatus("");
    setErrorPhoneNumber(null);
    if (e.target.value.length < 10) {
      setErrorPhoneNumber("* Số điện thoại không hợp lệ");
    }
    if (e.target.value.length === 0) {
      setErrorPhoneNumber("* Số điện thoại không được để trống");
    }
    setPhoneNumber(e.target.value);
  };
  const validateAddress = (e) => {
    setStatus("");
    setErrorAddress(null);
    if (e.target.value.length < 4) {
      setErrorAddress("* Địa chỉ phải từ 4 ký tự");
    }
    if (e.target.value.length === 0) {
      setErrorAddress("* Địa chỉ không được để trống");
    }
    setAddress(e.target.value);
  }
  const validateName = (e) => {
    setStatus("");
    setErrorName(null);
    if (e.target.value.length < 4) {
      setErrorName("* Tên phải từ 4 ký tự");
    }
    if (e.target.value.length === 0) {
      setErrorName("* Tên không được để trống");
    }
    setName(e.target.value);
  }
  const validateConfirmPassword = (e) => {
    setStatus("");
    setErrorConfirmPassword(null);
    if (e.target.value.length < 9 || e.target.value.length > 15) {
      setErrorConfirmPassword("* Xác nhận mật khẩu trong khoảng từ 9 đến 15 ký tự");
    }
    if (e.target.value.length === 0) {
      setErrorConfirmPassword("* Xác nhận mật khẩu không được để trống");
    }
    if(e.target.value !== password){
      setErrorConfirmPassword("* Xác nhận mật khẩu không khớp");
    }
    setConfirmPassword(e.target.value);
  }

  const handleRegister = async () => {
    if (errorEmail === null && errorPassword === null && errorAddress === null && errorConfirmPassword === null && errorPhoneNumber === null && errorName === null) {
       const payLoad = {name, email, password, address, phoneNumber};
      // console.log(payLoad);
       const response = await AuthService.register(payLoad);
       if(response.status === "success"){
        localStorage.setItem('accessToken',response.token);
        localStorage.setItem('refreshToken',response.refreshToken);
        dispatch(
          register({
            accessToken: response.token,
            refreshToken: response.refreshToken,
            isLogin: true,
            name : response.name,
            email : response.email,
            id : response.id
          })
        );
         history(`/`);
       }else if(response.status === "error"){
        setStatus(response.message);
        setPassword("");
       setErrorPassword("* Mật khẩu không được để trống")
       }
    }else {
      setStatus("Vui lòng điền đầy đủ thông tin trước")
    }
   
  };
    return (<section id="aa-signin">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-signin-area">
            <div className="aa-signin-form">
              <div className="aa-signin-form-title">
                <Link className="aa-property-home" to="/">Quay lại trang chủ</Link>
                <h4>Tạo tài khoản và quản lý bài đăng của bạn</h4>
              </div>
              <form className="contactform">                                                 
                <div className="aa-single-field">
                  <label>Tên <span className="required">*</span></label>
                  <input type="text" 
                    value={name}
                    onChange={(e) => validateName(e)}
                  />
                    <span className="custom-error"> {errorName}</span>
                </div>
                <div className="aa-single-field">
                  <label>Email <span className="required">*</span></label>
                  <input type="email"
                   value={email}
                   onChange={(e) => validateEmail(e)}
                  />
                   <span className="custom-error"> {errorEmail}</span>
                </div>
               
                <div className="aa-single-field">
                  <label >Địa chỉ<span className="required">*</span></label>
                  <input type="text"
                  value={address}
                  onChange={(e) => validateAddress(e)}
                  />
                    <span className="custom-error"> {errorAddress}</span>
                </div>
                <div className="aa-single-field">
                  <label >Số điện thoại <span className="required">*</span></label>
                  <input type="text" 
                  value={phoneNumber}
                  onChange={(e) => validatePhoneNumber(e)}
                  />
                  <span className="custom-error"> {errorPhoneNumber}</span>
                </div>
                <div className="aa-single-field">
                  <label >Mật khẩu <span className="required">*</span></label>
                  <input type="password" 
                  value={password}
                  onChange={(e) => validatePassword(e)}
                  /> 
                   <span className="custom-error"> {errorPassword}</span>
                </div>
                <div className="aa-single-field">
                  <label>Nhập lại mật khẩu <span className="required">*</span></label>
                  <input type="password" 
                  value={confirmPassword}
                  onChange={(e) => validateConfirmPassword(e)}
                  /> 
                     <span className="custom-error"> {errorConfirmPassword}</span>
                </div>
               {status !== '' ?  <span className="custom-error"> * {status}</span> : ''}
                <div onClick={() => handleRegister()} className="aa-single-submit">
                  
                  <input type="button" value="Đăng ký"  />                    
                </div>
              
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> )
}
export default Register;