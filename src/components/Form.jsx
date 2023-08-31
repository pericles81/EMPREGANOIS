import Input from "./Forms/Input"
import styes from './Form.css'
export default function Form(){
    return(
        <div className="divForm">
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <form>
            <Input 
            nameLabel={'Nome *: '} 
            type={'text'}
            name={'nome'}
            htmlFor={'nome'}
            id={'campoNome'}
             />
            
            <Input 
            nameLabel={'Cargo *: '} 
            type={'text'}
            name={'nome'}
            htmlFor={'nome'}
            id={'campoNome'}
             />
            
            <Input 
            nameLabel={'Imagem *: '} 
            type={'text'}
            name={'nome'}
            htmlFor={'nome'}
            id={'campoNome'}
             />
            <Input 
            nameLabel={'Time *: '} 
            type={'text'}
            name={'nome'}
            htmlFor={'nome'}
            id={'campoNome'}
             />
            
            <button>Criar card</button>
        </form>
        </div>
    )
}