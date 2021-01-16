import React from 'react';
import s from './Ceramics.module.css';
import { NavLink } from 'react-router-dom';
import Filter from './Filter/Filter';




const Ceramics = ({ ceramics, addProperty, porertys, filterArr, setFilterProperty }) => {
     console.log(filterArr);
     console.log(porertys);

    let collection = filterArr.map(c => {
        return <NavLink key={c.id} to="ceramics" className={s.link}>
            <div className={s.itemBox}>
                <div className={s.imgBox}>
                    <img src={process.env.PUBLIC_URL + '/images/Ceramics/' + c.firm + '/' + c.collection + '.jpg'} alt="" />
                </div>
                <div className={s.descriptBox}>
                    <div className={s.descrBigBox}>
                        <div className={s.descrItem}><p>Фирма: {c.id}</p><span className={s.values}>{c.firm}</span></div>
                        <div className={s.descrItem}><p>Коллекция: </p><span className={s.values}>{c.collection}</span></div>
                        <div className={s.descrItem}><p>Страна: </p><span className={s.values}>{c.country}</span></div>
                        <div className={s.buttonAndPriceBox}>
                            <div className={s.descrItem}><p>Цена: </p><span className={s.values}>{c.price.num}/{c.price.uom}</span></div>
                            <button className={s.button}>show</button>
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    })


    return <div className={s.ceramicsBox}>
        <Filter ceramics={ceramics} addProperty={addProperty} porertys={porertys} setFilterProperty={setFilterProperty} />
        <div className={s.itemsBox}>{collection}</div>
    </div>
}



export default Ceramics;