import React from 'react';
import s from "../Filter.module.css";

const FilterParams = ({ ceramics, addProperty, setFilterProperty, porertys, arrPropsCreater }) => {
    
    let checkedCheck = (e, p, h) => {
        addProperty(e.target.checked, p, h);
        setFilterProperty();
    }
    console.log(porertys);
    let nameRendArr = arrPropsCreater.map((r, i) => {
        return (<div key={i}><div className={s.parBox}>{r[0]}:</div>
            {r[2].propArr.map((u, y) => <div key={y} className={s.prop} ><label className={s.label}>
                <input type="checkbox" checked={porertys[r[1]].some(el => el === u)} onClick={(e) => checkedCheck(e, u, r[1])} />{u}</label></div>)}
        </div>
        )
    }
    )

    return (
        <div>
            {nameRendArr}
        </div>
    )
}

export default FilterParams;