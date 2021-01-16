import { connect } from "react-redux";
import { addProperty, setFilterProperty } from "../../Redux/ceramics-reducer";
import Ceramics from "./Ceramics";

let mapStateToProps = (state) => ({
    ceramics: state.ceramicsReducer.ceramics,
    porertys: state.ceramicsReducer.porertys,
    filterArr: state.ceramicsReducer.filterArr,
})



export default connect(mapStateToProps, {addProperty, setFilterProperty})(Ceramics);
