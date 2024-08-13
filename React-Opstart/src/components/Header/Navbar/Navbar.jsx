import style from "./Navbar.module.scss";

export function Navbar(){
    return(
        <>
        <nav className={style.navbarStyle}>
            <ul className={style.liStyle}>
                <li>Item One</li>
                <li>Item Two</li>
                <li>Item Three</li>
            </ul>
        </nav>
        </>
    )
}