import React, { Component } from 'react';
//importa las librerias de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Dist/images/logo-footer.png';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class Footer extends Component {

    render() {
      return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <span>
                            <img src={logo} alt="logo" />  
                            &copy; All right reserved 2020
                        </span>
                    </div>
                </div>    
            </div>  
        </footer>
      );

    }
}

export default Footer;