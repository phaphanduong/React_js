import React, { Component } from 'react';
import ContentItem from './ContentItem';
import dl from "./data.json";
class Content extends Component {
    
    render() {
        // console.log(dl);
        
        return (
        <div>
            <header className="masthead">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                            <h1 className="mb-5 text-center">Trang tin tức</h1>
                        </div>
                        </div>
                    </div>
                    </div>
            </header>
                <br />
            <div className="content">
                <div className="container">
                    <div className="row">
                       {
                        dl.map((value, key) =>{
                            return(
                                <ContentItem 
                                key={key}
                                tinId={value.id}          
                                anh={value.anh}
                                mota={value.trichDan}
                                tieude={value.tieuDe}
                                noidung={value.noiDung}
                                
                                >
                                </ContentItem>
                            )
                        })   
                       } 
                        
                        
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Content;