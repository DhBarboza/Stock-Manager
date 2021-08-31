import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Menu } from '../../components/Menu';
import { Container,
    Title,
    TitleContent, 
    ActionButton, 
    ListButton,
    EditButton, 
    Item
} from '../../styles/custom_adm';


export const ToView = (props) => {
    // Gerenciamento de estado
    const [id] = useState(props.match.params.id);
    const [data, setData] = useState({});

    // Ao Carregar essa página executa está função:
    useEffect(() => {
        // Obter os dados do produto:
        const getProducts = async () => {
            setData({
                id: 1,
                name: "Smartphone",
                value: 1300.00,
                amount: 3
            })
        }

        getProducts();
    },[id]);

    return(
        <Container>
            <Menu />
            <TitleContent>
                <Title>Visualizar</Title>
                <ActionButton>
                    <Link to="/list">
                        <ListButton type="button">Listar</ListButton>
                    </Link>{" "}
                    <Link to={"/edit/" + id}>
                        <EditButton type="button">Editar</EditButton>
                    </Link>
                </ActionButton>
            </TitleContent>
            <hr />

            {/* <Item>ID: {data.id} </Item><br/>
            <Item>Nome: {data.name} </Item><br/>
            <Item>Valor: {data.value} </Item><br/>
            <Item>Quantidade: {data.amount} </Item><br/> */}
            
        </Container>
    );
}