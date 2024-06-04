import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Pressable } from 'react-native';

const cards = [
  'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D',
  'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H',
];

const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const Concentration: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [shuffledCards, setShuffledCards] = useState<string[]>([]);
  const [openedCards, setOpenedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<string[]>([]);

  useEffect(() => {
    setShuffledCards(shuffleArray([...cards]));
  }, []);

  const handleCardPress = (index: number) => {
    if (openedCards.length === 2) return;
    if (openedCards.includes(index)) return;

    setOpenedCards([...openedCards, index]);

    if (openedCards.length === 1) {
      const firstCard = shuffledCards[openedCards[0]];
      const secondCard = shuffledCards[index];

      if (firstCard === secondCard) {
        setMatchedCards([...matchedCards, firstCard]);
        setOpenedCards([]);
      } else {
        setTimeout(() => {
          setOpenedCards([]);
        }, 1000);
      }
    }
  };

  const renderCard = (card: string, index: number) => {
    const isFlipped = openedCards.includes(index) || matchedCards.includes(card);
    return (
      <TouchableOpacity
        key={index}
        style={[styles.card, isFlipped && styles.flippedCard]}
        onPress={() => handleCardPress(index)}
      >
        <Text style={styles.cardText}>{isFlipped ? card : '?'}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      source={require('../images/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Concentración</Text>
        <View style={styles.board}>
          {shuffledCards.map((card, index) => renderCard(card, index))}
        </View>
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
    marginBottom: 20,
  },
  board: {
    width: 300,
    height: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  card: {
    width: 60,
    height: 60,
    margin: 5,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  flippedCard: {
    backgroundColor: '#fff',
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
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

export default Concentration;
