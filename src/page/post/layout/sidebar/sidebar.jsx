import { Link, useParams} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../category/categoryReducer";
import { getListCategory } from "../../category/selectCategory";
import { memo } from "react";
function SideBar() {
  let params = useParams();
  const slug = params.slug;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getList());
  }, []);
  const dataItem = useSelector(getListCategory);

  return (
    <section id="aa-menu-area">
      <nav className="navbar navbar-default main-navbar" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <Link className="navbar-brand aa-logo" to="index.html">
              {" "}
              Địa ốc <span>Console.log</span>
            </Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul
              id="top-menu"
              className="nav navbar-nav navbar-right aa-main-nav"
            >
               <li className={!slug ? "active" : ""} >
                <Link to="/">HOME</Link>
              </li>
              {dataItem && dataItem.map((item, key) => {
                if (item.category_child.length !== 0) {
                  return (
                    <li key={key} className="dropdown">
                      <Link
                      
                        className={slug === item.slug ? "active dropdown-toggle" : "dropdown-toggle"}
                        data-toggle="dropdown"
                        to={"/category/" + item.slug}
                      >
                        {item.name} <span className="caret"></span>
                      </Link>
                      <ul className="dropdown-menu" role="menu">
                        {item.category_child.map((data, key1) => (
                        <li  key={key + key1}>
                          <Link  className={slug === item.slug ? "active" : ""} to={"/category/" + data.slug}>{data.name}</Link>
                        </li>
                        ))}
                      </ul>
                    </li>
                  );
                }else {
                  return (<li key={key}>
                    <Link  className={slug === item.slug ? "active" : ""} to={"/category/" + item.slug} >{item.name}</Link>
                  </li>)
                }
              })}
             

              
             <li>
                <Link to="project">Dự án</Link>
               
              </li>

              <li>
                
                <Link to="contact">Liên hệ</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
export default memo(SideBar);
