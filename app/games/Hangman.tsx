import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Pressable, Alert } from 'react-native';

const words = ['REACT', 'JAVASCRIPT', 'NODEJS', 'PYTHON', 'ANDROID', 'IOS', 'ANGULAR', 'VUE', 'HTML', 'CSS'];

const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

const Hangman: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [word, setWord] = useState(getRandomWord());
  const [guesses, setGuesses] = useState<string[]>([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [input, setInput] = useState('');

  useEffect(() => {
    setWord(getRandomWord());
    setGuesses([]);
    setIncorrectGuesses(0);
  }, []);

  const handleGuess = () => {
    if (input.length === 1 && !guesses.includes(input.toUpperCase())) {
      setGuesses([...guesses, input.toUpperCase()]);
      if (!word.includes(input.toUpperCase())) {
        setIncorrectGuesses(incorrectGuesses + 1);
      }
    }
    setInput('');
  };

  const renderWord = () => {
    return word.split('').map((letter, index) => (
      <Text key={index} style={styles.letter}>
        {guesses.includes(letter) ? letter : '_'}
      </Text>
    ));
  };

  const checkGameOver = () => {
    if (incorrectGuesses >= 6) {
      Alert.alert('Game Over', `You lost! The word was: ${word}`, [
        { text: 'Try Again', onPress: resetGame },
      ]);
    } else if (word.split('').every(letter => guesses.includes(letter))) {
      Alert.alert('Congratulations', 'You won!', [
        { text: 'Play Again', onPress: resetGame },
      ]);
    }
  };

  useEffect(() => {
    checkGameOver();
  }, [guesses]);

  const resetGame = () => {
    setWord(getRandomWord());
    setGuesses([]);
    setIncorrectGuesses(0);
  };

  return (
    <ImageBackground
      source={require('../images/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Ahorcado</Text>
        <View style={styles.wordContainer}>{renderWord()}</View>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          maxLength={1}
          placeholder="Ingresa una letra"
          placeholderTextColor="#00ffcc"
        />
        <TouchableOpacity style={styles.button} onPress={handleGuess}>
          <Text style={styles.buttonText}>Adivinar</Text>
        </TouchableOpacity>
        <Text style={styles.guessesText}>Intentos Incorrectos: {incorrectGuesses}</Text>
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
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00ffcc',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    marginBottom: 20,
  },
  wordContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  letter: {
    fontSize: 36,
    marginHorizontal: 5,
    color: '#fff',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  input: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    paddingHorizontal: 10,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    borderRadius: 10,
    width: '60%',
    backgroundColor: '#0d0d0d',
    shadowColor: '#00ffcc',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  button: {
    marginTop: 10,
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
  guessesText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 20,
  },
});

export default Hangman;
