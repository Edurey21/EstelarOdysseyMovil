import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

interface HeaderProps {
  onLogin: () => void;
  showLoginButton: boolean;
}

const Header: React.FC<HeaderProps> = ({ onLogin, showLoginButton }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        Estelar Odyssey: Explorando lo Inexplorado
      </Text>
      {showLoginButton && (
        <Pressable style={styles.button} onPress={onLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: '#0d0d0d',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
    shadowColor: '#00ffcc',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00ffcc',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    fontFamily: 'Orbitron',
  },
  button: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#0d0d0d',
    borderColor: '#00ffcc',
    borderWidth: 2,
    alignItems: 'center',
    shadowColor: '#00ffcc',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  buttonText: {
    color: '#00ffcc',
    fontSize: 16,
    fontWeight: 'bold',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
});

export default Header;
