import style from './Greeting.module.scss'

export function Greeting(props){
    return(
        <>
        <h2 className={style.greetingStyle}>Hej {props.title}!</h2>
        </>
    )
}