import React, { useState, useEffect } from 'react';
import Card from "./Cards/Card.jsx"
import styles from "./Styles/Cards.css"
import axios from "axios"
export default function Cards() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/produtos');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const deletePost = async (id) => {
        await axios.delete(`http://localhost:8081/produtos/${id}`)
    }
    return (
        <>
            {data.length ? (<>
            <div className="divCards2" >
            {data.map((e) => {
                    return <Card imagem={e.imagem} nome={e.nome} preco={e.preco} onClick={() => deletePost(e._id)} />
                })}
            </div></>) : <>
                <h3>AINDA NAO EXISTEM PRODUTOS CADASTRADOS </h3>
            </>}
        </>
    )
}