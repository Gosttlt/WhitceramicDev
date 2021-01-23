import React from 'react';
import s from "./Filter.module.css";
import FilterParams from './FilterParams/FilterParams';

const Filter = ({ ceramics, addProperty, setFilterProperty, porertys }) => {

    let arrProppy = [
        { name: 'country', vol: 'Страна' },
        { name: 'firm', vol: 'Производитель' },
        { name: 'color', vol: 'Цвет' },
        { name: 'useFor', vol: 'Применяется' },
    ]
    let setCreater = (name, vol) => {
        let set = new Set();
        ceramics.forEach(c => {
            c[name].forEach(r => {
                set.add(r);
            })
        })
        return [vol, name , {propArr: [...set]}]
    }
    let arrPropsCreater = arrProppy.map(r => {
        return setCreater(r.name, r.vol);
    })

    return (
        <div className={s.filter}>
           <FilterParams ceramics={ceramics}  porertys={porertys} arrPropsCreater={arrPropsCreater}  setFilterProperty={setFilterProperty} addProperty={addProperty}/>
        </div>
    )
}


export default Filter;