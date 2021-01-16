import React from 'react';
import logo from '../../images/Header/logo.jpg';
import s from './Home.module.css';

const Home = (props) => {
    return <div className={s.homeBox}>
        <p className={s.h3}>Компания <b>Whiteceramic</b> - Это про любовь к уютному, современому дизайну.</p>
        <div className={s.home}>
            <div className={s.logoBox}>
               <p className={s.textLogo}>Магазин керамической плитки</p>
                <img src={logo} className={s.logo} alt="" />
            </div>
            <div className={s.content}>
                <p className={s.itemBox}>Мы представляем только те коллекции, в которые действительно, искренни влюблены. </p>
                <p className={s.itemBox}>Это современный минимализм, текстура натуральных материалов, дерево. </p>
                <p className={s.itemBox}>Это то, что делает Ваше помещение  уютным, теплым и в тоже время современным.</p>
            </div>
        </div>
    </div>
}

export default Home;