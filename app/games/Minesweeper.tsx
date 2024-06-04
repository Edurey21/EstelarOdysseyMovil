import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const GRID_SIZE = 10;
const NUM_MINES = 10;

const generateGrid = () => {
  const grid = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill({ mine: false, revealed: false, adjacentMines: 0 }));
  let minesPlaced = 0;

  while (minesPlaced < NUM_MINES) {
    const row = Math.floor(Math.random() * GRID_SIZE);
    const col = Math.floor(Math.random() * GRID_SIZE);

    if (!grid[row][col].mine) {
      grid[row][col].mine = true;
      minesPlaced++;
    }
  }

  for (let row = 0; row < GRID_SIZE; row++) {
    for (let col = 0; col < GRID_SIZE; col++) {
      if (!grid[row][col].mine) {
        grid[row][col].adjacentMines = countAdjacentMines(grid, row, col);
      }
    }
  }

  return grid;
};

const countAdjacentMines = (grid, row, col) => {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const newRow = row + i;
      const newCol = col + j;
      if (newRow >= 0 && newRow < GRID_SIZE && newCol >= 0 && newCol < GRID_SIZE) {
        if (grid[newRow][newCol].mine) {
          count++;
        }
      }
    }
  }
  return count;
};

const Minesweeper: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [grid, setGrid] = useState(generateGrid());
  const [gameOver, setGameOver] = useState(false);

  const revealCell = (row, col) => {
    if (gameOver || grid[row][col].revealed) return;

    const newGrid = [...grid];
    newGrid[row][col].revealed = true;

    if (newGrid[row][col].mine) {
      setGameOver(true);
    } else if (newGrid[row][col].adjacentMines === 0) {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const newRow = row + i;
          const newCol = col + j;
          if (newRow >= 0 && newRow < GRID_SIZE && newCol >= 0 && newCol < GRID_SIZE) {
            if (!newGrid[newRow][newCol].revealed) {
              revealCell(newRow, newCol);
            }
          }
        }
      }
    }

    setGrid(newGrid);
  };

  const renderGrid = () => {
    return grid.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.row}>
        {row.map((cell, cellIndex) => (
          <TouchableOpacity
            key={cellIndex}
            style={[styles.cell, cell.revealed && (cell.mine ? styles.mineCell : styles.revealedCell)]}
            onPress={() => revealCell(rowIndex, cellIndex)}
          >
            <Text style={styles.cellText}>
              {cell.revealed ? (cell.mine ? '💣' : cell.adjacentMines > 0 ? cell.adjacentMines : '') : ''}
            </Text>
          </TouchableOpacity>
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
        <Text style={styles.title}>Minesweeper</Text>
        <View style={styles.grid}>{renderGrid()}</View>
        {gameOver && <Text style={styles.gameOver}>Game Over</Text>}
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
  grid: {
    width: GRID_SIZE * 30,
    height: GRID_SIZE * 30,
    backgroundColor: '#0d0d0d',
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 30,
    height: 30,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    borderRadius: 5,
  },
  revealedCell: {
    backgroundColor: '#666',
  },
  mineCell: {
    backgroundColor: '#ff0000',
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

export default Minesweeper;
