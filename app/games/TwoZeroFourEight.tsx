import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const GRID_SIZE = 4;
const CELL_SIZE = 75;

const generateGrid = () => {
  const grid = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(0));
  addNumber(grid);
  addNumber(grid);
  return grid;
};

const addNumber = (grid) => {
  let added = false;
  while (!added) {
    const row = Math.floor(Math.random() * GRID_SIZE);
    const col = Math.floor(Math.random() * GRID_SIZE);
    if (grid[row][col] === 0) {
      grid[row][col] = Math.random() > 0.1 ? 2 : 4;
      added = true;
    }
  }
};

const move = (grid, direction) => {
  let moved = false;
  let score = 0;

  const rotateGrid = (grid) => {
    const newGrid = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(0));
    for (let row = 0; row < GRID_SIZE; row++) {
      for (let col = 0; col < GRID_SIZE; col++) {
        newGrid[col][GRID_SIZE - 1 - row] = grid[row][col];
      }
    }
    return newGrid;
  };

  for (let i = 0; i < direction; i++) {
    grid = rotateGrid(grid);
  }

  for (let row = 0; row < GRID_SIZE; row++) {
    let currentCol = 0;
    for (let col = 1; col < GRID_SIZE; col++) {
      if (grid[row][col] === 0) continue;
      if (grid[row][currentCol] === 0) {
        grid[row][currentCol] = grid[row][col];
        grid[row][col] = 0;
        moved = true;
      } else if (grid[row][currentCol] === grid[row][col]) {
        grid[row][currentCol] *= 2;
        score += grid[row][currentCol];
        grid[row][col] = 0;
        currentCol++;
        moved = true;
      } else {
        currentCol++;
        if (currentCol !== col) {
          grid[row][currentCol] = grid[row][col];
          grid[row][col] = 0;
          moved = true;
        }
      }
    }
  }

  for (let i = 0; i < 4 - direction; i++) {
    grid = rotateGrid(grid);
  }

  if (moved) addNumber(grid);
  return { grid, score };
};

const checkGameOver = (grid) => {
  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      if (grid[row][col] === 0) return false;
      if (row > 0 && grid[row][col] === grid[row - 1][col]) return false;
      if (row < GRID_SIZE - 1 && grid[row][col] === grid[row + 1][col]) return false;
      if (col > 0 && grid[row][col] === grid[row][col - 1]) return false;
      if (col < GRID_SIZE - 1 && grid[row][col] === grid[row][col + 1]) return false;
    }
  }
  return true;
};

const TwoZeroFourEight: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [grid, setGrid] = useState(generateGrid());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleMove = (direction) => {
    if (gameOver) return;
    const { grid: newGrid, score: newScore } = move(grid, direction);
    setGrid(newGrid);
    setScore(score + newScore);
    if (checkGameOver(newGrid)) setGameOver(true);
  };

  const handleRestart = () => {
    setGrid(generateGrid());
    setScore(0);
    setGameOver(false);
  };

  const renderGrid = () => {
    return grid.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.row}>
        {row.map((cell, cellIndex) => (
          <View key={cellIndex} style={styles.cell}>
            <Text style={styles.cellText}>{cell !== 0 ? cell : ''}</Text>
          </View>
        ))}
      </View>
    ));
  };

  return (
    <ImageBackground
      source={require('../images/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>2048</Text>
        <Text style={styles.score}>Score: {score}</Text>
        <View style={styles.grid}>{renderGrid()}</View>
        {gameOver && <Text style={styles.gameOver}>Game Over</Text>}
        <View style={styles.controls}>
          <TouchableOpacity onPress={() => handleMove(0)}>
            <Text style={styles.controlButton}>Up</Text>
          </TouchableOpacity>
          <View style={styles.horizontalControls}>
            <TouchableOpacity onPress={() => handleMove(1)}>
              <Text style={styles.controlButton}>Left</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMove(3)}>
              <Text style={styles.controlButton}>Right</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => handleMove(2)}>
            <Text style={styles.controlButton}>Down</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleRestart}>
          <Text style={styles.buttonText}>Restart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('home')}>
          <Text style={styles.buttonText}>Regresar</Text>
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
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  grid: {
    width: GRID_SIZE * CELL_SIZE,
    height: GRID_SIZE * CELL_SIZE,
    backgroundColor: '#0d0d0d',
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  cellText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  gameOver: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff0000',
    marginTop: 20,
  },
  controls: {
    flexDirection: 'column',
    marginTop: 20,
  },
  horizontalControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
  },
  controlButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00ffcc',
    margin: 10,
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

export default TwoZeroFourEight;
