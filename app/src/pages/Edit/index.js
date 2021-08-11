import React, { useEffect, useState } from "react";
import { Menu } from '../../components/Menu';


export const Edit = (props) => {
    // Obter os dados do produto:
    const [id] = useState(props.match.params.id);

    // Gerenciamento de estado:
    const [name, setName] = useState("");
    const [value, setValue] = useState(0);
    const [amount, setAmount] = useState(0);

    // Executada quando o usuário subter o fomulário:
    const editProduct = async e => {
        e.preventDefault();
        console.log("Nome: " + name);
        console.log("Valor: " + value);
        console.log("Quantidade: " + amount);
    }

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

            <form onSubmit={editProduct}>
                <label>Nome: </label>
                <input type="text" name="name" placeholder="Produto" value={name} onChange={e => setName(e.target.value)}/>
                <br/>

                <label>Valor: </label>
                <input type="text" name="value" placeholder="Preço" value={value} onChange={e => setValue(e.target.valueAsNumber)}/>
                <br/>

                <label>Quantidade: </label>
                <input type="number" name="amount" placeholder="Estoque" value={amount} onChange={e => setAmount(e.target.valueAsNumber)}/>
                <br/>

                <button type="submit">Salvar</button>
            </form>
        </>
    );
}