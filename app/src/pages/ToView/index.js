import React, { useEffect, useState } from "react";
import { Menu } from '../../components/Menu';


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
    },[id])

    return(
        <>
            <Menu />
            <h1>Visualizar</h1>
        </>
    );
}