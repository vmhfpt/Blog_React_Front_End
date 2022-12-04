
import { Routes, Route} from "react-router-dom";
import { Outlet } from 'react-router-dom';
import Footer from '../../page/post/layout/footer/footer';
import Header from '../../page/post/layout/header/header';

import Category from "../../page/post/category/category";
import Tag from "../../page/post/tag/tag";
import Home from '../../page/post/home/home';

import NotFound from "../../page/post/404/notFound";
import Contact from "../../page/post/home/contact";

import Profile from "../../page/post/about/profile";
import About from "../../page/post/about/about";
import Post from "../../page/post/post/post";
import PostSearch from "../../page/post/post/postSearch";
function LayoutAdmin() {

  return (
    <div>
        <Header />
        
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
function RouteAdmin(){

    return (     
      <div>
    <Routes>
      
        <Route path="/" element={<LayoutAdmin />}>
           <Route index element={<Home />} />
           <Route path="profile" element={<Profile />} />
           <Route path="contact" element={<Contact />} />
           <Route path="category/:slug" element={<Category />} />
           <Route path="tag/:slug" element={<Tag />} />
         
           <Route path="post/search" element={ <PostSearch /> } />
          
           <Route path="post/:slug" element={<Post />} />
           <Route path="about/:slug" element={<About />} />
        
           <Route path="not-found" element={<NotFound />} />
           <Route path='*' element={<NotFound />} />
       </Route>
      
 </Routes>

   
 </div>)
}
export default RouteAdmin;
// <Route index element={<Home />} />