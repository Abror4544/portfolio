import React from 'react';
import "./Footer.css";
import '../../assets/css/all.min.css';
import '../../assets/css/fontawesome.min.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/bootstrap-grid.min.css';

const Footer = (props) => {
    return (
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-5 col-12">
                        <div className="icons d-flex justify-content-center">
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/abror_azamatovic/"><i className="fab fa-instagram"></i></a>
                            <a target="_blank" rel="noreferrer" href="https://t.me/stimul7"><i className="fab fa-telegram"></i></a>
                            <a target="_blank" rel="noreferrer" href="mailto:corporationsystems7@gmail.com"><i className="far fa-envelope"></i></a>
                        </div>
                        <p>Copyright Abdusalomov Abror 2020. All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;