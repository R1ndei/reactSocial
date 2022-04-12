import classes from "./Nav.module.css"
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" className = { navData => navData.isActive ? classes.active : classes.item }>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialog" className={navData => navData.isActive ? classes.active : classes.item}>Message</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/users" className={navData => navData.isActive ? classes.active : classes.item}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <a href="2">News</a>
            </div>
            <div className={classes.item}>
                <a href="3">Music</a>
            </div>
            <div className={classes.item}>
                <a href="4">Setting</a>
            </div>
        </nav>
    )

}

export default Nav;