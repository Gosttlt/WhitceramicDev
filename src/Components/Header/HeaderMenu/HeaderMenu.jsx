import React from 'react';
import s from '../header.module.css';
import slider from '../../../images/Header/slider.jpg';
import { NavLink, Route } from 'react-router-dom';

const HeaderMenu = () => {
    return <nav className={s.nav}>
        <ul className={s.menu}>
            <li><NavLink exact to="/" activeClassName={s.activeLink} className={s.link}>Главная</NavLink></li>
            <li><NavLink exact to="/ceramics" activeClassName={s.activeLink} className={s.link}>Вся плитка</NavLink></li>
            <li><NavLink to="/lol6" activeClassName={s.activeLink} className={s.link}>Плитка для ванной</NavLink></li>
            <li><NavLink to="/lol1" activeClassName={s.activeLink} className={s.link}>Плитка для кухни</NavLink></li>
            <li><NavLink to="/lol2" activeClassName={s.activeLink} className={s.link}>Керамогранит</NavLink></li>
            <li><NavLink to="/lol4" activeClassName={s.activeLink} className={s.link}>Доставка</NavLink></li>
        </ul>
<Route path="/" exact render={() => <img className={s.slider} src={slider} alt="" />} /> 
        
    </nav>
}

export default HeaderMenu;