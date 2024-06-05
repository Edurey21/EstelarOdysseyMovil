import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Alert, Pressable } from 'react-native';

const TicTacToe: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [isSinglePlayer, setIsSinglePlayer] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    if (isSinglePlayer && !isXNext) {
      const aiMove = makeAIMove(board);
      if (aiMove !== -1) {
        handlePress(aiMove);
      }
    }
  }, [isXNext]);

  const makeAIMove = (board: string[]) => {
    const emptyIndices = board.reduce((acc, val, idx) => (val === null ? [...acc, idx] : acc), []);
    if (emptyIndices.length > 0) {
      return emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    }
    return -1;
  };

  const handlePress = (index: number) => {
    const newBoard = [...board];
    if (!newBoard[index] && !calculateWinner(newBoard)) {
      newBoard[index] = isXNext ? 'X' : 'O';
      setBoard(newBoard);
      setIsXNext(!isXNext);
      const winner = calculateWinner(newBoard);
      if (winner) {
        Alert.alert(`El ganador es: ${winner}`, 'El juego se reiniciará.', [
          { text: 'OK', onPress: resetGame },
        ]);
      } else if (newBoard.every(cell => cell !== null)) {
        Alert.alert('Es un empate', 'El juego se reiniciará.', [
          { text: 'OK', onPress: resetGame },
        ]);
      }
    }
  };

  const calculateWinner = (board: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const renderSquare = (index: number) => (
    <TouchableOpacity style={styles.square} onPress={() => handlePress(index)}>
      <Text style={styles.squareText}>{board[index]}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('../images/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        {showMenu ? (
          <>
            <Text style={styles.title}>Selecciona el Modo de Juego</Text>
            <Pressable
              style={styles.button}
              onPress={() => {
                setIsSinglePlayer(true);
                setShowMenu(false);
              }}
            >
              <Text style={styles.buttonText}>1 Jugador</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => {
                setIsSinglePlayer(false);
                setShowMenu(false);
              }}
            >
              <Text style={styles.buttonText}>2 Jugadores</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('home')}>
              <Text style={styles.buttonText}>Regresar</Text>
            </Pressable>
          </>
        ) : (
          <>
            <Text style={styles.title}>Tic-Tac-Toe</Text>
            <View style={styles.board}>
              {board.map((_, index) => renderSquare(index))}
            </View>
            <Pressable style={styles.button} onPress={resetGame}>
              <Text style={styles.buttonText}>Reiniciar</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => setShowMenu(true)}>
              <Text style={styles.buttonText}>Regresar</Text>
            </Pressable>
          </>
        )}
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
    width: 320,
    height: 320,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderColor: '#00ffcc',
    borderWidth: 2,
  },
  square: {
    width: '33.33%',
    height: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00ffcc',
  },
  squareText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#00ffcc',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  button: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
});

export default TicTacToe;
