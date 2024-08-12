import style from "./Header.module.scss";

import { Navbar } from "./Navbar/Navbar"
export function Header() {
    return (
        <>
            <header className={style.headerStyle}>
                <h1 className={style.headingStyle}>Brainrot Central</h1>
                <Navbar/>
            </header>
        </>
    )
}