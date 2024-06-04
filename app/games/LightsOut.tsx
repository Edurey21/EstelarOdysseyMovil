import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Pressable } from 'react-native';

const LightsOut: React.FC<{ navigation: any }> = ({ navigation }) => {
  const initialBoard = Array(5).fill(Array(5).fill(false));
  const [board, setBoard] = useState(initialBoard);

  const toggleLight = (x: number, y: number) => {
    const newBoard = board.map((row, rowIndex) =>
      row.map((light, colIndex) => {
        if (rowIndex === x && colIndex === y) return !light;
        if (rowIndex === x - 1 && colIndex === y) return !light;
        if (rowIndex === x + 1 && colIndex === y) return !light;
        if (rowIndex === x && colIndex === y - 1) return !light;
        if (rowIndex === x && colIndex === y + 1) return !light;
        return light;
      })
    );
    setBoard(newBoard);
  };

  const renderLight = (x: number, y: number) => (
    <TouchableOpacity
      key={`${x}-${y}`}
      style={[styles.light, board[x][y] && styles.lightOn]}
      onPress={() => toggleLight(x, y)}
    />
  );

  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.row}>
        {row.map((_, colIndex) => renderLight(rowIndex, colIndex))}
      </View>
    ));
  };

  return (
    <ImageBackground
      source={require('../images/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Lights Out</Text>
        <View style={styles.board}>{renderBoard()}</View>
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
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  light: {
    width: 50,
    height: 50,
    margin: 2,
    backgroundColor: '#333',
  },
  lightOn: {
    backgroundColor: '#fff',
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

export default LightsOut;
