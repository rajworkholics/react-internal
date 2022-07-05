import { NavLink } from "react-router-dom"

import classes from './Links.module.css'

const Links = () => {
    return (
        <header className={classes.header}>
        <nav>
            <ul>
                <li><NavLink activeClassName={classes.active} to="/home"> HOME</NavLink></li>
                <li><NavLink activeClassName={classes.actice} to="/shop"> SHOP</NavLink></li>
                <li><NavLink activeClassName={classes.actice} to="/favourite"> FAVOURITE</NavLink></li>
                <li><NavLink activeClassName={classes.actice} to="/about"> ABOUT</NavLink></li>
                <li><NavLink activeClassName={classes.actice} to="/contact"> CONTACT</NavLink></li>
            </ul>
        </nav>
        </header>
    )
}

export default Links;