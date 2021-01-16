import { connect } from "react-redux";
import { changeSearch } from "../../Redux/header-reducer";
import Header from "./header";


let mapStateToProps = (state) => ({
    searchValue: state.headerReducer.searchValue,
})

export default connect(mapStateToProps, {changeSearch})(Header);