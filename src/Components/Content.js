import React, { Component } from 'react';
//importa las librerias de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';

import avatar1 from '../Dist/images/avatar-1.png';
import avatar2 from '../Dist/images/avatar-2.png';
import avatar3 from '../Dist/images/avatar-3.png';

import gallery1 from '../Dist/images/gallery-1.png';
import gallery2 from '../Dist/images/gallery-2.png';
import gallery3 from '../Dist/images/gallery-3.png';
import gallery4 from '../Dist/images/gallery-4.png';
import gallery5 from '../Dist/images/gallery-5.png';
import gallery6 from '../Dist/images/gallery-6.png';


class Content extends Component {

    render() {
      let url="";
      return(

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-xs-12 mb-30">
                        <div className="search">
                            <span>Search By #</span> 
                            <input type="text" id="email" name="email" className="input-bg"></input>
                        </div>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-xs-12 mb-30">
                        <img className="img-gallery" src={gallery1} alt="gallery" />
                        <div className="user-content">
                            <img src={avatar1} alt="avatar" />
                            <div className="user-data">
                                <span>Sam Jerremy</span>
                                <p>#dayAtTheBeach</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xs-12 mb-30">
                        <img className="img-gallery" src={gallery2}  alt="gallery" />
                        <div className="user-content">
                            <img src={avatar2} alt="avatar" />
                            <div className="user-data">
                                <span>Chandler Smith</span>
                                <p>#catchASun</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-4 col-xs-12 mb-30">
                        <img className="img-gallery" src={gallery3}  alt="gallery" />
                        <div className="user-content">
                            <img src={avatar3} alt="avatar" />
                            <div className="user-data">
                                <span>Mads Schmidt</span>
                                <p>#BigAssMountain</p>
                            </div>
                        </div>
                        
                    </div>
                </div> 
                
                <div className="row ">
                    <div className="col-lg-4 col-xs-12 mb-30">
                        <img className="img-gallery" src={gallery4}  alt="gallery" />
                        <div className="user-content">
                            <img src={avatar2} alt="avatar" />
                            <div className="user-data">
                                <span>Mads Schmidt</span>
                                <p>#findingHome</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xs-12 mb-30">
                        <img className="img-gallery" src={gallery5}  alt="gallery" />
                        <div className="user-content">
                            <img src={avatar3} alt="avatar" />
                            <div className="user-data">
                                <span>Chandler Smith</span>
                                <p>#ImNotBatman</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-4 col-xs-12">
                        <img className="img-gallery" src={gallery6}  alt="gallery" />
                        <div className="user-content">
                            <img src={avatar1} alt="avatar" />
                            <div className="user-data">
                                <span>Sam Jerremy</span>
                                <p>#ROCKoN</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="row mt-30">
                    <div className="col-lg-12 col-xs-12 text-center">
                        <p className="load-more">
                            <a href={url}>Load More
                            </a>
                        </p>
                    </div>
                </div>

            </div> 
        </section>
      );

    }
}

export default Content;