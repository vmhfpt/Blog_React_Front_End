import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getList } from "../../category/categoryReducer";
import { useEffect, useState } from "react";
import { getListCategory } from "../../category/selectCategory";
import postService from "../../../../service/post.service";
import { useLocation } from "react-router-dom";
import Logo from './Logo/logo.png';
function Header() {

  const { pathname } = useLocation();
  const [key, setKey] = useState('');
  const [dataAutoComplete, setDataAutoComplete] = useState([]);
  /**function scrollFunction(e) {
    
      window.onwheel = e => {
  if(e.deltaY >= 0){
    console.log(e.deltaY)
    document.getElementById("navbar").style.top = "-63px";
  } else {
    console.log(e.deltaY)
    document.getElementById("navbar").style.top = "0";
  }
}
    }
    useEffect(() => {
      window.onscroll = function() {scrollFunction()};
       dispatch(getList());
       
     }, []) */




  let params = useParams();
  const [tabSearch, setTabSearch] = useState(false);
  const dispatch = useDispatch();





  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY >= 200) {
        document.getElementById("navbar").style.top = "-63px";
      } else {
        document.getElementById("navbar").style.top = "0";
      }


    }
    dispatch(getList());
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])




  useEffect(() => {
    setTabSearch(false);
  }, [params, pathname]);
  const response = useSelector(getListCategory);
  const showNav = () => {
    var element = document.getElementById("animate-scroll__nav");
    element.classList.add("animate-scroll__nav");
    document.getElementById("over-flow").style.display = "block";
  }
  const closeNav = () => {
    var element = document.getElementById("animate-scroll__nav");
    element.classList.remove("animate-scroll__nav");
    document.getElementById("over-flow").style.display = "none";
  }
  /**document.getElementById("show-nav").addEventListener("click", ()=> {
       
     });
 
     document.getElementById("close-nav").addEventListener("click", ()=> {
        
     });
     document.getElementById("over-flow").addEventListener("click", ()=> {
         var element = document.getElementById("animate-scroll__nav");
        element.classList.remove("animate-scroll__nav");
        document.getElementById("over-flow").style.display = "none";
       
     }); */
  const getDataSearch = async (data) => {
    setKey(data);
    const resultAutoComplete = await postService.getSearchAutoComplete({ key: data });
    setDataAutoComplete(resultAutoComplete);
    // <Link to="/"><h1>VMHUNG</h1></Link>
  }
  return (
    <>
      <div onClick={() => closeNav()} id="over-flow"></div>
      <header id="navbar" className="app-footer container-fluid">
        <div className="container">
          <div className="app-footer__content ">
            <div onClick={() => showNav()} className="app-footer__content-nav-icon">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div className="app-footer__content-logo ">
              <div>
                <img src={Logo} alt="" />
              </div>
            </div>
            <div id="animate-scroll__nav" className="app-footer__content-nav  ">
              <div className="app-footer__content-nav-tab">
                <div className="app-footer__content-nav-tab-item">
                  <Link to=""> <span>MAGIFY</span></Link>
                </div>
                <div className="app-footer__content-nav-tab-item">
                  <i onClick={() => closeNav()} className="fa fa-times" aria-hidden="true"></i>
                </div>
              </div>
              <ul>
                <Link onClick={() => closeNav()} to=""><li>Trang chủ</li></Link>
                {response && response.map((item, key) => (
                  <Link onClick={() => closeNav()} key={key} to={"/category/" + item.slug}><li>{item.title}</li></Link>
                ))}

              </ul>
            </div>
            <div className="app-footer__content-search ">
              <i onClick={() => setTabSearch(true)} className="fa fa-search" aria-hidden="true"></i>

              {tabSearch && <>
                <div className="app-footer__content-search-detail">
                  <div className="app-footer__content-search-detail-input">
                    <input value={key} onChange={(e) => getDataSearch(e.target.value)} type="text" placeholder="Tìm kiếm" />
                  </div>
                  <div className="app-footer__content-search-detail-button">
                    <Link to={"/post/search?key=" + key} >  <i className="fa fa-search" aria-hidden="true"></i></Link>
                  </div>
                </div>
                <div className="app-footer__content-search-auto_complete">
                  <ul>
                    {key !== '' && dataAutoComplete.length !== 0 ?

                      dataAutoComplete.map((item, key) => (
                        <Link key={key} to={'/post/' + item.slug}><li>{item.title}</li></Link>
                      ))

                      : <li>Không có kết quả</li>}

                    <li className="close-tab-search" onClick={() => setTabSearch(false)}>Đóng lại</li>
                  </ul>
                </div>
              </>}


            </div>
          </div>
        </div>
      </header>
    </>)
}
export default Header;