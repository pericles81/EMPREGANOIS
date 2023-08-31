import styles from './Input.css'


export default function Input({name,nameLabel,type,htmlFor,id}){
    return(
        <div className="divInput">
            <label htmlFor={htmlFor}>{nameLabel}</label>
            <input type={type} name={name} id={id} />
        </div>
    )
}