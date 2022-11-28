import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataComment } from "./selectPost";
import { Link } from "react-router-dom";
import { setValueUser } from "./postReducer";
import {isEmpty} from "lodash";
import { getDataUser } from "./selectPost";
import { postComment } from "./postReducer";
import {  Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
function PostComment({slug}){
    const dataUser = useSelector(getDataUser);
    const comments = useSelector(getDataComment);
    const dispatch = useDispatch();
    const [idComment, setIdComment] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [content, setContent] = useState("");
    const [errorName, setErrorName] = useState(() => {
        if(!isEmpty(dataUser)){
            return "";
        }else {
            return "* Bắt buộc";
        }
    });
    const [errorEmail, setErrorEmail] = useState(() => {
        if(!isEmpty(dataUser)){
            return "";
        }else {
            return "* Bắt buộc";
        }
    });
    const [errorNumber, setErrorNumber] = useState(() => {
        if(!isEmpty(dataUser)){
            return "";
        }else {
            return "* Bắt buộc";
        }
    });
    const [errorContent, setErrorContent] = useState("* Bắt buộc");

    const emailValidation = () => {
        const regex =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (regex.test(email) === false) {
          setErrorEmail("* Email không hợp lệ");
        } else {
          setErrorEmail("");
        }
      };
    
      const handleName = (e) => {
        setName(e.target.value);
    
        if (e.target.value === "" || e.target.value[0] === " ") {
          setErrorName("* Tên không được để trống");
        } else {
          setErrorName("");
        }
      };
      const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value === "") {
          setErrorEmail("* Email không được để trống");
        } else {
          emailValidation();
        }
      };
      const handleNumber = (e) => {
        setNumber(e.target.value);
        if (e.target.value === "" || e.target.value[0] === " ") {
          setErrorNumber("* Số điện thoại không được để trống");
        } else {
          setErrorNumber("");
        }
      };
      const handleContent = (e) => {
        setContent(e.target.value);
        if (e.target.value === "" || e.target.value[0] === " ") {
          setErrorContent("* Nội dung không được để trống");
        } else {
          setErrorContent("");
        }
      };

      




      const handleSubmit = (parent_id) => {
  
        if ((errorContent === '' && errorEmail === '' &&  errorName === '' && errorNumber === '') ){
            setIdComment(false);
            var dataApi = {};
             if(isEmpty(dataUser)){
                dispatch(setValueUser({
                    name : name,
                    email : email,
                    number : number
                }));
                dataApi = {
                    name : name,
                    email : email,
                    content : content,
                    number : number,
                    parent_id : parent_id,
                    id : slug
                }


             }else {
                dataApi = {
                    name : dataUser.name,
                    email : dataUser.email,
                    content : content,
                    number : dataUser.number,
                    parent_id : parent_id,
                    id : slug
                }
             }
             dispatch(postComment(dataApi));


             setContent('');
           

             setErrorContent('* Bắt buộc nhập');


           if(parent_id === 0){
            scroller.scrollTo('cmt', {
                duration: 500,
                delay: 0,
                smooth: true
              });
           }
             
        }else {
          scroller.scrollTo('form-post', {
            duration: 500,
            delay: 0,
            smooth: true
          });
        }
        
      }



    return (<>
       <div id="cmt" className="app-block-detail__comment">
                            <div className="app-tab__title tab-orange">
                                <div className="app-tab__title-left">
                                    <Link to=""><span>{comments.length} Bình luận</span></Link>
                                </div>

                            </div>
                            <div className="app-block-detail__comment-service">
                                <i>Vui lòng điền thông tin của bạn ở phía dưới để bình luận bài viết </i>
                            </div>
                            <div className="app-block-detail__comment-list">

                                
                            {comments.length !== 0 ? 
                            
                            comments.map((item, key) => (
                                <div key={key} className="app-block-detail__comment-list-item">
                                <div className="app-block-detail__comment-list-item-image">
                                    <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" />
                                </div>
                                <div className="app-block-detail__comment-list-item-content">
    
                                    <div>
                                        <div className="app-block-detail__comment-list-item-content-title">
                                            <Link to=""> <span>{item.name}</span></Link>
                                            <p>{item.createdAt.slice(0, 10)}</p>
                                        </div>
                                        <div className="app-block-detail__comment-list-item-content-description">
                                            <span>{item.content}</span>
                                        </div>
                                        <div className="app-block-detail__comment-list-item-content-reply">
                                            
                                        {idComment === key ? <div className="app-block-post__comment">
                            <div className="app-block-post__comment-title">
                                <span>Gửi bình luận của bạn</span>
                            </div>
                            <div className="app-block-post__comment-form">
                                <form >
                                    <div className="row">
                                    {isEmpty(dataUser) ? <>
                                            <div className="col-lg-6 col-md-4 col-sm-12">
                                            <div className="form-group ">
                                                <label>Tên *</label>
                                                <input 
                                                   value={name}
                                                   onChange={(e) => handleName(e)}
                                                   type="text" 
                                                   placeholder="Nhập tên" />
                                                <span>{errorName}</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-4 col-sm-12">
                                            <div className="form-group ">
                                                <label>Email *</label>
                                                <input 
                                                 autoComplete="off"
                                                  value={email}
                                                  onChange={(e) => handleEmail(e)}
                                                  type="email" 
                                                  placeholder="Nhập email" />
                                                <span> {errorEmail}</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-4 col-sm-12">
                                            <div className="form-group ">
                                                <label>Số điện thoại *</label>
                                                <input 
                                                    value={number}
                                                    onChange={(e) => handleNumber(e)}
                                                    type="number" 
                                                    placeholder="Nhập số điện thoại" />
                                                <span>{errorNumber}</span>
                                            </div>
                                        </div>
                                        </> : ''}
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label>Nội dung *</label>
                                                <textarea 
                                                    value={content}
                                                    onChange={(e) => handleContent(e)}
                                                    id="message" 
                                                    cols="30" 
                                                    rows="5" 
                                                    placeholder="Nhập nội dung"></textarea>
                                                <span>{errorContent}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button  onClick={() => handleSubmit(item.id)} type="button" className="submit-comment child-submit">Gửi</button>
                                </form>
                            </div>
                                        </div>: ''}


                                            <button onClick={() => setIdComment(key === idComment ? false : key)}>{key === idComment ? 'Đóng ×' : 'Trả lời'}</button>
                                        </div>
                                    </div>

                                   {item.Post_comments.length !== 0 ?   <div className="child-comment-border">
                                            <div className="app-block-detail__comment-list">
                                             {item.Post_comments.map((item1, key1) => (
                                                 <div key={key1} className="app-block-detail__comment-list-item">
                                                 <div className="app-block-detail__comment-list-item-image">
                                                     <img src="https://truesun.in/wp-content/uploads/2021/08/62681-flat-icons-face-computer-design-avatar-icon.png" alt="" />
                                                 </div>
                                                 <div className="app-block-detail__comment-list-item-content">

                                                     <div className="app-block-detail__comment-list-item-content-title">
                                                         <Link to=""> <span>{item1.name}</span></Link>
                                                         <p>{item1.createdAt.slice(0, 10)}</p>
                                                     </div>
                                                     <div className="app-block-detail__comment-list-item-content-description">
                                                         <span>{item1.content}</span>
                                                     </div>
                                                     



                                                 </div>
                                             </div>
                                             ))}

                                               
                                               
                                            </div>
                                        </div> : ''}

                                    </div>
                                    </div>
                            ))

                              
                           
                            
                            : ''}        
                            </div>
                        </div>
                        <div className="app-block-post__comment">
                            <div className="app-block-post__comment-title">
                                <span>Gửi bình luận của bạn</span>
                            </div>
                            <div className="app-block-post__comment-form">
                                <form autoComplete="off" id="form-post" >
                                    <div className="row">
                                        {isEmpty(dataUser) ? <>
                                            <div className="col-lg-6 col-md-4 col-sm-12">
                                            <div className="form-group ">
                                                <label>Tên *</label>
                                                <input 
                                                   value={name}
                                                   onChange={(e) => handleName(e)}
                                                   type="text" 
                                                   placeholder="Nhập tên" />
                                                <span>{errorName}</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-4 col-sm-12">
                                            <div className="form-group ">
                                                <label>Email *</label>
                                                <input 
                                                 autoComplete="off"
                                                  value={email}
                                                  onChange={(e) => handleEmail(e)}
                                                  type="email" 
                                                  placeholder="Nhập email" />
                                                <span> {errorEmail}</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-4 col-sm-12">
                                            <div className="form-group ">
                                                <label>Số điện thoại *</label>
                                                <input 
                                                    value={number}
                                                    onChange={(e) => handleNumber(e)}
                                                    type="number" 
                                                    placeholder="Nhập số điện thoại" />
                                                <span>{errorNumber}</span>
                                            </div>
                                        </div>
                                        </> : ''}
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label>Nội dung *</label>
                                                <textarea 
                                                    value={content}
                                                    onChange={(e) => handleContent(e)}
                                                    id="message" 
                                                    cols="30" 
                                                    rows="5" 
                                                    placeholder="Nhập nội dung"></textarea>
                                                <span>{errorContent}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" onClick={() => handleSubmit(0)} className="submit-comment">Gửi</button>
                                </form>
                            </div>
                        </div>
    
    </>);
}
export default PostComment;