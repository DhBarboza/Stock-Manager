import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from '../../components/Menu';
import { Container,
            Title,
            TitleContent, 
            ActionButton, 
            SuccessButton, 
            Table, 
            ViewButton, 
            EditButton, 
            DeleteButton
        } from '../../styles/custom_adm';


export const List = () => {
    // Utilizando desestruturação
    const { state } = useLocation();

    const [status] = useState({
        type: state ? 'success' : "",
        mensage: state ? 'Produto cadastrado com sucesso' : ""
    });

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
    },[]);

    // Função executa ao usuário selecionar botão de Deletar:
    const deleteProduct = async (idProduct) => {
        //console.log(idProduct)
        alert("Apagar produto: " + idProduct)
    }

    return(
        <Container>
            <Menu />
            <TitleContent>
                <Title>Bem Vindo!</Title>
                <ActionButton>
                    <Link to="/register">
                        <SuccessButton type="button">Cadastrar</SuccessButton>
                    </Link>
                </ActionButton>
            </TitleContent>

            {status.type === 'success' ? <p>{status.mensage}</p> : ""}

            
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
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
                                <Link to={"/toview/" + product.id}>
                                    <ViewButton type="button">Visualizar</ViewButton>
                                </Link>
                                <Link to={"/edit/" + product.id}>
                                    <EditButton type="button">Editar</EditButton>
                                </Link>
                                <Link to={"#"}>
                                    <DeleteButton type="button" onClick={() => deleteProduct(product.id)}>Deletar</DeleteButton>
                                </Link>
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}