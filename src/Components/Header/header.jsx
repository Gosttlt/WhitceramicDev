import React from 'react';
import HeaderTopBox from './HeaderTopBox/HeaderTopBox';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderSearch from './HeaderSearch/HeaderSearch';

const Header = (props) => {
    return <header>
        <HeaderTopBox />    
        <HeaderMenu/>
        <HeaderSearch {...props}/>
    </header>

}

export default Header;