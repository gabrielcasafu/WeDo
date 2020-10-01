import React, { Component } from 'react';
//importa las librerias de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Dist/images/logo-header.png';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class Header extends Component {

    render() {
      let url="";

      return(

          <header>
            
            <nav className="navbar navbar-default">
                <div className="container">
                    
                    <div className="col-auto col-lg-3">
                        <a href={url}>
                            <img src={logo} alt="Logo" />
                        </a>    
                    </div>
                    
                    <div className="col-auto col-lg-6 ">
                        <button type="button" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbar-collapse-toggle-1">
                            <span className="sr-only">toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="navbar-collapse collapse " id="navbar-collapse-toggle-1">
                            
                            <ul className="nav navbar-nav">
                                {/*}
                                <li>
                                    <a href={url}>
                                        Nav menu 1
                                    </a>
                                </li>
                                <li>
                                    <a href={url}>
                                        Nav menu 2
                                    </a>
                                </li>
                                {*/}
                            </ul>
                        </div>
                    </div>
                    <div className="col-auto col-lg-1 xs-hidden">
                        <a className="btn btn-small" href={url}>
                            Login
                        </a>
                    </div>

                </div>
            </nav>
            
        </header>
      );

    }
}

export default Header;