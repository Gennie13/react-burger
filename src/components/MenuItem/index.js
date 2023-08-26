import React from "react";

import {NavLink} from "react-router-dom";
import css from "./style.module.css";

const MenuItem = (props) => (
    <li className={css.MenuItem}>
        <NavLink exact={props.exact} activeClassName={css.active} to={props.link}>
    {/* <a className={props.active ? css.active : null} href={props.link}></a> */}
            {props.children}
        </NavLink>
    </li>
);


export default MenuItem;