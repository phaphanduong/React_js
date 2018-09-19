import React, { Component } from 'react';
import { Route} from 'react-router-dom'
import News from '../component/News';
import Content from '../component/Content';
import Contact from '../component/Contact';

class DieuHuongURL extends Component {
    render() {
        return (
            <div>
                
                    <div>
                    <Route exact path="/trang-chu" component={Content} />
                    <Route  path="/tin-chi-tiet/:slug.:id.html" component={News} />
                    <Route  path="/lien-he" component={Contact} />
                    </div>
                
            </div>
        );
    }
}

export default DieuHuongURL;