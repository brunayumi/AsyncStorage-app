import React, {Component} from 'react';
import {StyleSheet, View, AsyncStorage} from 'react-native';
import {TextInput, Text} from 'react-native';

export default class Mobile_II extends Component {
  state = {
      'nome': ''
  }

  componente = () => AsyncStorage.getItem('nome').then((value) => this.setState({ 'nome': value}))

  setNome = (value) => {
      AsyncStorage.setItem('nome', value);
      this.setState({ 'nome': value});
  }

render(){
    return(      
      <View style = {styles.container}>
          <TextInput placeholder='Insira aqui seu nome' style = {styles.chamada} autoCapitalize='none' onChangeText = {this.setNome}/> 
          <Text>
              {this.state.nome}
          </Text>
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#cccccf" 
  },
  chamada: {
    fontFamily: "Times New Roman",
    textTransform: "uppercase",
    backgroundColor: "#a3a3a5",
    flex:1,
    flexDirection: "row",
    height: "70",
    textAlign: "center" ,
    width: "90%",
    fontSize: 44,
    marginTop: "24",
    borderWidth: 1,
    borderRadius: 24,
    borderLeftColor: "#545459"
  },
  text: {
    fontFamily: "Times New Roman",
    textTransform: "uppercase",
    color: "#ffffff",
    backgroundColor: "#545459",
    flex:1,
    flexDirection: "row",
    height: "70",
    textAlign: "center" ,
    width: "90%",
    fontSize: 26,
    marginTop: "6",
    borderWidth: 1,
  }
});
