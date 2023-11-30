import React from "react"
import styles from './Styles/Header.css'
import { Link } from "react-router-dom"
const pages = [{to : '/', text : 'Produtos Cadastrados'},{to: '/formulario', text: 'Formulario'}]
function Header(){    
    return (    
        <header>
            <div  className='divHeader'>
                <h1>MERCADO NOVO</h1>
            </div>
            <div className="divHeader1">
                   {pages.map((e)=> {return <Link to={e.to}>{e.text}</Link>}) }
            </div>
        </header>    
    )}
    export default Header
