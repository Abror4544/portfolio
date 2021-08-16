import React from 'react';
import { NavLink } from "react-router-dom";
import './Menu.css';
import '../../assets/css/all.min.css';
import '../../assets/css/fontawesome.min.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/bootstrap-grid.min.css';





const Menu = (props) => {

    const toggleMenu = (e) => {
        document.querySelector(".mainmenu").classList.remove("active");
        document.querySelector(".mainmenuBtn").classList.remove("disable");
    }

    return (
        <div className="mainmenu">
            <div className="avatar">
                <a href="#" className="hideMenu" onClick={toggleMenu}><i className="fad fa-times"></i></a>
                <div className="avatarNameProfession">
                    <h1>Abror <br /> Abdusalomov</h1>
                    <h3>Web Developer</h3>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        {props.show
                            ? <NavLink className="portfolLink" to={'/'} onClick={toggleMenu}>Обо мне</NavLink>
                            : <a href="#aboutme" className="portfolLink" onClick={toggleMenu}>Обо мне</a>}
                    </li>
                    <li>
                        {props.show
                            ? <NavLink className="portfolLink" to={'/'} onClick={toggleMenu}>Учеба</NavLink>
                            : <a href="#education" className="portfolLink" onClick={toggleMenu}>Учеба</a>}
                    </li>
                    <li>
                        {props.show
                            ? <NavLink className="portfolLink" to={'/'} onClick={toggleMenu}>Рабочий стаж</NavLink>
                            : <a href="#workExperience" className="portfolLink" onClick={toggleMenu}>Рабочий стаж</a>}
                    </li>
                    <li>
                        {props.show
                            ? <NavLink className="portfolLink" to={'/'} onClick={toggleMenu}>Навыки</NavLink>
                            : <a href="#mySkills" className="portfolLink" onClick={toggleMenu}>Навыки</a>}
                    </li>
                    <li><NavLink className="portfolLink" to={'/portfolio'} onClick={toggleMenu}>Портфолио</NavLink></li>
                    <li>
                        {props.show
                            ? <NavLink className="portfolLink" to={'/'} onClick={toggleMenu}>Контакты</NavLink>
                            : <a href="#contact" className="portfolLink" onClick={toggleMenu}>Контакты</a>}
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;