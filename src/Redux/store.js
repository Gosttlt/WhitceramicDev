import {combineReducers, createStore} from 'redux';
import headerReducer from './header-reducer';
import ceramicsReducer from './ceramics-reducer';

let reducers = combineReducers({
    headerReducer,
    ceramicsReducer,
})


let store = createStore(reducers);
window.store = store;

export default store;