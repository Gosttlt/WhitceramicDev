import React from 'react';
import s from './Footer.module.css';
import logo from '../../images/Header/logo.jpg';


const Footer = () => {
    return <footer className={s.footer}>
        <div className={s.footerBox}>
        <img src={logo} alt="" className={s.footerLogo}/>
        <div className={s.copyright}>© ByGost - Создание сайтов</div>
        </div>
    </footer>
}

export default Footer;