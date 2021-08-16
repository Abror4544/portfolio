import React from 'react';
import { NavLink } from "react-router-dom";
import './Menu.css';
import '../../assets/css/all.min.css';
import '../../assets/css/fontawesome.min.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/bootstrap-grid.min.css';





const Menu = (props) => {

    return (
        <div className="mainmenu a">
            <div className="avatar">
                <a href="#" className="hideMenu" onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(".mainmenu").classList.remove("active");
                    document.querySelector(".mainmenuBtn").classList.remove("disable");
                }
                }><i className="fad fa-times"></i></a>
                <div className="avatarNameProfession">
                    <h1>Abror <br /> Abdusalomov</h1>
                    <h3>Web Developer</h3>
                </div>
            </div>
            <nav>
                <ul>
                    <li><NavLink className="portfolLink" to={'/'} onClick={() => {
                        document.querySelector(".mainmenu").classList.remove("active");
                        document.querySelector(".mainmenuBtn").classList.remove("disable");
                    }
                    }>Главная</NavLink></li>
                    <li><a href="#aboutme" className="portfolLink">Обо мне</a></li>
                    <li><a href="#education" className="portfolLink">Учеба</a></li>
                    <li><a href="#workExperience" className="portfolLink">Рабочий стаж</a></li>
                    <li><a href="#mySkills" className="portfolLink">Навыки</a></li>
                    <li><NavLink className="portfolLink" to={'/portfolio'} onClick={() => {
                        document.querySelector(".mainmenu").classList.remove("active");
                        document.querySelector(".mainmenuBtn").classList.remove("disable");
                    }
                    }>Портфолио</NavLink></li>
                    <li><a href="#contact" className="portfolLink">Контакты</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;