import React, { Component } from 'react';
import dl from "./data.json";
import NewsRelates from './NewsRelates';
class News extends Component {
    render() {
        // console.log(this.props.match.params.id)
        // console.log(this.props.match.params.slug)

        var dem=1;
        return (
            <div>
                <header className="masthead">
                <div className="container h-100">
                    <div className="row h-100">
                    <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                        <h1 className="mb-5 text-center">chitiettin</h1>
                        </div>
                    </div>
                    </div> 
                </div></header>
                {/* endheader */}
                <br />
                {/* content */}
                <div className="container">

                {
                    dl.map((value, key) =>{
                        // console.log(this.props.match.params.id)
                        if(value.id === (parseInt(this.props.match.params.id, 20))){
                            return(
                            <div className="row " key={key}>
                                <div className="col-sm-9 mx-auto ">
                                <div className="card-img-top">
                                    <img src={value.anh} className="img-fluid rong" alt={value.trichDan} />
                                </div>
                                <div className="card-body">
                                    <h2>{value.tieuDe}</h2>
                                    <p>{value.noiDung}</p>
                                </div>
                                </div>
                            </div>
                            )
                        }
                           return true ; 
                    })
                }
                
                <div className="row">
                {
                     
                    dl.map((value, key) =>{
                        if(dem<=4&&value.id!==parseInt(this.props.match.params.id,20))
                        {   
                            dem++;
                           return(
                            <NewsRelates key={key}
                                tinId={value.id}          
                                anh={value.anh}
                                mota={value.trichDan}
                                tieude={value.tieuDe}
                                noidung={value.noiDung}
                            >
                            </NewsRelates>
                        ) 
                        }
                        return true ;
                    })
                }
                </div>
                </div>
            </div>
        );
    }
}

export default News;