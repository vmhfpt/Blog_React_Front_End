import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditProperty from "./editProperty";
import { getList } from "./propertyReducer";
import { getListProperty } from "./selectProperty";
import { getPaginate } from "./selectProperty";
import AddProperty from "./addProperty";
import {destroy} from "./propertyReducer";
function ListProperty() {
    const [tabEdit, setTabEdit] = useState(false);
    const [tabAdd, setTabAdd] = useState(false);
    const paginate = useSelector(getPaginate);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getList());
    }, []);
    const deleteProperty = (id, name) => {
        if(window.confirm(`Bạn có chắc muốn xóa "${name}" không ?`)){
          dispatch(destroy(id));
        }
      }
    const dataItem = useSelector(getListProperty);

    return (<div>
        <section id="aa-property-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="aa-property-header-inner">
                            <h2>Contact</h2>
                            <ol className="breadcrumb">
                                <li><Link to="/">HOME</Link></li>
                                <li className="active">Danh sách bài đăng</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section id="aa-contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="aa-contact-area">

                            <div className="aa-contact-bottom">
                                <div className="aa-title">
                                    <h2>Quản lý bài đăng của bạn</h2>
                                    <span></span>
                                    <p>Bạn có thể thao tác trên các nút chọn <strong className="required">*</strong></p>
                                </div>
                                <div className="aa-contact-form">

                                    <div className="row" onClick={() => setTabAdd(false)} >
                                        <div className="col-12">
                                            <div className="card">
                                                <div className="card-body table-responsive p-0">

                                                    <table className="table table-hover text-nowrap">

                                                        <thead>
                                                            <tr>
                                                                <th>STT</th>
                                                                <th>Tiêu đề </th>
                                                                <th> Ảnh</th>
                                                                <th> Giá</th>
                                                                <th> Danh mục</th>
                                                                <th>Trạng thái</th>
                                                                <th></th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {dataItem && dataItem.map((item, key) => (
                                                                <tr key={key}>
                                                                    <td>{key + 1}</td>
                                                                    <td>{item.title}</td>
                                                                    <td> <img className="img-custom" alt="" src={item.thumb} /> </td>
                                                                    <th> {item.price}</th>
                                                                    <th> {item.category_id.name}</th>
                                                                    <td>
                                                                        <span className="tag tag-success">{item.active === 1 ? "Kích hoạt" : "Nháp"}</span>
                                                                    </td>
                                                                    <td>
                                                                        <Link
                                                                            onClick={() => setTabEdit(item)}    
                                                                            className="btn btn-info btn-sm"
                                                                            to="#"
                                                                        >
                                                                        
                                                                            Sửa
                                                                        </Link>
                                                                    </td>
                                                                    <td>
                                                                        <Link
                                                                            onClick={() => deleteProperty(item._id, item.title)}
                                                                            data-id="3"
                                                                            data-url="/admin/category/delete"
                                                                            className="delete btn btn-danger btn-sm"
                                                                            to="#"
                                                                        >

                                                                            Xóa
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                            ))}


                                                        </tbody>
                                                    </table>

                                                </div>



                                            </div>
                                        </div>
                                    </div>


                                    {paginate && <div className="row">
    <div className="col-sm-12 col-md-5">
        <div className="dataTables_info" id="example2_info" role="status" aria-live="polite"> Tổng {paginate.sumPage} trang trên {paginate.itemTotal} bài đăng
        </div>
    </div>
    <div className="col-sm-12 col-md-7">
        <div className="dataTables_paginate paging_simple_numbers" id="example2_paginate">
            <ul className="pagination">
            {paginate.prev_page ? <li onClick={() =>  dispatch(getList((paginate.currentPage) - 1))} className="paginate_button page-item previous " id="example2_previous"><Link to="#"
                        aria-controls="example2" data-dt-idx="0" tabIndex="0" className="page-link">Previous</Link></li> : ''}
            {
    new Array(paginate.sumPage).fill(0).map((_, index) => (
         <li key={index} onClick={() =>  dispatch(getList(index + 1))} className={"paginate_button page-item " + (index + 1 === paginate.currentPage ? "active" : "")}><Link to="#" aria-controls="example2" data-dt-idx="1"
            tabIndex="0" className="page-link">{index + 1}</Link></li>
    ))
}
      {paginate.next_page ?  <li onClick={() =>  dispatch(getList((paginate.currentPage) + 1))} className="paginate_button page-item next" id="example2_next"><Link to="#" aria-controls="example2"
                data-dt-idx="7" tabIndex="0" className="page-link">Next</Link></li> : ''}
              
            </ul>
        </div>
    </div>
</div>}


                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <button type="button" onClick={() => {
                    setTabAdd(!tabAdd);
                }} className="btn btn-success"> {tabAdd ? "Đóng lại" : "Thêm mới"}</button>


                {tabAdd ? <div className="custom-popup">
                    <div className="overflow-custom">
                        <AddProperty setTab={setTabAdd} />
                    </div>
                </div> : ''}
                {tabEdit ? <div className="custom-popup">
                    <div className="overflow-custom">
                        <EditProperty setTab={setTabEdit} dataEdit={tabEdit} setPop={setTabEdit} />
                    </div>
                </div> : ''}
            </div>
        </section>
    </div>)
}
export default ListProperty;