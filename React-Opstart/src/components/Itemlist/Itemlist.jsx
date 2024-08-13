import style from './Itemlist.module.scss'

export function Itemlist(props) {
    return (
        <>
            <h3 className={style.titleStyle}>{props.title}</h3>
            <ul className={style.listStyle}>
                {props.listItem.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </>
    )
}