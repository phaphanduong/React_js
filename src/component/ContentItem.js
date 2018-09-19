import React, { Component } from 'react';
import { Link } from "react-router-dom";
class ContentItem extends Component {
    
    //hàm chuyển  đổi URL thành URL SEO (thân thiện )  để google có thể tìm kiếm được bài của chúng ta
    // hàm này thực chất chuyển đổi các ký tự có dấu thành ko dấu, và một số ký tự đặc biệt 
    chuyenDoiURL = (str)=>{
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();     
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
    
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
    
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
    
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
    
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
    
        // return
        return str;
    }
    render() {
        return (
            <div className="col-sm-4 mt-4">
                <div className="card-deck">
                    <div className="card">
                        <Link to={"/tin-chi-tiet/" + this.chuyenDoiURL(this.props.tieude) +"." +this.props.tinId + ".html"} > <img className="card-img-top wh img-fluid" src={this.props.anh} alt={this.props.mota} /> </Link>
                        <div className="card-body">
                        <h4 className="card-title">{this.props.tieude}</h4>
                        <p className="card-text">{this.props.noidung}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentItem;