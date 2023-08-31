import Card from "./Cards/Card"
import styles from "./Cards.css"
export default function Cards({titulo}){
    return(
        <div className="divCards">
            <div>
            <h2>{titulo}</h2>
            </div>
            
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}