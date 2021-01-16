import React from 'react';
import s from '../header.module.css';
import phone from '../../../images/Header/phone.jpg';
import cart from '../../../images/Header/cart.jpg';
import logo from '../../../images/Header/logo.jpg';
import { NavLink } from 'react-router-dom';

const HeaderTopBox = () => {
    return <div className={s.topBox}>
        <div><NavLink to='/' ><img src={logo} className={s.logo} alt=""/></NavLink></div>
        <div>Адрес: Tополиная 1а</div>
        <div className={s.phoneBox}><img src={phone} alt="" className={s.img} /><p>783-753</p></div>
        <div className={s.phoneBox}><img src={cart} alt="" className={s.img} /><p>Корзина</p></div>
    </div>
}

export default HeaderTopBox;