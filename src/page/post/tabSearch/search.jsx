import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useState, useEffect} from "react";
import CategoryService from "../../../service/category.service";
import { getListAllCategory } from "../category/selectCategory";

function SearchComponent(){
    const dataCategory = useSelector(getListAllCategory);
    
    const [citySearch, setCitySearch] = useState('');
    const [city, setCity] = useState(false);
    const [nameFilter, setNameFilter] = useState('');
    const [key, setKey] = useState('');
    useEffect(() => {
      
        const getCity = async () => {
          const response = await CategoryService.getCity();
          if(response) setCity(response);
        }
        getCity();
        
    }, [])
  return (<div className="aa-properties-single-sidebar">
  <h3>Tìm kiếm</h3>
  <form action="">
    <div className="aa-single-advance-search">
      <input value={key} onChange={(e) => setKey(e.target.value)} type="text" placeholder="Nhập từ khóa" />
    </div>
    <div className="aa-single-advance-search">
    <select  value={nameFilter} onChange={(e) => {
        setNameFilter(e.target.value);
        setCitySearch("");
    }}>
  
  <option value="">--- Lựa chọn ---</option>
  {/*{dataCategory &&  dataCategory.map((item, key) => (
          
           <>
            <option key={key} value={item.name}  >{item.name}</option>
            
            {item.category_child.length > 0 ? item.category_child.map((data, key1) => {
               return (<option key={key1 + key} value={data.name}  >{data.name}</option>)
            }): ''}
           </>
          
  ))} */}
  {dataCategory &&  dataCategory.map((item, key) => (     
           <option key={key} value={item.name}  >{item.name}</option>
 ))} 
          
          
         
 
</select>
    </div>
  <div className="aa-single-advance-search">
    <select value={citySearch} onChange={(e) => setCitySearch(e.target.value)}>
  <option value=""  >--- Lựa Chọn ---</option>
     {city && nameFilter!== '' && city.map((item, key) => (
       <option value={item.name} key={key} >{nameFilter} {item.name}</option>
     ))}
  </select>
    </div> 
   
    
   
    <div className="aa-single-advance-search">
    <Link to={`/property/search?ca=${nameFilter}&key=${key}&city=${citySearch}`}> <input
        type="button"
        value="Tìm Kiếm"
        className="aa-search-btn"
      /> </Link>
    </div>
  </form>
</div>);
}
export default SearchComponent;