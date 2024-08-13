import style from "./Button.module.scss"

export function Button(props){
    return(
        <button className={`${style[props.size]} ${style[props.theme]}`} onClick={ () => props.action()}>{props.buttonText}</button>
    )
}