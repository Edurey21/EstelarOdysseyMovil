import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Pressable } from 'react-native';

const Pong: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });
  const [ballDirection, setBallDirection] = useState({ x: 1, y: 1 });
  const [leftPaddlePosition, setLeftPaddlePosition] = useState(0);
  const [rightPaddlePosition, setRightPaddlePosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBallPosition((prev) => ({
        x: prev.x + ballDirection.x,
        y: prev.y + ballDirection.y,
      }));
    }, 16);
    return () => clearInterval(interval);
  }, [ballDirection]);

  const handleTouch = (side: 'left' | 'right') => {
    if (side === 'left') {
      setLeftPaddlePosition(leftPaddlePosition + 10);
    } else {
      setRightPaddlePosition(rightPaddlePosition + 10);
    }
  };

  return (
    <ImageBackground
      source={require('../images/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Pong</Text>
        <View style={styles.board}>
          <View style={[styles.paddle, { left: 0, top: leftPaddlePosition }]} />
          <View style={[styles.paddle, { right: 0, top: rightPaddlePosition }]} />
          <View style={[styles.ball, { left: ballPosition.x, top: ballPosition.y }]} />
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
  paddle: {
    width: 10,
    height: 50,
    backgroundColor: '#fff',
    position: 'absolute',
  },
  ball: {
    width: 10,
    height: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    borderRadius: 5,
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

export default Pong;
