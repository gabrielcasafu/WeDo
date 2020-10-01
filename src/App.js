import React, { Component } from 'react';

import Header from './Components/Header';
import Banner from './Components/Banner';
import Content from './Components/Content';
import Footer from './Components/Footer';

import './Dist/css/style.css';
//import './App.css';

class App extends Component {

    render() {
      return(
        <div>
          <Header />
          <Banner />
          <Content />
          <Footer />
        </div>
      );

    }
}

export default App;