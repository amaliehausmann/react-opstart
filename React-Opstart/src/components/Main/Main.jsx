import style from "./Main.module.scss";

export function Main() {
    return (
        <>
            <main className={style.mainStyle}>
                <h3 className={style.textStyle}>HAHAHAHAH</h3>
                <img src="src/assets/images/brainrot.jpg" alt="images\brainrot.jpg" className={style.imgStyle}/>
            </main>
        </>
    )
}