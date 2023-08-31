import Form from './Form'
import Cards from './Cards'
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

                <h2>Programação</h2>
                <Cards />
                <h2>Front-End</h2>
                <Cards />
                <h2>Data Science</h2>
                <Cards />
                <h2>Devops</h2>
                <Cards />
                <h2>UX e Design</h2>
                <Cards />
                <h2>Mobile</h2>
                <Cards />
                <h2>Inovação e Gestão</h2>
                <Cards />
            </section>
        </main>   
    )}
    export default Main