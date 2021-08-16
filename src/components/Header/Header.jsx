import React, { useEffect } from 'react';
import './Header.css';
import '../../assets/css/all.min.css';
import '../../assets/css/fontawesome.min.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/bootstrap-grid.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = (props) => {

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <header id="header">
            <button className="mainmenuBtn" onClick={() => {
                document.querySelector(".mainmenu").classList.add("active");
                document.querySelector(".mainmenuBtn").classList.add("disable");
            }
            }><i className="far fa-bars"></i></button>
            <div className={`mainmenuAphorism container ${props.show ? 'show' : ''}`}>
                <h1>Создадим вместе <br /> развивая <br /> в геометрической <br /> прогрессии</h1>
                <h4>Программист любящий свою работу</h4>
                <a target="_blank" href='https://t.me/stimul7'>Связаться</a>
            </div>
            <div className={`mainmenuTitle container ${props.show ? '' : 'show'}`}>
                <h1 data-aos="zoom-in" data-aos-offset="-500" data-aos-duration="2000">Abror <br /> Abdusalomov</h1>
                <h4 data-aos="zoom-in" data-aos-offset="-500" data-aos-duration="2500">Web Developer</h4>
                <a target="_blank" href='https://t.me/stimul7'>написать</a>
            </div>
        </header>
    )
}

export default Header;