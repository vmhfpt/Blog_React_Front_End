
import { Routes, Route,  Navigate} from "react-router-dom";
import { Outlet } from 'react-router-dom';
import Footer from '../../page/post/layout/footer/footer';
import Header from '../../page/post/layout/header/header';
import SideBar from '../../page/post/layout/sidebar/sidebar';
import Category from "../../page/post/category/category";
import Tag from "../../page/post/tag/tag";
import Home from '../../page/post/home/home';
import PropertyDetail from "../../page/post/property/propertyDetail";
import Project from "../../page/post/project/project";
import NotFound from "../../page/post/404/notFound";
import Contact from "../../page/post/home/contact";
import ProjectDetail from "../../page/post/project/projectDetail";
import PropertySearch from "../../page/post/property/propertySearch";
import ListProperty  from "../../page/post/property/listProperty";
import { useSelector } from "react-redux";
import { getLogin } from "../../page/post/user/selectLogin";
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
  const isLogin = useSelector(getLogin);
    return (     
      <div>
    <Routes>
      
        <Route path="/" element={<LayoutAdmin />}>
           <Route index element={<Home />} />
           <Route path="contact" element={<Contact />} />
           <Route path="category/:slug" element={<Category />} />
           <Route path="tag/:slug" element={<Tag />} />
           <Route path="property/add" element={isLogin.isLogin  ? <ListProperty /> : <Navigate to="/login" /> } />
           <Route path="post/search" element={ <PostSearch /> } />
           <Route path="property/:slug" element={<PropertyDetail />} />
           <Route path="post/:slug" element={<Post />} />
           <Route path="about/:slug" element={<About />} />
           <Route path="project" element={<Project />} />
           <Route path="project/:slug" element={<ProjectDetail />} />
           <Route path="not-found" element={<NotFound />} />
           <Route path='*' element={<NotFound />} />
       </Route>
      
 </Routes>

   
 </div>)
}
export default RouteAdmin;
// <Route index element={<Home />} />