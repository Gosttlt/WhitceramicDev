
import { connect } from 'react-redux';
import { addProperty, setFilterProperty} from '../../Redux/ceramics-reducer';
import SearchPage from './SearchPage';

let mstp = (state) => ({
    ceramics: state.ceramicsReducer.ceramics,
    porertys: state.ceramicsReducer.porertys,
    searchArr: state.ceramicsReducer.searchArr,

})


export default connect(mstp, {addProperty, setFilterProperty})(SearchPage);