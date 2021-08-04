import React, { useEffect, useState } from "react";

export const List = () => {
    // Gerenciamento de estado:
    const [data, setData] = useState([]);

    const productList = async => {
        // Criar um array:
        var values = [
            {
                "id": 1,
                "name": "Notebook",
                "value": 3200.00,
                "amount": 1
            },
            {
                "id": 2,
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
							<td>Visualizar Editar Apagar</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    );
}