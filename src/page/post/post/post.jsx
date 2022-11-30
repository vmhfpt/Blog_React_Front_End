import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDetail } from "./postReducer";
import { getDataDetail } from "./selectPost";
import { getDataComment } from "./selectPost";
import Nav from "../home/components/nav";
import PostComment from "./postComment";
import {isEmpty} from "lodash";


import {
    
    FacebookShareButton,
   
    PinterestShareButton,
  
    TelegramShareButton,
   
    TwitterShareButton,
    
  } from "react-share";
function Post() {
    
    const dispatch = useDispatch();
    let params = useParams();
    useEffect(() => {
        dispatch(getDetail({ slug: params.slug }))
    }, [params.slug]);
    const response = useSelector(getDataDetail);
    const comments = useSelector(getDataComment);
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
                                    <Link to=""><li><i className="fa fa-comments-o" aria-hidden="true"></i> {comments.length} Bình luận</li></Link>
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
                                        
                                        <FacebookShareButton url={window.location.href}  className="share">
                                        <div className="total-socialite__icon">
                                            Facebook
                                        </div>
                                       </FacebookShareButton>
                                    </div>
                                </div>

                                <div className="app-block-detail__share-icon-twitter">
                                    <div className="app-block-center__content-category-follow-grid-item bg-tw">
                                        <div className="background-socialite__icon">
                                            <i className="fa fa-twitter" aria-hidden="true"></i>
                                        </div>

                                        <TwitterShareButton 
                                         url={window.location.href}
                                         title={response.result.title}
                                        >
                                        <div className="total-socialite__icon">
                                            twitter
                                        </div>
                                        </TwitterShareButton>
                                      




                                    </div>
                                </div>

                                <PinterestShareButton url={window.location.href} media={window.location.href} description="">
                                <div className="app-block-detail__share-icon-pinterest">
                                    <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                                </div>
                             </PinterestShareButton>
                               

                             <TelegramShareButton url={window.location.href}  title={response.result.title} >
                             <div className="app-block-detail__share-icon-message">
                             <i className="fa fa-telegram" aria-hidden="true"></i>

                                </div>
                            </TelegramShareButton>
                             
                              
                              
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
                                        
                                        <FacebookShareButton url={window.location.href}  className="share">
                                        <div className="total-socialite__icon">
                                            Facebook
                                        </div>
                                       </FacebookShareButton>
                                    </div>
                                </div>

                                <div className="app-block-detail__share-icon-twitter">
                                    <div className="app-block-center__content-category-follow-grid-item bg-tw">
                                        <div className="background-socialite__icon">
                                            <i className="fa fa-twitter" aria-hidden="true"></i>
                                        </div>

                                        <TwitterShareButton 
                                         url={window.location.href}
                                         title={response.result.title}
                                        >
                                        <div className="total-socialite__icon">
                                            twitter
                                        </div>
                                        </TwitterShareButton>
                                      




                                    </div>
                                </div>

                                <PinterestShareButton url={window.location.href} media={window.location.href} description="">
                                <div className="app-block-detail__share-icon-pinterest">
                                    <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                                </div>
                             </PinterestShareButton>
                               

                             <TelegramShareButton url={window.location.href}  title={response.result.title} >
                             <div className="app-block-detail__share-icon-message">
                             <i className="fa fa-telegram" aria-hidden="true"></i>

                                </div>
                            </TelegramShareButton>
                             
                              
                              
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

                     
                    <PostComment slug={response.result.id}/>



                    </div>
                    <Nav />
                </div>
            </div>
        </section> }
    </>);
}
export default Post;