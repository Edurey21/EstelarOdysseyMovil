import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ImageBackground } from 'react-native';

interface AdministradorRegisterPageProps {
  onBack: () => void;
}

const AdministradorRegisterPage: React.FC<AdministradorRegisterPageProps> = ({ onBack }) => {
  const [usuario, setUsuario] = useState<string>('');
  const [contrasena, setContrasena] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleRegister = async () => {
    if (usuario && contrasena && email) {
      try {
        const response = await fetch('http://localhost:5000/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: usuario, password: contrasena, email, role: 'administrador' }),
        });
        if (response.ok) {
          alert('Registro exitoso como administrador.');
        } else {
          alert('Error en el registro.');
        }
      } catch (error) {
        console.error('Error al registrar:', error);
        alert('Error al conectar con el servidor.');
      }
      return;
    }
    alert('Por favor completa todos los campos.');
  };

  return (
    <ImageBackground
      source={require('../images/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Registro como Administrador</Text>
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
        <TextInput
          style={styles.textInput}
          placeholder="Correo Electrónico"
          placeholderTextColor="#00ffcc"
          value={email}
          onChangeText={setEmail}
        />
        <Pressable style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onBack}>
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
    borderRadius: 10,
    backgroundColor: '#0d0d0d',
    color: '#ffffff',
    textShadowColor: '#00ffcc',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    width: '80%',
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
});

export default AdministradorRegisterPage;
