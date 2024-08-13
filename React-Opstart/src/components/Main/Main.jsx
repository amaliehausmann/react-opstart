import style from "./Main.module.scss";
import { Greeting } from "../Greeting.jsx/Greeting";
import { Itemlist } from "../ItemList/Itemlist";

const livretter = ['Boller i Karry', 'Pasta Carbonara', 'Tærte', 'Nachos', 'Kartoffelmos']
const favMovies = ['The Impossible', 'Nattevagten 2', 'Mazerunner', 'Hunger Games', 'Saw']

export function Main() {
    return (
        <>
            <main className={style.mainStyle}>
                <h3 className={style.textStyle}>Jeg er en main</h3>
                <Greeting title='Søren'/>
                <Greeting title='Lars'/>
                <Greeting title='Birgitte'/>
                <Itemlist title='Mine Livretter' listItem={livretter}/>
                <Itemlist title='Mine Yndlings Film' listItem={favMovies}/>

            </main>
        </>
    )
}