import React, { Component } from 'react';
import './../css/App.css';
import Menu from './Menu';
//import Content from './Content';
import Footer from './Footer';
//import News from './News';
//import Contact from './Contact';
import DieuHuongURL from '../router/DieuHuongURL';
import { BrowserRouter as Router} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu/>
          <DieuHuongURL/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
