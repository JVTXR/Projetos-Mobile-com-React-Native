import React from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
flex: 1;
justify-content: top;
`;
const Header = styled.SafeAreaView`
background-color: blue;
align-items: center;
`

const HeaderText = styled.Text`
font-size:25px;
margin-top: 10px;
color: white;
margin-bottom: 5%;
margin-top: 5%;
font-weight: bold;
`;

const ViewBotao = styled.View`
align-items: center;
margin-top: 40%;
`

const Botao = styled.TouchableOpacity`  
    background-color: blue;
    justify-content: center;
    align-items: center;
    margin: 8px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 10px;
    width: 50%;
`;

const TextoBotao = styled.Text`
    color: #FFF;
    font-size: 25px;
`;


export default function Home({ navigation }) {
    return (

        <Page>
            <Header>
                <HeaderText>Conversor de moedas João Dias</HeaderText>
            </Header>

            <ViewBotao>

                <Botao onPress={() => navigation.navigate('Dolar')}>
                    <TextoBotao>Real para dolar</TextoBotao>
                </Botao>
                <Botao onPress={() => navigation.navigate('Euro')}>
                    <TextoBotao>Real para Euro</TextoBotao>
                </Botao>
            </ViewBotao>

        </Page>
    );
}