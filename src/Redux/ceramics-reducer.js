const ADD_PROPERTY = 'ADD_PROPERTY';
const SET_FILTER_PROPERTY = 'SET_FILTER_PROPERTY';
const SET_SEARCH_FILTER_PROPERTY = 'SET_SEARCH_FILTER_PROPERTY';





let initialState = {
    ceramics: [
        { id: 1, price: { num: 2790, uom: 'м.' }, country: ['Espan'], firm: ['Equipe'], collection: 'Octagon', color: ['Черный', 'Коричневый'], useFor: ['Ванна', 'Пол'] },
        { id: 2, price: { num: 2790, uom: 'шт.' }, country: ['Espan'], firm: ['Equipe'], collection: 'Shmaktagon', color: ['Черный', 'Коричневый'], useFor: ['Ванна', 'Пол'] },
        { id: 3, price: { num: 2790, uom: 'м.' }, country: ['Испания'], firm: ['Porcelanosa'], collection: 'Oxfort', color: ['Серый', 'Коричневый'], useFor: ['Ванна', 'Пол'] },
        { id: 4, price: { num: 2790, uom: 'шт.' }, country: ['Испания'], firm: ['Porcelanosa'], collection: 'Shmoxfort', color: ['Серый', 'Коричневый'], useFor: ['Ванна', 'Пол'] },
        { id: 5, price: { num: 2790, uom: 'м.' }, country: ['Espan'], firm: ['Equipe'], collection: 'Octagon', color: ['Черный', 'Коричневый'], useFor: ['Ванна', 'Пол'] },
        { id: 6, price: { num: 2790, uom: 'шт.' }, country: ['Espan'], firm: ['Equipe'], collection: 'Shmaktagon', color: ['Черный', 'Коричневый'], useFor: ['Ванна', 'Пол'] },
        { id: 7, price: { num: 2790, uom: 'м.' }, country: ['Испания'], firm: ['Porcelanosa'], collection: 'Oxfort', color: ['Серый', 'Коричневый'], useFor: ['Ванна', 'Пол', 'Кухня'] },
        { id: 8, price: { num: 2790, uom: 'шт.' }, country: ['Испания',], firm: ['Porcelanosa'], collection: 'Shmoxfort', color: ['Серый', 'Коричневый'], useFor: ['Ванна', 'Пол', 'Керамогранит'] },
    ],
    porertys: {
        country: [], firm: [], color: [], useFor: [],
    },
    filterArr: [
        { id: 1, price: { num: 2790, uom: 'м.' }, country: ['Espan'], firm: ['Equipe'], collection: 'Octagon', color: ['Черный', 'Коричневый'], useFor: ['Ванна', 'Пол', 'Кухня'] },
        { id: 2, price: { num: 2790, uom: 'шт.' }, country: ['Espan'], firm: ['Equipe'], collection: 'Shmaktagon', color: ['Черный', 'Коричневый'], useFor: ['Ванна', 'Пол', 'Кухня'] },
        { id: 3, price: { num: 2790, uom: 'м.' }, country: ['Испания'], firm: ['Porcelanosa'], collection: 'Oxfort', color: ['Серый', 'Коричневый'], useFor: ['Ванна', 'Пол', 'Кухня'] },
        { id: 4, price: { num: 2790, uom: 'шт.' }, country: ['Испания'], firm: ['Porcelanosa'], collection: 'Shmoxfort', color: ['Серый', 'Коричневый'], useFor: ['Ванна', 'Пол', 'Кухня'] },
        { id: 5, price: { num: 2790, uom: 'м.' }, country: ['Espan'], firm: ['Equipe'], collection: 'Octagon', color: ['Черный', 'Коричневый'], useFor: ['Ванна', 'Пол', 'Кухня'] },
        { id: 6, price: { num: 2790, uom: 'шт.' }, country: ['Espan'], firm: ['Equipe'], collection: 'Shmaktagon', color: ['Черный', 'Коричневый'], useFor: ['Ванна', 'Пол', 'Кухня'] },
        { id: 7, price: { num: 2790, uom: 'м.' }, country: ['Испания'], firm: ['Porcelanosa'], collection: 'Oxfort', color: ['Серый', 'Коричневый'], useFor: ['Ванна', 'Пол', 'Кухня'] },
        { id: 8, price: { num: 2790, uom: 'шт.' }, country: ['Испания'], firm: ['Porcelanosa'], collection: 'Shmoxfort', color: ['Серый', 'Коричневый'], useFor: ['Ванна', 'Пол', 'Керамогранит'] },
    ],
    properFilterName: ['country', 'firm', 'color', 'useFor'],

}


const ceramicsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROPERTY:
            return {
                ...state,
                porertys: {
                    ...state.porertys, [action.name]: action.checked ?
                        [...state.porertys[action.name], action.property] :
                        state.porertys[action.name].filter(el => el !== action.property)
                }
            }
        case SET_SEARCH_FILTER_PROPERTY:
            return {
                ...state,
                filterArr: state.filterArr.filter(el => el.collection.includes(action.searchFirstUp) || el.collection.includes(action.searchValue))
            }

        case SET_FILTER_PROPERTY:
            let filterArrSet = new Set();
            state.ceramics.forEach(o => filterArrSet.add(o));
            let arrPropNameCreater = (propsName, arrActtiveProps, arr) => {
                let arrNeww = new Set();
                arrActtiveProps[propsName].forEach(el => {
                    arr.forEach(o => {
                        o[propsName].forEach(op => {
                            if (op === el) { arrNeww.add(o) }
                        })
                    })
                })
                return [...arrNeww];
            }
            let arrPropNameArr = [];
            state.properFilterName.forEach(el => arrPropNameArr.push(arrPropNameCreater(el, state.porertys, filterArrSet)));
            filterArrSet.forEach(o => {
                arrPropNameArr.forEach(apnao => {
                    if (apnao.length) {
                        if (!apnao.some(el => el === o)) {
                            filterArrSet.delete(o);
                        }
                    }
                })
            })
            return {
                ...state,
                filterArr: [...filterArrSet]
            }

        default:
            return state;
    }
}


export const addProperty = (checked, property, name) => ({ type: ADD_PROPERTY, checked, property, name })
export const setFilterProperty = () => ({type: SET_FILTER_PROPERTY})
export const setSearchProperty = (searchFirstUp, searchValue) => ({ type: SET_SEARCH_FILTER_PROPERTY, searchFirstUp, searchValue })




export default ceramicsReducer;