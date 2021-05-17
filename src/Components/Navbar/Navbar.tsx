import React from "react"
import NavBarStyles from "./Navbar.module.scss"

function NavBar() {
    return (
        <nav>
            <div className={NavBarStyles.nav_wrapper}>
                <a href="#" className={NavBarStyles.brand_logo}>React + TypeScript</a>
                <ul className={NavBarStyles.right}>
                    <li><a href="/">Sass</a></li>
                    <li><a href="/">Components</a></li>
                    <li><a href="/">Something else</a></li>
                    <li><a href="/">Something else</a></li>
                    <li><a href="/">Something else</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;