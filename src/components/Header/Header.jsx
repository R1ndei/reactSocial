import head from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={head.header}>
            <img alt="@" src="https://picsum.photos/200/300"/>
            <div className={head.LoginBlock}>
                {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink> }
            </div>
        </header>
    )

}

export default Header;