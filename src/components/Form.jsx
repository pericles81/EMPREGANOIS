import { useState } from "react"
import Input from "./Forms/Input"
import styes from './Styles/Form.css'
import { Dados } from "../Dados.js"
import axios from "axios"
export default function Form() {
    const [emptyValue, setEmptyValue] = useState(false)

    const [form, setForm] = useState({
        nome: "",
        preco: "",
        imagem: "",
        tipo: ""
    })

    const handleChange = (e) => {
        let newProp = form
        newProp[e.target.name] = e.target.value
        setForm({ ...newProp })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let emptyValues = Object.values(form).some(obj => obj == "")
        setEmptyValue(emptyValues)

    }

    const handlePostRequest = async () => {
        try {
          // Fazendo uma requisição POST para a API
          const response = await axios.post('http://localhost:8081', form);
    
          // Lida com a resposta da API conforme necessário
          console.log('Response from server:', response.data);
        } catch (error) {
          // Trata erros
          console.error('Error making POST request:', error);
        }
      };

    return (
        <div className="divForm">

            <h2>Preencha os dados para criar o card dos Produtos.</h2>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <Input
                    nameLabel={'Nome do Produto *: '}
                    type={'text'}
                    name={'nome'}
                    htmlFor={'nome'}
                    id={'campoNome'}
                    onBlur={(e) => handleChange(e)}
                />
                <>{emptyValue && form["nome"] == "" ? <span className='valide'>O CAMPO PRECISA SER PREENCHIDO</span> : ""}</>
                <Input
                    nameLabel={'Preço *: '}
                    type={'number'}
                    name={'preco'}
                    htmlFor={'preco'}
                    id={'campoNome'}
                    onBlur={(e) => handleChange(e)}
                />
                <>{emptyValue && form['preco'] == "" ? <span className='valide' >O CAMPO PRECISA SER PREENCHIDO</span> : ''}</>
                <Input
                    nameLabel={'Imagem *: '}
                    type={'text'}
                    name={'imagem'}
                    htmlFor={'imagem'}
                    id={'campoNome'}
                    onBlur={(e) => handleChange(e)}
                />
                {emptyValue && form['imagem'] == "" ? <span className='valide'>O CAMPO PRECISA SER PREENCHIDO</span> : ''}
                <>
                    <select onChange={(e) => handleChange(e)} name="tipo">
                        {Dados.map((e) => {
                            return (
                                <option>{e}</option>
                            )
                        })}
                    </select>
                    <div> {emptyValue && form['tipo'] == "" ? <span className='valide'>O CAMPO PRECISA SER PREENCHIDO</span> : ''}</div>
                </>
                <button type="submit" onClick={handlePostRequest} >Criar card</button>
            </form>

        </div>
    )
}
