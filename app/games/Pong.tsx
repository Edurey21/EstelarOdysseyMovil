import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Pressable } from 'react-native';

const Pong: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [grid, setGrid] = useState(Array(6).fill(Array(6).fill(null)));
  const [currentColor, setCurrentColor] = useState('red');
  const [score, setScore] = useState(0);

  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

  useEffect(() => {
    setGrid(generateGrid());
  }, []);

  const generateGrid = () => {
    return Array(6)
      .fill(null)
      .map(() =>
        Array(6)
          .fill(null)
          .map(() => colors[Math.floor(Math.random() * colors.length)])
      );
  };

  const shootBubble = (row: number, col: number) => {
    const newGrid = grid.map((rowArr, rowIndex) =>
      rowArr.map((cell, colIndex) => {
        if (rowIndex === row && colIndex === col && cell === currentColor) {
          return null;
        }
        return cell;
      })
    );

    setGrid(newGrid);
    setScore(score + 1);
    setCurrentColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <ImageBackground source={require('../images/background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Bubble Shooter</Text>
        <View style={styles.grid}>
          {grid.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((color, colIndex) => (
                <TouchableOpacity
                  key={colIndex}
                  style={[styles.cell, { backgroundColor: color || 'transparent' }]}
                  onPress={() => shootBubble(rowIndex, colIndex)}
                />
              ))}
            </View>
          ))}
        </View>
        <Text style={styles.score}>Score: {score}</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('home')}>
          <Text style={styles.buttonText}>Regresar</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setGrid(generateGrid())}>
          <Text style={styles.buttonText}>Reiniciar</Text>
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
  grid: {
    width: 300,
    height: 300,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 50,
    height: 50,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    fontSize: 24,
    color: '#fff',
    marginVertical: 10,
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
