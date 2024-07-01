import React, { useState } from "react";
import { View, Text, Button, Keyboard } from "react-native";
import styled from "styled-components/native";

const Page = styled.SafeAreaView`
flex: 1;
align-items: center; 
`;
const HeaderText = styled.Text`
font-size:25px;
margin-top: 30px;
`;
const Input = styled.TextInput`
width: 90%;
height: 50px;
font-size: 18px;
background-color: #eee;
margin-top: 30px;
border-radius: 10px;
padding: 10px;
`;
const PctArea = styled.View`
flex-direction: row;
margin: 20px;
`;
const PCtItem = styled.Button``; //nao esta sendo estilizado, pois o button já possui uma estilizaçao padrao

const CalcButton = styled.Button`
margin-top: 20px;
`;
const ResultArea = styled.View`
width: 100%;
margin-top: 30px;
background-color: #DCDCDC;
padding: 20px;
justify-content: center;
align-items: center;
`;
const ResultItem = styled.Text`
font-size: 15px;
margin-bottom: 30px;
`;

const ResultItemTitle = styled.Text`
font-size: 18px;
font-weight: bold;
`;



export default () => {
  {/*forma alternativa de escrever uma funcao*/ }
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [pct, setPct] = useState(10);

  const calc = () => {
    let nBill = parseFloat(bill); {/* trasnformando o valor de bill de string para float*/ }

    if (nBill) {
      setTip((pct / 100) * nBill);
    } else {
      alert("Digite o valor da conta");
    }

  }

  function tirarTeclado(){//FUNÇÃO QUE RETIRA O TECLADO DA TELA
    Keyboard.dismiss();//METODO QUE RETIRA O TECLADO DA TELA
  }

  return (
    <Page onTouchEnd={tirarTeclado}>{/**ENDIREITAR A RETIRADA DO TECALDO NA TELA */}
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input
        placeholder="Quanto deu a conta?"
        placeholderTextColor="#000"
        keyboardType="numeric"
        value={bill}
        onChangeText={n => setBill(n)}
      />
      <PctArea>
        <PCtItem title="5%" onPress={() => setPct(5)} />
        <PCtItem title="10%" onPress={() => setPct(10)} />
        <PCtItem title="15%" onPress={() => setPct(15)} />
        <PCtItem title="20%" onPress={() => setPct(20)} />
      </PctArea>
      <CalcButton title={`Calcular ${pct}%`} onPress={calc} />

      {tip > 0 && //forma de IF imbutido
        < ResultArea >
          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>{/** toFixed(2) e a limitacao de casas decimais. Nesse toFixed, estamos limitando a duas casas decimais depois da virgla */}

          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>R$ {tip.toFixed(2)}({pct}%)</ResultItem>

          <ResultItemTitle>Valor Total</ResultItemTitle>
          <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
        </ResultArea>
      }

    </Page >
  )

}