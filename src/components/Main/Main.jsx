import React, { useEffect } from 'react';
import Header from '../Header/Header';
import "./Main.css";
import '../../assets/css/all.min.css';
import '../../assets/css/fontawesome.min.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/bootstrap-grid.min.css';
import me from '../../assets/images/Portret.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = (props) => {

    useEffect(() => {
        AOS.init();
    }, []);

    const show = false;
    return (
        <>
            <Header show={show} />
            <section id="aboutme" className="aboutMe">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12" data-aos="flip-left" data-aos-offset="-200"
                            data-aos-duration="2000">
                            <h2>Обо мне</h2>
                            <p>Будьте проще.</p>
                            <ul className="listAboutme">
                                <li className="listAboutmeli"><span>Имя: </span>Аброр</li>
                                <li className="listAboutmeli"><span>Возраст: </span>20</li>
                                <li className="listAboutmeli"><span>Адрес электронной почты: </span>corporationsystems7@gmail.com
                                </li>
                                <li className="listAboutmeli"><span>Номер телефона: </span>+998 97 432-45-44</li>
                                <li className="listAboutmeli"><span>Адрес: </span>г.Ташкент, Юнусабад</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12" data-aos="flip-right" data-aos-offset="-200"
                            data-aos-duration="2000">
                            <img src={me} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="workExperience" className="workExperience">
                <div className="container">
                    <div className="row">
                        <h2>Рабочий стаж</h2>
                        <div className="col-12">
                            <div className="row workDialog justify-content-center">
                                <div className="col-lg-5 col-md-4 col-sm-12 col-12 leftFirst" data-aos="zoom-in"
                                    data-aos-offset="-200" data-aos-duration="1000">
                                    <h4>Саппорт</h4>
                                    <p className="workDate">май 2020 - июль 2020</p>
                                    <p className="workDescription">Поддержка сайтов, доработки</p>
                                </div>
                                <div className="col-lg-2 col-md-4 circleBlock">
                                    <div className="circle">
                                        <div className="miniCircle"></div>
                                    </div>
                                    <div className="lineCircle"></div>
                                    <br />
                                    <div className="circleTwo">
                                        <div className="miniCircle"></div>
                                    </div>
                                    <div className="lineCircleTwo"></div>
                                </div>
                                <div className="col-lg-5 col-md-4 col-sm-12 col-12 rightFirst" data-aos="zoom-in"
                                    data-aos-offset="-200" data-aos-duration="1000">
                                    <h4>Фрилансер</h4>
                                    <p className="workDate">с июля 2020 - </p>
                                    <p className="workDescription">Работа фрилансером, верстки, поддержка сайтов, доработки, интеграции
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row workDialog justify-content-center">
                                <div className="col-lg-5 col-md-4 col-sm-12 col-12 leftFirst" data-aos="zoom-in"
                                    data-aos-offset="-200" data-aos-duration="1000">
                                    <h4>Специалист по компьютерным услугам</h4>
                                    <p className="workDate">апрель 2017 - январь 2020</p>
                                    <p className="workDescription">Работа в офисе</p>
                                </div>
                                <div className="col-lg-2 col-md-4 circleBlock">
                                    <div className="circle">
                                        <div className="miniCircle"></div>
                                    </div>
                                    <div className="lineCircle"></div>
                                    <br />
                                    <div className="circleTwo">
                                        <div className="miniCircle"></div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-4 col-sm-12 col-12 rightFirst" data-aos="zoom-in"
                                    data-aos-offset="-200" data-aos-duration="1000">
                                    <h4>Младший веб-разработчик</h4>
                                    <p className="workDate">февраль 2020 - апрель 2020</p>
                                    <p className="workDescription">Работа-стаж в стартап</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="education" className="education">
                <div className="container">
                    <div className="row">
                        <h2>Учеба</h2>
                        <div className="col-12">
                            <div className="row workDialog justify-content-center">
                                <div className="col-lg-5 col-md-4 col-sm-12 col-12 leftFirst" data-aos="zoom-in"
                                    data-aos-offset="-200" data-aos-duration="1000">
                                    <h4>Институт</h4>
                                    <p className="workDate">сентябрь 2019 - июль 2023</p>
                                    <p className="workDescription">Образование - высшее. Факультет управления и организации водного хозяйства (в сфере экономики) Ташкентского института инженеров ирригации и механизации сельского хозяйства</p>
                                </div>
                                <div className="col-lg-2 col-md-4 circleBlock">
                                    <div className="circle">
                                        <div className="miniCircle"></div>
                                    </div>
                                    <div className="lineCircle"></div>
                                    <br />
                                    <div className="circleTwo">
                                        <div className="miniCircle"></div>
                                    </div>
                                    <div className="lineCircleTwo"></div>
                                </div>
                                <div className="col-lg-5 col-md-4 col-sm-12 col-12 rightFirst" data-aos="zoom-in"
                                    data-aos-offset="-200" data-aos-duration="1000">
                                    <h4>PROWEB</h4>
                                    <p className="workDate">июль 2020 - март 2021</p>
                                    <p className="workDescription">Учеба в центре современных профессий PROWEB. Веб программирование</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row workDialog justify-content-center">
                                <div className="col-lg-5 col-md-4 col-sm-12 col-12 leftFirst" data-aos="zoom-in"
                                    data-aos-offset="-200" data-aos-duration="1000">
                                    <h4>Средняя школа</h4>
                                    <p className="workDate">сентябрь 2007 - май 2017</p>
                                    <p className="workDescription">Школа № 97 г.Ташкент</p>
                                </div>
                                <div className="col-lg-2 col-md-4 circleBlock">
                                    <div className="circle">
                                        <div className="miniCircle"></div>
                                    </div>
                                    <div className="lineCircle"></div>
                                    <br />
                                    <div className="circleTwo">
                                        <div className="miniCircle"></div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-4 col-sm-12 col-12 rightFirst" data-aos="zoom-in"
                                    data-aos-offset="-200" data-aos-duration="1000">
                                    <h4>Колледж</h4>
                                    <p className="workDate">сентябрь 2017 - июнь 2019</p>
                                    <p className="workDescription">Ташкентский экономический колледж. Бухгалтерский учет
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="mySkills" className="skills">
                <div className="container">
                    <h2>Мои навыки</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="zoom-in" data-aos-offset="-300">
                            <h4>HTML</h4>
                            <div className="skillDescription">
                                <div className="skill htmlSkill"></div>
                                <p>95%</p>
                            </div>
                            <h4>CSS</h4>
                            <div className="skillDescription">
                                <div className="skill cssSkill"></div>
                                <p>90%</p>
                            </div>
                            <h4>JavaScript</h4>
                            <div className="skillDescription">
                                <div className="skill jsSkill"></div>
                                <p>90%</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="zoom-in" data-aos-offset="-300">
                            <h4>PHP</h4>
                            <div className="skillDescription">
                                <div className="skill phpSkill"></div>
                                <p>20%</p>
                            </div>
                            <h4>Photoshop</h4>
                            <div className="skillDescription">
                                <div className="skill photoshopSkill"></div>
                                <p>40%</p>
                            </div>
                            <h4>WordPress</h4>
                            <div className="skillDescription">
                                <div className="skill wpSkill"></div>
                                <p>60%</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="zoom-in" data-aos-offset="-300">
                            <h4>Jquery</h4>
                            <div className="skillDescription">
                                <div className="skill jqSkill"></div>
                                <p>90%</p>
                            </div>
                            <h4>Bootstrap</h4>
                            <div className="skillDescription">
                                <div className="skill bsSkill"></div>
                                <p>75%</p>
                            </div>
                            <h4>Gulp</h4>
                            <div className="skillDescription">
                                <div className="skill gulpSkill"></div>
                                <p>85%</p>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="zoom-in" data-aos-offset="-300">
                            <h4>React</h4>
                            <div className="skillDescription">
                                <div className="skill reactSkill"></div>
                                <p>70%</p>
                            </div>
                            <h4>Redux</h4>
                            <div className="skillDescription">
                                <div className="skill rxSkill"></div>
                                <p>50%</p>
                            </div>
                            <h4>React+Redux</h4>
                            <div className="skillDescription">
                                <div className="skill rrSkill"></div>
                                <p>65%</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="zoom-in" data-aos-offset="-300">
                            <h4>Git</h4>
                            <div className="skillDescription">
                                <div className="skill gitSkill"></div>
                                <p>80%</p>
                            </div>
                            <h4>BEM</h4>
                            <div className="skillDescription">
                                <div className="skill bemSkill"></div>
                                <p>75%</p>
                            </div>
                            <h4>Typescript</h4>
                            <div className="skillDescription">
                                <div className="skill tsSkill"></div>
                                <p>30%</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="zoom-in" data-aos-offset="-300">
                            <h4>1C-Bitrix</h4>
                            <div className="skillDescription">
                                <div className="skill bxSkill"></div>
                                <p>40%</p>
                            </div>
                            <h4>OpenCart</h4>
                            <div className="skillDescription">
                                <div className="skill ocSkill"></div>
                                <p>40%</p>
                            </div>
                            <h4>Joomla</h4>
                            <div className="skillDescription">
                                <div className="skill jlSkill"></div>
                                <p>40%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <main id="contact" className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 col-sm-12 col-12 messageCol" data-aos="zoom-in" data-aos-offset="-200" data-aos-easing="ease-in-sine">
                            <h2>Оставить сообщение</h2>
                            <form action="">
                                <div className="row">
                                    <div className="col-lg-6 infoBlock">
                                        <input type="text" className="shortInfo" placeholder="Имя*" required />
                                        <input type="email" className="shortInfo" placeholder="Почта*" required />
                                        <input type="text" className="shortInfo" placeholder="Заголовок*" required />
                                    </div>
                                    <div className="col-lg-6 messageBlock">
                                        <textarea className="message" placeholder="Сообщение*" required></textarea>
                                    </div>
                                </div>
                                <button className="sendBtn">Отправить</button>
                            </form>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 col-12 infoCol" data-aos="zoom-in" data-aos-offset="-200"
                            data-aos-easing="ease-in-sine">
                            <div className="locationBlock">
                                <i className="fas fa-home-lg-alt"></i>
                                <div className="descTitle">
                                    <h4>Местоположение</h4>
                                    <p>г.Ташкент, Юнусабад</p>
                                </div>
                            </div>
                            <div className="emailBlock">
                                <i className="fas fa-envelope"></i>
                                <div className="descTitle">
                                    <h4>Почта</h4>
                                    <p>corporationsystems7@gmail.com</p>
                                </div>
                            </div>
                            <div className="phoneBlock">
                                <i className="fad fa-phone-alt"></i>
                                <div className="descTitle">
                                    <h4>Телефон</h4>
                                    <p>+998 97 432-45-44</p>
                                </div>
                                <wrapper>
                                    <div className="dws">
                                        <div className="pulse">
                                            <a href="tel: +998974324544" className="text">Позвонить</a>
                                            <div className="phone"><i className="fa fa-phone" aria-hidden="true"></i></div>
                                        </div>
                                    </div>
                                </wrapper>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main;