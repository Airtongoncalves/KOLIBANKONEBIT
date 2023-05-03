import React from 'react';
import { Text } from 'react-native';
import { Container, MainInfoContainer } from './styled';
import Header from '../../components/Home/Header';
import MoneyBalance from '../../components/Home/MoneyBalance';

// import { Container } from './styles';

const Home = () => {
  return (
            <Container>
                <MainInfoContainer>
                    <Header/>
                    <MoneyBalance/>
                    <Text>Home</Text>
                </MainInfoContainer>
            </Container>
    )
}

export default Home;