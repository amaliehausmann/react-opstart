import style from "./Header.module.scss";

import { Navbar } from "./Navbar/Navbar"
export function Header(props) {
    return (
        <>
            <header className={style.headerStyle}>
                <h1 className={style.headingStyle}>{props.headerText}</h1>
                <Navbar/>
            </header>
        </>
    )
}

Header.defaultProps = {
    headerText: 'Mangler headerText',
};