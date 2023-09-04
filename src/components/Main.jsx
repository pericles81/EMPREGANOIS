import Form from './Form'
import Cards from './Cards'
import style from "./Cards.css"
import styles from './Main.css'
function Main(){    
    return (        
        <main>
            <section>
                <div>
                    <Form />
                </div>
            </section>
            <section className='secH2'>
                <Cards titulo={'Sala'} className={'divCards2'} />
                <Cards titulo={'Cozinha'} className={'divCards'} />
                <Cards titulo={'Banheiro'} className={'divCards3'} />
                <Cards titulo={'Quarto'} className={'divCards4'} />

            </section>
        </main>   
    )}
    export default Main