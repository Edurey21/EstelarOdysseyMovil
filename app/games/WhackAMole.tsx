import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Pressable } from 'react-native';

const WhackAMole: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [holes, setHoles] = useState(Array(9).fill(false));
  const [score, setScore] = useState(0);
  const [activeHole, setActiveHole] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const randomHole = Math.floor(Math.random() * holes.length);
      setActiveHole(randomHole);
      setHoles(holes.map((_, index) => index === randomHole));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePress = (index: number) => {
    if (index === activeHole) {
      setScore(score + 1);
      setActiveHole(null);
      setHoles(holes.map(() => false));
    }
  };

  return (
    <ImageBackground
      source={require('../images/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Whack-a-Mole</Text>
        <Text style={styles.score}>Puntuación: {score}</Text>
        <View style={styles.board}>
          {holes.map((isActive, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.hole, isActive && styles.activeHole]}
              onPress={() => handlePress(index)}
            />
          ))}
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
  },
  score: {
    fontSize: 24,
    color: '#fff',
    marginVertical: 10,
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    height: 300,
    marginVertical: 20,
  },
  hole: {
    width: '33.33%',
    height: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  activeHole: {
    backgroundColor: '#00ffcc',
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

export default WhackAMole;
