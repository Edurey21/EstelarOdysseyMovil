import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Pressable, ImageBackground } from 'react-native';

interface GamePageProps {
  navigation: {
    navigate: (page: string) => void;
  };
}

const GamePage: React.FC<GamePageProps> = ({ navigation }) => {
  const games = [
    { name: 'Tic-Tac-Toe', image: require('../images/tic-tac-toe.jpg'), screen: 'TicTacToe' },
    { name: 'Rock-Paper-Scissors', image: require('../images/rock-paper-scissors.jpg'), screen: 'RockPaperScissors' },
    { name: 'Simon Says', image: require('../images/simon-says.jpg'), screen: 'SimonSays' },
    { name: 'Whack-a-Mole', image: require('../images/whack-a-mole.jpg'), screen: 'WhackAMole' },
    { name: 'Hangman', image: require('../images/hangman.jpg'), screen: 'Hangman' },
    { name: 'Lights Out', image: require('../images/lights-out.jpg'), screen: 'LightsOut' },
    { name: 'Connect Four', image: require('../images/connect-four.jpg'), screen: 'ConnectFour' },
    { name: 'Concentration', image: require('../images/concentration.jpg'), screen: 'Concentration' },
    { name: 'Sudoku', image: require('../images/sudoku.jpg'), screen: 'Sudoku' },
    { name: 'Memory', image: require('../images/memory.jpg'), screen: 'MemoryGame' },
  ];

  return (
    <ImageBackground
      source={require('../images/background.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Selecciona un Juego</Text>
        <View style={styles.grid}>
          {games.map((game, index) => (
            <Pressable
              key={index}
              style={styles.card}
              onPress={() => navigation.navigate(game.screen)}
            >
              <Image source={game.image} style={styles.image} />
              <Text style={styles.gameName}>{game.name}</Text>
            </Pressable>
          ))}
        </View>
        <Pressable style={styles.button} onPress={() => navigation.navigate('home')}>
          <Text style={styles.buttonText}>Volver al Inicio</Text>
        </Pressable>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    padding: 16,
    flexGrow: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00ffcc',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: 150,
    height: 150,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 10,
    shadowColor: '#00ffcc',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  gameName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00ffcc',
    marginTop: 5,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#0d0d0d',
    borderColor: '#00ffcc',
    borderWidth: 2,
    alignItems: 'center',
    shadowColor: '#00ffcc',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
  },
  buttonText: {
    color: '#00ffcc',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
});

export default GamePage;
