import style from "./Footer.module.scss";

export function Footer() {
    return (
        <>
            <footer className={style.footerStyle}>
                <h5 className={style.textStyle}>Jeg er en footer</h5>
            </footer>
        </>
    )
}