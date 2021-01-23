import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setSearchProperty } from "../../Redux/ceramics-reducer";
import { changeSearch } from "../../Redux/header-reducer";
import Header from "./header";


let mapStateToProps = (state) => ({
    searchValue: state.headerReducer.searchValue,
})

export default connect(mapStateToProps, {changeSearch, setSearchProperty})(withRouter(Header));