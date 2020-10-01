import React, { Component } from 'react';
//importa las librerias de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from '../Dist/images/logo-header.png';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class Banner extends Component {

    render() {
      return(
            <section className="cover-background">
                <div className="container">
                    <div className="row ">
                        <div className="col-12 text-left">
                            <span className="alt-font">Gallery</span>
                        </div>
                    </div>
                </div>
            </section>
      );

    }
}

export default Banner;