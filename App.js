import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Constants from 'expo-constants';

export default function App() {
  const [massa, setMassa] = useState(0)
  const [altura, setAltura] = useState(0)
  const [result, setResult] = useState(0)
  const [resultText, setResultText] = useState('')
  const [teste, setTeste] = useState('')

  function calcular() {
    const result = massa / (Math.pow(altura, 2))
    setResult(result)

    if (result < 17) {
      setResultText('Muito abaixo do peso')
    } else if (result < 18.5) {
      setResultText('Abaixo do peso')
    } else if (result < 25) {
      setResultText('Peso normal')
    } else if (result < 30) {
      setResultText('Acima do peso')
    } else if (result < 35) {
      setResultText('Obesidade')
    } else if (result < 40) {
      setResultText('Obesidade severa')
    } else if (result >= 40) {
      setResultText('Obesidade mórbida')
    } else {
      setResultText('')
      setResult(0)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputs} >
        {/* Preciso volocar um keyboard type pra cada OS */}
        <TextInput placeholder="Massa" keyboardType="decimal-pad" style={styles.input} onChangeText={(massa) => setMassa(massa)} />
        <TextInput placeholder="Altura" keyboardType="decimal-pad" style={styles.input} onChangeText={(altura) => setAltura(altura)} />
      </View>
      <TouchableOpacity onPress={calcular} style={styles.button} activeOpacity={0.6}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.result}>{result.toFixed(2)}</Text>
      <Text style={[styles.result, { fontSize: 35 }]}>{resultText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  inputs: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  input: {
    height: 80,
    width: '50%',
    textAlign: 'center',
    fontSize: 50,
  },
  button: {
    backgroundColor: '#89ffa5',
    marginHorizontal: 80,
    borderRadius: 8,
  },
  buttonText: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 25,
    color: '#6fd4b5',
    fontWeight: 'bold'
  },
  result: {
    alignSelf: 'center',
    color: 'gray',
    fontSize: 65,
    padding: 15,
  },
});
