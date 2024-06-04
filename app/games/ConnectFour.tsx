import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Pressable } from 'react-native';

const ConnectFour: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [board, setBoard] = useState(Array(6).fill(Array(7).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState('Red');

  const handlePress = (colIndex: number) => {
    for (let rowIndex = board.length - 1; rowIndex >= 0; rowIndex--) {
      if (!board[rowIndex][colIndex]) {
        const newBoard = board.map((row, rIndex) =>
          row.map((cell, cIndex) => {
            if (rIndex === rowIndex && cIndex === colIndex) return currentPlayer;
            return cell;
          })
        );
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === 'Red' ? 'Yellow' : 'Red');
        break;
      }
    }
  };

  const renderCell = (rowIndex: number, colIndex: number) => (
    <TouchableOpacity
      key={`${rowIndex}-${colIndex}`}
      style={[
        styles.cell,
        board[rowIndex][colIndex] === 'Red' && styles.redCell,
        board[rowIndex][colIndex] === 'Yellow' && styles.yellowCell,
      ]}
      onPress={() => handlePress(colIndex)}
    />
  );

  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.row}>
        {row.map((_, colIndex) => renderCell(rowIndex, colIndex))}
      </View>
    ));
  };

  return (
    <ImageBackground
      source={require('../images/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Connect Four</Text>
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
    width: 300,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 40,
    height: 40,
    margin: 2,
    backgroundColor: '#333',
    borderRadius: 20,
  },
  redCell: {
    backgroundColor: 'red',
  },
  yellowCell: {
    backgroundColor: 'yellow',
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

export default ConnectFour;
