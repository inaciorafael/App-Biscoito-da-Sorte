import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, StatusBar} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/assets/biscoito.png'),
      textoBotao: 'Abrir Biscoito'
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this) 

    this.frases = [
      'Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos – James Cameron',
      'O sucesso normalmente vem para quem está ocupado demais para procurar por ele” – Henry David Thoreau',
      'A vida é melhor para aqueles que fazem o possível para ter o melhor – John Wooden',
      '“Os empreendedores falham, em média, 3,8 vezes antes do sucesso final. O que separa os bem-sucedidos dos outros é a persistência” – Lisa M. Amos',
      '“Se você não está disposto a arriscar, esteja disposto a uma vida comum” – Jim Rohn',
      '“Escolha uma ideia. Faça dessa ideia a sua vida. Pense nela, sonhe com ela, viva pensando nela. Deixe cérebro, músculos, nervos, todas as partes do seu corpo serem preenchidas com essa ideia. Esse é o caminho para o sucesso” – Swami Vivekananda',
      '“Pare de perseguir o dinheiro e comece a perseguir o sucesso” – Tony Hsieh',
    ];
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)

    this.setState({
      textoFrase: this.frases[numeroAleatorio],
      img: require('./src/assets/biscoitoAberto.png'),
      textoBotao: 'Próxima Frase'
    })
    
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor='transparent' barStyle='dark-content' /> 
        <Image
          source={this.state.img}
          style={styles.img}
        />
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>{this.state.textoBotao}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#DD7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#DD7b22',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#DD7b22',
  },
});
