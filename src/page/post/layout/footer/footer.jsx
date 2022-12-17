import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { animateScroll as scroll } from 'react-scroll';
import url from "./icon/200w.gif";
import logo from "../header/Logo/logo.png";
import Chat from "./chat";
import { useSelector } from "react-redux";
import { getDataAlert } from "./selectChat";

import { getDataShowTab } from "./selectChat";
import { useDispatch } from "react-redux";
import { setShowTab } from "./chatReducer";
import { setAlert } from "./chatReducer";
import Draggable from 'react-draggable'; // Both at the same time
function Footer() {
    
    const tabCheck = useSelector(getDataShowTab);
    const eventHandler = (e, data) => {
      if(e.type === "touchmove")   dispatch(setShowTab(false));
      if(e.type === "touchend") {
        dispatch(setShowTab(true));
        setTimeout(() => {
            
            const element = document.getElementById("chat");
            element.scrollTop = element.scrollHeight;
            
        }, 200);
      } 
        
      }
    useEffect(() => {
        dispatch(setAlert(0));
    }, [tabCheck])
    const dispatch = useDispatch();
    const totalAlert = useSelector(getDataAlert);
    const showChat = useSelector(getDataShowTab);

    const handleShowChat = () => {
        dispatch(setShowTab(!showChat));
        setTimeout(() => {
            const element = document.getElementById("chat");
            element.scrollTop = element.scrollHeight;

        }, 200);
    }
    const [visible, setVisible] = useState(false);
    const toTop = () => {
        scroll.scrollToTop();
    };

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    }
    useEffect(() => {
        if (Number(totalAlert) !== 0 && showChat === false) {
            Notification.requestPermission().then(function (permission) {

                let title = "Blog Vũ Minh Hùng";
                let icon = 'https://st.quantrimang.com/photos/image/2020/11/06/cuon-sach-300-bai-code-thieu-nhi-va-nhung-mau-chuyen-vui-cua-anh-em-coder.jpg';
                let body = "Bạn có một tin nhắn mới";

                var notification = new Notification(title, { body, icon });
            });
        }
    }, [totalAlert])
    window.addEventListener('scroll', toggleVisible);
    return (<footer className="app-header">
        {visible && <div onClick={() => toTop()} className="back-to-top">
            <i className="fa fa-arrow-up" aria-hidden="true"></i>

        </div>}
        <Draggable
       
       onMouseDown={eventHandler}
       onStart={eventHandler}
       onDrag={eventHandler}
       onStop={eventHandler}
      
        > 
        <div     onClick={handleShowChat}  className="chat-now">
            <img src={url} alt="" />
         
            {!showChat && totalAlert !== 0 ?  <div className="chat-total__notify">
                {totalAlert}
</div> : ''}
        </div>
      </Draggable>
        
        <div className="app-header__about container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-sm-12 col-md-3 ">
                        <div className="app-header__about-logo">

                            <div>
                                <img src={logo} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-sm-12 col-md-5 ">
                        <div className="app-header__about-content">
                            <span className="footer-title">Giới thiệu</span>
                            <p>Trang blog tâm sự, chia sẻ mẹo hay, thủ thuật lập trình, chịu trách nhiệm nội dung bài viết, bản quyền thuộc về tác giả console.log("copy and paste"). </p>
                            <p>BLOG AT  <a href="https://wordpress.com/">WORDPRESS.COM</a></p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 col-md-4 ">
                        <div className="app-header__about-socialite-flex">


                            <div className="app-header__about-socialite">
                                <span className="footer-title">Theo dõi tôi</span>
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
                                <Link to="/about/ve-toi"><li>Nội quy</li></Link>
                                <Link to="/about/chinh-sach"><li>Chính sách</li></Link>
                                <Link to="/contact"><li>Liên hệ</li></Link>
                                <Link to="/profile"><li>Về tôi</li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div  className={showChat ? "show-app__chat" : "hidden-app__chat"}>
            <Chat />
        </div>


    </footer>);
}
export default Footer;