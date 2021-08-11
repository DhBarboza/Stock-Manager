import React, { useEffect, useState } from "react";
import { Menu } from '../../components/Menu';


export const Edit = (props) => {
    // Obter os dados do produto:
    const [id] = useState(props.match.params.id);

    // Gerenciamento de estado:
    const [name, setName] = useState("");
    const [value, setValue] = useState(0);
    const [amount, setAmount] = useState(0);

    // Função para executar instruções ao iniciar a página:
    useEffect(() => {
        // Obter as informações do produto:
        const getProduct = async () => {
            setName("Smartphone");
            setValue(1300.00);
            setAmount(3);
        }

        getProduct();
    }, [id]);

    return(
        <>
            <Menu />
            <h1>Edit</h1>

            <form >
                <label>Nome: </label>
                <input type="text" name="name" placeholder="Produto" value={name}/>
                <br/>

                <label>Valor: </label>
                <input type="text" name="value" placeholder="Preço" value={value}/>
                <br/>

                <label>Quantidade: </label>
                <input type="number" name="amount" placeholder="Estoque" value={amount}/>
                <br/>

                <button type="submit">Cadastrar</button>
            </form>
        </>
    );
}