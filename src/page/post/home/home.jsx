import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getHome} from "./homeReducer";
import {getDataHome} from "./selectHome";
import Nav from "./components/nav";
function Home(){
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHome());
  }, []);  
  const response = useSelector(getDataHome);
    const dataRowFirst = response.rowFirst;
    const dataRowSecond = response.rowSecond;
    const dataRowSeconds = response.length !== 0 ? response.rowSecond.Post_categories : [];
    const dataRowThird = response.rowThird;
    const dataRandomSecond = response.randomSecond;
    const dataRandomFirst = response.randomFirst;
    const dataRowFour = response.rowFour;
    const dataRowFive = response.rowFive;
    const dataRandom = response.rowRandom;
    
    return (<div>
      {response.length !== 0 ? <section className="app-block-top container-fluid">
           <div className="container">
              <div className="app-block-top_grid">

              {dataRowFirst && dataRowFirst.map((item, key) => (
                <div key={key} className="app-block-top_grid-item">
                <div className="app-block-top_grid-item-image">
                    <img src={"https://blogapi.x10.mx/" + item.Post_categories[0].Post.thumb} alt="" />
                    <div className="app-block-top_grid-item-image-tag">
                        {item.title}
                    </div>
                    <div className="app-block-top_grid-item-image-gradient"></div>
                    <div className="app-block-top_grid-item-image-tag-content">
                        <div className="app-block-top_grid-item-image-tag-content-title ">
                            <Link to={"/post/" + item.Post_categories[0].Post.slug}><span className="tag__font-big">{item.Post_categories[0].Post.title}</span></Link>
                        </div>
                        <div className="app-block-center__third-content-item-detail-author">
                            <span><i className="fa fa-user-o" aria-hidden="true"></i> {item.Post_categories[0].Post.User.name}</span>
                            <span><i className="fa fa-clock-o" aria-hidden="true"></i> {(item.Post_categories[0].Post.createdAt).slice(0, 10)}</span>
                        </div>
                    </div>
                </div>
            </div>
              ))}

               
              </div>
           </div>
      </section> : ''}
      {response.length !== 0 ? <section className="app-block-center container-fluid">
         <div className="container">
            <div className="app-block-center_content">
                <div className="app-block-center_content-post ">
                   <div className="app-block-center_content-post-flex">
                       <div className="app-tab__title tab-red">
                           <div className="app-tab__title-left">
                              <Link to=""><span>{dataRowSecond  && dataRowSecond.title}</span></Link>
                           </div>
                           <div className="app-tab__title-right">
                              <Link to=""><span>Xem thêm</span></Link>
                        </div>
                       </div>
                   

                   
                       <div className="row">
                          <div className="col-sm-6 ">
                            <div className="app-block-center_content-post-flex-item ">
                                <div className="app-block-center_content-post-flex-item-image">
                                    <img src={"https://blogapi.x10.mx/" + dataRowSecond.Post_categories[0].Post.thumb} alt="" />

                                   
                                    <div className="app-block-top_grid-item-image-gradient"></div>
                                    <div className="app-block-top_grid-item-image-tag-content">
                                        <div className="app-block-top_grid-item-image-tag-content-title ">
                                            <Link to={"/post/" + dataRowSecond.Post_categories[0].Post.slug}><span className="tag__font-big">{dataRowSecond.Post_categories[0].Post.title}</span></Link>
                                        </div>
                                        <div className="app-block-center__third-content-item-detail-author">
                                            <span><i className="fa fa-user-o" aria-hidden="true"></i> Vũ Minh Hùng</span>
                                            <span><i className="fa fa-clock-o" aria-hidden="true"></i> {(dataRowSecond.Post_categories[0].Post.createdAt).slice(0, 10)}</span>
                                        </div>
                                    </div>





                                </div>
                            </div>
                          </div>
                          <div className="col-sm-6 ">
                            <div className="app-block-center_content-post-flex-item ">
                                <div className="app-block-center_content-post-flex-item-news">


                                {dataRowSeconds && dataRowSeconds.map((item, key) => {
                                    if(key === 0){
                                        return('');
                                    }else {
                                        return( <div key={key} className="app-block-center_content-post-flex-news-item">
                                        <div className="app-block-center_content-post-flex-news-item-image">
                                            <img src={"https://blogapi.x10.mx/" + item.Post.thumb} alt="" />
                                        </div>
                                        <div className="app-block-center_content-post-flex-news-item-content">
                                             <div className="app-block-center_content-post-flex-news-item-title">
                                                <Link to={"/post/" + item.Post.slug}><span>{item.Post.title}</span></Link>
                                             </div>
                                             <div className="app-block-center_content-post-flex-news-item-detail">
                                                <Link to={"/post/" + item.Post.slug}><i className="fa fa-clock-o" aria-hidden="true"></i> <span>{(item.Post.createdAt).slice(0, 10)}</span></Link>
                                             </div>
                                        </div>
                                    </div>)
                                    }
                                  
                                })}
                                   
                                   
                                   
                                </div>
                            </div>
                          </div>
                       </div>
                   
                   </div>

                   <div className="app-block-center__second-content">
                    <div className="app-tab__title tab-blue">
                        <div className="app-tab__title-left">
                           <Link to=""><span>Bài viết gợi ý</span></Link>
                        </div>
                        <div className="app-tab__title-right">
                           <Link to=""><span>Xem thêm</span></Link>
                     </div>
                    </div>
                    <div className="app-block-center__second-content-tab">

                 
                          <div className="row">
                          {dataRandomFirst && dataRandomFirst.map((item, key) => (
                             <div key={key} className="col-sm-4">
                             <div className="app-block-center__second-content-item">
                                 <div className="app-block-center__second-content-item-image">
                                    <img src={"https://blogapi.x10.mx/" + item.thumb} alt="" />
                                 </div>
                                 <div className="app-block-center__second-content-item-content">
                                    <Link to={"/post/" + item.slug}> <span>{item.title}</span></Link>
                                    <Link to={"/post/" + item.slug}><i className="fa fa-clock-o" aria-hidden="true"></i> <span className="author">{item.createdAt.slice(0, 10)}</span></Link>
                                 </div>
                             </div>
                         </div>
                          ))}
                            
                          </div>
                        </div>
                   </div>

                   <div className="app-block-center__third-content">
                    <div className="app-tab__title tab-orange">
                        <div className="app-tab__title-left">
                           <Link to=""><span>{dataRowThird && dataRowThird.title}</span></Link>
                        </div>
                        <div className="app-tab__title-right">
                           <Link to=""><span>Xem thêm</span></Link>
                     </div>
                    </div>
                    {dataRowThird.Post_categories && dataRowThird.Post_categories.map((item, key) => (
                         <div key={key} className="app-block-center__third-content-item">
                         <div className="app-block-center__third-content-item-image">
                             <img src={"https://blogapi.x10.mx/" + item.Post.thumb} alt="" />
                         </div>
                         <div className="app-block-center__third-content-item-detail">
                             <div className="app-block-center__third-content-item-detail-title">
                                 <Link to={"/post/" + item.Post.slug}><span>{item.Post.title}</span></Link>
                             </div>
                             <div className="app-block-center__third-content-item-detail-author">
                                 <span><i className="fa fa-user-o" aria-hidden="true"></i> {item.Post.User.name}</span>
                                 <span><i className="fa fa-clock-o" aria-hidden="true"></i> {item.Post.createdAt.slice(0, 10)}</span>
                             </div>
                             <div className="app-block-center__third-content-item-detail-thumbnail">
                                 <Link to={"/post/" + item.Post.slug}><span>{item.Post.description}</span></Link>
                             </div>
                         </div>
                       </div>
                    ))}

                     



                     


                      <div className="app-block-center__third-content-show-more">
                          <Link to="/post/search?key="><button>Xem thêm</button></Link> 
                      </div>
                   </div>

                   <div className="app-block-center__second-content">
                    <div className="app-tab__title green-tab">
                        <div className="app-tab__title-left">
                           <Link to=""><span>Bài viết trước đây</span></Link>
                        </div>
                        <div className="app-tab__title-right">
                           <Link to=""><span>Xem thêm</span></Link>
                     </div>
                    </div>
                    <div className="app-block-center__second-content-tab">

                  
                    <div className="row">
                    {dataRandomSecond && dataRandomSecond.map((item, key) => (
                          <div key={key} className="col-sm-4">
                          <div className="app-block-center__second-content-item">
                              <div className="app-block-center__second-content-item-image">
                                 <img src={"https://blogapi.x10.mx/" + item.thumb} alt="" />
                              </div>
                              <div className="app-block-center__second-content-item-content">
                                 <Link to={"/post/" + item.slug}> <span>{item.title}</span></Link>
                                 <Link to={"/post/" + item.slug}><i className="fa fa-clock-o" aria-hidden="true"></i> <span className="author">{item.createdAt.slice(0, 10)}</span></Link>
                              </div>
                          </div>
                      </div>
                    ))}
                      
                     
                    </div>
                </div>
                   </div>

                   <div className="app-block-center__last-content">
                    
                         <div className="row">
                            <div className="col-sm-6">
                                
                                <div className="app-block-center__last-content-item">
                                    <div className="app-tab__title yellow-tab">
                                        <div className="app-tab__title-left">
                                           <Link to=""><span>{dataRowFour.title}</span></Link>
                                        </div>
                                        <div className="app-tab__title-right">
                                           <Link to=""><span>Xem thêm</span></Link>
                                     </div>
                                    </div>
                                    <div className="app-block-center__last-content-item-top">
                                        <img src={"https://blogapi.x10.mx/" + dataRowFour.Post_categories[0].Post.thumb} alt="" />
                                        <div className="app-block-top_grid-item-image-gradient"></div>
                                        <div className="app-block-top_grid-item-image-tag-content">
                                            <div className="app-block-top_grid-item-image-tag-content-title "><Link to={"/post/" + dataRowFour.Post_categories[0].Post.slug}>
                                                <span className="tag__font-big">{dataRowFour.Post_categories[0].Post.title}</span></Link>
                                                </div>
                                                <div className="app-block-center__third-content-item-detail-author"><span><i className="fa fa-user-o" aria-hidden="true"></i> Vũ Minh Hùng</span><span><i className="fa fa-clock-o" aria-hidden="true"></i> {dataRowFour.Post_categories[0].Post.createdAt.slice(0, 10)}</span>
                                                </div>
                                                </div>
                                    </div>
                                    <div className="app-block-center__last-content-item-list">
                                    {dataRowFour.Post_categories && dataRowFour.Post_categories.map((item, key) => {
                                        if(key === 0){
                                            return ('');
                                        }else {
                                            return(  <div key={key} className="app-block-center__last-content-item-list-flex">
                                            <div className="app-block-center__last-content-item-list-flex-image">
                                                <img src={"https://blogapi.x10.mx/" + item.Post.thumb} alt="" />
                                            </div>
                                            <div className="app-block-center__last-content-item-list-flex-detail">
                                                <Link to={"/post/" + item.Post.slug}><span>{item.Post.title}
                                                </span></Link>
                                                <span className="author"><i className="fa fa-clock-o" aria-hidden="true"></i> {item.Post.createdAt.slice(0, 10)}</span>
                                            </div>
                                        </div>);
                                        }
                                    })}
                                      
                                       
                                    </div>
                                </div>
                             </div>
                             <div className="col-sm-6">
                                <div className="app-block-center__last-content-item">
                                    <div className="app-tab__title darkmagenta-tab">
                                        <div className="app-tab__title-left">
                                           <Link to=""><span>{dataRowFive.title}</span></Link>
                                        </div>
                                        <div className="app-tab__title-right">
                                           <Link to=""><span>Xem thêm</span></Link>
                                     </div>
                                    </div>
                                    <div className="app-block-center__last-content-item-top">
                                        <img src={"https://blogapi.x10.mx/" + dataRowFive.Post_categories[0].Post.thumb} alt="" />
                                        <div className="app-block-top_grid-item-image-gradient"></div>
                                        <div className="app-block-top_grid-item-image-tag-content">
                                            <div className="app-block-top_grid-item-image-tag-content-title "><Link to={"/post/" + dataRowFive.Post_categories[0].Post.slug}>
                                                <span className="tag__font-big">{dataRowFive.Post_categories[0].Post.title}</span></Link>
                                                </div>
                                                <div className="app-block-center__third-content-item-detail-author"><span><i className="fa fa-user-o" aria-hidden="true"></i> Vũ Minh Hùng</span><span><i className="fa fa-clock-o" aria-hidden="true"></i> {dataRowFive.Post_categories[0].Post.createdAt.slice(0, 10)}</span>
                                                </div>
                                                </div>
                                    </div>
                                    <div className="app-block-center__last-content-item-list">
                                    {dataRowFive.Post_categories && dataRowFive.Post_categories.map((item, key) => {
                                        if(key === 0){
                                            return ('');
                                        }else {
                                            return(  <div key={key} className="app-block-center__last-content-item-list-flex">
                                            <div className="app-block-center__last-content-item-list-flex-image">
                                                <img src={"https://blogapi.x10.mx/" + item.Post.thumb} alt="" />
                                            </div>
                                            <div className="app-block-center__last-content-item-list-flex-detail">
                                                <Link to={"/post/" + item.Post.slug}><span>{item.Post.title}
                                                </span></Link>
                                                <span className="author"><i className="fa fa-clock-o" aria-hidden="true"></i> {item.Post.createdAt.slice(0, 10)}</span>
                                            </div>
                                        </div>);
                                        }
                                    })}
                                      
                                       
                                    </div>
                                </div>
                             </div>
                         </div>
                   </div>
                    
                   <div className="app-block-center__grid-content-box">
                   <div className="app-tab__title green-tab">
                    <div className="app-tab__title-left">
                       <Link to=""><span>Bài viết gợi ý</span></Link>
                    </div>
                    <div className="app-tab__title-right">
                       <Link to=""><span>Show more</span></Link>
                 </div>
                   </div>
                   <div className="app-block-center__grid-content">
                   {dataRandom && dataRandom.map((item, key) => (
                      <div key={key} className="app-block-center__grid-content-item">
                      <div className="app-block-center__grid-content-item-image">
                          <img src={"https://blogapi.x10.mx/" + item.thumb} alt="" />
                      </div>
                      <div className="app-block-center__grid-content-item-content">
                           <Link to={"/post/" + item.slug}> <span>{item.title}
                          </span></Link>
                          <span className="author"><i className="fa fa-clock-o" aria-hidden="true"></i> {item.createdAt.slice(0, 10)}</span>
                      </div>
                  </div>
                   ))}
                   
                 
                   </div>
                </div>
                </div>
                

            <Nav />






             </div>
         </div>
      </section> : ''}
   </div>)
}
export default Home;