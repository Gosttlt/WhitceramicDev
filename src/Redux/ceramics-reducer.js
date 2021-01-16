const ADD_PROPERTY = 'ADD_PROPERTY';
const SET_FILTER_PROPERTY = 'SET_FILTER_PROPERTY';





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
        case SET_FILTER_PROPERTY:
            let arrObj = []
            state.ceramics.forEach(o => {
                o[action.name].forEach(n => {
                    state.porertys[action.name].forEach(p => {
                        if(p === n){
                        console.log(o);
                        arrObj.push(o);}
                    })

                });
             }) 
             console.log(arrObj);
            return {
                ...state,
                 filterArr: [...arrObj]
            }
        default:
            return state;
    }
}


export const addProperty = (checked, property, name) => ({ type: ADD_PROPERTY, checked, property, name })
export const setFilterProperty = (property, name) => ({ type: SET_FILTER_PROPERTY, property, name })



export default ceramicsReducer;