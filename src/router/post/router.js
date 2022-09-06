
import { Routes, Route,  Navigate} from "react-router-dom";
import { Outlet } from 'react-router-dom';
import Footer from '../../page/post/layout/footer/footer';
import Header from '../../page/post/layout/header/header';
import SideBar from '../../page/post/layout/sidebar/sidebar';
import Category from "../../page/post/category/category";
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
function LayoutAdmin() {

  return (
    <div>
        <Header />
        <SideBar />
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
           <Route path="property/add" element={isLogin.isLogin  ? <ListProperty /> : <Navigate to="/login" /> } />
           <Route path="property/search" element={ <PropertySearch /> } />
           <Route path="property/:slug" element={<PropertyDetail />} />
           <Route path="project" element={<Project />} />
           <Route path="project/:slug" element={<ProjectDetail />} />
           <Route path="not-found" element={<NotFound />} />
       </Route>
       <Route path='*' element={<NotFound />} />
 </Routes>

   
 </div>)
}
export default RouteAdmin;
// <Route index element={<Home />} />