import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "../Dialogs/Dialogitem/Dialogitem";
import state from "../../redux/store";
import {connect} from "react-redux";

const Navbar = (props) => {

    let state = props.navBar;

    let sideBarFriends = state.sideNames.map(s => <DialogItem name={s.name} id={s.id}/>)


    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={navData => navData.isActive ? s.active : s.item}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
            </div>


            <div className={s.friendsBlock}>Friends</div>

          <span>
            <div className={s.friends}> {sideBarFriends}</div>
          </span>

        </nav>

    );
};


export default Navbar;