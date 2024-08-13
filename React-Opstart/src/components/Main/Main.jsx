import style from "./Main.module.scss";
import { Greeting } from "../Greeting.jsx/Greeting";
import { Itemlist } from "../ItemList/Itemlist";
import { Button } from "../Button/Button";

const livretter = ['Boller i Karry', 'Pasta Carbonara', 'Tærte', 'Nachos', 'Kartoffelmos']
const favMovies = ['The Impossible', 'Nattevagten 2', 'Mazerunner', 'Hunger Games', 'Saw']

export function Main() {
    function alertUser(alertText){
        alert(alertText)
    }
    return (
        <>
            <main className={style.mainStyle}>
                <h3 className={style.textStyle}>Jeg er en main</h3>
                <Greeting title='Søren'/>
                <Greeting title='Lars'/>
                <Greeting title='Birgitte'/>
                <Itemlist title='Mine Livretter' listItem={livretter}/>
                <Itemlist title='Mine Yndlings Film' listItem={favMovies}/>
                <Button size='medium' theme='Light' buttonText="Hello" action={ () => alertUser('Hej') } />
                <Button size='small' theme='dark' buttonText="How goes?" action={ () => alertUser('Hvordan går det?') } />
                <Button size='large' theme='light' buttonText="Goodbye" action={ () => alertUser('Farvel') } />
            </main>
        </>
    )
}