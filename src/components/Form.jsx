import { useState } from "react"
import Input from "./Forms/Input"
import styes from './Form.css'

export default function Form(){
const [list, SetList] = useState([])
    const [form, setForm] = useState({
        nome : "",
        preco :"",
        imagem : "",
        tipo : ""
    })
    
    const [emptyValue, setEmptyValue] = useState(false)

    const handleChange = (e) =>{
        let newProp = form
        newProp[e.target.name] = e.target.value
        setForm({ ...newProp})
        
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        let emptyValues = Object.values(form).some(obj => obj == "")
        setEmptyValue(emptyValues)
        SetList((e)=>[...e, form])
        console.log(list)
    }

    return(
        <div className="divForm">
        <h2>Preencha os dados para criar o card dos Produtos.</h2>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <Input 
            nameLabel={'Nome do Produto *: '} 
            type={'text'}
            name={'nome'}
            htmlFor={'nome'}
            id={'campoNome'}
            
            onBlur={(e)=>handleChange(e)}
             />
            {emptyValue && form["nome"] == "" ? <span className='cu'>O CAMPO PRECISA SER PREENCHIDO</span> : ""}
            <Input 
            nameLabel={'Preço *: '} 
            type={'number'}
            name={'preco'}
            htmlFor={'preco'}
            id={'campoNome'}
            
            onBlur={(e)=>handleChange(e)}
             />
            {emptyValue && form['preco'] == "" ? <span className='cu' >O CAMPO PRECISA SER PREENCHIDO</span> : ''}
            <Input 
            nameLabel={'Imagem *: '} 
            type={'text'}
            name={'imagem'}
            htmlFor={'imagem'}
            id={'campoNome'}
            
            onBlur={(e)=>handleChange(e)}
             />
            {emptyValue && form['imagem'] == "" ? <span className='cu'>O CAMPO PRECISA SER PREENCHIDO</span> : ''}
            <div>
                <select  onChange={(e)=>handleChange(e)} name="tipo">
                    <option >-</option>
                    <option >Sala</option>
                    <option >Cozinha</option>
                    <option >Banheiro</option>
                    <option >Quarto</option>
                </select>

                {emptyValue && form['tipo'] == "" ? <span className='cu'>O CAMPO PRECISA SER PREENCHIDO</span> : ''}
            </div>
            
            <button type="submit" >Criar card</button>
        </form>
        
        </div>
    )
}
