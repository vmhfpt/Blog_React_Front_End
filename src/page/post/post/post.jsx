import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDetail } from "./postReducer";
import { getDataDetail } from "./selectPost";
import Nav from "../home/components/nav";
import {isEmpty} from "lodash"
function Post() {
    const dispatch = useDispatch();
    let params = useParams();
    useEffect(() => {
        dispatch(getDetail({ slug: params.slug }))
    }, [params.slug]);
    const response = useSelector(getDataDetail);
   
    
    return (<>
        {!isEmpty(response) && <section className="app-block-center app-category container-fluid">
            <div className="container">
                <div className="app-block-center_content">
                    <div className="app-block-center_content-post ">


                        <div className="app-block-detail">
                            <div className="app-block-detail__breadcrumb">
                                <ul>
                                    <Link to=""><li className="app-block-detail__breadcrumb-active">Home</li> <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                                    <Link to=""><li >Chi tiết bài viết</li> <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                                    <Link to=""><li>{response.result.title}</li></Link>
                                </ul>
                            </div>
                            <div className="app-block-detail__title">
                                <span>{response.result.title}</span>
                            </div>
                            <div className="app-block-detail__author">
                                <ul>
                                    <li><i className="fa fa-user-o" aria-hidden="true"></i> {response.result.User.name}</li>
                                    <li><i className="fa fa-clock-o" aria-hidden="true"></i> {response.result.createdAt.slice(0, 10)}</li>
                                    <Link to=""><li><i className="fa fa-comments-o" aria-hidden="true"></i> {response.result.Post_comments.length} Bình luận</li></Link>
                                </ul>
                            </div>

                            <div className="app-block-detail__share-icon">
                                <div className="app-block-detail__share-icon-share">
                                    <i className="fa fa-share-alt" aria-hidden="true"></i>
                                </div>

                                <div className="app-block-detail__share-icon-facebook">
                                    <div className="app-block-center__content-category-follow-grid-item bg-fb">
                                        <div className="background-socialite__icon">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>
                                        </div>
                                        <div className="total-socialite__icon">
                                            Facebook
                                        </div>
                                    </div>
                                </div>

                                <div className="app-block-detail__share-icon-twitter">
                                    <div className="app-block-center__content-category-follow-grid-item bg-tw">
                                        <div className="background-socialite__icon">
                                            <i className="fa fa-twitter" aria-hidden="true"></i>
                                        </div>
                                        <div className="total-socialite__icon">
                                            twitter
                                        </div>




                                    </div>
                                </div>

                                <div className="app-block-detail__share-icon-pinterest">
                                    <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                                </div>
                                <div className="app-block-detail__share-icon-message">
                                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                </div>
                                <div className="app-block-detail__share-icon-add">
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </div>
                            </div>

                            <div className="app-block-detail__content">
                                <div
                                    className="image_custom"
                                    dangerouslySetInnerHTML={{ __html: response.result.content }}
                                ></div>
                            </div>
                            <div className="app-block-center__content-category-tag-list">
                                {response.tag.map((item, key) => (
                                    <Link key={key} to={"/tag/" + item.slug}>   <div className="app-block-center__content-category-tag-list-item ">
                                        {item.title}
                                    </div> </Link>
                                ))}


                            </div>

                            <div className="app-block-detail__share-icon-bottom">
                                <div className="app-block-detail__share-icon-share">
                                    <i className="fa fa-share-alt" aria-hidden="true"></i>
                                </div>

                                <div className="app-block-detail__share-icon-facebook">
                                    <div className="app-block-center__content-category-follow-grid-item bg-fb">
                                        <div className="background-socialite__icon">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>
                                        </div>
                                        <div className="total-socialite__icon">
                                            Facebook
                                        </div>
                                    </div>
                                </div>

                                <div className="app-block-detail__share-icon-twitter">
                                    <div className="app-block-center__content-category-follow-grid-item bg-tw">
                                        <div className="background-socialite__icon">
                                            <i className="fa fa-twitter" aria-hidden="true"></i>
                                        </div>
                                        <div className="total-socialite__icon">
                                            twitter
                                        </div>




                                    </div>
                                </div>

                                <div className="app-block-detail__share-icon-pinterest">
                                    <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                                </div>
                                <div className="app-block-detail__share-icon-message">
                                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                </div>
                                <div className="app-block-detail__share-icon-add">
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>

                        <div className="app-block-center__second-content">
                            <div className="app-tab__title green-tab">
                                <div className="app-tab__title-left">
                                    <Link to=""><span>Bài viết gợi ý</span></Link>
                                </div>
                                <div className="app-tab__title-right">
                                    <Link to=""><span>Show more</span></Link>
                                </div>
                            </div>
                            <div className="app-block-center__second-content-tab">


                                <div className="row">
                                    {response && response.postSuggest.map((item, key) => (
                                        <div key={key} className="col-sm-4">
                                            <div className="app-block-center__second-content-item">
                                                <div className="app-block-center__second-content-item-image">
                                                    <img src={"https://blogapi.x10.mx/" + item.Post.thumb} alt="" />
                                                </div>
                                                <div className="app-block-center__second-content-item-content">
                                                    <Link to={"/post/" + item.Post.slug}> <span>{item.Post.title}</span></Link>
                                                    <Link to=""><i className="fa fa-clock-o" aria-hidden="true"></i> <span className="author">{item.Post.createdAt.slice(0, 10)}</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}


                                </div>
                            </div>
                        </div>

                        <div id="cmt" className="app-block-detail__comment">
                            <div className="app-tab__title tab-orange">
                                <div className="app-tab__title-left">
                                    <Link to=""><span>{response.result.Post_comments.length} Bình luận</span></Link>
                                </div>

                            </div>
                            <div className="app-block-detail__comment-service">
                                <i>To be published, comments must be reviewed by the administrator </i>
                            </div>
                            <div className="app-block-detail__comment-list">

                                
                            {response.result.Post_comments.length !== 0 ? 
                            
                            response.result.Post_comments.map((item, key) => (
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
                                            <button>Trả lời</button>
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
                                <form method="POST" action="">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-4 col-sm-12">
                                            <div className="form-group ">
                                                <label>Tên *</label>
                                                <input type="text" placeholder="Nhập tên" />
                                                <span>* Tên không được để trống</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-4 col-sm-12">
                                            <div className="form-group ">
                                                <label>Email *</label>
                                                <input type="email" placeholder="Nhập email" />
                                                <span>* Email không được để trống</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-4 col-sm-12">
                                            <div className="form-group ">
                                                <label>Số điện thoại *</label>
                                                <input type="number" placeholder="Nhập số điện thoại" />
                                                <span>* Tên không được để trống</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label>Nội dung *</label>
                                                <textarea id="message" cols="30" rows="5" placeholder="Nhập nội dung"></textarea>
                                                <span>* Nội dung không được để trống</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="submit-comment">Gửi</button>
                                </form>
                            </div>
                        </div>




                    </div>
                    <Nav />
                </div>
            </div>
        </section> }
    </>);
}
export default Post;