import React from 'react';
import { View, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';

interface LoginPageProps {
  onBack: () => void;
  onLoginAsUsuario: () => void;
  onLoginAsAdministrador: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onBack, onLoginAsUsuario, onLoginAsAdministrador }) => {
  return (
    <ImageBackground
      source={require('../images/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>Iniciar Sesión</Text>
          <View style={styles.description}>
            <Text style={styles.text}>
              ¡Bienvenido a Estelar Odyssey, el juego de simulación espacial más inmersivo! Inicia sesión para empezar tu aventura en el cosmos.
            </Text>
            <Text style={styles.text}>
              En esta sección, puedes iniciar sesión como <Text style={styles.bold}>Usuario</Text> o como <Text style={styles.bold}>Administrador</Text>.
            </Text>
          </View>
          <View style={styles.loginOptions}>
            <Pressable style={styles.button} onPress={onLoginAsUsuario}>
              <Text style={styles.buttonText}>Usuario</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={onLoginAsAdministrador}>
              <Text style={styles.buttonText}>Administrador</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={onBack}>
              <Text style={styles.buttonText}>Ir a la página principal</Text>
            </Pressable>
          </View>
        </View>
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
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#00ffcc',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#00ffcc',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textAlign: 'center',
  },
  description: {
    marginBottom: 16,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  bold: {
    fontWeight: 'bold',
    color: '#00ffcc',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  loginOptions: {
    marginTop: 16,
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

export default LoginPage;
