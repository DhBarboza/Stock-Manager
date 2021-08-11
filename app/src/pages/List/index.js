import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from '../../components/Menu';


export const List = () => {
    // Gerenciamento de estado:
    const [data, setData] = useState([]);

    const productList = async => {
        // Criar um array:
        var values = [
            {
                "id": 3,
                "name": "Tablet",
                "value": 1800.00,
                "amount": 1
            },
            {
                "id": 2,
                "name": "Notebook",
                "value": 3200.00,
                "amount": 1
            },
            {
                "id": 1,
                "name": "Smartphone",
                "value": 1300.00,
                "amount": 3
            }
        ]
        setData(values);
    }

    // QUando carregar a página el deve executar essa instrução:
    useEffect(() => {
        productList();
    },[])

    return(
        <>
            <Menu />
            <h1>Listar</h1>

            <Link to="/register"><button type="button"></button></Link>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Nome</td>
                        <td>Valor</td>
                        <td>Quantidade</td>
                        <td>Ações</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map(product => (
                        <tr key={product.id}>
							<td>{product.id}</td>
							<td>{product.name}</td>
							<td>{product.value}</td>
							<td>{product.amount}</td>
							<td>
                                <Link to={"/toview/" + product.id}><button type="button">Visualizar</button></Link>
                                <Link to={"/edit/" + product.id}><button type="button">Editar</button></Link>
                                Apagar
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    );
}