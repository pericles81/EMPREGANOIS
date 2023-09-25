import Card from "./Cards/Card"
import styles from "./Styles/Cards.css"

export default function Cards({ className }) {

    return (
        <div>
            <div className='divCardTittle'>
                <h2>Produtos cadastrados</h2>
            </div>
            <div className="divCards2" >
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}