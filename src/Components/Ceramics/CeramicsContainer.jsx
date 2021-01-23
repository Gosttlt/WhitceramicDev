import { connect } from "react-redux";
import { addProperty, setFilterProperty } from "../../Redux/ceramics-reducer";
import Ceramics from "./Ceramics";

let mapStateToProps = (state) => ({
    ceramics: state.ceramicsReducer.ceramics,
    filterArr: state.ceramicsReducer.filterArr,
    porertys: state.ceramicsReducer.porertys,
})



export default connect(mapStateToProps, {addProperty, setFilterProperty})(Ceramics);
