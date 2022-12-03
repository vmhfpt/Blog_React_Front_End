import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNav } from "../homeReducer";
import { useEffect } from "react";
import {getDataNav} from "../selectHome";
import { getDataComment } from "../../post/selectPost";
function Nav(){ 
   
    const comment = useSelector(getDataComment);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getNav());
    }, [comment]);
    const response = useSelector(getDataNav);
    
    const postSuggest = response.postSuggest;
    const commentSuggest = response.commentSuggest;
    const categoryAll = response.categoryAll;
    const tag = response.tag;
    return(<>
      {response.length !== 0 ? <div className="app-block-center__content-category ">
    <div className="app-block-center__content-category-follow">
         <div className="app-tab__title tab-orange">
          <div className="app-tab__title-left">
             <Link to=""><span>Theo dõi tôi</span></Link>
          </div>
          
         </div>
         <div className="app-block-center__content-category-follow-grid">
             
              <div className="app-block-center__content-category-follow-grid-item bg-fb">
                  <div className="background-socialite__icon">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                  </div>
                  <div className="total-socialite__icon">
                      1.5k
                  </div>
              </div>
             
              <div className="app-block-center__content-category-follow-grid-item bg-tw">
                  <div className="background-socialite__icon">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                  </div>
                  <div className="total-socialite__icon">
                      1.5k
                  </div>




              </div>
              <div className="app-block-center__content-category-follow-grid-item bg-yt">
                  <div className="background-socialite__icon">
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                  </div>
                  <div className="total-socialite__icon">
                      1.5k
                  </div>
              </div>
              <div className="app-block-center__content-category-follow-grid-item bg-gi">
                  <div className="background-socialite__icon">
                      <i className="fa fa-github" aria-hidden="true"></i>

                  
                  </div>
                  <div className="total-socialite__icon">
                      1.5k
                  </div>
              </div>
              <div className="app-block-center__content-category-follow-grid-item bg-in">
                  <div className="background-socialite__icon">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>

                    
                  </div>
                  <div className="total-socialite__icon">
                      1.5k
                  </div>
              </div>
              <div className="app-block-center__content-category-follow-grid-item bg-is ">
                  <div className="background-socialite__icon">
                      <i className="fa fa-instagram" aria-hidden="true"></i>

                      
                  </div>
                  <div className="total-socialite__icon">
                      1.5k
                  </div>
              </div>
      </div>
    </div>
    
    <div className="app-block-center__content-category-popular">
      <div className="app-tab__title tab-orange">
          <div className="app-tab__title-left">
             <Link to=""><span>Đề xuất</span></Link>
          </div>
          
      </div>
      <div className="app-block-center__content-category-popular-list">
          <div className="app-block-center_content-post-flex-item ">
              <div className="app-block-center_content-post-flex-item-news">
                  {postSuggest && postSuggest.map((item, key) => (
                     <div key={key} className="app-block-center_content-post-flex-news-item">
                     <div className="app-block-center_content-post-flex-news-item-image">
                         <img src={item.thumb} alt="" />
                         
                     </div>
                     <div className="app-block-center_content-post-flex-news-item-content">
                          <div className="app-block-center_content-post-flex-news-item-title">
                             <Link to={"/post/" + item.slug}><span>{item.title}</span></Link>
                          </div>
                          <div className="app-block-center_content-post-flex-news-item-detail">
                             <Link to=""><i className="fa fa-clock-o" aria-hidden="true"></i> <span>{item.createdAt.slice(0, 10)}</span></Link>
                          </div>
                     </div>
                 </div>
                  ))}
                 
              </div>
          </div>
      </div>
     
    </div>

    <div className="app-block-center__content-category-comment">
      <div className="app-tab__title tab-orange">
          <div className="app-tab__title-left">
             <Link to=""><span>Bình luận mới</span></Link>
          </div>
          
      </div>
      <div className="app-block-center__content-category-comment-list">
          
          {commentSuggest && commentSuggest.map((item, key) => (
             <div key={key} className="app-block-center__content-category-comment-list-item">
             <div className="app-block-center__content-category-comment-list-item-image">
                 <img src="https://4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w55-h55-p-k-no-nu/avatar.jpg" alt="" />
             </div>
             <div className="app-block-center__content-category-comment-list-item-content">
                 <div className="app-block-center__content-category-comment-list-item-content-title">
                     <Link to={"/post/" + item.Post.slug + "#cmt"} > <span>{item.name}</span></Link>
                 </div>
                 <div className="app-block-center__content-category-comment-list-item-content-detail">
                    <Link to={"/post/" + item.Post.slug + "#cmt"}> <span>{item.content}</span></Link>
                 </div>
             </div>
         </div>
          ))}
      </div>
    </div>


    <div className="app-block-center__content-category-right">
      <div className="app-tab__title tab-orange">
          <div className="app-tab__title-left">
             <Link to=""><span>Danh mục</span></Link>
          </div>
          
      </div>
      <div className="app-block-center__content-category-right-list">
        {categoryAll.map((item, key) => (
                <div key={key} className="app-block-center__content-category-right-list-item">
                <div className="app-block-center__content-category-right-list-item-title">
                    <Link to={"/category/" + item.slug}><span>{item.title}</span></Link>
                </div>
                <div className="app-block-center__content-category-right-list-item-quantity">
                    <span>{item.Posts.length}</span>
                </div>
            </div>
        ))}
      
         
      </div>
    </div>

    <div className="app-block-center__content-category-tag">
      <div className="app-tab__title tab-orange">
          <div className="app-tab__title-left">
             <Link to=""><span>Tags</span></Link>
          </div>
      </div>
      <div className="app-block-center__content-category-tag-list">

        {tag.map((item, key) => (
             <Link key={key} to={"/tag/" +  item.slug}>   <div className="app-block-center__content-category-tag-list-item">
             {item.title}
         </div> </Link>
        ))}
      

       
      </div>
    </div>
    
  </div>: ''}
    </>);
}
export default Nav;