import React, {useState} from 'react';
import s from '../header.module.css';

const HeaderSearch = ({changeSearch, searchValue }) => {
    let newSearch = React.createRef();
    let onChangeSearch = () => {
        let value = newSearch.current.value;
        changeSearch(value);
    }
    let [classAction, searchSwitcher] = useState(false);
    let setSearchSwitcher = (bool) => {
        searchSwitcher(bool)
    }


    return <div className={s.searchBox}>
        <input type="text" placeholder="Поиск" ref={newSearch} 
        className={  classAction ? s.search + ' ' + s.searchAction : s.search }
            onClick={() => { setSearchSwitcher(true) }} onBlur={() => { setSearchSwitcher(false) }}
            value={searchValue} onChange={onChangeSearch} />
        <input type="button" className={s.buttonSearch} value="Поиск" />
        
            <div className={!classAction ? s.category : s.category + ' ' + s.searchActionCategory}>
                <p>Название фабрики:</p>
                <div className={s.categoryItem}>а</div>
                <div className={s.categoryItem}>б</div>
                <div className={s.categoryItem}>в</div>
                <div className={s.categoryItem}>г</div>
                <div className={s.categoryItem}>д</div>
                <div className={s.categoryItem}>е</div>
            </div>
    </div>
}

export default HeaderSearch;