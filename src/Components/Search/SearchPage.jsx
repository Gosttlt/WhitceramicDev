import React from 'react';
import Ceramics from '../Ceramics/Ceramics';

const SearchPage = ({ ceramics, addProperty, setFilterProperty, porertys, filterArr }) => {

    return <div>
        Найдено
<Ceramics ceramics={ceramics} filterPropCreater={filterArr} addProperty={addProperty} filterArr={filterArr} setFilterProperty={setFilterProperty} porertys={porertys} />
    </div>
}

export default SearchPage;