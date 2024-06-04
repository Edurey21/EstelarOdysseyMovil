import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const cards = ['🍎', '🍌', '🍒', '🍇', '🍉', '🍓', '🍍', '🥝'];

const MemoryGame: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [openedCards, setOpenedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [turns, setTurns] = useState(0);

  useEffect(() => {
    setShuffledCards(shuffle([...cards, ...cards]));
  }, []);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleCardPress = (index) => {
    if (openedCards.length === 2) return;
    setOpenedCards((prev) => [...prev, index]);
    if (openedCards.length === 1) {
      setTurns(turns + 1);
      const firstCard = shuffledCards[openedCards[0]];
      const secondCard = shuffledCards[index];
      if (firstCard === secondCard) {
        setMatchedCards((prev) => [...prev, firstCard]);
      }
      setTimeout(() => setOpenedCards([]), 1000);
    }
  };

  return (
    <ImageBackground
      source={require('../images/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Memory Game</Text>
        <View style={styles.board}>
          {shuffledCards.map((card, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.card,
                openedCards.includes(index) || matchedCards.includes(card) ? styles.cardOpen : styles.cardClosed,
              ]}
              onPress={() => handleCardPress(index)}
            >
              <Text style={styles.cardText}>
                {openedCards.includes(index) || matchedCards.includes(card) ? card : '❓'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.turns}>Turns: {turns}</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('home')}>
          <Text style={styles.buttonText}>Volver al Inicio</Text>
        </TouchableOpacity>
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
    marginBottom: 20,
  },
  board: {
    width: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    width: 70,
    height: 70,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  cardOpen: {
    backgroundColor: '#fff',
  },
  cardClosed: {
    backgroundColor: '#000',
  },
  cardText: {
    fontSize: 32,
  },
  turns: {
    fontSize: 18,
    color: '#fff',
    marginTop: 20,
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

export default MemoryGame;
