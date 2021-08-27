import React from 'react';
import { Menu } from '../../components/Menu';
import { Container, Title, TitleContent } from '../../styles/custom_adm';

export const Home = () => {
    return(
        <Container>
            <Menu />
            <TitleContent>
                <Title>Bem Vindo!</Title>
            </TitleContent>
        </Container>
    );
}