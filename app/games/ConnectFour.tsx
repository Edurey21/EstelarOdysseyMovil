import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Pressable, Alert } from 'react-native';

const ConnectFour: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [board, setBoard] = useState(Array(6).fill(Array(7).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState('Red');
  const [winner, setWinner] = useState<string | null>(null);

  const handlePress = (colIndex: number) => {
    if (winner) return;

    for (let rowIndex = board.length - 1; rowIndex >= 0; rowIndex--) {
      if (!board[rowIndex][colIndex]) {
        const newBoard = board.map((row, rIndex) =>
          row.map((cell, cIndex) => {
            if (rIndex === rowIndex && cIndex === colIndex) return currentPlayer;
            return cell;
          })
        );
        setBoard(newBoard);
        checkWinner(newBoard, rowIndex, colIndex);
        setCurrentPlayer(currentPlayer === 'Red' ? 'Yellow' : 'Red');
        break;
      }
    }
  };

  const checkWinner = (board: string[][], row: number, col: number) => {
    const directions = [
      { x: 0, y: 1 }, // vertical
      { x: 1, y: 0 }, // horizontal
      { x: 1, y: 1 }, // diagonal /
      { x: 1, y: -1 }, // diagonal \
    ];

    for (const direction of directions) {
      let count = 1;
      let r = row + direction.x;
      let c = col + direction.y;

      while (r >= 0 && r < 6 && c >= 0 && c < 7 && board[r][c] === currentPlayer) {
        count++;
        r += direction.x;
        c += direction.y;
      }

      r = row - direction.x;
      c = col - direction.y;
      while (r >= 0 && r < 6 && c >= 0 && c < 7 && board[r][c] === currentPlayer) {
        count++;
        r -= direction.x;
        c -= direction.y;
      }

      if (count >= 4) {
        setWinner(currentPlayer);
        Alert.alert(`${currentPlayer} gana!`, 'El juego se reiniciará.', [
          { text: 'OK', onPress: resetGame },
        ]);
        return;
      }
    }
  };

  const resetGame = () => {
    setBoard(Array(6).fill(Array(7).fill(null)));
    setCurrentPlayer('Red');
    setWinner(null);
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
        {winner && <Text style={styles.winnerText}>{winner} gana!</Text>}
        <View style={styles.board}>{renderBoard()}</View>
        <Pressable style={styles.button} onPress={resetGame}>
          <Text style={styles.buttonText}>Reiniciar</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {
          setWinner(null);
          setBoard(Array(6).fill(Array(7).fill(null)));
          setCurrentPlayer('Red');
          navigation.navigate('home');
        }}>
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
  winnerText: {
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 10,
  },
  board: {
    width: 350,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  redCell: {
    backgroundColor: 'red',
  },
  yellowCell: {
    backgroundColor: 'yellow',
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
    marginHorizontal: 5,
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
