import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ImageBackground } from 'react-native';

interface UsuarioLoginPageProps {
  onBack: () => void;
  onRegister: () => void;
  onLoginSuccess: () => void;
}

const UsuarioLoginPage: React.FC<UsuarioLoginPageProps> = ({ onBack, onRegister, onLoginSuccess }) => {
  const [usuario, setUsuario] = useState<string>('');
  const [contrasena, setContrasena] = useState<string>('');

  const handleLogin = async () => {
    // Temporal: Permitir acceso sin validar credenciales
    onLoginSuccess();
  };

  return (
    <ImageBackground
      source={require('../images/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Iniciar Sesión como Usuario</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Usuario"
          placeholderTextColor="#00ffcc"
          value={usuario}
          onChangeText={setUsuario}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Contraseña"
          placeholderTextColor="#00ffcc"
          secureTextEntry
          value={contrasena}
          onChangeText={setContrasena}
        />
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onBack}>
          <Text style={styles.buttonText}>Regresar</Text>
        </Pressable>
        <Text style={styles.text}>¿No tienes una cuenta? <Text onPress={onRegister} style={styles.link}>Regístrate aquí</Text></Text>
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
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#00ffcc',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#0d0d0d',
    color: '#ffffff',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
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
    width: '80%',
  },
  buttonText: {
    color: '#00ffcc',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  text: {
    color: '#ffffff',
    marginTop: 10,
  },
  link: {
    color: '#00ffcc',
    textDecorationLine: 'underline',
  },
});

export default UsuarioLoginPage;
