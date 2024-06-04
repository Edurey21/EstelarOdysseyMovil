import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const CELL_SIZE = 20;
const BOARD_SIZE = 300;

const SnakeGame: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [snake, setSnake] = useState([{ x: 0, y: 0 }]);
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [food, setFood] = useState({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(moveSnake, 100);
    return () => clearInterval(interval);
  }, [snake, direction]);

  useEffect(() => {
    setFoodPosition();
  }, []);

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    head.x += direction.x;
    head.y += direction.y;

    if (head.x === food.x && head.y === food.y) {
      newSnake.push({});
      setFoodPosition();
    }

    if (head.x < 0 || head.x >= BOARD_SIZE / CELL_SIZE || head.y < 0 || head.y >= BOARD_SIZE / CELL_SIZE || isCollision(head)) {
      setGameOver(true);
      return;
    }

    newSnake.unshift(head);
    newSnake.pop();
    setSnake(newSnake);
  };

  const setFoodPosition = () => {
    const x = Math.floor(Math.random() * (BOARD_SIZE / CELL_SIZE));
    const y = Math.floor(Math.random() * (BOARD_SIZE / CELL_SIZE));
    setFood({ x, y });
  };

  const isCollision = (head) => {
    return snake.some(segment => segment.x === head.x && segment.y === head.y);
  };

  const handleDirection = (newDirection) => {
    if (Math.abs(direction.x) !== Math.abs(newDirection.x) || Math.abs(direction.y) !== Math.abs(newDirection.y)) {
      setDirection(newDirection);
    }
  };

  return (
    <ImageBackground
      source={require('../images/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Snake Game</Text>
        <View style={styles.board}>
          {snake.map((segment, index) => (
            <View key={index} style={[styles.snake, { left: segment.x * CELL_SIZE, top: segment.y * CELL_SIZE }]} />
          ))}
          <View style={[styles.food, { left: food.x * CELL_SIZE, top: food.y * CELL_SIZE }]} />
        </View>
        <View style={styles.controls}>
          <TouchableOpacity onPress={() => handleDirection({ x: 0, y: -1 })}>
            <Text style={styles.controlText}>Up</Text>
          </TouchableOpacity>
          <View style={styles.horizontalControls}>
            <TouchableOpacity onPress={() => handleDirection({ x: -1, y: 0 })}>
              <Text style={styles.controlText}>Left</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDirection({ x: 1, y: 0 })}>
              <Text style={styles.controlText}>Right</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => handleDirection({ x: 0, y: 1 })}>
            <Text style={styles.controlText}>Down</Text>
          </TouchableOpacity>
        </View>
        {gameOver && <Text style={styles.gameOver}>Game Over</Text>}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('home')}>
          <Text style={styles.buttonText}>Volver al Inicio</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

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
    width: BOARD_SIZE,
    height: BOARD_SIZE,
    backgroundColor: '#0d0d0d',
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  snake: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    backgroundColor: '#00ff00',
  },
  food: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    backgroundColor: '#ff0000',
    position: 'absolute',
  },
  controls: {
    marginTop: 20,
  },
  horizontalControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },
  controlText: {
    fontSize: 18,
    color: '#00ffcc',
    fontWeight: 'bold',
    margin: 5,
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
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

export default SnakeGame;
