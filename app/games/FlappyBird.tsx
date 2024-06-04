import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Pressable } from 'react-native';

const FlappyBird: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [birdPosition, setBirdPosition] = useState(250);
  const [gameRunning, setGameRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameRunning) {
      interval = setInterval(() => {
        setBirdPosition((prev) => prev + 5);
      }, 50);
    }
    return () => clearInterval(interval);
  }, [gameRunning]);

  const handlePress = () => {
    setBirdPosition((prev) => prev - 50);
  };

  return (
    <ImageBackground
      source={require('../images/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Flappy Bird</Text>
        <View style={styles.board}>
          <TouchableOpacity style={[styles.bird, { top: birdPosition }]} onPress={handlePress} />
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
    height: 500,
    backgroundColor: '#333',
    position: 'relative',
  },
  bird: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    position: 'absolute',
    borderRadius: 10,
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

export default FlappyBird;
