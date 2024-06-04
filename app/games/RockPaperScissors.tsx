import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Pressable } from 'react-native';

const RockPaperScissors: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [result, setResult] = useState('');
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');

  const choices = ['Piedra', 'Papel', 'Tijeras'];

  const playGame = (userChoice: string) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(userChoice);
    setComputerChoice(computerChoice);

    if (userChoice === computerChoice) {
      setResult('Empate');
    } else if (
      (userChoice === 'Piedra' && computerChoice === 'Tijeras') ||
      (userChoice === 'Papel' && computerChoice === 'Piedra') ||
      (userChoice === 'Tijeras' && computerChoice === 'Papel')
    ) {
      setResult('Ganaste');
    } else {
      setResult('Perdiste');
    }
  };

  return (
    <ImageBackground
      source={require('../images/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Piedra, Papel o Tijeras</Text>
        <View style={styles.choices}>
          {choices.map((choice) => (
            <TouchableOpacity key={choice} style={styles.choiceButton} onPress={() => playGame(choice)}>
              <Text style={styles.choiceText}>{choice}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {result ? (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{`Tú: ${userChoice}`}</Text>
            <Text style={styles.resultText}>{`Computadora: ${computerChoice}`}</Text>
            <Text style={styles.resultText}>{result}</Text>
          </View>
        ) : null}
        <Pressable style={styles.button} onPress={() => navigation.navigate('home')}>
          <Text style={styles.buttonText}>Regresar</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00ffcc',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  choices: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  choiceButton: {
    marginHorizontal: 10,
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
  choiceText: {
    color: '#00ffcc',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  resultContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    color: '#fff',
    marginVertical: 5,
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

export default RockPaperScissors;
