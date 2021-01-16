const CHANGE_SEARCH = 'CHANGE_SEARCH';


let initialState = {
    searchValue: '',
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SEARCH: 
            return {...state, searchValue: action.value }
        default:
            return state;
    }
}

export const changeSearch = (value) => ({type: CHANGE_SEARCH, value});

export default headerReducer;