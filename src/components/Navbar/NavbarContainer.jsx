import s from './Navbar.module.css';
import {connect} from "react-redux";
import Navbar from "./Navbar";


let mapStateToProps = (state) => {

    return {
        navBar: state.navBar
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;