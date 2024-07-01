import React, { useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Keyboard } from "react-native";
import api from "./src/services/api";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeigth: 'bold'
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18
  },
  areaBtn: {
    alignItens: 'center',
    flexDirecion: 'row',
    marginTop: 15,
    justifyContent: 'space-around'
  },
  botao: {
    height: 50,
    justifyContent: 'center',
    alignItens: 'center',
    padding: 15,
    borderRadius: 5,
  },
  botaoText: {
    fontSize: 22,
    color: '#fff'
  },
  resultado: {
    flex: 1,
    justifyContent: 'center',
    alignItens: 'center'
  },
  itemText: {
    fontSize: 22
  }
});

export default function App() {
  const [valorReal, setValorReal] = useState('');
  const [cepUser, setCepUser] = useState('');
  const inputRef = useRef(null);

  async function buscar() {
    if (cep == '') {
      alert('Digite um cep valido');
      return;
    }
    try {
      //objeto response criado no formato json
      //recebe os dados do cep no formato json
      const response = await api.get(`/${cep}/json`);
      //dados do cep passados para a state cepUser
      setCepUser(response.data);
      // fecha o teclado
      Keyboard.dismiss();
    } catch (error) {
      console.log('ERROR: ' + error);
    }
    }

    function limpar() {
      //limpa state cep digitado
      setCep('');
      //limpar state com os dados buscados
      setCepUser('');
      //localiza o foco no textInput
      inputRef.current.focus();
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.text}>Digite o cep desejado</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 79003241"
            value={cep}
            onChangeText={(texto) => setCep(texto)}
            KeyboardType="numeric"
            ref={inputRef}
          />

        </View>

        <View style={styles.areaBtn}>
          <TouchableOpacity
            style={[styles.botao, { backgroundColor: '#1d75cd' }]}
            onPress={buscar}
          >
            <Text style={styles.botaoText}>Buscar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botao, { backgroundColor: '#cd3e1d' }]}
            onPress={limpar}
          >
            <Text style={styles.botaoText}>limpar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.resultado}>
          <Text style={styles.itemText}>CEP: {cepUser.cep}</Text>
          <Text style={styles.itemText}>Logadouro: {cepUser.logadouro}</Text>
          <Text style={styles.itemText}>Bairro: {cepUser.bairro}</Text>
          <Text style={styles.itemText}>Cidade: {cepUser.localidade}</Text>
          <Text style={styles.itemText}>Estado: {cepUser.uf}</Text>
        </View>
      </SafeAreaView>
    );
}
