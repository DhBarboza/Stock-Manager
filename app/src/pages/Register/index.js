import React, { useState } from "react";
import { Menu } from '../../components/Menu';


export const Register = () => {
    // Receber os dados:
    const [product, setProduct] = useState({
        name: '',
        value: '',
        amount: ''
    });

    // Recebe os valores de entrada:
    const valueInput = e => setProduct({...product, [e.target.name]: e.target.value});

    const addProduct = async e => {
        //Não regarregar a página:
        e.preventDefault();
        console.log("Nome: " + product.name);
        console.log("Valor: " + product.name);
        console.log("Quantidade: " + product.name);
    }

    return(
        <>
            <Menu />
            <h1>Cadastrar</h1>

            <form onSubmit={addProduct}>
                <label>Nome: </label>
                <input type="text" name="name" placeholder="Produto" onChange={valueInput}/>
                <br/>

                <label>Valor: </label>
                <input type="text" name="value" placeholder="Preço" onChange={valueInput}/>
                <br/>

                <label>Quantidade: </label>
                <input type="number" name="amount" placeholder="Estoque" onChange={valueInput}/>
                <br/>

                <button type="submit">Cadastrar</button>
            </form>

        </>
    );
}