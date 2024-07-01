import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components/native';
import api from '../services/api';
import axios from 'axios';

const Page = styled.SafeAreaView`
flex: 1;
justify-content: top;
align-items: center;
`;

const ViewBotao = styled.View`
align-items: center;
margin-top: 25%;
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

const ViewConversao = styled.View`
 margin-top: 25px;
 align-items: center;
`

const Input = styled.TextInput`
    background-color: #DDD;
    border-radius: 10px;
    margin: 15px;
    padding: 10px;
    font-size: 23px;
    color: #000;
    width: 300px;
`
const BotaoConverter = styled.TouchableOpacity`  
    background-color: green;
    justify-content: center;
    align-items: center;
    margin: 8px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 10px;
    width: 50%;
`;

const BotaoLimpar = styled.TouchableOpacity`  
    background-color: red;
    justify-content: center;
    align-items: center;
    margin: 8px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 10px;
    width: 50%;
`;

export default function Euro({ navigation }) {
    const [valorReal, setValorReal] = useState('');
    const [valorEuro, setValorEuro] = useState('');
    const [valorConvertido, setValorConvertido] = useState('');

    const converterRealEuro = async () => {
        if (!valorReal || parseFloat(valorReal.replace(',', '.')) === 0) {
            alert('Digite um valor válido em Real!!!');
            return;
        }

        try {
            const response = await axios.get(
                'https://economia.awesomeapi.com.br/all/EUR-BRL'
            );
            const taxaEuro = response.data.EUR.high;
            const valorConvertido = (
                parseFloat(valorReal.replace(',', '.')) / parseFloat(taxaEuro)
            ).toFixed(2);
            setValorConvertido(valorConvertido);
            setValorEuro(`€ ${valorConvertido}`);
        } catch (error) {
            alert('Ocorreu um erro na conversão. Tente novamente.');
        }
    };

    const limparCampos = () => {
        setValorReal('');
        setValorConvertido('');
        setValorEuro('');
    };

    return (
        <Page>
            <ViewConversao>
                <Input
                    textAlign='center'
                    KeyborardType="text"
                    placeholder="R$ Valor em Real"
                    value={valorReal}
                    onChangeText={value => setValorReal(value)}
                />

                <BotaoConverter onPress={converterRealEuro}>
                    <TextoBotao>Converter</TextoBotao>
                </BotaoConverter>

                <Input
                    textAlign='center'
                    KeyborardType="text"
                    placeholder="R$ Valor em Valor em Euro"
                    value={valorEuro}
                    onChangeText={value => setValorEuro(value)}
                />

                <BotaoLimpar onPress={limparCampos}>
                    <TextoBotao>Limpar</TextoBotao>
                </BotaoLimpar>

            </ViewConversao>

            <ViewBotao>

                <Botao onPress={() => navigation.navigate('Dolar')}>
                    <TextoBotao>Real para dolar</TextoBotao>
                </Botao>
                <Botao onPress={() => navigation.navigate('Home')}>
                    <TextoBotao>Menu Principal</TextoBotao>
                </Botao>
            </ViewBotao>

        </Page>
    );
}