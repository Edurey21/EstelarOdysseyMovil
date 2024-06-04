import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Pressable } from 'react-native';

const SimonSays: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [sequence, setSequence] = useState<number[]>([]);
  const [userSequence, setUserSequence] = useState<number[]>([]);
  const [isUserTurn, setIsUserTurn] = useState(false);

  useEffect(() => {
    if (sequence.length && !isUserTurn) {
      playSequence();
    }
  }, [sequence]);

  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00'];

  const startGame = () => {
    setSequence([Math.floor(Math.random() * 4)]);
    setUserSequence([]);
    setIsUserTurn(false);
  };

  const playSequence = async () => {
    for (const index of sequence) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setActiveColor(index);
      await new Promise(resolve => setTimeout(resolve, 800));
      setActiveColor(null);
    }
    setIsUserTurn(true);
  };

  const [activeColor, setActiveColor] = useState<number | null>(null);

  const handlePress = (index: number) => {
    if (!isUserTurn) return;

    const newUserSequence = [...userSequence, index];
    setUserSequence(newUserSequence);

    if (newUserSequence[newUserSequence.length - 1] !== sequence[newUserSequence.length - 1]) {
      alert('¡Perdiste! Intenta de nuevo.');
      startGame();
      return;
    }

    if (newUserSequence.length === sequence.length) {
      setSequence([...sequence, Math.floor(Math.random() * 4)]);
      setUserSequence([]);
      setIsUserTurn(false);
    }
  };

  return (
    <ImageBackground
      source={require('../images/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Simon Says</Text>
        <View style={styles.board}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.colorButton,
                { backgroundColor: color, opacity: activeColor === index ? 0.5 : 1 },
              ]}
              onPress={() => handlePress(index)}
            />
          ))}
        </View>
        <Pressable style={styles.button} onPress={() => navigation.navigate('home')}>
          <Text style={styles.buttonText}>Regresar</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={startGame}>
          <Text style={styles.buttonText}>Iniciar Juego</Text>
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
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  colorButton: {
    width: '50%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
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

export default SimonSays;
