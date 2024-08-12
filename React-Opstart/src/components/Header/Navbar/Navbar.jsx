import style from "./Navbar.module.scss";

export function Navbar(){
    return(
        <>
        <nav className={style.navbarStyle}>
            <ul className={style.liStyle}>
                <li>Rizz</li>
                <li>Skibidi Ohio</li>
                <li>Sigma</li>
            </ul>
        </nav>
        </>
    )
}