import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import s from '../header.module.css';

const HeaderSearch = ({changeSearch, searchValue, history, setSearchProperty }) => {

    let searchFirstUp='';
    if(searchValue) {
        searchFirstUp = searchValue[0].toUpperCase() + searchValue.slice(1);
    }
    

    let onChangeSearch = (e) => {
        changeSearch(e.target.value);
    }

    let [classAction, searchSwitcher] = useState(false);
    let setSearchSwitcher = (bool) => {
        searchSwitcher(bool);
    }
    let redirectSearshhPage = (e) => {
        if(e.key === 'Enter') {
            history.push('/search');   
            setSearchSwitcher(false); 
            setSearchProperty(searchFirstUp, searchValue)    
        };
    }
    let redirectSearshPage = () => {
        setSearchProperty(searchFirstUp, searchValue); 
        setSearchSwitcher(true);
    }


    return ( 
    <div className={s.searchBox}>
        <input type="text" placeholder="Поиск" 
        className={  classAction ? s.search + ' ' + s.searchAction : s.search }
            onClick={() => { setSearchSwitcher(true) }} 
            value={searchValue} onChange={(e) => {onChangeSearch(e)}} onKeyPress={(e) => {redirectSearshhPage(e)}}/>
       <NavLink onClick={redirectSearshPage} onBlur={() => { setSearchSwitcher(false)}} to="/search" className={s.buttonSearch}> Поиск </NavLink>
        
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
  )
}

export default HeaderSearch;  